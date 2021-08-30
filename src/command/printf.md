---
status: INCOMPLETE
title: "printf"
tags: [get,print,display,formatted,text,data]
---

# `printf`

## BRIEF

Formats and prints arguments.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To print formatted text data:

    ❯ printf "%s\n" "Hello, world."
    Hello, world.

----
#### To convert to/from ASCII character representations:


```bash
#ℹ︎ convert ascii character, get/print/display ascii code representation
❯ printf %d \’a
```



```bash
#ℹ︎ convert ascii character, get/print/display ascii code representation
❯ printf %x \’a
```



```bash
#ℹ︎ convert ascii character, get/print/display ascii code representation
❯ printf %o \’a
```



```bash
#ℹ︎ convert ascii code, get/print/display ascii character representation
❯ printf \\x61
```

    ❯ for i in {20..126}; do printf \\x`bc <<< "obase=16; $i"`; done
     !"#$%&’()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~


## SEE

    printf(1)

## SEEALSO

    print, echo(1)

