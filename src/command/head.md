---
status: DONE
title: "head"
tags: [display,first,lines,of,file]
---

# `head`

## INSTALLATION


```bash
#ℹ︎ installation of `head`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print/display first N specified lines/bytes from file or standard input:

    ❯ cat FILE | head -n 1

```bash
#ℹ︎ get/print/display the first N specified lines of standard-in/file
❯ head -1 FILE
```

    <!DOCTYPE html>


```bash
#ℹ︎ get/print/display the first N specified bytes of standard-in/file
❯ head -b 1 FILE
```

    <

The specified number, if not specified, defaults to `10`.


## SEE

    head(1)

## SEEALSO

    tail(1)

