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
5. Select the Classic Interface
6. Select **64 bit Amazon Linux AMI**
7. Select **Micro** (unless for high traffic site)
8. Set zone to **us-east-1a** (or make a note if selecting another zone)
9. Give the instance a name
10. Download the ssh key
11. Move key to local .ssh directory
12. Change permissions on key to 600 with: `chmod 600 ~/.ssh/[filename].pem`
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

# 