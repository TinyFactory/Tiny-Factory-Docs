---
layout: post
title: HTML5 Placeholder in IE7 and IE8 fix
category: jquery
author: michael
published: true
---

You can now use the HTML5 placeholder attribute in IE7 & IE8 - just use this code below.  Origionally found at: [dipaksblogonline](http://dipaksblogonline.blogspot.com/2012/02/html5-placeholder-in-ie7-and-ie8-fixed.html)

{% highlight bash %}
//Assign to those input elements that have 'placeholder' attribute
$('input[placeholder]').each(function(){  
    var input = $(this);        
    $(input).val(input.attr('placeholder'));
                
    $(input).focus(function(){
        if (input.val() == input.attr('placeholder')) {
           input.val('');
        }
    });
        
    $(input).blur(function(){
       if (input.val() == '' || input.val() == input.attr('placeholder')) {
           input.val(input.attr('placeholder'));
       }
    });
});
{% endhighlight %}