---
status: DONE
title: "split"
tags: [split,break,divide,chop,cleave,file,into,across,pieces,files]
---

# `split`

## INSTALLATION


```bash
#ℹ︎ installation of `split`
❯ *comes pre-installed*
```


## USECASES

----
#### To split/break/divide/chop/cleave file into/across pieces (other files):

    ❯ split -a5 -b BYTES[m|k] FILE SUFFIX

```bash
#ℹ︎ split/divide file into pieces, at every specified number of bytes
❯ split -a5 -b 250m move.mp4 movie-
```


    ❯ split -a5 -l LINES FILE SUFFIX

```bash
#ℹ︎ split/divide file into pieces, at every specified number of lines
❯ split -a5 -l 500 verses.txt verses-
```


    ❯ split -a5 -p PATTERN FILE SUFFIX

```bash
#ℹ︎ split/divide file into pieces, at every specified pattern
❯ split -p "^// function (add|sub|mul)$" utils.c lib-
```



## SEE

    split(1)

## SEEALSO

    csplit(1), sed(1), awk(1), perl(1)

