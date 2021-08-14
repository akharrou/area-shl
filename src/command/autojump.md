---
status: INCOMPLETE
title: "autojump"
tags: [jumpto,open,abbreviated,filesystem,files,folders,directories,shortcut,navigator]
---

# `autojump`

## BRIEF

Navigate your filesystem, faster. Maintains a database of the directories you use the most from the command line. Continuously gives directories a weight, based on frequency of visit. When invoking the command with a path, can be a shorthand, the beginning of it, etc, the command will look into database for most weighted path that matches and takes you straight to that directory.

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install autojump
```


## USECASES

----
#### To jump quickly to locations in terminal or Finder:


```bash
#ℹ︎ goto/jump to directory
❯ j PATH  
```


```bash
#ℹ︎ open file manager to directories
❯ jo PATH 
```


```bash
#ℹ︎ goto/jump to child directory
❯ jc PATH 
```


```bash
#ℹ︎ open file manager to child directory
❯ jco PATH
```


----
#### To manage `autojump` database:


```bash
#ℹ︎ show database entries and their key weights
❯ autojump --stat
```


```bash
#ℹ︎ remove non-existent paths from database
❯ autojump --purge
```


```bash
#ℹ︎ add path to database
❯ autojump -a DIRECTORY
```



## INIT

    [ -f /usr/local/etc/profile.d/autojump.sh ] &&\
         . /usr/local/etc/profile.d/autojump.sh

## PROCEDURES

    # ❯ j [PATH]   # fuzzy search autojump, change directory
    function j()   # fuzzy search autojump, change directory
    {
        if [[ "$#" -ne 0 ]]; then
            cd $(autojump $@)
            return
        fi
        cd "$(autojump -s | sort -k1gr | awk '$1 ~ /[0-9]:/ && $2 ~ /^\// { for (i=2; i<=NF; i++) { print $(i) } }' |  fzf --multi --height 40% --reverse --inline-info)"
    }

    # ❯ jo [PATH]   # fuzzy search autojump, open in file manager (Finder)
    function jo()   # fuzzy search autojump, open in file manager (Finder)
    {
        if [[ "$#" -ne 0 ]]; then
            open $(autojump $@)
            return
        fi
        autojump -s | sort -k1gr | awk '$1 ~ /[0-9]:/ && $2 ~ /^\// { for (i=2; i<=NF; i++) { print $(i) } }' |  fzf --multi --height 40% --reverse --inline-info | xargs -r open
    }

    # ❯ jc [PATH]   # fuzzy search autojump, open in code editor (Visual Studio Code)
    function jc()   # fuzzy search autojump, open in code editor (Visual Studio Code)
    {
        if [[ "$#" -ne 0 ]]; then
            code $(autojump $@)
            return
        fi
        autojump -s | sort -k1gr | awk '$1 ~ /[0-9]:/ && $2 ~ /^\// { for (i=2; i<=NF; i++) { print $(i) } }' |  fzf --multi --height 40% --reverse --inline-info | xargs -r code
    }

    # ❯ je [PATH]   # fuzzy search autojump, open in terminal editor (Neovim)
    function je()   # fuzzy search autojump, open in terminal editor (Neovim)
    {
        if [[ "$#" -ne 0 ]]; then
            nvim $(autojump $@)
            return
        fi
        autojump -s | sort -k1gr | awk '$1 ~ /[0-9]:/ && $2 ~ /^\// { for (i=2; i<=NF; i++) { print $(i) } }' |  fzf --multi --height 40% --reverse --inline-info | xargs -r nvim
    }


## PATHS

Path | Description
- | -
`$HOME/Library/autojump/autojump.txt` | Database file.

## SEE

    autojump(1)
    autojump --help

## SEEALSO

    cd, fzf, fzf-tab

## SEEFURTHER

- [🌎 Repository](https://github.com/wting/autojump)
