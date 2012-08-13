---
layout: post
category: jquery
published: true
author: michael
---

If CSS isn't enough to solve your your ellipsis issues and you want to take it to the next level and insert after multiple lines you can introduce some jQuery into the mix.  This is a solution I found on [stacks overflow](http://stackoverflow.com/questions/536814/insert-ellipsis-into-html-tag-if-content-too-wide) that works quite well.

Use this in your CSS document

{% hightlight css %}
.ellipsis {
        white-space: nowrap;
        overflow: hidden;
}

.ellipsis.multiline {
        white-space: normal;
}
{% endhightlight %}

Here is your HTML, always remember to include jQuery in your document before using jQuery.

{% hightlight html %}
/* this is a one line ellipsis */
<div class="ellipsis" style="width: 100px; border: 1px solid black;">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>

/* this is a multiline ellipsis */
<div class="ellipsis multiline" style="width: 100px; height: 40px; border: 1px solid black; margin-bottom: 100px">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>

<script type="text/javascript" src="/js/jquery.ellipsis.js"></script>
<script type="text/javascript">
$(".ellipsis").ellipsis();
</script>
{% endhightlight %}

...and last but not least the jquery for creating a single or multi-line ellipsis

{% highlight javascript %}
(function($) {
        $.fn.ellipsis = function()
        {
                return this.each(function()
                {
                        var el = $(this);

                        if(el.css("overflow") == "hidden")
                        {
                                var text = el.html();
                                var multiline = el.hasClass('multiline');
                                var t = $(this.cloneNode(true))
                                        .hide()
                                        .css('position', 'absolute')
                                        .css('overflow', 'visible')
                                        .width(multiline ? el.width() : 'auto')
                                        .height(multiline ? 'auto' : el.height())
                                        ;

                                el.after(t);

                                function height() { return t.height() > el.height(); };
                                function width() { return t.width() > el.width(); };

                                var func = multiline ? height : width;

                                while (text.length > 0 && func())
                                {
                                        text = text.substr(0, text.length - 1);
                                        t.html(text + "...");
                                }

                                el.html(t.html());
                                t.remove();
                        }
                });
        };
})(jQuery);
{% end highlight %}

If you're looking more configurable options, check out the [dotdotdot](http://dotdotdot.frebsite.nl/) jQuery plugin.