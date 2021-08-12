---
status: INCOMPLETE
title: "xattr"
tags: [get,print,display,show,list,manipulate,extended,files,attributes]
---

# `xattr`

## BRIEF

Extended attributes are arbitrary metadata stored with a file, but separate from the filesystem attributes (such as modification time or file size).

## INSTALLATION


```bash
#ℹ︎ installation of `xattr`
❯ *comes pre-installed*
```


## USECASES

----
#### To list file’s extended attributes:


```bash
#ℹ︎ get/print/list extended file attributes
❯ xattr FILE
```

    com.apple.lastuseddate#PS
    com.apple.quarantine


```bash
#ℹ︎ get/print value of single specified extended file attribute
❯ xattr -p com.apple.quarantine FILE
```

    0082;603a52ec;Preview;


```bash
#ℹ︎ get/print/list value of all extended file attribute
❯ xattr -l FILE
```

    com.apple.lastuseddate#PS:
    00000000  EB 52 3A 60 00 00 00 00 5B 4B B7 0C 00 00 00 00  |.R:`....[K......|
    00000010
    com.apple.quarantine: 0082;603a52ec;Preview;

----
#### To manage extended file attributes:


```bash
#ℹ︎ delete/remove specified extended file attributes
❯ xattr -d com.apple.quarantine FILE
```



## SEE

    xattr(1)

## SEEALSO

    ls(1), exa(1)

