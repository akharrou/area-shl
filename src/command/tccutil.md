---
status: TODO
title: "tccutil"
tags: [manage,privacy,database,user,choices]
---

# `tccutil`

## BRIEF

The `tccutil` command manages the privacy database, which stores decisions the user has made about whether apps may access personal data. You need to close all applications except Terminal before running any of these commands.

## INSTALLATION


```bash
#ℹ︎ installation of `tccutil`
❯ *comes pre-installed*
```


## USECASES

----
#### To


```bash
#ℹ︎ reset all application privacy settings
❯ sudo tccutil reset All
```



```bash
#ℹ︎ reset single specified application privacy settings
❯ sudo tccutil reset AddressBook
```



```bash
#ℹ︎ reset single specified application privacy settings
❯ sudo tccutil reset All com.apple.Terminal
```



## SEE

    tccutil(1)

## SEEALSO

    security(8)

