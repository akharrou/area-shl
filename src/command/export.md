---
status: TODO
title: "export"
tags: [create,set,add,declare,persistant,environment,variable]
---

# `export`

## BRIEF

Set export attribute for shell variables. Marks each `NAME` for automatic export to the environment of subsequently executed commands. If `VALUE` is supplied, assign `VALUE` before exporting.

Exit Status: Returns success unless an invalid option is given or `NAME` is invalid.

    Bash

    ❯ export [-fn] [--] [NAME[=VALUE] ...]
    ❯ export -p

    Opt. | Behavior
    ---- | --------
    -f   | refer to shell functions
    -n   | remove the export property from each NAME
    -p   | display a list of all exported variables and functions

    Zsh

    ❯ export [-AEFHLRZTUafhilupmrt] [--] [NAME[=VALUE] ...]

    Opt. | Behavior
    ---- | --------
    -A   | specify that arguments refer to associative arrays
    -E   | floating point, use engineering notation on output
    -F   | floating point, use fixed point decimal on output
    -H   | hide value of parameter in listings
    -L   | left justify and remove leading blanks from value
    -R   | right justify and fill with leading blanks
    -Z   | right justify and fill with leading zeros
    -T   | tie scalar to array or trace function
    -U   | keep array values unique and suppress alias expansion for functions
    -a   | specify that arguments refer to arrays
    -f   | specify that arguments refer to functions
    -h   | hide specialness of parameter
    -i   | represent internally as an integer
    -l   | convert the value to lowercase
    -u   | convert the value to uppercase or mark function for autoloading
    -p   | output parameters in form of calls to typeset
    -m   | treat arguments as patterns
    -r   | mark parameters as readonly
    -t   | tag parameters and turn on execution tracing for functions

## INSTALLATION


```bash
#ℹ︎ installation of `export`
❯ *comes builtin*
```


## USECASES

----
#### To export variables to the environment:


```bash
#ℹ︎ create/declare/define environment variables
❯ export VAR="VAL"
```


```bash
#ℹ︎ create/declare/define readonly environment variables
❯ export -r VAR="VAL"
```



## SEE

    builtins(1)

## SEEALSO

    readonly

