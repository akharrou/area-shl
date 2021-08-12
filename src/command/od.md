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


```bash
#ℹ︎ get/print/display octal/decimal/hexadecimal/ascii formatted memory dump
❯ od -a <<< "Hello, world."
```

    0000000    H   e   l   l   o   ,  sp   w   o   r   l   d   .  nl
    0000016


```bash
#ℹ︎ get/print/display octal/decimal/hexadecimal/ascii formatted memory dump
❯ od -a << eof
```

    Hello, world.
    eof
    0000000    H   e   l   l   o   ,  sp   w   o   r   l   d   .  nl
    0000016


```bash
#ℹ︎ get/print/display octal/decimal/hexadecimal/ascii formatted memory dump
❯ od -a <(echo "Hello, world.")
```

    0000000    H   e   l   l   o   ,  sp   w   o   r   l   d   .  nl
    0000016


## SEE

    od(1)

## SEEALSO

    printf(1)

