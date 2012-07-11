---

published: false
---
# Git Branching

## Basic Branching

To create a new branch locally

```bash
$ git checkout -b "new-branch-name"
Switched to a new branch "new-branch-name"
```


To create a new local branch from a remote branch
```bash 
$ git checkout -b new-branch-name origin/remote-branch-name
Switched to a new branch "new-branch-name"
```


To view your local branches
```bash 
$ git branch
```


To view all branches (local and remote)
```bash 
$ git branch -a
```

To view all remote branches 
```bash 
$ git branch -r
```


To merge a branch check out the branch you'd like to merge to and run
```bash 
$ git checkout master
$ git merge new-branch-name
```

To push all local changes to remote
```bash 
$ git push origin
```

To push local changes for a specific repo
```bash 
$ git push origin master
```

View GUI of merges
```bash 
$ gitk
```