---
status: INCOMPLETE
title: "mas"
tags: [macOS,application,software,store,command,line,manager]
---

# `mas`

## BRIEF

Command line interface for MacOS’s application store.

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install mas
```


## USECASES

----
#### To manage macOS App Store applications:


```bash
#ℹ︎ install application software from macOS App Store, specified by identifier
❯ mas install <appID>
```


```bash
#ℹ︎ install application software from macOS App Store, specified by name
❯ mas lucky <appName>
```


```bash
#ℹ︎ purchase and install macOS App Store application software, specified by identifer
❯ mas purchase <appID>
```



```bash
#ℹ︎ list application software installed from macOS App Store
❯ mas list
```


```bash
#ℹ︎ search macOS App Store index for application software
❯ mas search <application>
```



```bash
#ℹ︎ update/upgrade installed application software, from macOS App Store
❯ mas upgrade
```


```bash
#ℹ︎ check outdated application software, from macOS App Store
❯ mas outdated
```



## PROCEDURES

    # ❯ masl [<application>]   # list macOS App Store applications
    function masl()   # list macOS App Store applications
    {
        mas list | fzf -m -q "$1" | head -n1 | cut -d' ' -f1
    }


## SEE

    mas

## SEEALSO

    brew, macports, softwareupdate

## SEEFURTHER

- [🌎 Repository](https://github.com/mas-cli/mas)
