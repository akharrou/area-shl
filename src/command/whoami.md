---
status: DONE
title: "whoami"
tags: [get,print,display,show,user,identifier,login,name]
---

# `whoami`

## INSTALLATION


```bash
#ℹ︎ installation of `whoami`
❯ *comes builtin*
```


## USECASES

----
#### To


```bash
#ℹ︎ get/print/display current active user identifier login name
❯ whoami && echo `id -un` && echo $LOGNAME && echo $USER
```

    johndoe
    johndoe
    johndoe
    johndoe


## NOTES

The `whoami` utility has been obsoleted by the `id(1)` utility, and is equivalent to `id -un`.

## ENVIRONMENT

Variable | Description
- | -

    ＄LOGNAME
       Current user identifier name.

    ＄USER
       Current user identifier name.

## SEE

    whoami(1)

## SEEALSO

    who(1), logname(1), id(1), groups(1)

