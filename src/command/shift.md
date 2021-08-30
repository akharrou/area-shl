---
status: DONE
title: "shift"
tags: [shift,function,script,arguments,to,left]
---

# `shift`

## INSTALLATION


```bash
#ℹ︎ installation of `shift`
❯ *comes builtin*
```


## USECASES

----
#### To shift function/scripts arguments [to the left] by specified amount N:


```bash
#ℹ︎ shift function/scripts arguments to left by specified amount N
❯ shift N
```


If `N` is omitted, shifts arguments [to the left] by 1.

    ❯ function FUNC() { echo $1 $2; shift 1; echo $1 $2 }
    ❯ FUNC hi bye no
    hi bye
    bye no


## SEE

    builtins(1)

