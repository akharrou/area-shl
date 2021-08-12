---
status: INCOMPLETE
title: "umask"
tags: [get,set,file,directory,creation,permissions,classes,mask]
---

# `umask`

## BRIEF

    ❯ umask [-p] [-S] [mode]

The user file-creation mask is set to `mode`. If `mode` begins with a digit, it is interpreted as an octal number; otherwise it is interpreted as a symbolic mode mask similar to that accepted by `chmod(1)`. If `mode` is omitted, the current value of the mask is printed.

    -S
        print mask in symbolic form; the default output is an octal number

    -p
        output is in a form that may be reused as input. The return status is `0` if the `mode` was successfully changed or if no `mode` argument was supplied, and false otherwise.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes builtin*
```


## USECASES

----
#### To get/print user file-creation permission classes mask:


```bash
#ℹ︎ get/print user file-creation permission classes mask, as octal notation number
❯ umask
```


```bash
#ℹ︎ get/print user file-creation permission classes mask, as symbolic mode characters
❯ umask -S
```


----
#### To set user file-creation permission classes mask:


```bash
#ℹ︎ set/modify user file-creation permission classes mask, as octal notation number
❯ umask 0077
```


```bash
#ℹ︎ set/modify user file-creation permission classes mask, as symbolic mode characters
❯ umask u=rwx,g=,o=x
```



## NOTES

### Understand

When creating a file the system applies the `umask` to the default permissions of `666` (directories) and `777` (files) to obtain the mode that each is assigned by default. To calculate the permission bits for a new directory or file, we just subtract the `umask` value from the default value:

    ❯ umask 022   # OR: umask u=rwx,g=w,o=w

    666 - 022 = 644 = rw-r--r--
    777 - 022 = 755 = rw-r-xr-x

Some helpful tables:

    Number Symbol Permission
    ------ ------ ----------
    4      r      read
    2      w      write
    1      x      execute

    Read  Write  Execute  Total Value  Symbolic Equivalent
    ----  -----  -------  -----------  -------------------
    0     0      0        0            ---
    0     0      1        1            --x
    0     2      0        2            -w-
    0     2      1        3            -wx
    4     0      0        4            r--
    4     0      1        5            r-x
    4     2      0        6            rw-
    4     2      1        7            rwx

    Mask value   Symbolic result  Permissions result
    -----------  ---------------  -----------------------
    0            rwx              read, write and execute
    1            rw-              read and write
    2            r-x              read and execute
    3            r--              read only
    4            -wx              write and execute
    5            -w-              write only
    6            --x              execute only
    7            ---              no permissions

## PATHS

Path | Description
- | -
📂 `/etc/profile` | system wide `umask` configuration location

## SEE

    builtins(1)

## SEEALSO

    chmod(1), chown(8), chflags(1), ls(1)

