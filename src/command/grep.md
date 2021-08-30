---
status: TODO
title: "grep"
tags: [search,matching,regular,expression,regex,pattern,text,files,lines]
---

# `grep`

## INSTALLATION


```bash
#ℹ︎ installation of `grep`
❯ *comes pre-installed*
```


## USECASES

----
#### To search a file for a pattern:

    ❯ grep PATTERN <FILE>

----
#### To perform a case-insensitive search (with line numbers):

    ❯ grep -in PATTERN <FILE>

----
#### To recursively grep for string PATTERN in DIR:

    ❯ grep -R PATTERN DIR

----
#### To read search patterns from a file (one per line):

    ❯ grep -f PATTERN-FILE <FILE>

----
#### To find lines NOT containing pattern:

    ❯ grep -v PATTERN <FILE>

----
#### To grep with regular expressions:

    # Match lines starting with 00
    ❯ grep "^00" <FILE>

    # Find IP add
    ❯ grep -E "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" <FILE>

----
#### To find all files that match PATTERN in DIR

    ❯ grep -rnw DIR -e PATTERN

----
#### To exclude grep from your grepped output of ps: (Add [] to the first letter. Ex: sshd -> [s]shd)

    ❯ ps aux | grep "[h]ttpd"

----
#### To colour in red {bash} and keep all other lines

    ❯ ps aux | grep -E --color "bash|$"

## RECIPES

----
#### Useful miscellaneous commands:


```bash
#ℹ︎ get/print/display lookup result port name mapping
❯ grep --extended-regexp "^http\s" /etc/services
```



```bash
#ℹ︎ get/print/display lookup result of port number mapping
❯ grep --extended-regexp --word-regexp "22/(tcp|udp)" /etc/services
```



## PROCEDURES

    # Search in files
    # function in() { egrep -H -n $2 "$1" ${@:2} -R . }
    # function inq() { egrep -h $2 "$1" ${@:2} -R . }

    # Examples:
    # in  ... -A12 (print 12 subsequent lines)
    # in ... -B12 (" " previous lines)
    # in ... -C12 (" " before and after lines)


## NOTES

`grep` accepts POSIX Basic Regular Expression (BRE) patterns. With the `-E` option, or using `egrep`, POSIX Extended Regular Expressions (ERE) are accepted. Some `grep` implementations also have the `-P` for Perl Compatible Regular Expressions (PCRE). `pcre2grep` accepts PCRE2 expressions.

## SEE

    grep(1), egrep(1), fgrep(1), zgrep(1), zegrep(1), zfgrep(1)

## SEEALSO

    rg, pcre2grep, pcregrep, lzegrep, lzfgrep, lzgrep, msggrep, pdfgrep, ptargrep, xzegrep, xzfgrep, xzgrep, zstdgrep

