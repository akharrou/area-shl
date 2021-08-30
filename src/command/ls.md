---
status: TODO
title: "ls"
tags: [get,print,display,list,folders,directories,files,information]
---

# `ls`

## INSTALLATION


```bash
#ℹ︎ installation of `ls`
❯ *comes pre-installed*
```


## USECASES

----
#### To list folder/directory contents:


```bash
#ℹ︎ list plain files/directories
❯ ls
```

    ❯ ls -a  # list hidden files/directories
    ❯ ls -l  # list  files/directories, with information, in long format


## VARIABLES

    export CLICOLOR=true
    export LSCOLORS="exbxcxdxbxegedabagacad"

## ALIASES

    alias l='ls -lah'
    alias ll='ls -lh'
    alias la='ls -lAh'
    alias lsa='ls -lah'


## NOTES

`ls` color formatting:

    f = foreground
    b = background
    Format: fb[fb[...]]
    Example: "exfxcxdxbxegedabagacad" (default)

    1.   directory
    2.   symbolic link
    3.   socket
    4.   pipe
    5.   executable
    6.   block special
    7.   character special
    8.   executable with setuid bit set
    9.   executable with setgid bit set
    10.  directory writable to others, with sticky bit
    11.  directory writable to others, without sticky bit

    a     black
    b     red
    c     green
    d     brown
    e     blue
    f     magenta
    g     cyan
    h     light grey
    A     bold black, usually shows up as dark grey
    B     bold red
    C     bold green
    D     bold brown, usually shows up as yellow
    E     bold blue
    F     bold magenta
    G     bold cyan
    H     bold light grey; looks like bright white
    x     default foreground or background

## ENVIRONMENT

Variable | Description
- | -
`$CLICOLOR`| Enables colored output, sets `-G` option.`$LS_COLORS`| Specifies the colour scheme used to highlight files, based off of 8-16 colors defined for your terminal.

## SEE

    ls(1)

## SEEALSO

    exa, find, fd

