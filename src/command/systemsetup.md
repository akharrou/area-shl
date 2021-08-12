---
status: INCOMPLETE
title: "systemsetup"
tags: [manage,control,get,print,display,set,macos,computer,system,settings,preferences,configuration,information]
---

# `systemsetup`

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print, or set, macOS system setting preferences:


```bash
#ℹ︎ [get|set] system setting preferences date
❯ sudo -A systemsetup -[get|set]date <mm:dd:yy>
```


```bash
#ℹ︎ [get|set] system setting preferences time
❯ sudo -A systemsetup -[get|set]time <hh:mm:ss>
```


```bash
#ℹ︎ [get|set] system setting preferences timezone
❯ sudo -A systemsetup -[get|set]timezone TIMEZONE
```


```bash
#ℹ︎ get system setting preferences list of timezones
❯ sudo -A systemsetup -listtimezones
```



```bash
#ℹ︎ [get|set] system settings preferences computer name
❯ sudo -A systemsetup -[get|set]computername NAME
```


```bash
#ℹ︎ [get|set] system settings preferences local subnet name
❯ sudo -A systemsetup -[get|set]localsubnetname NAME
```



```bash
#ℹ︎ [get|set] system settings preferences startup disk
❯ sudo -A systemsetup -[get|set]startupdisk DISK
```


```bash
#ℹ︎ get system settings preferences list of startup disk
❯ sudo -A systemsetup -liststartupdisks
```



```bash
#ℹ︎ [get|set] system settings preferences time before sleep
❯ sudo -A systemsetup -[get|set]sleep MINUTES
```


```bash
#ℹ︎ [get|set] system settings preferences time before computer sleep
❯ sudo -A systemsetup -[get|set]computersleep MINUTES
```


```bash
#ℹ︎ [get|set] system settings preferences time before display sleep
❯ sudo -A systemsetup -[get|set]displaysleep MINUTES
```


```bash
#ℹ︎ [get|set] system settings preferences time before harddisk sleep
❯ sudo -A systemsetup -[get|set]harddisksleep MINUTES
```



## NOTES

Other availabe settings:

    # supported
    systemsetup -[get|set]usingnetworktime <on|off>
    systemsetup -[get|set]networktimeserver <timeserver>
    systemsetup -[get|set]remoteappleevents <on|off>
    systemsetup -[get|set]remotelogin <on|off>
    systemsetup -[get|set]restartfreeze <on|off>
    systemsetup -[get|set]waitforstartupafterpowerfailure <seconds>
    systemsetup -[get|set]disablekeyboardwhenenclosurelockisengaged <yes|no>
    systemsetup -[get|set]kernelbootarchitecturesetting <i386|x86_64|default>

    # unsupported
    systemsetup -[get|set]wakeonmodem <on|off>
    systemsetup -[get|set]wakeonnetworkaccess <on|off>
    systemsetup -[get|set]allowpowerbuttontosleepcomputer <on|off>
    systemsetup -[get|set]restartpowerfailure <on|off>

## SEE

    systemsetup(8)

## SEEALSO

    sysctl(8), security, systemstats, system_profiler(8), sw_vers

