---
status: INCOMPLETE
title: "textutil"
tags: [manipulate,text,files,formats,doc,html,rtf]
---

# `textutil`

## INSTALLATION


```bash
#ℹ︎ installation of `textutil`
❯ *comes pre-installed*
```


## USECASES

----
#### To manipulate texts files:


```bash
#ℹ︎ convert text file formats
❯ textutil -convert html <FILE>.rtf
```


    ❯ textutil -cat html FILE1.rtf FILE2.rtf -output FILEOUT.html  # concatenate text files into file of specified format


```bash
#ℹ︎ get/print/list text file information
❯ textutil -info <FILE>.html
```

    File:  <FILE>.html
      Type:  HTML
      Size:  12041 bytes
      Length:  8558 characters
      Contents:  Temporary...


## ENVIRONMENT

Variable | Description
- | -

`fmt` is one of: [txt|html|rtf|rtfd|doc|docx|wordml|odt|webarchive]

## SEE

    textutil(1)

## SEEALSO

    pandoc(1)

