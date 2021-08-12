---
status: TODO
title: "dscacheutil"
tags: [gather,statistics,information,initiate,query,queries,directory,service,DNS,cache]
---

# `dscacheutil` (Directory Service Cache Utility)

## INSTALLATION


```bash
#ℹ︎ installation of `dscacheutil`
❯ *comes pre-installed*
```


## USECASES

----
#### To


```bash
#ℹ︎ clear DNS cache
❯ sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder
```



## NOTES

`dscacheutil` replaces most of the functionality of the `lookupd` tool provided prior to OS X Leopard.

## SEE

    dscacheutil(1)

## SEEALSO

    ipconfig(8), ifconfig(8), scutil(8)

