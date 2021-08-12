---
status: DONE
title: "seq"
tags: [generate,make,create,get,print,display,numeric,number,sequences,ranges,lists,start,stop,step]
---

# `seq`

## INSTALLATION


```bash
#ℹ︎ installation of `seq`
❯ *comes pre-installed*
```


## USECASES

----
#### To create/make/generate numeric sequences/ranges/lists/enumerations, with specified start, stop, and step values:


```bash
#ℹ︎ create/make/generate get/print/display numeric/number range/set/list/sequence sequentially, with specified start, stop, and step values
❯ seq -s "\n" -t "" -w START STEP STOP
```

    01
    02
    03
    04
    05
    06
    07
    08
    09
    10


```bash
#ℹ︎ create/make/generate get/print/display formatted numeric/number range/set/list/sequence sequentially, with specified start, stop, and step values
❯ seq -s "\n" -t "" -f "-> %02g <-" START STEP STOP
```

    -> 00 <-
    -> 02 <-
    -> 04 <-
    -> 06 <-
    -> 08 <-
    -> 10 <-
    -> 12 <-
    -> 14 <-
    -> 16 <-
    -> 18 <-
    -> 20 <-


## SEE

    seq(1)

## SEEALSO

    jot(1), printf(1)

