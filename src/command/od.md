---
status: INCOMPLETE
title: "od"
tags: [get,print,display,format,text,into,octal,decmial,hexadecimal,ascii,dump,output]
---

# `od`

## INSTALLATION


```bash
#ℹ︎ installation of `od`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print/display octal/decimal/hexadecimal/ascii formatted memory dump

    ❯ od -a <<< "Hello, world."   # get/print/display octal/decimal/hexadecimal/ascii formatted memory dump
    0000000    H   e   l   l   o   ,  sp   w   o   r   l   d   .  nl
    0000016

    ❯ od -a << eof   # get/print/display octal/decimal/hexadecimal/ascii formatted memory dump
    Hello, world.
    eof
    0000000    H   e   l   l   o   ,  sp   w   o   r   l   d   .  nl
    0000016


```bash
#ℹ︎ get/print/display file/stdin/string octal/decimal/hexadecimal/ascii formatted memory dump
❯ od -touxa <(echo -n "Hello, world")
```

    0000000       15433062510     16710026157     14433071157
                   1819043144      1998597231      1684828783
                     6c6c6548        77202c6f        646c726f
               H   e   l   l   o   ,  sp   w   o   r   l   d
    0000014


## SEE

    od(1)

## SEEALSO

    hexdump(1), xxd(1), printf(1)

