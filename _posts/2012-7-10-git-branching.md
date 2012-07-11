---
layout: post
category: git
---

### Basic Branching

- To create a new branch locally
	{% highlight bash %}
$ git checkout -b "new-branch-name"
Switched to a new branch "new-branch-name"
	{% endhighlight %}

- To view your local branches
	{% highlight bash %}
$ git branch
	{% endhighlight %}

- To view all branches 
	{% highlight bash %}
$ git branch -a
	{% endhighlight %}

- To view all remote branches 
	{% highlight bash %}
$ git branch -r
	{% endhighlight %}

- To push **only** the current branch
	{% highlight bash %}
$ git push origin "branch-name"
	{% endhighlight %}