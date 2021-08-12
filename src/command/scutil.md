---
status: INCOMPLETE
title: "scutil"
tags: [manage,system,configuration,parameters,preferences,settings]
---

# `scutil`

## INSTALLATION


```bash
#ℹ︎ installation of `scutil`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/set [local] hostname, and computer name:


```bash
#ℹ︎ get/print hostname
❯ scutil --get HostName
```

    HostName: not set


```bash
#ℹ︎ get/print local hostname
❯ scutil --get LocalHostName
```

    Mac


```bash
#ℹ︎ get/print computer name
❯ scutil --get ComputerName
```

    __Mac__


```bash
#ℹ︎ set hostname
❯ sudo scutil --set HostName HOSTNAME
```


```bash
#ℹ︎ set local hostname
❯ sudo scutil --set LocalHostName LOCALHOSTNAME
```


```bash
#ℹ︎ set computer name
❯ sudo scutil --set ComputerName COMPUTERNAME
```


----
#### To get/print network interface, proxy, and DNS configuration information:


```bash
#ℹ︎ get/print system network interfaces (IPv4, IPv6) information
❯ scutil --nwi
```

    Network information

    IPv4 network interface information
         en0 : flags      : 0x7 (IPv4,IPv6,DNS)
               address    : 192.168.8.105
               reach      : 0x00000002 (Reachable)

       REACH : flags 0x00000002 (Reachable)

    IPv6 network interface information
         en0 : flags      : 0x7 (IPv4,IPv6,DNS)
               address    : fd54:df9:3104:100:1c27:23cb:3d11:636d
               reach      : 0x00000002 (Reachable)

       REACH : flags 0x00000002 (Reachable)

    Network interfaces: en0


```bash
#ℹ︎ get/print/display current proxy configurations information
❯ scutil --proxy
```

    <dictionary> {
      ExceptionsList : <array> {
        0 : *.local
        1 : 129.114/16
      }
      FTPPassive : 1
    }


```bash
#ℹ︎ get/print/display current DNS configurations information
❯ scutil --dns
```

    DNS configuration

    resolver #1
      nameserver[0] : 8.8.8.8
      nameserver[1] : 8.8.4.4
      flags    : Request A records, Request AAAA records
      reach    : 0x00000002 (Reachable)

    resolver #2
      domain   : local
      options  : mdns
      timeout  : 5
      flags    : Request A records, Request AAAA records
      reach    : 0x00000000 (Not Reachable)
      order    : 300000

    .
    .
    .

    DNS configuration (for scoped queries)

    resolver #1
      nameserver[0] : 8.8.8.8
      nameserver[1] : 8.8.4.4
      if_index : 6 (en0)
      flags    : Scoped, Request A records, Request AAAA records
      reach    : 0x00000002 (Reachable)


## SEE

    scutil(8)

## SEEALSO

    systemsetup(8), sysctl(8), security(1), systemstats(8), system_profiler(8), hostname(1)

