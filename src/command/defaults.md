---
status: INCOMPLETE
title: "defaults"
tags: [access,get,print,edit,modify,change,macOS,system,user,defaults,settings,preferences]
---

# `defaults`

## INSTALLATION


```bash
#ℹ︎ installation of `defaults`
❯ *comes pre-installed*
```


## USECASES

----
#### To access/get/print/display default user configuration/setting preferences:


```bash
#ℹ︎ get/print/display all user default configuration/settings preferences
❯ defaults read
```



```bash
#ℹ︎ get/print/display single specified user default configuration/settings preferences
❯ defaults read DOMAIN
```


----
#### To write/set/change/modify default user configuration/setting preferences:


```bash
#ℹ︎ write/set/change/modify default user configuration/setting preferences
❯ write DOMAIN KEY ’VALUE’
```


    ❯ write DOMAIN ’PLIST’

## RECIPIES

----
#### Miscellaneous commands:


```bash
#ℹ︎ set/change/modify login window text
❯ sudo defaults write /Library/Preferences/com.apple.loginwindow LoginwindowText "Your text"
```


    # E.g.: Thu 18 Aug 11:46:18 pm

```bash
#ℹ︎ set/change/modify menu bar clock output format
❯ sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE d MMM h:mm:ss a" && sudo killall SystemUIServer
```



## SEE

    defaults(1)

## SEEALSO

    systemsetup(8), sysctl(8), security(1)

