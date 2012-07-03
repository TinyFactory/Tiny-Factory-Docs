This tutorial describes how to setup vsftpd on CentOS on Amazon EC2.

1. Install vsftpd
```bash
yum install vsftpd - y
``` 

2. Open up the vsftpd config file
```bash
vim /etc/vsftpd/vsftpd.conf
```

3. Add the following lines to the end of vsftpd.conf
```bash
pasv_enable=YES
# port range to be opened at the firewall (Security Grop on EC2)
pasv_min_port=1400 
pasv_max_port=1500
# Our server IP
pasv_address=23.21.148.88
```

4. Open up the following ports at the security group within AWS
```bash
21 ← default FTP connection port
1400-1500 ← passive port range set in vsftpd.con
``` 

5. Restart the vsftpd server
```bash
sudo service vsftpd restart
```
6. Add new user to server for login
```bash
sudo adduser [username]
```

7. Give user a password so they can login
```bash
sudo passwd [username]
```
8. Add entry to auto start vsftpd on server restart
```bash
sudo chkconfig vsftpd on
```

9. Bonus - if you want to have a user’s files uploaded to an EBS mount, symlink from the FTP user’s directory to the EBS m
```bash
ln -s [source-file/folder] [link-name]
```