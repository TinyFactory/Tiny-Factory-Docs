---
layout: post
category: git
author: michael
---

To create a new branch locally

{% highlight bash %}
$ git checkout -b "new-branch-name"
Switched to a new branch "new-branch-name"
{% endhighlight %}


To create a new local branch from a remote branch

{% highlight bash %}
$ git checkout -b new-branch-name origin/remote-branch-name
Switched to a new branch "new-branch-name"
{% endhighlight %}

Push a New Local Branch to a Remote Git Repo

{% highlight bash %}
$ git push origin new-branch-name
{% endhighlight %}


To view your local branches

{% highlight bash %}
$ git branch
{% endhighlight %}


To view all branches (local and remote)

{% highlight bash %}
$ git branch -a
{% endhighlight %}

To view all remote branches 

{% highlight bash %}
$ git branch -r
{% endhighlight %}

To merge a branch check out the branch you'd like to merge to and run

{% highlight bash %}
$ git checkout master
$ git merge new-branch-name
{% endhighlight %}

To push all local changes to remote

{% highlight bash %}
$ git push origin
{% endhighlight %}

To push local changes for a specific repo

{% highlight bash %}
$ git push origin master
{% endhighlight %}

To delete a local branch
{% highlight bash %}
$ git branch -D branch-name
{% endhighlight %}

To delete a remote branch
{% highlight bash %}
$ git push origin --delete branch-name
{% endhighlight %}

View GUI of merges

{% highlight bash %}
$ gitk
{% endhighlight %}