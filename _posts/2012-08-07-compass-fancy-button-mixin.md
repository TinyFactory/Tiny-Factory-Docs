---
layout: post
category: compass
published: true
---

This mixin will create an animated hover and active state for your button ([View Example Here](##)) using css3 transitions.  Feel free to replace the variables or add them to a variable sheet inside of your project.  Add this mixin to your Compass project: 

{% highlight scss %}
    /* =======================
    Variables
    ========================*/
    $baseColor:    #E0E0E0;
    $textColor:    darken($baseColor, 50%);
    $fontSize:     .8em;

    @mixin btn() {
		cursor: pointer;
		display:inline-block;
		padding: $fontSize $fontSize + ($fontSize / 3);
		font-size: $fontSize;
		border:1px solid darken($baseColor, 20%);
		@include border-radius(2px);
		@include box-shadow(0 1px 0 #fff);
		@include text-shadow(0 1px 0 #fff);
		@include transition(all .1s ease-in-out);
		color:$textColor;
		&:hover {
				border-color: darken($baseColor, 30%);
				@include background(linear-gradient(top, white, darken($baseColor, 10%)));
				@include box-shadow(0 1px 2px rgba(0, 0, 0, 0.25), inset 0 0 2px white);
				text-decoration: none;
		}
		&:active { // Adds Styles When Button Is Pushed
				@include background(linear-gradient(top, darken($baseColor, 5%), $baseColor));
				@include box-shadow(0 1px 0 #fff, inset 0 1px 2px darken($baseColor, 25%));
				border-color: darken($baseColor, 30%);
		}
	}
{% endhighlight %}

In your style sheet add:

{% highlight scss %}
    .btn {
    	@include btn();
    }
{% endhighlight %}

and it will compile to:

{% highlight scss %}
    .btn {
      cursor: pointer;
      display: inline-block;
      padding: 0.8em 1.06667em;
      font-size: 0.8em;
      border: 1px solid #adadad;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      -ms-border-radius: 2px;
      -o-border-radius: 2px;
      border-radius: 2px;
      -webkit-box-shadow: 0 1px 0 white;
      -moz-box-shadow: 0 1px 0 white;
      box-shadow: 0 1px 0 white;
      text-shadow: 0 1px 0 white;
      -webkit-transition: all 0.1s ease-in-out;
      -moz-transition: all 0.1s ease-in-out;
      -ms-transition: all 0.1s ease-in-out;
      -o-transition: all 0.1s ease-in-out;
      transition: all 0.1s ease-in-out;
      color: #616161;
    }
    .btn:hover {
      border-color: #949494;
      background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ffffff), color-stop(100%, #c7c7c7));
      background: -webkit-linear-gradient(top, #ffffff, #c7c7c7);
      background: -moz-linear-gradient(top, #ffffff, #c7c7c7);
      background: -o-linear-gradient(top, #ffffff, #c7c7c7);
      background: -ms-linear-gradient(top, #ffffff, #c7c7c7);
      background: linear-gradient(top, #ffffff, #c7c7c7);
      -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), inset 0 0 2px white;
      -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), inset 0 0 2px white;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), inset 0 0 2px white;
      text-decoration: none;
    }
    .btn:active {
      background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #d3d3d3), color-stop(100%, #e0e0e0));
      background: -webkit-linear-gradient(top, #d3d3d3, #e0e0e0);
      background: -moz-linear-gradient(top, #d3d3d3, #e0e0e0);
      background: -o-linear-gradient(top, #d3d3d3, #e0e0e0);
      background: -ms-linear-gradient(top, #d3d3d3, #e0e0e0);
      background: linear-gradient(top, #d3d3d3, #e0e0e0);
      -webkit-box-shadow: 0 1px 0 white, inset 0 1px 2px #a0a0a0;
      -moz-box-shadow: 0 1px 0 white, inset 0 1px 2px #a0a0a0;
      box-shadow: 0 1px 0 white, inset 0 1px 2px #a0a0a0;
      border-color: #949494;
    }
{% endhighlight %}

Fork the repo on [github](https://github.com/michaelsacca/Fancy-Compass-Button-Mixin) and create your own.