---
layout: post
category: node
published: false
---

# Setting Up Node Forever

Keep a node server running

[https://github.com/nodejitsu/forever/](https://github.com/nodejitsu/forever/)

Use

{% highlight bash %}
sudo su

source ~/.bash_profile

forever list

forever stopall

cd /servers/live (Or path to server.js)

forever start server.js
{% endhighlight %}

## Installation

{% highlight bash %}
sudo su

vim ~/.bash_profile

insert into .bash_profile

export PATH=$PATH:/opt/node/bin

source ~/.bash_profile

npm install forever -g
{% endhighlight %}