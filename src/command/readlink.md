---
status: INCOMPLETE
title: "readlink"
tags: [symbolic,full,path,name,files]
---

# `readlink`

## BRIEF

Prints value of a symbolic link or canonical file name (i.e its full path).

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


```bash
#ℹ︎ installation of GNU extension: `greadlink`
❯ brew install coreutils
```


## USECASES

----
#### To get canonical name of [symbolic] file, i.e its full absolute path name:


```bash
#ℹ︎ get [symbolic link] file’s relative full path name
❯ readlink FILE
```


```bash
#ℹ︎ get [symbolic link] file’s canonical name, i.e absolute full path name
❯ greadlink -f FILE
```



## SEE

    readlink(1)
    greadlink(1)

## SEEALSO

    which, stat, file

