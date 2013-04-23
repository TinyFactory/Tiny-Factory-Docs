---
layout: post
title: Formatting, Partitioning, and Mounting Drives on CentOS
category: centos
author: alex
published: true
---

I always forget how to do this, so here is a quick writeup.

**Important:** You need to be root or add `sudo` before all commands.

## Locate attached drives

```
[root@server]# ls /dev/sd*

brw-rw----. 1 root disk 8,  0 Jun  2  2012 /dev/sda
brw-rw----. 1 root disk 8,  1 Jun  2  2012 /dev/sda1
brw-rw----. 1 root disk 8,  2 Jun  2  2012 /dev/sda2
brw-rw----. 1 root disk 8, 16 Jan 11 09:01 /dev/sdb
```
The output is shows that drive `/dev/sda` has 2 partitaions, `/dev/sda1` and `/dev/sda2`. Our target drive `/dev/sdb` has no partitions so we need to create one.

## Partition the drive

If this is a new drive, you will need to make a partition and format it. If not skip this step.

The following steps will create a single partition that will take up the entire drive:

```
[root@server]# fdisk /dev/sdb

WARNING: DOS-compatible mode is deprecated. It's strongly recommended to
         switch off the mode (command 'c') and change display units to
         sectors (command 'u').

Command (m for help):
```
In this case we need to switch off the DOS compatible mode and change the units to sectors:

```
Command (m for help): c
DOS Compatibility flag is not set
Command (m for help): u
Changing display/entry units to sectors
```

Create a new part ion by typing `n`. We will then select this as a primary part ion by entering `p` and select this as the first partition by entering `1`:

```
Command (m for help): n
Command action
   e   extended
   p   primary partition (1-4)
p
Partition number (1-4): 1
First cylinder (1-182401, default 1):
Using default value 1
Last cylinder, +cylinders or +size{K,M,G} (1-182401, default 182401):
Using default value 182401
```
We can review our results by entering `p`:

```
Command (m for help): p

Disk /dev/sdb: 1500.3 GB, 1500301910016 bytes
255 heads, 63 sectors/track, 182401 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00000000

   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1               1      182401  1465136001   83  Linux
```
Write (save) the part ion:

```
Command (m for help): w
The partition table has been altered!
```

## Format the filesystem

There are a few different types of filesystems to consider:

* auto - this is a special one. It will try to guess the file system type when you use this.   
*  ext4 - this is probably the most common Linux file system type of the last few years  
*  ext3 - this is the most common Linux file system type from a couple years back  
*  ntfs - this is the most common Windows file system type or larger external hard drives  
*  vfat - this is the most common file system type used for smaller external hard drives  

For our situation we will use ext4

```
[root@server] mkfs.ext4 /dev/sdb1

mke2fs 1.41.12 (17-May-2010)
Filesystem label=
OS type: Linux
Block size=4096 (log=2)
Fragment size=4096 (log=2)
Stride=0 blocks, Stripe width=0 blocks
91578368 inodes, 366284000 blocks
18314200 blocks (5.00%) reserved for the super user
First data block=0
Maximum filesystem blocks=0
11179 block groups
32768 blocks per group, 32768 fragments per group
8192 inodes per group
Superblock backups stored on blocks:
	32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
	4096000, 7962624, 11239424, 20480000, 23887872, 71663616, 78675968,
	102400000, 214990848
```

This will take awhile and will show `Writing inote tables: ` with numbers detailing progress.

## Mount the new drive

If you don't already have a mount point, make one. This is the directory you will able to access the newly mounted drive

```
[root@server]# mkdir /mnt/backup
```

We can now mount the partition we created earlier to the new mount point:

```
[root@server] mount /dev/sdb1 /mnt/backup
```

And we are done!