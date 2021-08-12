---
status: INCOMPLETE
title: "lam"
tags: [join,merge,concatenate,files,lines,horizontally]
---

# `lam`

## INSTALLATION


```bash
#ℹ︎ installation of `lam`
❯ *comes pre-installed*
```


## USECASES

----
#### To join/merge/concatenate files lines horizontally (side-by-side), with specified seperator strings:


```bash
#ℹ︎ join/merge/concatenate files lines horizontally (side-by-side), with specified seperator strings
❯ lam -s "| " FILE1 -s " | " FILE2 -s " | " FILE3 -s " |"
```

    | FILE1: Line 1. | FILE2: Line 1. | FILE3: Line 1. |
    | FILE1: Line 2. | FILE2: Line 2. | FILE3: Line 2. |
    | FILE1: Line 3. | FILE2: Line 3. | FILE3: Line 3. |
    | FILE1: Line 4. | FILE2: Line 4. | FILE3: Line 4. |
    | FILE1: Line 5. | FILE2: Line 5. | FILE3: Line 5. |


```bash
#ℹ︎ join/merge/concatenate single file lines horizontally (side-by-side), with specified seperator strings
❯ cat nf1 | lam - -s " | "  - 2>/dev/null
```

    FILE1: Line 1. | FILE1: Line 2.
    FILE1: Line 3. | FILE1: Line 4.
    FILE1: Line 5. | FILE1: Line 6.
    FILE1: Line 7. | FILE1: Line 8.
    FILE1: Line 9. | FILE1: Line 10.

    ❯ lam FILE1 -s "
    " FILE2 -s " | " FILE3
    FILE1: Line 1.
    FILE2: Line 1. | FILE3: Line 1.
    FILE1: Line 2.
    FILE2: Line 2. | FILE3: Line 2.
    FILE1: Line 3.
    FILE2: Line 3. | FILE3: Line 3.


## SEE

    lam(1)

## SEEALSO

    join(1), paste(1), pr(1), printf(1)

