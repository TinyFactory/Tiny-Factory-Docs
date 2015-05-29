---
layout: post
category: compass
published: true
author: michael
---

Simple Mixin For Compass Placeholder Text

Syntax:

{% highlight scss %}
    @mixin input-placeholder($color) {
      &.placeholder {
        color: $color; 
        }
      &:-moz-placeholder {
        color: $color; 
        }
      &::-webkit-input-placeholder {
        color: $color; 
        } 
    }
{% endhighlight %}

Steps:

    1.  Add the .input-placeholder() mixin from _placeholderText.scss to your compass stylesheet (or reference it in an @import statement)
    2.  In your stylesheet, call the .input-placeholder() mixin anywhere you want to style your placeholder text
    
{% highlight scss %}
            .inputCls {
              @include input-placeholder(#ccc); 
            } 
{% endhighlight %}

    Will compile to: 
    
{% highlight scss %}
              .inputCls:placeholder {
                color: #cccccc;
              }
              .inputCls:-moz-placeholder {
                color: #cccccc;
              }
              .inputCls::-webkit-input-placeholder {
                color: #cccccc;
              }
{% endhighlight %}