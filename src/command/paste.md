---
status: DONE
title: "paste"
tags: [merge,join,interweave,interpose,concatenate,files,lines]
---

# `paste`

## INSTALLATION


```bash
#ℹ︎ installation of `paste`
❯ *comes pre-installed*
```


## USECASES

----
#### To concatenate/merge/join/interweave files data:


```bash
#ℹ︎ concatenate/merge/join file lines side-by-side/horizontally, with specified seperator/delimiter
❯ paste -d "\t" FILE1 FILE2
```

    FILE1: Line 1.	FILE2: Line 1.
    FILE1: Line 2.	FILE2: Line 2.
    FILE1: Line 3.	FILE2: Line 3.
    FILE1: Line 4.	FILE2: Line 4.
    FILE1: Line 5.	FILE2: Line 5.


```bash
#ℹ︎ concatenate/merge/join/interweave file lines vertically
❯ paste -d "\n" nf1 nf2
```

    FILE1: Line 1.
    FILE2: Line 1.
    FILE1: Line 2.
    FILE2: Line 2.
    FILE1: Line 3.
    FILE2: Line 3.
    FILE1: Line 4.
    FILE2: Line 4.
    FILE1: Line 5.
    FILE2: Line 5.


```bash
#ℹ︎ concatenate/merge/join entire file lines horizontally, with specified seperator/delimiter
❯ paste -s -d "\t" FILE1 FILE2
```

    FILE1: Line 1.	FILE1: Line 2.	FILE1: Line 3.
    FILE2: Line 1.	FILE2: Line 2.	FILE2: Line 3.

----
#### To concatenate/merge/join/interweave standard input data:


```bash
#ℹ︎ concatenate/merge/join (two) subsequent lines of files, with specified seperator/delimiter
❯ cat <FILE> | paste -d "\t" - -
```

    Line 1 Line 2
    Line 3 Line 4
    Line 5 Line 6
    .
    .
    .

Dashes represent the number of subsequent lines to merge.

## RECIPIES

----
#### Miscellanous:

    ❯ ls | paste -s -d: -   # create/make colon-separated path list
    ❯ find / -name bin -type d | paste -s -d : -   # create/make colon-separated path list


## SEE

    paste(1)

## SEEALSO

    join(1), lam(1), pr(1), printf(1)

