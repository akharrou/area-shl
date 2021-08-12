---
status: INCOMPLETE
title: "ping"
tags: [check,test,hosts,network,connection,send,icmp,echo_request,ping,packets]
---

# `ping`

## BRIEF

Send ICMP ECHO_REQUEST packets to network hosts.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To ping hosts:


```bash
#ℹ︎ ping specified host server
❯ ping HOST
```


```bash
#ℹ︎ ping Google’s DNS
❯ ping 8.8.8.8
```


```bash
#ℹ︎ ping Cloudflare’s DNS
❯ ping 1.1.1.1
```



## NOTES

See `traceroute` for hosts available to be pinged.

## SEE

    ping(8)
    ping6(8)

## SEEALSO

    route(8), traceroute(8), netstat(1)

