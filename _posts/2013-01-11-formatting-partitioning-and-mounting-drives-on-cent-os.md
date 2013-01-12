---
layout: default
published: false
---

# Mounting a new disk or extrenal drive on CentOS

I always forget how to do this, so here is a quick writeup

If you don't already have a monut point, make one. This is the directory you will able to access the newly mounted drive
```
[root@server]# mkdir /mnt/backup
```

Locate the attached drives
```
[root@server]# ls /dev/sd*

brw-rw----. 1 root disk 8,  0 Jun  2  2012 /dev/sda
brw-rw----. 1 root disk 8,  1 Jun  2  2012 /dev/sda1
brw-rw----. 1 root disk 8,  2 Jun  2  2012 /dev/sda2
brw-rw----. 1 root disk 8, 16 Jan 11 09:01 /dev/sdb
brw-rw----. 1 root disk 8, 17 Jan 11 09:13 /dev/sdb1 
```
This output is showing that drive `/dev/sda` has 2 partitaions, `/dev/sda1` and `/dev/sda2` and drive `/dev/sdb` has 1 partition `/dev/sdb1`


Check the file system type
```
[root@server]#file -i /dev/sdb/
```

You can now mount the drive to your mount point

--- if this is a new drive, you will need to make a parition and format it ---

if you need to make a filesystem, first make a partition
```
[root@server]# fdisk /dev/sdb [or ref to your drive]

> WARNING: DOS-compatible mode is deprecated. It's strongly recommended to
         switch off the mode (command 'c') and change display units to
         sectors (command 'u').

> Command (m for help):
```

# type in `n` for 'add a new partition' and follow the steps to create a new partion

format the filesystem. There are a few different types to consider
- auto - this is a special one. It will try to guess the fs type when you use this.
- ext4 - this is probably the most common Linux fs type of the last few years
- ext3 - this is the most common Linux fs type from a couple years back
- ntfs - this is the most common Windows fs type or larger external hard drives
- vfat - this is the most common fs type used for smaller external hard drives

# four our situation we want ext4
mkfs.ext4 /dev/sdb1

