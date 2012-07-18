---
layout: default
published: false
category: amazon ec2
title: Create Amazon EC2 instance for Node.js (from MacOSX)
---
# Create the EC2 Instance

1. Login to [aws.amazon.com](http://aws.amazon.com/)
2. Pulldown **My Account/Console** and select **AWS Management Console**
3. Select **EC2** under **Compute and Networking**
4. Click the **Launch Instance** button
5. Select **64 bit Amazon instance**
6. Select **Micro** (unless for high traffic site)
7. Set zone to **us-east-1a** (or make a note if selecting another zone)
8. Download the ssh key
9. Move key to local .ssh directory
10. Change permissions on key to 600 with: `chmod 600 ~/.ssh/[filename].pem`
11. Under the ports open the following:
	* Port 22 for ssh
    * Port 80 for live
    * Port 81 for live socket
    * Port 8080 for dev
    * Port 8081 for dev socket
    * Port 8090 for stage
    * Port 8091 for stage socket
    * Port 31337 for Twilio (If using)
13. Launch the instance
12. Under **Networking and Security** select **Elastic IPs**