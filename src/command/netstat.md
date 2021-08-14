---
status: TODO
title: "netstat"
tags: [show,print,network,status]
---

# `netstat`

## BRIEF

Displays network information

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To manage network:


```bash
#ℹ︎ get/print/list system internet protocols
❯ cat /etc/protocols | fzf
```


```bash
#ℹ︎ get/print/list system network databases
❯ cat /etc/networks | fzf
```



## NOTES

See `netintro(4)`.

## PATHS

Path | Description
- | -
`/etc/protocols` | internet protocols
`/etc/networks` | networks database

## SEE

    netstat(1)

## SEEALSO

    ifconfig(8), ipconfig(8), traceroute(8), route(8), ping(8), iostat(8), nfstat, nettop, netintro(4)

