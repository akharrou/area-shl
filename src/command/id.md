---
status: TODO
title: "id"
tags: [get,print,return,user,group,ids,identity,identifier,names]
---

# `id`

## INSTALLATION


```bash
#ℹ︎ installation of `id`
❯ *comes pre-installed*
```


## USECASES

----
#### To


```bash
#ℹ︎ get/print current system user name
❯ id -un
```


## RECIPES

----
#### To check if current user is root user:


```bash
#ℹ︎ test/check if root user
❯ if (( $(id -u) != 0 )); then echo "Not root"; fi
```



## ENVIRONMENT

Variable | Description
- | -

    ＄LOGNAME
       Current user identifier name.

    ＄USER
       Current user identifier name.

## SEE

    id(1)

## SEEALSO



