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
#### To check/list open internet or Unix domain sockets:


```bash
#ℹ︎ get/print/display/check open/listening ports in use
❯ netstat -nat | grep LISTEN
```


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
`/etc/services` | Network services.
`/etc/protocols` | Internet protocols.
`/etc/networks` | Networks database.

## SEE

    netstat(1)

## SEEALSO

    ifconfig(8), ipconfig(8), traceroute(8), route(8), ping(8), iostat(8), nfstat, nettop, netintro(4), lsof(1), nmap(1)

