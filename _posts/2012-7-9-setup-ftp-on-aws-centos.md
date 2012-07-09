1. Install vsftpd
yum install vsftpd - y

2. Open up the config file
vim /etc/vsftpd/vsftpd.conf

3. Add the following lines to the end of vsftpd.conf
pasv_enable=YES
pasv_min_port=1400 ← port range to be opened at the security group
pasv_max_port=1500
pasv_address=23.21.148.84 ← server IP

4. Open up the following ports at the security group within AWS
21 ← default FTP connection port
1400-1500 ← passive port range set in vsftpd.con

5. Restart the vsftpd server
sudo service vsftpd restart

6. Add new user to server for login
sudo adduser [username]

7. Give user a password so they can login
sudo passwd [username]

8. Add entry to auto start vsftpd on server restart
sudo chkconfig vsftpd on 

9. Bonus - if you want to have a user’s files uploaded to an EBS mount, symlink from the FTP user’s directory to the EBS mount
ln -s [source-file/folder] [link-name]
