---
status: DONE
title: "unset"
tags: [unset,remove,delete,environment,variable,function,declarations,names]
---

# `unset`

## BRIEF

Unset values and attributes of shell variables and functions. For each `NAME`, remove the corresponding variable or function (from the shell environment).

Without options, `unset` first tries to unset a variable, and if that fails, tries to unset a function. Some variables cannot be unset; also see `readonly`.

Exit Status: returns success unless an invalid option is given or a `NAME` is read-only.

    Bash & Zsh

    ❯ unset [-f] [-v] [-n] [NAME ...]

    Opt.  |  Behavior
    ----  |  ---------
    -f    |  treat each `NAME` as shell function
    -v    |  treat each `NAME` as shell variable
    -n    |  treat each `NAME` as named reference, unset variable itself

## INSTALLATION


```bash
#ℹ︎ installation of `unset`
❯ *comes builtin*
```


## USECASES

----
#### To unset shell environment objects (functions, variables):


```bash
#ℹ︎ unset shell environment function
❯ unset -f FUNCTION
```


```bash
#ℹ︎ unset shell environment variable
❯ unset -v VARIABLE
```


```bash
#ℹ︎ unset shell environment named reference
❯ unset -n VARIABLE
```



## SEEALSO

    set, declare

