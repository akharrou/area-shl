---
status: INCOMPLETE
title: "nl"
tags: [get,print,display,list,formatted,numbers,text,files,lines]
---

# `nl`

## INSTALLATION


```bash
#ℹ︎ installation of `nl`
❯ *comes pre-installed*
```


## USECASES

----
#### To number text file lines:


```bash
#ℹ︎ get/print/list file contents, number lines
❯ nl <FILE>
```

          1 ...
          2 ...
          3 ...
          4 ...


```bash
#ℹ︎ get/print/list file contents, number lines, with specified increments
❯ nl -i 3 <FILE>
```

          1 ...
          4 ...
          7 ...
          10 ...

----
#### To format line numbering of text files:

    ❯ nl -w2 -nrn -s " | " <FILE>
     1 | Hello world !
     2 | This is the second line.
     3 | This is the third line.
     4 | This is the fourth line.
     5 | This is the fifth line.

Justification options:

    ln   left justified
    rn   right justified
    rz   right justified, with leading zeroes


## SEE

    nl(1)

## SEEALSO

    pr(1), fmt(1), cat(1), bat(1)

