---
status: INCOMPLETE
title: "while"
tags: [conditional,control,flow,statement,looping,mechanism]
---

# `while`

## INSTALLATION


```bash
#ℹ︎ installation of `while`
❯ *comes builtin*
```


## USECASES

----
#### To perform an infinite while loop:


```bash
#ℹ︎ forever/infinite/non-stop while loop
❯ while 1; do COMMAND; done
```


```bash
#ℹ︎ forever/infinite/non-stop while loop
❯ while true; do COMMAND; done
```


```bash
#ℹ︎ forever/infinite/non-stop while loop
❯ while :; do COMMAND; done
```


## RECIPES

----
#### Miscellaneous:


```bash
#ℹ︎ watch/wait for path/file/directory creation
❯ while [[ ! -d ./foo/baz ]]; do sleep 0.2; done && echo hi
```



## SEE

    builtins(1)

## SEEALSO

    for, until

