---
status: INCOMPLETE
title: "uniq"
tags: [uniquify,output,lines,files,keep,unique,remove,delete,filter,duplicates]
---

# `uniq`

## INSTALLATION


```bash
#ℹ︎ installation of `uniq`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print/display/report or filter/remove/delete out repeated lines:


```bash
#ℹ︎ uniquify output lines, keep unique lines, filter-out/remove/delete consecutive duplicates lines
❯ echo 1 1 2 3 3 | xargs -n1 | uniq
```

    1
    2
    3


```bash
#ℹ︎ keep unique lines
❯ echo 1 1 2 3 3 | xargs -n1 | uniq -u
```

    2


```bash
#ℹ︎ keep consecutive duplicates lines
❯ echo 1 1 2 3 3 | xargs -n1 | uniq -d
```

    1
    3


## SEE

    uniq(1)

## SEEALSO

    sort(1)

