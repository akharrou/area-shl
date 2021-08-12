---
status: TODO
title: less
tags: [get,print,display,view,preview,output,screen,scrolling,pager,files,listing]
---

# `less`

## BRIEF

`less` is a free, open-source file pager. It can be found on most versions of Linux, Unix and Mac OS, as well as on many other operating systems.

## INSTALLATION


```bash
#ℹ︎ installation of `less`
❯ *comes pre-installed*
```


```bash
#ℹ︎ installation of `less`
❯ brew install less
```



## VARIABLES

    export LESSHISTFILE="$CACHE/less/history"   # `-` to remove it
    export LESS="-R"   # case-sensitive, raw control characters (^A)

## ALIASES

    alias less="less -N"   # show line numbers


## NOTES

`less` accepts POSIX Extended Regular Expression (ERE) patterns.

## ENVIRONMENT

Variable | Description
- | -
`$LESS`| `less` command default options
`$LESSHISTFILE`| `less` command search history file

## SEE

    less(1)

## SEEALSO

    bat(1), more(1), nl(1), pr(1), cat(1), hexdump(1)

## SEEFURTHER

- [🌎 Home](https://www.greenwoodsoftware.com/less/index.html)
