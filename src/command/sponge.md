---
status: DONE
title: "sponge"
tags: [soak,write,standard,input,output,to,file]
---

# `sponge`

## INSTALLATION


```bash
#ℹ︎ installation of `sponge`
❯ brew install sponge
```

    ❯ brew install moreutils   # installation of `sponge`

## USECASES

----
#### To fully soak-in standard input before directing it else where in the same pipeline:


```bash
#ℹ︎ soak standard input, write to standard output
❯ sponge
```


```bash
#ℹ︎ soak standard input, write to specified file
❯ sponge FILE
```


```bash
#ℹ︎ soak standard input, append to specified file
❯ sponge -a FILE
```



## NOTES

Unlike a shell redirect, `sponge` soaks up all its input before writing the output file. This allows constructing pipelines that read from and write to the same file.

## SEE

    sponge(1)

## SEEALSO

    tee(1), pee(1)

