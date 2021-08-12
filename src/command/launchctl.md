---
status: TODO
title: "launchctl"
tags: [control,manage,interface,launchd]
---

# `launchctl` (Launch Control)

## INSTALLATION


```bash
#ℹ︎ installation of `launchctl`
❯ *comes pre-installed*
```


## USECASES

----
#### To load/unload `launchd` scripts:

    ❯ launchctl load PATH
    ❯ launchctl unload PATH

## RECIPES

----
#### To load/unload `launchd` scripts:

    ❯ sudo cp FILE.plist /Library/Daemons/
    ❯ sudo launchctl load /Library/LaunchDaemons/FILE.plist
    ❯ sudo launchctl unload /Library/LaunchDaemons/FILE.plist

If `launchd` scripts are copied to `/Library/Daemons/`, they will automatically be loaded on next bootup, but for script to be in effect directly, you must manually load them, after adding them to the directory.

----
#### To enable/disable computer system crash reporting (via `ReportCrash`):


```bash
#ℹ︎ disable computer system crash reporting (via `ReportCrash`)
❯ launchctl unload -w /System/Library/LaunchAgents/com.apple.ReportCrash.plist && sudo launchctl unload -w /System/Library/LaunchDaemons/com.apple.ReportCrash.Root.plist
```



```bash
#ℹ︎ enable computer system crash reporting (via `ReportCrash`)
❯ launchctl load -w /System/Library/LaunchAgents/com.apple.ReportCrash.plist && sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.ReportCrash.Root.plist
```


----
#### To enable/disable Notification Center Service:


```bash
#ℹ︎ disable notification center service
❯ launchctl unload -w /System/Library/LaunchAgents/com.apple.notificationcenterui.plist && killall -9 NotificationCenter
```



```bash
#ℹ︎ enable notification center service
❯ launchctl load -w /System/Library/LaunchAgents/com.apple.notificationcenterui.plist
```



## NOTES

Naming format:

    com.[daily].NAME.plist

## SEE

    launchctl(1)

## SEEALSO

    launchd(8), launchd.plist(5), ReportCrash(8)

