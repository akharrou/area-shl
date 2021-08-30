---
status: DONE
title: "gzip"
tags: [losslessly,compress,decompress,data,using,lempel-ziv,coding,lz77,algorithm,technique,method,gunzip,zcat,gzcat,zmore]
---

# `gzip`

## INSTALLATION


```bash
#ℹ︎ installation of `gzip`
❯ *comes pre-installed*
```


## USECASES

----
#### To `gzip` compress/decompress files, using Lempel-Ziv:


```bash
#ℹ︎ loselessly compress data files using Lempel-Ziv (LZ77) algorithm/technique
❯ gzip --keep --name --best --suffix .gz --verbose <FILE>
```



```bash
#ℹ︎ loselessly decompress data files using Lempel-Ziv (LZ77) algorithm/technique
❯ gzip --decompress --keep --name --verbose <FILE>.gz
```


----
#### To get/print/display information about `gzip` compressed files/archives:


```bash
#ℹ︎ get/print/display gzip files/archives compressed/uncompressed size and ratio information
❯ gzip --list <FILE>.gz
```

      compressed uncompressed  ratio uncompressed_name
           13839        51509  73.1% FILE


```bash
#ℹ︎ check/test `gzip` compressed files/archives integrity
❯ gzip --test <FILE>.gz
```


----
#### To get/print/display `cat` or `$PAGER` `gzip` compressed files:


```bash
#ℹ︎ get/print/display/cat gunzip/gzip/gz compressed files/archives
❯ gzcat <FILE>.gz
```


```bash
#ℹ︎ get/print/display/cat gunzip/gzip/gz compressed files/archives
❯ gzip --decompress --to-stdout <FILE>.gz
```



```bash
#ℹ︎ get/print/display/pager gunzip/gzip/gz compressed files/archives
❯ zmore <FILE>.gz
```


```bash
#ℹ︎ get/print/display/pager gunzip/gzip/gz compressed files/archives
❯ gzip --decompress --to-stdout <FILE>.gz | more
```



```bash
#ℹ︎ edit/modify/change gunzip/gzip/gz compressed files/archives
❯ nvim <FILE>.gz
```



## VARIABLES

    # pre-set options
    # export GZIP=""


## NOTES

`gzip` is quite universal on Unix-like systems.

## ENVIRONMENT

Variable | Description
- | -
`$GZIP`| White-space separated list of options handled before any options on the command line. Overriden by command-line options.

## SEE

    gzip(1)
    gunzip(1)
    zcat(1)
    gzcat(1)
    zmore(1)

## SEEALSO

    gzexe(1)

