---
status: INCOMPLETE
title: "join"
tags: [relational,database,operator,join,glue,stick,connect,files,contents,lines,on,common,fields]
---

# `join`

## INSTALLATION


```bash
#ℹ︎ installation of `join`
❯ *comes pre-installed*
```


## USECASES

----
#### To

    ❯ pr -mt FILE1 FILE2
    john:35                john:morroco
    james:23               james:kentucky
    jim:83                 jim:cupertino
    jill:12                jill:france

    ❯ join -1 1 -2 1 -t ":" FILE1 FILE2

```bash
#ℹ︎ join two files/tables contents, on specified fields, and specified delimiter character
❯ join -j1 -t ":" FILE1 FILE2
```

    john:35:morroco
    james:23:kentucky
    jim:83:cupertino
    jill:12:france


## SEE

    join(1)

## SEEALSO

    split(1), paste(1), lam(1), pr(1), printf(1)

