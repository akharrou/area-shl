---
status: INCOMPLETE
title: "rs"
tags: [reshape,format,data,array,set,output]
---

# `rs`

## INSTALLATION


```bash
#ℹ︎ installation of `rs`
❯ *comes pre-installed*
```


## USECASES

----
#### To rearrange/reorder/reshape array data into specified grid/table:

    ❯ rs - NROWS NCOLS


```bash
#ℹ︎ rearrange/reorder/reshape array data automatically into accomodating grid/table
❯ jot -r 10 0 100000000 | rs
```

    12130538  15314288  71255522  19075994  93775935
    46311454  26470889  9165397   68769314  42973278


```bash
#ℹ︎ rearrange/reorder/reshape array data, delimited/seperated by specified character, into grid/table
❯ jot -r -s ":" 10 0 100000000 | rs -c: 5 2
```

    70071466  36087338
    52491198  95451600
    38099870  49697997
    96600865  47165865
    51074861  57099958

----
#### To perform miscellaneous tasks:

    ❯ ... | rs 1 0 | ... | rs 0 1   # convert stream input into vector output and back again, use


```bash
#ℹ︎ get/print/display input data ROW by COLUMNS shape
❯ jot -r 10 0 100000000 | rs -h
```

    10 1

    ❯ ... | rs -H   # get/print/display input data ROW by COLUMNS shape, and each line’s length
     8 line 1
     8 line 2
     7 line 3
     8 line 4
     8 line 5
     7 line 6
     8 line 7
     8 line 8
     8 line 9
     8 line 10
    10 1

    ❯ rs -kN   # ignore N data lines
    ❯ rs -KN   # ignore N data lines, print them

    ❯ jot -r 100 | rs 10 10 | tee array | rs -T > tarray | pr -mt array tarray   # generate 10 by 10 array of random numbers and its transpose
    86  13  52  58  32  41  56      86  30  57  86  52  42  27
    30  42  11  27  53  87  93      13  42  12  5   91  6   12
    57  12  95  25  94  86  46      52  11  95  20  22  98  19
    86  5   20  53  99  94  2       58  27  25  53  1   98  75
    52  91  22  1   61  8   100     32  53  94  99  61  9   41
    42  6   98  98  9   48  14      41  87  86  94  8   48  89
    27  12  19  75  41  89  24      56  93  46  2   100 14  24
    19  56  50  42  64  91  37      48  48  53  24  36  54  73
    24  51  53  6   83  85  23      82  27  74  44  71  36  64
    86  72  57  37  92  55  13      81  4   33  98  20  27  46



## NOTES

`NROWS`, `NCOLS` must be positive integers, if not, they’ll be computed.

Output formatting can be achieved with:

    `-gN`: output gutter (spacing)
    `-Cx`: output seperator character
     `-j`: right justify/adjust entries

`rs` has been integrated into the `ls` program.

## SEE

    rs(1)

## SEEALSO

    jot(1), pr(1), sort(1), fmt(1)

