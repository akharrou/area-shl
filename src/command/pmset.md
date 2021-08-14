---
status: INCOMPLETE
title: "pmset"
tags: [manipulate,power,battery,management,preferences,settings]
---

# `pmset`

## INSTALLATION


```bash
#ℹ︎ installation of `pmset`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/set power management settings:


```bash
#ℹ︎ get/print battery level/state and information
❯ pmset -g batt
```



```bash
#ℹ︎ set display to sleep after specified minutes of inactivity
❯ pmset displaysleep 15
```



```bash
#ℹ︎ set computer to sleep after specified minutes of inactivity
❯ pmset sleep 30
```



```bash
#ℹ︎ schedule automatic system wake-from-sleep (on July 4, 2030, at 8PM)
❯ pmset schedule wake "07/04/30 20:00:00"
```


## RECIPES

----
#### To


```bash
#ℹ︎ get/print current battery level/state, as percentage
❯ pmset -g batt | grep -oE --color=none "([0-9]+\%)"
```



## PATHS

Path | Description
- | -
`/Library/Preferences/SystemConfiguration/com.apple.PowerManagement.plist` | Per-system (not per-user) persistent preferences file containing changes made through `pmset`.
`/Library/Preferences/SystemConfiguration/com.apple.AutoWake.plist` | Per-system (not per-user) persistent preferences file containing scheduled power on/off events.

## SEE

    pmset(1)

## SEEALSO

    sysctl(8), system_profiler(8)

