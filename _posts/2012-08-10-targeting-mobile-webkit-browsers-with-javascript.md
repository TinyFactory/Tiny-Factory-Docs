---
layout: post
category: javascript
published: true
author: michael
---

Here is a way to target mobile browsers with Javascript.  It's not recommended you use this as your sole method for targeting mobile browsers as it first requires your users to load your entire standard site before serving your mobile specific code.  But if used in conjunction with [CSS Media Queries](http://docs.tinyfactory.co/sass/2012/08/02/sass-inline-media-queries.html) - this can be quite handy.

{% highlight javascript %}
if( navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
 ){
 	// Mobile Code Here
 });
 {% endhighlight %}