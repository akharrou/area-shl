---
status: TODO
title: "ifconfig"
tags: [edit,modify,change,configure,network,interface,parameters]
---

# `ifconfig`

## INSTALLATION


```bash
#ℹ︎ installation of `ifconfig`
❯ *comes pre-installed*
```


## USECASES

----
#### To

    ❯


## ALIASES

    # Show active network interfaces
    alias ifactive="ifconfig | pcregrep -M -o '^[^\t:]+:([^\n]|\n\t)*status: active'"


## NOTES

See `netintro(4)`.

## SEE

    ifconfig(1)

## SEEALSO

    ipconfig(8), netstat, sysctl(8), system_profiler(8)

