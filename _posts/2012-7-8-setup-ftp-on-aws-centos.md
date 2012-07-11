---
layout: post
category: centos
---

1. Install **vsftpd**
	{% highlight bash %}
yum install vsftpd - y
	{% endhighlight %}

2. Open up the config file
 	{% highlight bash %}
vim /etc/vsftpd/vsftpd.conf
 	{% endhighlight %}

3. Add the following lines to the end of **vsftpd.conf**
 	{% highlight bash %}
pasv_enable=YES
pasv_min_port=1400 ← port range to be opened at the security group
pasv_max_port=1500
pasv_address=23.21.148.84 ← server IP
 	{% endhighlight %}

4. Open up the following **ports** at the security group within **AWS**
 	{% highlight bash %}
21 ← default FTP connection port
1400-1500 ← passive port range set in vsftpd.con
 	{% endhighlight %}

5. Restart the **vsftpd** server
 	{% highlight bash %}
sudo service vsftpd restart
 	{% endhighlight %}

6. Add new user to server for login
 	{% highlight bash %}
sudo adduser [username]
 	{% endhighlight %}

7. Give user a password so they can login
 	{% highlight bash %}
sudo passwd [username]
 	{% endhighlight %}

8. Add entry to auto start **vsftpd** on server restart
	{% highlight bash %}
sudo chkconfig vsftpd on 
	{% endhighlight %}

9. Bonus - if you want to have a user’s files uploaded to an EBS mount, symlink from the FTP user’s directory to the EBS mount
	{% highlight bash %}
ln -s [source-file/folder] [link-name]
	{% endhighlight %}