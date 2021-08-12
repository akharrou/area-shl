---
status: INCOMPLETE
title: "expand"
tags: [convert,tabs,to,from,spaces]
---

# `expand` & `unexpand`

## INSTALLATION


```bash
#ℹ︎ installation of `expand`/`unexpand`
❯ *comes pre-installed*
```


## USECASES

----
#### To convert text file tabs to spaces, and spaces to tabs:


```bash
#ℹ︎ convert text file tabs to spaces
❯ expand -t4 FILE
```


```bash
#ℹ︎ convert text file spaces to tabs
❯ unexpand -t4 FILE
```


    ❯ cat FILE | expand -t4


## SEE

    expand(1)

## SEEALSO

    tab2space(1), tr(1), sed(1)

