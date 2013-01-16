---
layout: post
published: true
category: node.js
author: alex
---

I recently had to integrate with Campaign Monitor's API using Node.js. This is the sample script I used to test the integration. 

```
/**
	Campaign Monitor: add e-mail to list
	This will add just the e-mail to the list ID that is provided
*/

var http = require('http');

//	campaign monitor API key
var apiKey = 'XXXXXXX';

//	campaign monitor list id
var listId = 'XXXXX';

//	use basic authentication. our apiKey is used for the username
//	leave the password blank or use a dummy value 
var auth = 'Basic ' + new Buffer(apiKey + ':').toString('base64');

//	data we are sending to Campaign Monitor
var postData = JSON.stringify({
	EmailAddress: 'hello@somedomain.com'
});

// An object of options to indicate where to post to
var postOptions = {
	host: 'api.createsend.com',
	port: '80',
	path: '/api/v3/subscribers/'+ listId +'.json',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length,
		'Authorization': auth
	}
 };

// Set up the request
var postReq = http.request(postOptions, function(res) {
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log('Campaign Monitor Response: ' + chunk);
	});
});

// post the data
postReq.write(postData);
postReq.end();
```