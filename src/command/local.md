---
status: TODO
title: "local"
tags: []
---

# `local`

## BRIEF

    ❯ local NAME[=VALUE] ...

Create a local variable called `NAME`, and give it `VALUE`. `local` can only be used within a function; it makes the variable `NAME` have a visible scope restricted to that function and its children.

### `zsh`

| Option | Description                                                         |
| ------ | ------------------------------------------------------------------- |
| **Variable Attributes** ||
| `-r`   | mark parameters as readonly                                         |
| **Integers & Floats** ||
| `-i`   | represent internally as an integer                                  |
| `-F`   | floating point, use fixed point decimal on output                   |
| `-E`   | floating point, use engineering notation on output                  |
| **Arrays** ||
| `-a`   | specify that arguments refer to arrays                              |
| `-A`   | specify that arguments refer to associative arrays                  |
| `-U`   | keep array values unique and suppress alias expansion for functions |
| **Strings** ||
| `-l`   | convert the value to lowercase                                      |
| `-u`   | convert the value to uppercase OR mark function for autoloading     |
| `-L`   | left justify and remove leading blanks from value                   |
| `-R`   | right justify and fill with leading blanks                          |
| `-Z`   | right justify and fill with leading zeros                           |
| **Other** ||
| `-H`   | hide value of parameter in listings                                 |
| `-T`   | tie scalar to array or trace function                               |
| `-h`   | hide specialness of parameter                                       |
| `-p`   | output parameters in form of calls to typeset                       |
| `-t`   | tag parameters and turn on execution tracing for functions          |
| `-m`   | treat arguments as patterns                                         |

## INSTALLATION


```bash
#ℹ︎ installation of `local`
❯ *comes builtin*
```


## USECASES

----
#### To declare/define locally scope variables:


```bash
#ℹ︎ declare/define readonly locally scoped variable
❯ local -r VARNAME=VALUE
```



```bash
#ℹ︎ declare/define locally scoped integer variable
❯ local -i VARNAME=INTVAL
```


```bash
#ℹ︎ declare/define locally scoped integer variable
❯ local -F VARNAME=FLTVAL
```


```bash
#ℹ︎ declare/define locally scoped array variable
❯ local -a VARNAME=(VALUES)
```



## NOTES

`local` may only be used within function definitions.

## SEE

    builtins(1)

## SEEALSO

    readonly

