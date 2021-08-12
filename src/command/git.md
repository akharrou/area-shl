---
status: TODO
title: "git"
tags: [vcs,scm,version,control,system]
---

# `git`

## BRIEF

Scalable distributed revision control system.

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install git
```


## USECASES

----
#### To stage all changes for commit:

    ❯ git add --all

----
#### To stash changes locally, this will keep the changes in a separate changelist called stash and the working directory is cleaned. You can apply changes from the stash anytime:

    ❯ git stash

----
#### To stash changes with a message:

    ❯ git stash push -m <message>

----
#### To list all the stashed changes:

    ❯ git stash list

----
#### To apply the most recent change and remove the stash from the stash list:

    ❯ git stash pop

----
#### To apply any stash from the list of stashes. This does not remove the stash from the stash list:

    ❯ git stash apply stash@{6}

----
#### To commit staged changes:


```bash
#ℹ︎ commit changes with description message
❯ git commit -m "Change description message"
```


```bash
#ℹ︎ edit/modify/amend previous/most-recent commit message
❯ git commit --amend -m "Amended message"
```


----
#### To git commit in the past. More recent versions of Git also support `--date="2 days ago"` directly.:

    ❯ git commit --date="date --date=`2 day ago`"
    ❯ git commit --date="Jun 13 18:30:25 IST 2015"

----
#### To change the date of an existing commit:

    ❯ git filter-branch --env-filter \
        if [ $GIT_COMMIT = 119f9ecf58069b265ab22f1f97d2b648faf932e0 ]
        then
            export GIT_AUTHOR_DATE="Fri Jan 2 21:38:53 2009 -0800"
            export GIT_COMMITTER_DATE="Sat May 19 01:01:01 2007 -0700"
        fi

----
#### To remove staged and working directory changes:


```bash
#ℹ︎ undo active working tree file changes
❯ git restore FILEGLOB
```

    ❯ git reset --hard

----
#### To go 2 commits back:

    ❯ git reset --hard HEAD~2

----
#### To revert first/initial commit on a branch. Running `git reset --hard HEAD~1` will give error::

    fatal: ambiguous argument HEAD~1: unknown revision or path not in the working tree
    ❯ git update-ref -d HEAD

----
#### To remove untracked files:

    ❯ git clean -f -d

----
#### To remove untracked and ignored files:

    ❯ git clean -f -d -x

----
#### To push to the tracked master branch:

    ❯ git push origin master

----
#### To push to a specified repository:

    ❯ git push git@github.com:<username>/<repo>.git

----
#### To push a tag to remote:

    ❯ git push origin <tagname>

----
#### To force a push:

    ❯ git push -f

----
#### To delete the branch <branch>:

    ❯ git branch -D <branch>

----
#### To make an exisiting branch track a remote branch:

    ❯ git branch -u upstream/foo

----
#### To see who commited which line in a file:

    ❯ git blame <file>

----
#### To sync a fork with the master repo:

    ❯ git remote add upstream git@github.com:<username>/<repo>.git # Set a new repo
    ❯

```bash
#ℹ︎ Confirm new remote repo
❯ git remote -v                        
```


```bash
#ℹ︎ Get branches
❯ git fetch upstream                   
```


```bash
#ℹ︎ List local - remote branches
❯ git branch -va                       
```


```bash
#ℹ︎ Checkout local master branch
❯ git checkout master                  
```


```bash
#ℹ︎ Create and checkout a new branch
❯ git checkout -b new_branch           
```


```bash
#ℹ︎ Merge remote into local repo
❯ git merge upstream/master            
```


```bash
#ℹ︎ Show what a commit did.
❯ git show 83fb499                     
```


```bash
#ℹ︎ Shows the file as it appeared at 83fb499.
❯ git show 83fb499:path/fo/file.ext    
```


```bash
#ℹ︎ Check difference between branches
❯ git diff branch_1 branch_2           
```


```bash
#ℹ︎ Show all the commits
❯ git log                              
```


```bash
#ℹ︎ Show the changes from last commit
❯ git status                           
```


----
#### To view the commit history of a set of files:

    ❯ git log --pretty=email --patch-with-stat --reverse --full-index -- Admin\*.py > Sripts.patch

----
#### To import commits from another repo:

    ❯ git --git-dir=../some_other_repo/.git format-patch -k -1 --stdout <commit SHA> | git am -3 -k

----
#### To view commits that will be pushed:

    ❯ git log @{u}..

----
#### To view changes that are new on a feature branch:

    ❯ git log -p feature --not master
    ❯ git diff master...feature

----
#### To perform an interactive rebase for the prior 7 commits:

    ❯ git rebase -i @~7

----
#### To `diff` files WITHOUT considering them a part of `git`. This can be used to `diff` files that are not in a git repo::

    ❯ git diff --no-index path/to/file/A path/to/file/B

----
#### To pull changes while overwriting any local commits:

    ❯ git fetch --all
    ❯ git reset --hard origin/master

----
#### To update all submodules:

    ❯ git submodule update --init --recursive

----
#### To perform a shallow clone to only get latest commits (helps save data when cloning large repos)::

    ❯ git clone --depth 1 <remote-url>

----
#### To unshallow a clone:

    ❯ git pull --unshallow

----
#### To create a bare branch (one that has no commits on it):

    ❯ git checkout --orphan branch_name

----
#### To checkout a new branch from a different starting point:

    ❯ git checkout -b master upstream/master

----
#### To remove all stale branches (ones that have been deleted on remote). So if you have a lot of useless branches, delete them on Github and then run this::

    ❯ git remote prune origin

----
#### To prune all remotes at once::

    ❯ git remote prune $(git remote | tr `\n` ` `)

Revisions can also be identified with `:/text`. E.g., this will show the first commit that has "cool" in their message body:

    ❯ git show :/cool

----
#### To undo parts of last commit in a specific file:

    ❯ git checkout -p HEAD^ -- /path/to/file

----
#### To revert a commit and keep the history of the reverted change as a separate revert commit::

    ❯ git revert <commit SHA>

----
#### To pick a commit from a branch to current branch. This is different than merge as this just applies a single commit from a branch to current branch::

    ❯ git cherry-pick <commit SHA1>

----
#### To get, and [un]set, [global] configuration options:


```bash
#ℹ︎ [un]set username
❯ git config --global [--unset] user.name <name>
```


```bash
#ℹ︎ [un]set email
❯ git config --global [--unset] user.email <email>
```


```bash
#ℹ︎ [un]set editor
❯ git config --global [--unset] core.editor <editor>
```


```bash
#ℹ︎ [un]set/enable color output
❯ git config --global [--unset] color.ui true
```


```bash
#ℹ︎ [un]set alias
❯ git config --global [--unset] alias.<name> "<value>"
```


```bash
#ℹ︎ set global excludes/git-ignore file
❯ git config --global core.excludesfile PATH
```



```bash
#ℹ︎ get option value
❯ git config --global --get <option.name>
```


----
#### To print file location for each configuration setting:


```bash
#ℹ︎ get/print/list configurations, origin file, applicability scope
❯ git config --list --show-origin --show-scope
```

    system  file:/usr/local/etc/gitconfig   filter.lfs.required=true
    ...
    global  file:/Users/johndoe/.gitconfig user.name=johndoe
    ...


## INIT

    # export GIT_CONFIG_NOSYSTEM=0
    # export GIT_CONFIG_SYSTEM="$PREFIX/etc/gitconfig"
    # export GIT_CONFIG_GLOBAL="${XDG_CONFIG_HOME:-"$HOME/.config/git"}/config"
    # export GIT_CONFIG=".git/config"

## ALIASES

    # alias gcl="git clone"
    # alias gs="git status"
    # alias gpl="git pull"
    # alias ga="git add ."
    # alias gcm="git commit -m 'Latest Update'"
    # alias gp="git push"
    # alias gch="git checkout"
    # alias gbr="git branch"
    # alias gc="git add . ; git status ; git commit -m '.'"
    # alias ggw="gpl ; ga ; gs ; echo ; gc ; gp"

## PROCEDURES

    [[ `declare -f gl 2>/dev/null` ]] && unset -f gl
    [[ `alias gl 2>/dev/null` ]] && unalias gl
    # ❯ gl   # view git commit log as graph browser
    function gl()   # view git commit log as graph browser
    {
        # --graph OR --reverse
        git log 2>/dev/null \
            --graph \
            --color=always \
            --date="format:%A, %B %d, %Y" \
            --format="%C(#A5D6A7)%h%C(#CE93D8)%d%C(auto) %s %C(bold)%C(italic)%C(black)%cd (%cr)" \
            "$@" \
        | fzf \
            --query "$1" \
            --tiebreak=index \
            --preview-window="nohidden" \
            --preview="\
                echo {} | grep -o '[a-f0-9]\{7\}' | head -1 \
                | xargs -I % sh -c 'git show % | delta'" \
            --bind "alt-c:execute:\
                echo {} | grep -o '[a-f0-9]\{7\}' | head -1  | tr -d '\n' \
                | pbcopy" \
            --bind "enter:execute:\
                echo {} | grep -o '[a-f0-9]\{7\}' | head -1 \
                | xargs -I % git show %"

        # See: https://git-scm.com/docs/pretty-formats
        #
        # FORMAT 1: full :: hash, subject, name, email, rel-date, formatted-date
        #   --format="%C(#A5D6A7)%h%C(#CE93D8)%d%C(auto) %s %C(#BCAAA4)<%an, %ae> %C(bold)%C(italic)%C(black)%cr, %cd"
        # FORMAT 2: short :: hash, subject, relative date
        #   --format="%C(#A5D6A7)%h%C(#CE93D8)%d%C(auto) %s %C(bold)%C(italic)%C(#6A6A6A)%cr"
        #   --format="%C(auto)%h%d :: %C(#FAFAFA)%s %C(bold)%C(italic)%C(black)%cr"
    }


## NOTES

### Git hooks

    ❯ git config --global core.hookspath PATH

## PATHS

Path | Description
- | -
📂 `$(prefix)/etc/gitconfig` | System-wide configuration file.
📂 `$XDG_CONFIG_HOME/git/config` | Second user-specific configuration file; defaults to: `$HOME/.config/git/config`.
📂 `~/.gitconfig` | Global user-specific configuration file.
📂 `$GIT_DIR/config` | Repository specific configuration file.
📂 `$GIT_DIR/config.worktree` | Optional, only searched when `extensions.worktreeConfig` is present in `$GIT_DIR/config`.

## SEE

    git(1)
    gittutorial(7)
    gittutorial-2(7)
    giteveryday(7)
    gitcvs-migration(7)
    gitglossary(7)
    gitcore-tutorial(7)
    gitcli(7)
    The Git User’s Manual[1]
    gitworkflows(7)

## SEEALSO

    git-lfs, gh, diff(1)

## SEEFURTHER

- [🌎 Home](https://git-scm.com/)
- [🌎 Documentation](https://git-scm.com/docs)
- [🌎 Book](https://git-scm.com/book/en/)
- [🌎 Repository](https://github.com/git/git)
- [🌎 Page: Youtube ➤ Tech Talk: Linus Torvalds on git](https://www.youtube.com/watch?v=4XpnKHJAok8)
- [🌎 Page: Youtube ➤](https://www.youtube.com/watch?v=Y2Msq90ZknI)
- [🌎 Page: Youtube ➤](https://www.youtube.com/watch?v=MYP56QJpDr4)
