---
layout: default
published: false
category: node.js
author: alex
---

# Amazon Cloudfront API Authorization and Invalidation with Node.js

We have been working on integrating Amazon's Cloudfront CDN into our upcoming language learning game [Lingual](http://wwww.catchlingual.com). One of the requirements when we push to production is invalidating a batch of previously cached packages for the game. Our system is written in Node.js, so this is a quick script I put together to test the integration with Amazon's Cloudfront API.

Building the 'Authorization' string required to make the request was a bit tricky, so hopefully this script will help someone out.
```
var crypto = require('crypto');
var querystring = require('querystring');
var https = require('https');

var distroId = 'XXXXXXXXXXX', // your cloudfront distribution id.
	accessKey = 'XXXXXXXXXXX', // your amazon access key
	secretKey = 'XXXXXXXXXXX', // your amazon secret key
	domain = 'cloudfront.amazonaws.com',
	port = 443,
	path = '/2012-07-01/distribution/' + distroId + '/invalidation',
	date = ''; // fetched via an amazon request later in the script

//	Amazon suggests you fetch the date header from their server
//	since they require the timestamp that is used in your signature
//	to be withing 15 mintues of their server time.
var dateOptions = {
	host: domain,
	port: port,
	path: '/date'
};

var amazonDate = https.request(dateOptions, function(res){
	res.setEncoding('utf8');

	//	we now have the date property from Amazon that we can
	//	use as the base of our Authroization signature
	date = res.headers.date;

	//	now let's call our invalidation script
	invalidate();
}).end();

function invalidate(){
	//	wrapping the URI string in <![CDATA[ ]]> avoids xml encoding the URI 
    //	(which in our case would be necessary beacuse of the '&' and '=' chars)
	var postData = [''
		,'<?xml version="1.0" encoding="UTF-8"?>'
		,'<InvalidationBatch xmlns="http://cloudfront.amazonaws.com/doc/2012-07-01/">'
		,'	<Paths>'
		,'		<Quantity>1</Quantity>'
		,'		<Items>'
		,'			<Path><![CDATA[/api/packageGet%253fpkg=images%252ficons%252fanimals&lastMod=0&size=1x]]></Path>'
		,'		</Items>'
		,'	</Paths>'
		,'	<CallerReference>20120301090192</CallerReference>'
		,'</InvalidationBatch>'].join('');

	//	now that we have the date from amazon's servers, lets generate our auth string
	var authStr = crypto.createHmac('sha1', secretKey).update(date).digest('base64');

	var postOptions = {  
	  host: domain,  
	  port: port,  
	  path: path,  
	  method: 'POST',  
	  headers: {  
		'Authorization': 'AWS ' + accessKey + ":" + authStr,
		'Date': date,
        'Content-Type': 'application/x-www-form-urlencoded',  
        'Content-Length': postData.length  
	  }  
	};
	  
	var postReq = https.request(postOptions, function(res) {  
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
	  	console.log('Response: ' + chunk);
	  });  
	});

	postReq.on('error', function(error){
		console.log(error);
	});

	// write parameters to post body  
	postReq.write(postData);  
	postReq.end();
}
```