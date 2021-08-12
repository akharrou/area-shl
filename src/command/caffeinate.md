---
status: TODO
title: "caffeinate"
tags: [prevent,computer,system,from,sleeping,until,utility,command,terminates]
---

# `caffeinate`

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To keep system awake until condition is met:


```bash
#ℹ︎ keep system display screen awake (from sleeping) until assertion/condition is met
❯ caffeinate -d <assertion-condition>
```



```bash
#ℹ︎ keep system display screen awake (from sleeping) until process terminates
❯ caffeinate -w <pid>
```



```bash
#ℹ︎ keep system display screen awake (from sleeping) for N specified seconds
❯ caffeinate -t SECONDS
```



## SEE

    caffeinate(1)

## SEEALSO

    wait, sleep, amphetamine

