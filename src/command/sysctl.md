---
status: TODO
title: "sysctl"
tags: [manage,control,get,set,system,kernel,state,information]
---

# `sysctl` (System Control)

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To get, and print, specified, or all, system kernel state information values:


```bash
#ℹ︎ get system kernel state information name with value
❯ sysctl MODULE.STATE
```



```bash
#ℹ︎ get system kernel state information value only
❯ sysctl -n MODULE.STATE
```



```bash
#ℹ︎ list all available system kernel information values
❯ sysctl -a
```



```bash
#ℹ︎ regex search system kernel information values
❯ sysctl -a | rg -o "REGEX"
```



```bash
#ℹ︎ fuzzy search system kernel information values
❯ sysctl -a | fzf
```



```bash
#ℹ︎ get CPU brand name string
❯ sysctl -n machdep.cpu.brand_string
```



```bash
#ℹ︎ get concrete CPU cores count
❯ sysctl -n machdep.cpu.core_count
```



```bash
#ℹ︎ get abstract CPU cores count
❯ sysctl -n hw.ncpu
```


----
#### To set/write-to specified system kernel state information:


```bash
#ℹ︎ set/write-to specified system kernel state information
❯ sysctl -w MODULE.STATE VALUE
```



## PATHS

Path | Description
- | -
📂 `/etc/sysctl.conf` | Kernel state defaults.

## SEE

    sysctl(8)

## SEEALSO

    ps(1), netstat(1)

