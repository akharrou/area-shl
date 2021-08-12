---
status: TODO
title: "networksetup"
tags: [set,get,configure,system,network,preferences,settings,configurations]
---

# `networksetup`

## INSTALLATION


```bash
#ℹ︎ installation of `networksetup`
❯ *comes pre-installed*
```


## USECASES

----
#### To


```bash
#ℹ︎ set static internet protocol address (IP)
❯ networksetup -setmanual "Ethernet" 192.168.2.100 255.255.255.0 192.168.2.1
```



```bash
#ℹ︎ set/join wifi network
❯ networksetup -setairportnetwork en0 "WIFISSID" `cat <(security find-generic-password -l "WIFISSID" -w)`
```



```bash
#ℹ︎ turn on wifi adapter
❯ networksetup -setairportpower en0 on
```


## RECIPES

----
#### To find and join a network:

    ❯ airport --scan
    ❯ networksetup -setairportnetwork en0 WIFISSID WIFIPASSWORD


## SEE

    networksetup(1)

## SEEALSO

    netstat(1)

