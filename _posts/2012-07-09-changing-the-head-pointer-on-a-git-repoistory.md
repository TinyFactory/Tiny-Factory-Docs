---
layout: post
title: Changing the head on a Git Repo
category: git
author: michael
---

If you want the default branch from a `git clone` to be something besides `master`, use the following steps:

Check what remote branches are available: 

{% highlight bash %}
git branch -r
{% endhighlight %}

The output will look like:

{% highlight bash %}
origin/HEAD -> origin/master
origin/dev
origin/master
{% endhighlight %}

Notice `origin/HEAD -> orgin/master`.  When you issue a `git clone` on this repository you will get the master branch by default.  If want to change this to the dev branch we also have in our remote repository, issue the following command

{% highlight bash %}
git remote set-head origin dev
{% endhighlight %}

To confirm the change took, run `git branch -r` and review our output:

{% highlight bash %}
origin/HEAD -> origin/dev
origin/dev
origin/master
{% endhighlight %}

`origin/HEAD -> orgin/dev` is pointing to our dev branch.

### How does it work?