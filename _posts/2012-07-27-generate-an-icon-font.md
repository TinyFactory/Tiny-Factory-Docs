---
layout: post
category: design
published: true
author: aaron
---

We're going to use an awesome tool called [Hieroglyph](https://github.com/averyvery/hieroglyph). There's already a pretty intuitive readme file in the repo, but I hope to elaborate a little more on what was provided.

#### Installing Hieroglyph
Open up **Terminal** and type `gem install hieroglyph`. If for some reason you get an error and/or the install fails, update RubyGems by entering `sudo gem update --system` into Terminal, then give it another shot. You can test to see if it works by simply entering `hieroglyph` in terminal to generate an empty, dummy font.

You should get output similar to this:

{% highlight console %}
~/Desktop » hieroglyph
  
Setup:
  ImageMagick not detected - skipping character sheet
  
Reading glyphs:
  
Done!
  MyFont generated saved to /Users/Aaron/Desktop/MyFont.svg
  Single characters: 
  Unicode characters: 
{% endhighlight %}

Then just delete the dummy SVG file, in my case, on my Desktop.

#### Getting your icons ready
Open up Illustrator and create a new document sized **1000pt x 1000pt**. We need to make sure that the icons are centered, and relatively the same size. Drag a horizontal guide so it sits **250 points** from the top of the canvas. You can set this easily by dragging out a guide, then in your Illustrator toolbar setting the **Y value** to 250. You should also drag out a vertical rule with the **X value** of 500 so you have a vertical center showing.

![Illustrator Toolbar](http://docs.tinyfactory.co/images/assets/toolbar.png)

![Twitter icon mapped to T key](http://docs.tinyfactory.co/images/assets/twitter-ss.png)

<a href="http://docs.tinyfactory.co/images/downloads/icon.zip" class="button">Download Icon Template</a>

**Important:** Make sure your icon is a compound path. If your canvas has more than one shape, it will cause issues with the font generation. You can make it a compound path by selecting all the shapes in the icon, and pressing **CMD + 8**.

#### Saving & Naming Convetion
Save your files as SVGs. Name them *[key]-icon-name.svg*. If you downloaded the template, you'll notice it's named [t]-twitter.svg. This will map the icon to the T key when our font is generated.

#### Font Generation
I've saved all my icons into a folder on my Desktop called **glyphs**. Go back into Terminal and browse to your Desktop by typing `cd ~/Desktop`.

Once we're there we can run `hieroglyph -n FontName -g path/to/glyphs -o destination/path`.<br>
Or if you've setup everything the way I have `hieroglyph -n Icons -g glyphs` will generate the font on your desktop.

Your output will change depending on how many icons you've generated, but mine reads:

{% highlight console %}
~/Desktop » hieroglyph -n Icons -g glyphs/
  
Setup:
  ImageMagick not detected - skipping character sheet
  
Reading glyphs:
  Parsing 1
  Parsing 2
  Parsing 3
  Parsing 4
  Parsing 5
  Parsing 6
  Parsing 7
  Parsing 8
  Parsing 9
  
Done!
  Icons generated saved to /Users/Aaron/Desktop/Icons.svg
  Single characters: 1,2,3,4,5,6,7,8,9
  Unicode characters: 
  
  To create a full set of webfonts, upload to http://www.fontsquirrel.com/fontface/generator
  If you're having trouble uploading SVGs, try converting to a TTF first using 
  http://www.freefontconverter.com
{% endhighlight %}

Now that you've got your font in an SVG format, go ahead and run your new font through [this font-face generator](http://www.fontsquirrel.com/fontface/generator) to get the other @font-face formats. Also make sure that you've clicked **Expert**  and selected the custom subsetting option in the font-squirrel interface. If you're ballin' out of control, you might use [FontXChange](http://www.fontgear.net/fontxchange.html) to generate the different formats instead.

#### In Conclusion
Now you're ready to embed those files into your stylesheet and start serving some icons!

If you really want to do it up proper, [GitHub's post about Octicons](https://github.com/blog/1135-the-making-of-octicons) goes through their process in great detail.

If this is too much for you, fortunately there are tons of great services out there right now that really make this easier. There is the newly created [Symbolset](http://symbolset.com/), which is a font of icons that advocates way better semantics than I've shown above. The [Pictos font](http://pictos.cc/font/) has a pretty wide array of icons, [Pictos Server](http://pictos.cc/server/) and [Shifticons](https://www.shifticons.com/) which are both damn fine services for doing this a lot faster.