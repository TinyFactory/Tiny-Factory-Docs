---
layout: post
published: true
author: michael
category: less

---

As a follow up to our [CSS ellipsis](http://docs.tinyfactory.co/css/2012/08/11/text-overflow-ellipsis-using-CSS.html) solution, this LESS overflow ellipsis mixn is perfect for single line truncations.  

{% highlight css %}
// Text overflow Mixin
.text-overflow() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
{% endhighlight %}