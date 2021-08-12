---
status: INCOMPLETE
title: "stat"
tags: [get,print,display,files,folders,status,information]
---

# `stat`

## INSTALLATION


```bash
#ℹ︎ installation of `stat`
❯ *comes pre-installed*
```


## USECASES

----
#### Display information in a more verbose way as known from some Linux distributions.


```bash
#ℹ︎ get/print/display verbose, human readable, file/folder status information
❯ stat -x FILE
```

      File: "file.txt"
      Size: 116453       FileType: Regular File
    Mode: (0644/-rw-r--r--)         Uid: (  501/johndoe)  Gid: (   20/   staff)
    Device: 1,5   Inode: 29080997    Links: 1
    Access: Thu Feb 18 10:10:31 2021
    Modify: Thu Feb 18 10:10:29 2021
    Change: Thu Feb 18 10:10:29 2021

----
#### To get/print/display file access, modified, change, birth (creation) datetimes:


```bash
#ℹ︎ get/print/display file birth/creation datetime as timestamp
❯ stat -f %B file
```

    1597716191


```bash
#ℹ︎ get/print/display file birth/creation datetime as human readable format
❯ stat -f %SB file
```

    Aug 18 05:03:11 2020


```bash
#ℹ︎ get/print/display formatted access, modified, change, birth/creation datetimes of file/directory
❯ stat -f "Access (atime): %Sa%nModify (mtime): %Sm%nChange (ctime): %Sc%nBirth  (Btime): %SB" FILE 
```

    Access (atime): Feb 17 10:59:32 2021
    Modify (mtime): Jan 24 14:21:40 2021
    Change (ctime): Feb 17 10:59:30 2021
    Birth  (Btime): Jan 15 23:04:32 2021

## RECIPES

----
#### Miscellaneous:


```bash
#ℹ︎ check/test file access/modification/change/birth datetime
❯ (( `/usr/bin/stat -f "%m%n" FILE` < `date -v-1d +%s` )) && echo "Older than 1 day"
```



## ALIASES

    alias stat="stat -x"
    alias adate="\stat -f '%Sa'"
    alias mdate="\stat -f '%Sm'"
    alias cdate="\stat -f '%Sc'"
    alias bdate="\stat -f '%SB'"


## SEE

    stat(1)

## SEEALSO

    mdls(1)

