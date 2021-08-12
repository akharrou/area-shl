---
status: DONE
title: "fold"
tags: [wrap,file,text,fit,specified,width]
---

# `fold`

## INSTALLATION


```bash
#ℹ︎ installation of `fold`
❯ *comes pre-installed*
```


## USECASES

----
#### To fold/wrap text file to specified column line width (default: 80):


```bash
#ℹ︎ wrap text file to 80 columns line width
❯ fold -s -w80 FILE
```


```bash
#ℹ︎ wrap text file to fit specified columns line width
❯ fold -s -w 120 FILE
```


    ❯ fold -s < FILE
    ❯ cat INFILE | fold -s >OUTFILE

The `-s` option ensures that lines are folded on whitespaces.


## SEE

    fold(1)

## SEEALSO

    fmt(1), expand(1), cat(1), pr(1)

