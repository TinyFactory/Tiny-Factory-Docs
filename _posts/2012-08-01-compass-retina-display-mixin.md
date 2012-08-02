---
layout: post
category: compass
published: true
---

This compass mixin helps for applying high-resolution background images in your stylesheet. You provide it with an image path and the dimensions of the original-resolution image. The mixin creates a media query spefically for Retina displays, changes the background image for the selector elements to use the high-resolution (@2x) variant and applies a background-size of the original image in order to maintain proper dimensions. To use it, download the mixin, import or include it in your SASS stylesheet, and apply it to elements of your choice.

Syntax:

{% highlight scss %}
    @mixin at2x($image_name, $w: auto, $h: auto, $extention: '.png') 
{% endhighlight %}
    
**The extention defaults to PNG. To change this - define $extention when calling (ie jpg);**

Steps:

1.  Add the .at2x() mixin from retina.scss to your compass stylesheet (or reference it in an @import statement)
2.  In your stylesheet, call the .at2x() mixin anywhere instead of using background-image 

{% highlight scss %}
#logo {
   @include at2x('example', 200px, 100px, .jpg);
} 
{% endhighlight %}

 Will compile to: 

{% highlight scss %}
#logo {
   background-image: url('/images/example.jpg');
}

@media all and (-webkit-min-device-pixel-ratio: 1.5) {
   #logo {
      background-image: url('/images/exampe@2x.jpg');
      background-size: 200px 100px;
   }
}
{% endhighlight %}