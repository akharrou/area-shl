---
status: DONE
title: "csplit"
tags: [split,break,divide,chop,cleave,file,standard,input,into,context,determined,pieces,based,on,basic,regular,expressions,bre]
---

# `csplit`

## INSTALLATION


```bash
#ℹ︎ installation of `csplit`
❯ *comes pre-installed*
```


## USECASES

----
#### To split/divide/breakup file/standard-input, based on basic regular expression:

    ❯ csplit -f PREFIX -n SUFFIXLEN FILE "/BRE/" {OCCURRENCES}

```bash
#ℹ︎ split/divide/breakup file, based on basic regular expression
❯ csplit -f lib- -n2 FILE.c "/^// function .*$/" {2}
```


    ❯ ... | csplit -f PREFIX -n SUFFIXLEN - "/BRE/" {OCCURRENCES}

```bash
#ℹ︎ split/divide/breakup standard input, based on basic regular expression
❯ cat FILE.c | csplit -f "stdin-" -n2 - "/^// function .*$/" {2}
```



## NOTES

`cplist` only accepts POSIX Basic Regular Expressions (BRE), so: `\d`, `+`, among other things don’t work.

## SEE

    csplit(1)

## SEEALSO

    split(1), sed(1), awk(1), gawk(1), perl(1)

