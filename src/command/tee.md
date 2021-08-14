---
status: DONE
title: "tee"
tags: [pipe,fitting,forwarding,redirect,output,multiple,to,files]
---

# `tee`

## INSTALLATION


```bash
#ℹ︎ installation of `tee`
❯ *comes pre-installed*
```


## USECASES

----
#### To pass/copy standard input to specified locations (e.g. files, pipes) with input unaffected:


```bash
#ℹ︎ overwrite files with standard input
❯ echo "hello" | tee FILE ... | cat
```

    "hello"
    ❯ cat FILE
    hello


```bash
#ℹ︎ append standard input to files
❯ echo "hello" | tee -a FILE ... | cat
```

    "hello"

## RECIPES

----
#### To print/write output to files, and to standard-output if DEBUG flag is set on:


```bash
#ℹ︎ print/write output to file, and to standard-output if DEBUG flag is set on
❯ if [[ $DEBUG ]]; then tee FILE else 1>FILE fi
```



## SEE

    tee(1)

## SEEALSO

    pee(1), sponge(1)

