---
layout: post
category: centos
published: true
---

1. Install mysql and the server
{% highlight bash %}
yum install -y mysql mysql-server
{% endhighlight %}

2. Start the mysql server
{% highlight bash %}
service mysqld start
{% endhighlight %}

3. Set the initial root password
{% highlight bash %}
/usr/bin/mysqladmin -u root password 'new-password'
{% endhighlight %}

4. Login to MySQL as root
{% highlight bash %}
mysql -u root -p
{% endhighlight %}

5. Create new MySQL user and grant them permissions on all databases
{% highlight bash %}
GRANT ALL PRIVILEGES ON *.* TO 'monty'@'localhost' IDENTIFIED BY 'some_pass' WITH GRANT OPTION;
{% endhighlight %}

6. Create a new database
{% highlight bash %}
create database database_name
{% endhighlight %}