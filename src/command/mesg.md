---
status: DONE
title: "mesg"
tags: [control,manage,change,get,print,display,write,send,broadcast,permissions,for,receiving,messages,from,others,users]
---

# `mesg`

## INSTALLATION


```bash
#ℹ︎ installation of `mesg`
❯ *comes pre-installed*
```


## USECASES

----
#### To control permissions to display messages from others on terminal:


```bash
#ℹ︎  get/print/display present message permissions status
❯ mesg
```

    is y


```bash
#ℹ︎ disallow messages from others, set display permission off
❯ mesg n
```



```bash
#ℹ︎ allow/permit messages from others, set display permission on
❯ mesg y
```



```bash
#ℹ︎ allow/permit messages from others, set display permission on, for specified terminal device
❯ mesg y </dev/ttyp1
```



## NOTES

Write access is allowed by default.

For a persistant change, a `mesg` command can be included in a shell initialization file to be executed at each login.

## SEE

    mesg(1)

## SEEALSO

    biff(1), write(1), wall(1), talk(1), who(1)

