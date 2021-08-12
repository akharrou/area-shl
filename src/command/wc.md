---
status: DONE
title: "wc"
tags: [count,get,print,display,files,bytes,characters,words,lines]
---

# `wc`

## INSTALLATION


```bash
#ℹ︎ installation of `wc`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print/display total standard-input/file bytes/characters/words/lines:

    ❯ cat FILE | wc -mwl
        1176    6963   51503


```bash
#ℹ︎ get/print/display total standard-input/file bytes
❯ cat FILE | wc -c | bc
```

    51503


```bash
#ℹ︎ get/print/display total standard-input/file characters
❯ cat FILE | wc -m | bc
```

    51503


```bash
#ℹ︎ get/print/display total standard-input/file words
❯ cat FILE | wc -w | bc
```

    6963


```bash
#ℹ︎ get/print/display total standard-input/file lines
❯ cat FILE | wc -l | bc
```

    1176


## NOTES

For the `-m` option, if the current locale does not support multibyte characters, this is equivalent to the `-c` option.

## SEE

    wc(1)

## SEEALSO

    bc(1)

