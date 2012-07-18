---
layout: default
published: true
category: ec2
---
# Create the EC2 Instance

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
11. Move key to local .ssh directory
12. Change permissions on key to 600 in Terminal with: `chmod 600 ~/.ssh/[filename].pem`
13. Under the ports open the following:
	* Port 22 for ssh
    * Port 80 for live
    * Port 81 for live socket
    * Port 8080 for dev
    * Port 8081 for dev socket
    * Port 8090 for stage
    * Port 8091 for stage socket
    * Port 31337 for Twilio (If using)
14. Launch the instance

# Give it an IP

1. Under **Networking and Security** select **Elastic IPs**
2. Click the **Allocate New Address** button
3. Ensure EC2 is selected and click **Yes**
4. Select the newly created IP and click on the **Associate Address** button
5. Select the EC2 instance
6. Copy the IP Address (You'll need it later)

# Connect to the New Instance

1. Connect with: `ssh -i ~/.ssh/keyname.pem ec2-user@[ip-add]`
2. Allow other users on server (if applicable)
	* Open authorized_keys with: `sudo vim ~/.ssh/authorized_keys`
    * Copy and paste user hashes into keys file from another server
3. Install screen with: `sudo yum install screen`
4. Install git with: `sudo yum install git`
5. Install compiler software with: `sudo yum groupinstall "Development Tools"`
6. Install ssl support for node with: `sudo yum install openssl-devel`
7. Install Node
	* Create a directory for the node download file with: `sudo mkdir /downloads`
    * Go into newly created directory with: `cd /downloads`
    * Get the node repo with: `sudo git clone --depth 1 git://github.com/joyent/node.git`
    * Go into node directory with: `cd node`
    * Checkout a stable branch: `sudo git checkout v0.6.10` (replace version with most recent stable version)
    * Configure install with: `sudo ./configure --prefix=/opt/node`
    * Make j2 portion of install with: `sudo make -j2`
    * Finish installation with: `sudo make install`
    * Open .bash_profile with: `sudo vim ~/.bash_profile`
    * Add this line: `export PATH=$PATH:/opt/node/bin`
    * Reload the bash profile with: `source ~/.bash_profile`
    * Change permissions on node directory with: `sudo chown -R ec2-user:ec2-user /opt/node`
8. Congrats!  Node is installed!  What's next?  You can install mongodb or setup a git repo on the server to really get developing.