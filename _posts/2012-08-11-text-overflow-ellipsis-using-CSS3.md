---
layout: post
category: css
published: true
author: michael
---

The CSS3 text overflow ellipsis solution is perfect for single line truncations.  I use this constantly when creating mobile or responsive applications.

{% hightlight css %}
span {
	display:block; // because we're using a span class
	white-space: nowrap; //This prevents the content from breaking onto another line
	width: 100%; // this should be the width of your content
	overflow: hidden; // hides the text that is outside of your width
	text-overflow: ellipsis; //creates our ellipsis!
}
{% endhightlight %}