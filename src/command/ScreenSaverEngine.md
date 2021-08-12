---
status: TODO
title: "ScreenSaverEngine"
tags: [screen,saver,application]
---

# `ScreenSaverEngine`

## INSTALLATION


```bash
#ℹ︎ installation of `ScreenSaverEngine`
❯ *comes pre-installed*
```


## USECASES

----
#### To configure screen saver:


```bash
#ℹ︎ status
❯ defaults read com.apple.screensaver askForPasswordDelay
```



```bash
#ℹ︎ enable (default)
❯ defaults write com.apple.screensaver askForPasswordDelay -int 0
```



```bash
#ℹ︎ disable (integer = lock delay in seconds)
❯ defaults write com.apple.screensaver askForPasswordDelay -int 10
```



```bash
#ℹ︎ status
❯ defaults read com.apple.screensaver askForPassword
```



```bash
#ℹ︎ enable
❯ defaults write com.apple.screensaver askForPassword -int 1
```



```bash
#ℹ︎ disable (default)
❯ defaults write com.apple.screensaver askForPassword -int 0
```


----
#### To launch screen saver:


```bash
#ℹ︎ (macOS 10.13) launch screen saver
❯ /System/Library/CoreServices/ScreenSaverEngine.app/Contents/MacOS/ScreenSaverEngine
```



```bash
#ℹ︎ lock screen
❯ /System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend
```


