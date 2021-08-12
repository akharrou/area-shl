---
status: DONE
title: "mkdir"
tags: [make,create,new,directories,folders]
---

# `mkdir`

## INSTALLATION


```bash
#ℹ︎ installation of `mkdir`
❯ *comes pre-installed*
```


## USECASES

----
#### To create directories (folders):


```bash
#ℹ︎ create full path, with intermediate directories
❯ mkdir DIRNAME
```



```bash
#ℹ︎ (non-POSIX); create full path, with intermediate directories
❯ mkdir -p PATH
```



```bash
#ℹ︎ create full path, with permissions mode
❯ mkdir -m 0700 -p PATH
```

    total 0
    drwxr-xr-x  3 johndoe  staff  96 Jun 28 23:51 interm

    ./interm:
    total 0
    drwxr-xr-x  3 johndoe  staff  96 Jun 28 23:51 path

    ./interm/path:
    total 0
    drwxr-xr-x  3 johndoe  staff  96 Jun 28 23:51 to

    ./interm/path/to:
    total 0
    drwx------  2 johndoe  staff  64 Jun 28 23:51 dir

    ./interm/path/to/dir:


## ALIASES

    alias mkdir="mkdir -p"   # create entire path

## PROCEDURES

    # ❯ mkcd PATH   # recursively create, and move into, folder
    function mkcd()   # recursively create, and move into, folder
    {
        mkdir -p "$@" && cd "$_";
    }


## SEE

    mkdir(1)

## SEEALSO

    mkfile(8), mktemp(1), mkfifo(1), rmdir(1), rm(1), cp(1)

