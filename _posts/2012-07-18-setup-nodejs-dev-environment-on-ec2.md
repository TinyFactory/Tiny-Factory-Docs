---
layout: post
published: true
category: node.js
---

## Create the EC2 Instance

1. Login to [aws.amazon.com](http://aws.amazon.com/)
2. Pulldown **My Account/Console** and select **AWS Management Console**
3. Select **EC2** under **Compute and Networking**
4. Click the **Launch Instance** button
5. Select the Classic Interface
6. Select **64 bit Amazon Linux AMI**
7. Select **Micro** (unless for high traffic site)
8. Set zone to **us-east-1a** (or make a note if selecting another zone)
9. Give the instance a name
10. Download the ssh key
11. Move key to your local ~/.ssh/ directory
12. Change permissions on key to 600: 
	{% highlight bash %}chmod 600 ~/.ssh/(filename).pem
    {% endhighlight %}
13. In EC2 setup a security group with the following open ports:
	{% highlight bash %}Port 22 for ssh
    Port 80 for http traffic
    Port 8080 for socket traffic
    {% endhighlight %}
14. Launch the instance

## Associate an IP with your EC2 instance

1. Under **Networking and Security** select **Elastic IPs**
2. Click the **Allocate New Address** button
3. Ensure EC2 is selected and click **Yes**
4. Select the newly created IP and click on the **Associate Address** button
5. Select the EC2 instance
6. Copy the IP Address (You'll need it later)

## Connect to the New Instance

1. Connect with:
    {% highlight bash %}ssh -i ~/.ssh/keyname.pem ec2-user@the-ip-address-for-the-instance
    {% endhighlight %}
2. Add public key to to the authorized_keys file for passwordless ssh login 
    {% highlight bash %}sudo vim ~/.ssh/authorized_keys
    {% endhighlight %}    
3. Install development tools group for compiling:
	{% highlight bash %}sudo yum groupinstall "Development Tools"
    {% endhighlight %} 
4. Install ssl support for node with: 
	{% highlight bash %}sudo yum install openssl-devel
    {% endhighlight %} 
5. Download Node.js repo and checkout a version to install
	{% highlight bash %}sudo mkdir /downloads
	cd /downloads
	sudo git clone --depth 1 git://github.com/joyent/node.git
	cd node
	sudo git checkout v0.6.10 //replace version with most recent stable version
	{% endhighlight %}
6.  Install Node.js
    {% highlight bash %}sudo ./configure --prefix=/opt/node
	sudo make -j2
	sudo make install
	{% endhighlight %}
7.	Setup Node.js environment varibales
    {% highlight bash %}sudo vim ~/.bash_profile
    Add this line: 
	export PATH=$PATH:/opt/node/bin
    Reload the bash profile with:
	source ~/.bash_profile
    Change permissions on node directory with: 
	sudo chown -R ec2-user:ec2-user /opt/node
	{% endhighlight %}   
6. Congrats!  Node is installed!  What's next?  You can install mongodb or setup a git repo on the server to really get developing.