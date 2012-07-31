---
layout: post
category: sass
published: true
---


Compass has a really nice (sticky footer)[http://compass-style.org/reference/compass/layout/sticky_footer/] mixin built into the library but we've been writing our own site in vanilla SASS so I went on the hunt for a similar mixin.  Luckily I was able to find one by the one and only [Chris Eppstein](https://github.com/chriseppstein/):

{% highlight bash %}
=sticky-footer( !footer_height, !root_selector = "#root", !root_footer_selector = "#root_footer", !footer_selector = "#footer")
  html
    :height 100%
  body
    :height 100%
  #{!root_selector}
    :min-height 100%
    :margin-bottom  = -!footer_height
    #{!root_footer_selector}
      :height = !footer_height
  #{!footer_selector}
    :clear            both
    :position         relative
    :height         = !footer_height
{% endhighlight %}