---
status: DONE
title: "literal-period ()"
tags: [run,execute,source,file]
---

# Literal period (`.`)

## BRIEF

    ❯ . FILENAME [ARG ...]

Read and execute commands from the `FILENAME` file, in the current shell context. If `FILENAME` does not contain a slash, the `$PATH` variable is used to find `FILENAME`, else the specified path is searched.

If `FILENAME` is not found, or cannot be read, the return status is non-zero.

## INSTALLATION


```bash
#ℹ︎ installation of literal period (`.`)
❯ *comes builtin*
```


## USECASES

----
#### To source/execute file:


```bash
#ℹ︎ run/execute/source file
❯ . file.sh
```


```bash
#ℹ︎ run/execute/source file
❯ [[ -r $HOME/.bashrc ]] && . $HOME/.bashrc
```



## NOTES

This builtin is equivalent to the `source` builtin command.

## SEE

    builtins(1)

## SEEALSO

    source, literal-colon, literal-ampersand

