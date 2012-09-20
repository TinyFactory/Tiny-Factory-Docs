---
layout: post
published: true
author: michael
category: less
---

Simple LESS mixin for Placeholder Text:

Syntax:

{% highlight scss %}
   // Placeholder text Mixin
	.placeholder(@color: @placeholderText) {
  			:-moz-placeholder {
    		color: @color;
  		}
  		::-webkit-input-placeholder {
    		color: @color;
  		}
	}
{% endhighlight %}

Steps:

    1.  Add the .placeholder mixin to your stylesheet (or reference it from a file such as var.less)
    2.  In your stylesheet call the mixin like: **.some-class { .placeholder(@placeholderColor);}**
    
This will compile to: 
    
{% highlight scss %}
              .some-class:placeholder {
                color: #cccccc;
              }
              .some-class:-moz-placeholder {
                color: #cccccc;
              }
              .some-class::-webkit-input-placeholder {
                color: #cccccc;
              }
{% endhighlight %}