---
status: DONE
title: "enable"
tags: [enable,disable,set,unset,shell,builtins,commands]
---

# `enable` & `disable`

## SYNTAX

    ❯ enable [-a] [-dnps] [-f FILENAME] [NAME ...]
    ❯ disable [-a] [-dnps] [-f FILENAME] [NAME ...]

## BRIEF

### Bash

    Enables/disables builtin shell commands. Disabling allows you to execute a disk command which has the same name as a shell builtin without using a full pathname.

    Option  Behavior
    ------  ---------------------------------------------------------------
            list enabled/disbaled builitns, or enable/disbale each NAME (builtin)
    -a      list enabled builtins; or check each NAME if enabled
    -n      list disabled builtins, or disable each NAME or display
    -p      print the list of builtins in a reusable format
    -s      print only the names of Posix `special` builtins
    -f      Load builtin NAME from shared object FILENAME
    -d      Remove a builtin loaded with -f

### Zsh

    Enables/disables shell reserved words, aliases, functions. Disabling allows you to execute a disk command which has the same name as a shell builtin without using a full pathname.

    Option  Behavior
    ------  --------------------------------
            list enabled/disbaled builitns, or enable/disbale each NAME (builtin)
    -r      enable/disable reserved words
    -f      enable/disable functions
    -s      enable/disable suffix aliases
    -a      enable/disable regular or global aliases
    -p      enable/disable pattern characters
    -m      treat arguments as patterns

## INSTALLATION


```bash
#ℹ︎ installation of `enable`
❯ *comes builtin*
```


```bash
#ℹ︎ installation of `disable`
❯ *comes builtin*
```


## USECASES

----
#### To manage enabling, and disabling of builtin commands in Bash:


```bash
#ℹ︎ (BASH); get/print/show/list enabled/disbaled builtins
❯ enable
```


```bash
#ℹ︎ (BASH); get/print/show/list Posix special builtins
❯ enable -s
```


```bash
#ℹ︎ (BASH); check/test that builtins are enabled/disbaled
❯ enable -a test enable type
```


```bash
#ℹ︎ (BASH); disable shell builtins, use diskfile found in `$PATH` instead
❯ enable -n test
```


----
#### To manage enabling, and disabling of reserved words, builtin commands, aliases, and functions in Zsh:


```bash
#ℹ︎ (ZSH); check/test that builtins are enabled/disbaled
❯ enable | grep test
```



```bash
#ℹ︎ (ZSH); enable/disable/set/unset/remove shell reserved keyword
❯ disable -r while
```


```bash
#ℹ︎ (ZSH); enable/disable/set/unset/remove shell function
❯ disable -f pipl
```


```bash
#ℹ︎ (ZSH); enable/disable/set/unset/remove shell alias
❯ disable -a lll
```


```bash
#ℹ︎ (ZSH); enable/disable/set/unset/remove shell suffix alias
❯ disable -s rmd
```



## SEEALSO

    alias, unalias, set, unset, rm(1)

