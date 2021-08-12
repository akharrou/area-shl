---
status: INCOMPLETE
title: "command"
tags: [execute,run,evaluate,command,program]
---

# `command`

## BRIEF

    ❯ command [-pVv] command [arg ...]

Runs `COMMAND` with `ARGS` ignoring shell functions. If you have a shell function called `ls`, and you wish to call the command `ls`, you can say `command ls`. If the `-p` option is given, a default value is used for `PATH` that is guaranteed to find all of the standard utilities.

    -p     use default PATH to find command
    -v     indicate result of command search
    -V     show result of command search in verbose form

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes builtin*
```


## USECASES

----
#### To run a command, with arguments, ignoring shell functions with the same name:


```bash
#ℹ︎ run command, ignoring shell functions with same name
❯ command env
```


This is useful when defining a function whose name is the same as a shell command, retaining the functionality of the command within the function.

----
#### To get/print/check/test command:

    ❯ command -v gl
    gl
    ❯ command -V gl
    gl is a shell function from /Users/johndoe/.config/shell/git

    ❯ command -v brewi
    alias brewi="brew install"
    ❯ command -V brewi
    brewi is an alias for brew install

    ❯ command -v =env
    /usr/bin/env
    ❯ command -V =env
    /usr/bin/env is /usr/bin/env


## SEE

    command(1)

## SEEALSO

    builtin, env(1), which, eval, exec

