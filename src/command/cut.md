---
status: INCOMPLETE
title: "cut"
tags: [divide,select,file,text,string,into,several,fields,parts]
---

# `cut`

## INSTALLATION


```bash
#ℹ︎ installation of `cut`
❯ *comes pre-installed*
```


## USECASES

----
#### To


```bash
#ℹ︎ divide and select delimited text fields/parts, from standard-input
❯ echo "john:jim:james:jeremy:jole:jill" | cut -d ":" -f 1,3-4
```

    john:james:jeremy


```bash
#ℹ︎ divide and select delimited text fields/parts, from file
❯ cut -d : -f 1,7 /etc/passwd
```



```bash
#ℹ︎ select text specified number of characters/letters
❯ who | cut -c 1-16,26-38
```

    johndoe console20:34
    johndoe ttys00115:28
    johndoe ttys00217:31
    johndoe ttys00315:28
    johndoe ttys00516:47
    johndoe ttys00618:20
    johndoe ttys00719:53
    johndoe ttys00820:00
    johndoe ttys00920:03
    johndoe ttys01020:06
    johndoe ttys01111:43
    johndoe ttys01220:06


## NOTES

`$LANG`, `$LC_ALL` and `$LC_CTYPE` environment variables affect the execution of `cut` as described in `environ(7)`.

## SEE

    cut(1)

## SEEALSO



