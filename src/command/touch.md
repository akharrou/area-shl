---
status: INCOMPLETE
title: "touch"
tags: [create,change,modify,file,access,modification,timestamps]
---

# `touch`

## INSTALLATION


```bash
#ℹ︎ installation of `touch`
❯ *comes pre-installed*
```


## USECASES

----
#### To create files:


```bash
#ℹ︎ create new empty file, with specified name
❯ touch FILE
```


----
#### To change/modify/edit access and/or modification time of specified files:


```bash
#ℹ︎ change/modify/edit file modification datetime, with specified datetime string
❯ touch -mt CCYYMMDDhhmm.ss FILE
```



```bash
#ℹ︎ change/modify/edit file modification datetime, by copying that of another file
❯ touch -mr SOURCEFILE TARGETFILE
```



## SEE

    touch(1)

## SEEALSO

    mkfile(8), stat(1)

