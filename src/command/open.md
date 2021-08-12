---
status: INCOMPLETE
title: "open"
tags: [open,reveal,files,folders,directories,url,application]
---

# `open`

## INSTALLATION


```bash
#ℹ︎ installation of `open`
❯ *comes pre-installed*
```


## USECASES

----
#### To open files with a specified application:


```bash
#ℹ︎ open a file with an application, specified by path, with arguments
❯ open -a APPPATH FILE --args <arg> ...
```



```bash
#ℹ︎ open a file with an application, specified by bundle identifier, with arguments
❯ open -b APPBUNDLE FILE --args ARG ...
```



```bash
#ℹ︎ open a file in a new instance of an application, with arguments
❯ open -n FILE --args ARG ...
```


You can also: open file in the application in the FOREGROUND (`-g` option) or HIDDEN (`-j` option) mode.

----
#### To reveal files in Apple’s Finder file manager:


```bash
#ℹ︎ open/reveal file in Finder file manager
❯ open -R FILE
```



## ALIASES

    alias o="open"


## SEE

    open(1)

