---
status: INCOMPLETE
title: "file"
tags: [get,print,display,determine,file,mime,types,information]
---

# `file`

## INSTALLATION


```bash
#ℹ︎ installation of `file`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print/display file mime type information:


```bash
#ℹ︎ determine get/print/display files mime types information
❯ file FILE.html
```

    FILE.html: HTML document text, UTF-8 Unicode text, with very long lines


```bash
#ℹ︎ determine get/print/display files mime types information, without filename header
❯ file --brief FILE.html
```

    HTML document text, UTF-8 Unicode text, with very long lines


```bash
#ℹ︎ determine get/print/display special files mime types
❯ file --special-files SPECIALFILE
```


The `--special-files` (`-s`) option can be used to investigate block and character files.


## ENVIRONMENT

Variable | Description
- | -

    ＄MAGIC
       semantic_description

## PATHS

Path | Description
- | -
`/usr/share/file/magic.mgc` | Default compiled list of magic.
`/usr/share/file/magic` | Directory containing default magic files.

## SEE

    file(1)

## SEEALSO

    stat(1), textutil(1), magic(5)

