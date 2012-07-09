# Changing the HEAD pointer on a git reposotiry
If you want the default branch from a `git clone` to be something besides `master`, use the following steps:

Check what remote branches are available:

```bash
git branch -r
```
The output will look like:

```bash
origin/HEAD -> origin/master
origin/dev
origin/master
```

Notice `origin/HEAD -> orgin/master`.  When you issue a `git clone` on this repository you will get the master branch by default.  If want to change this to the dev branch we also have in our remote repository, issue the following command:

```bash
git remote set-head origin dev
```

To confirm the change took, run `git branch -r` and review our output:

```bash
origin/HEAD -> origin/dev
origin/dev
origin/master
```

`origin/HEAD -> orgin/dev` is pointing to our dev branch.