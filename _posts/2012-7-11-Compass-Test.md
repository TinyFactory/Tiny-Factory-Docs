---
layout: post
category: compass
Title: Compass Test Post
---

This is just a test to throw another category in the loop and test some highlighting

{% highlight sass %}
body
	background: $body
	+regular
	font-size: 13px
	line-height: 1.5em
	color: $text

header
	max-width: 790px
	margin: 105px auto 0
	text-align: center

h3
	font-family: "Gotham Book", sans-serif
	font-weight: normal
	color: $heading
	font-size: 20px
	line-height: 1.8em

a
	text-decoration: none
	color: $text
	+transition(0.1s ease-in-out all)
	border-bottom: 1px solid transparent

{% endhighlight %}