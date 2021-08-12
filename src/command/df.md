---
status: TODO
title: "df"
tags: [get,print,list,display,show,free,filesystem,disk,space,statistics,information]
---

# `df`

## INSTALLATION


```bash
#ℹ︎ installation of `df`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print/list/display/show free disk space statistics information:


```bash
#ℹ︎ get/print/list/display/show free filesystem/drive disk space statistics information
❯ df -H
```

    Filesystem       Size   Used  Avail Capacity ... Mounted on
    /dev/disk1s1s1   1.0T    15G   639G     3%   ... /
    devfs            198k   198k     0B   100%   ... /dev
    /dev/disk1s5     1.0T   5.4G   639G     1%   ... /System/Volumes/VM
    /dev/disk1s3     1.0T   430M   639G     1%   ... /System/Volumes/Preboot
    /dev/disk1s6     1.0T   2.9M   639G     1%   ... /System/Volumes/Update
    /dev/disk1s2     1.0T   340G   639G    35%   ... /System/Volumes/Data
    map auto_home      0B     0B     0B   100%   ... /System/Volumes/Data/home
    /dev/disk2s1     1.0T   137G   863G    14%   ... /Volumes/__HDD__


## ENVIRONMENT

Variable | Description
- | -

    ＄BLOCKSIZE
       ???

## SEE

    df(1)

## SEEALSO

    du(1)

