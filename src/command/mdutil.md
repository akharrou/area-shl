---
status: INCOMPLETE
title: "mdutil"
tags: [manage,spotlight,metadata,stores]
---

# `mdutil`

## BRIEF

Manages metadata stores used by MacOS’s Spotlight.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To manage spotlight search index:


```bash
#ℹ︎ disable spotlight indexing/search, for specified path location
❯ mdutil -i off -d /path/to/volume
```



```bash
#ℹ︎ enable spotlight indexing/search, for specified path location
❯ mdutil -i on /path/to/volume
```



```bash
#ℹ︎ erase and rebuild spotlight search index
❯ mdutil -E /path/to/volume
```



## SEE

    mdutil(1)

## SEEALSO

    mdls(1), mdfind(1), mdimport(1), mds(8)

