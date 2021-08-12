---
status: DONE
title: "alias"
tags: [manage,manipulate,control,set,add,create,unset,remove,delete,get,print,display,shell,aliases]
---

# `alias` & `unalias`

## BRIEF

Manage shell aliases.

## SYNTAX

    ❯ alias -r {NAME[,...]}="VALUE"   # set/define regular shell aliases
    ❯ alias -s {SUFFIX[,...]}="VALUE"   # set/define suffix shell aliases
    ❯ alias -g {NAME[,...]}="VALUE"   # set/define global shell aliases
    ❯ alias [-rsg] [-L] [-m GLOBPAT]   # get/print list of defined aliases
    ❯ unalias [-s] {NAME[,...]}   # unalias defined aliases

## INSTALLATION


```bash
#ℹ︎ installation of `alias`
❯ *comes builtin*
```


## USECASES

----
#### To set/unset shell aliases:


```bash
#ℹ︎ set/define regular shell aliases
❯ alias [-r] v="nvim" && echo v && v /etc/hosts
```

    *opens `/etc/hosts` in nvim*


```bash
#ℹ︎ set/define global shell aliases
❯ alias -g hlw="\"hello world\"" && echo hlw && hlw
```

    hello world
    zsh: command not found: hello world


```bash
#ℹ︎ set/define suffix shell aliases
❯ alias -s conf="nvim" && /etc/sudo.conf
```

    *opens `/etc/sudo.conf` in `nvim`*


```bash
#ℹ︎ unset/disable/remove/delete single regular shell aliases
❯ unalias NAME
```


```bash
#ℹ︎ unset/disable/remove/delete single suffix shell aliases
❯ unalias -s NAME
```


You cannot unset global aliases, since everytime you write the character sequence name of the global aliases, it will be substituted.

----
#### To get/print list of all defined shell regular, suffix, or global, aliases:


```bash
#ℹ︎ get/print list of all suffix shell aliases, definition form
❯ alias -Ls
```


```bash
#ℹ︎ get/print list of all global shell aliases, definition form
❯ alias -Lg
```


```bash
#ℹ︎ get/print list of all regular shell aliases, definition form
❯ alias -Lr
```

    alias gstc="git stash clear"
    alias gstl="git stash list"
    .
    .
    .


```bash
#ℹ︎ find/get/print list of all regular shell aliases, in the form of alias definitions, that match the specified (glob) pattern
❯ alias -r -Lm "\?*"
```

    alias gstc="git stash clear"
    alias gstl="git stash list"
    .
    .
    .


## PROCEDURES

    # ❯ alias   # fuzzy search set shell aliases
    function alies()   # fuzzy search set shell aliases
    {
        if [[ $# -ne 0 ]]; then
            alias \
            | fzf \
                --multi \
                --query "$1" \
                --preview="cat {+f} | sed G" \
                --preview-window="50%:right:follow:hidden:wrap"
            return
        fi
        alias \
        | fzf \
            --multi \
            --preview="cat {+f} | sed G" \
            --preview-window="50%:right:follow:hidden:wrap"
    }


## NOTES

### Regular Aliases

    ❯ alias v=nvim

    Substitutes "v" for "nvim" when typed in place of a command.

### Suffix Aliases

    ❯ alias -s conf=nvim
    ❯ alias -s {md,rmd}="code"

    When you type the name of files that end in "md" or "rmd", and press enter, it will preceed the file name with your alias, in this case open the file in Vscode.

### Command/Function Aliases

    ❯ function saywords() {
        echo $1 $2 ${@:2}
        echo done
    }
    ❯ saywords hello world this is john doe
    hello world this is john doe

    These aliases can take arguments on the command line. Unlike other aliases, they can span more than one line.

### Global Aliases (`zsh` Only)

    ❯ alias -g hlw="\"hello world\""

    This is an aggressive version of regular aliases; it performs aggressive substitution, i.e on every occurrence regardless of placement.

    When you type the character sequence "hi" anywhere on the command prompt, it will substitute it with your global alias. This can break things easily, e.g.: if you made a global "o" alias, then every occurrence of "o", even in the middle of a word, will be replaced by your global alias.

## SEE

    alias(1)
    zshbuiltins(1)

## SEEALSO

    declare, bindkey

