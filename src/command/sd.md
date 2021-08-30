---
status: DONE
title: "sd"
tags: [regex,search,find,replace,text,files,inplace]
---

# `sd`

## INSTALLATION


```bash
#ℹ︎ installation of `sd`
❯ brew install sd
```


## USECASES

----
#### To search/find regex/literal-string matching file/standard-input lines, and replace them:


```bash
#ℹ︎ search/find matching regex lines, replace (standard input)
❯ sd -fim PCRE2 REPL
```



```bash
#ℹ︎ search/find matching regex lines, replace (text file in-place)
❯ sd -pfim PCRE2 REPL <FILE>
```



```bash
#ℹ︎ search/find matching literal string lines, replace (text file in-place)
❯ sd -pfim -s LITERAL REPL <FILE>
```



## NOTES

Flags:

    c -- case-sensitive
    i -- case-insensitive
    m -- multi-line matching
    w -- match full words only

## SEE

    sd(1)

## SEEALSO

    sed(1), awk(1), perl(1), rg(1)

## SEEFURTHER

- [🌎 Repository](https://github.com/chmln/sd)
