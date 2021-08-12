---
status: INCOMPLETE
title: "exec"
tags: [execute,run,executable,file,replace,substitute,current,shell,program]
---

# `exec`

## BRIEF

    ❯ exec [-cl] [-a NAME] [COMMAND [ARGUMENT ...]] [REDIRECTION ...]

Execute COMMAND, replacing this shell with the specified program. ARGUMENTS become the arguments to COMMAND. If COMMAND is not specified, any redirections take effect in the current shell

    -l
        if supplied as first argument, then place a dash in the zero’th `ARG` passed to `FILE`, as `login` does

    -c
        execute `FILE` with a null environment

    -a
        Set `argv[0]` of the executed process to `NAME`

If the `FILE` cannot be executed and the shell is not interactive, then the shell exits, unless the shell option `execfail` is set.

Exit Status: Returns success unless COMMAND is not found or a redirection error occurs.

## INSTALLATION


```bash
#ℹ︎ installation of `exec`
❯ *comes builtin*
```


## USECASES

----
#### To execute/run executable and replace substitute

    ❯ exec "/bin/echo" hi

```bash
#ℹ︎ reload active login shell
❯ exec ${SHELL} -l
```



## SEE

    builtins(1)

## SEEALSO

    eval, command

