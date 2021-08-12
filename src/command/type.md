---
status: INCOMPLETE
title: "type"
tags: [describe,check,command,program,function,alias,existance,type,defintion]
---

# `type`

## BRIEF

    ❯ type [-afptP] WORD ...

For each `WORD`, indicate how it would be interpreted if used as a command name.

    Bash

    Opt. Behavior
    ----  ------------------------------------------------------------------
    -a    lists all places containing COMMAND regardless of type
    -f    suppresses shell function lookup
    -t    print command type (alias|keyword|function|builtin|file|)
    -p    searches-for and returns absolute disk file path, if a command is found, else nothing
    -P    forces search, regardless of type, returns would-be executed disk file

    Zsh

    Opt.  Behavior
    ----  ------------------------------------------------------------------
    -w    print "COMMAND: TYPE" (alias|keyword|function|builtin|file|none)
    -p    returns "COMMAND is PATH" or "COMMAND not found"
    -f    output contents of functions
    -a    lists all places containing COMMAND regardless of type
    -s    print symlink free path as well
    -S    show steps in the resolution of symlinks
    -m    treat the arguments as patterns

## INSTALLATION


```bash
#ℹ︎ installation of `type`
❯ *comes builtin*
```


## USECASES

----
#### To get/print/display information about a shell command/word:


```bash
#ℹ︎ get/print/check/describe command/word type
❯ type WORD
```


```bash
#ℹ︎ check all available location paths for an executable
❯ type -a PROGRAM
```



## SEE

    builtin(1)

## SEEALSO

    command, which(1)

