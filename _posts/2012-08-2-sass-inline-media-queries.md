---
layout: post
category: sass
published: true
---

With SASS 3.2 we get inline media queries. Compass allows this if you're using the alpha build. At of the date of this doc, `0.12.2` is the current version.

We can install Compass alpha `0.13.0` by running `sudo gem install compass --pre`. This is a prerelease build, so if you're worried about things not working, hold out until `0.13.x` is released.

Before inline media queries, we'd throw all of our device arguments in a section at the bottom of our stylesheets. Inline media queries allow me to do something like this:

{% highlight sass %}
header
	background: rgba(0,0,0,0.5)
	color: #fff
	+mobile-landscape-and-up
		background: rgba(0,0,0,1)
		color: #fff
{% endhighlight %}


The mixins below will allow you to do what I've demonstrated above. This is a port to the old SASS syntax from the amazing base the Anthony Short developed. You're able to use any of the @mixin properties inline throughout your stylesheet. No more scrolling top to bottom to see what you need to override.

{% highlight sass %}
$mq-mobile-portrait: 320px !default
$mq-mobile-landscape: 480px !default
$mq-tablet-portrait: 768px !default
$mq-tablet-landscape: 1024px !default
$mq-desktop: 1382px !default

@mixin mobile-only
	@media (max-width : $mq-mobile-landscape)
		@content

@mixin mobile-portrait-only
	@media (max-width : $mq-mobile-portrait)
		@content

@mixin mobile-portrait-and-below
	@media (max-width : $mq-mobile-portrait)
		@content

@mixin mobile-portrait-and-up
	@media (min-width : $mq-mobile-portrait)
		@content

@mixin mobile-landscape-only
	@media only screen and (min-width : $mq-mobile-portrait + 1) and (max-width : $mq-mobile-landscape)
		@content

@mixin mobile-landscape-and-below
	@media only screen and (max-width : $mq-mobile-landscape)
		@content

@mixin mobile-landscape-and-up
	@media only screen and (min-width : $mq-mobile-portrait + 1)
		@content

@mixin tablet-only
	@media only screen and (min-width : $mq-mobile-landscape + 1) and (max-width : $mq-tablet-landscape)
		@content

@mixin tablet-portrait-only
	@media only screen and (min-width : $mq-mobile-landscape + 1) and (max-width : $mq-tablet-portrait)
		@content

@mixin tablet-portrait-and-below
	@media only screen and (max-width : $mq-tablet-portrait)
		@content

@mixin tablet-portrait-and-up
	@media only screen and (min-width : $mq-mobile-landscape + 1)
		@content

@mixin tablet-landscape-only
	@media only screen and (min-width : $mq-tablet-portrait + 1) and (max-width : $mq-tablet-landscape)
		@content

@mixin tablet-landscape-and-below
	@media only screen and (max-width : $mq-tablet-landscape)
		@content

@mixin tablet-landscape-and-up
	@media only screen and (min-width : $mq-tablet-portrait + 1)
		@content

@mixin desktop-and-up
	@media only screen and (min-width : $mq-tablet-landscape + 1)
		@content

@mixin desktop-and-below
	@media only screen and (max-width : $mq-desktop)
		@content

@mixin desktop-only
	@media only screen and (min-width : $mq-tablet-landscape + 1) and (max-width : $mq-desktop)
		@content

@mixin retina
	@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5)
		@content
{% endhighlight %}