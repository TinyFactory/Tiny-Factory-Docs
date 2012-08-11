---
layout: post
published: true
category: sencha touch 2
author: alex
---

I was integrating with a client's API which used a blend of JSONP and XML.  Sencha Touch 2 does not have a native way to parse this, so I extended XML reader to make a 'jsonpx' reader.  Hopefully this will help someone who might run into the same situation.

{% highlight javascript %}
Ext.define('app.util.JsonpX', {
    extend: 'Ext.data.reader.Xml',

    // Set the proxy alias
    alias: 'reader.jsonpx',

	parseXmlString: function (sXml) {
		// If the specified XML document content is a string...
		if (typeof sXml == "string") {

			// Create a reference to the XML document parser.
			var oParser = new DOMParser();

			// Return the reference to the XML document.
			return oParser.parseFromString(sXml, "text/xml");
		}
		else { // XML document content is NOT a string...
			// Return the specified XML document since it has already been parsed.
			return sXml;
		}
	},

	/*
	* override
	* @param {string} response the response to parse
	* @return {xml} the XML data that has been parsed
	*/
	getResponseData: function(response){
		response = this.parseXmlString(response);
		return response;
	}
});
{% endhighlight %}

To use, place create a file [app root]/util/jsonpX.js

Inside of the store you are using, make sure to include and declare it as the reader.  For example:

{% highlight javascript %}
Ext.define('Year', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id',  type: 'number'}
        ]
    }
});

Ext.define('smtp.store.PartsFilterYear', {
	extend: 'Ext.data.Store',
	requires: [
		'Ext.data.proxy.JsonP',
		'app.util.JsonpX'
	],
	config: {
		autoLoad: true,
		storeId: 'PartsFilterYear',	//	ref to bind inside views
		model: 'Year',
		fields: ['id'],
		pageSize: 100,
		proxy: {
			type: 'jsonp',
			url: 'http://somedomain.com/someapi',
			reader: {
				type: 'jsonpx'   //declare reader
			}
		}
	}
});
{% endhighlight %}

This code was inspired by a piece I found for Sencha Touch 1  [here](http://www.sencha.com/forum/showthread.php?12852-ScriptTagProxy-and-XML)