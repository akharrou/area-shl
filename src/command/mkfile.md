---
status: DONE
title: "mkfile"
tags: [make,create,new,sized,files]
---

# `mkfile`

## INSTALLATION


```bash
#ℹ︎ installation of `mkfile`
❯ *comes pre-installed*
```


## USECASES

----
#### To create new files with specified size:


```bash
#ℹ︎ create new files, with specified size, and specified name
❯ mkfile -v 0 FILENAME
```

    FILENAME 0 bytes

    ❯ mkfile -v 1k FILENAME
    FILENAME 1024 bytes


## NOTES

Default size unit is bytes. Suffixes may be used to multiply by the given factor:

    b: block (512 bytes)
    k: kilobyte (1024 bytes)
    m: megabyte (1048576 bytes)
    g: gigabyte (1073741824 bytes)

For example: 1k = 1 byte * 1024 = 1024 bytes

## SEE

    mkfile(8)

## SEEALSO

    touch(1), mktemp(1), mkfifo(1), mkdir(1)

