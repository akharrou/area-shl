---
status: DONE
title: "mdls"
tags: [get,print,display,list,file,metadata,attributes]
---

# `mdls`

## BRIEF

Lists metadata information attributes for given files.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print metadata information about specified items:


```bash
#ℹ︎ get/print all file spotlight metadata information attributes and their value
❯ mdls FILE
```


```bash
#ℹ︎ get/print matching file spotlight metadata information attribute value, without field
❯ mdls -raw -name ATTRIBUTE FILE
```



```bash
#ℹ︎ get/print out application spotlight metadata information bundle identifier attribute value
❯ mdls -raw -name kMDItemCFBundleIdentifier /Applications/Pages.app
```

    com.apple.iWork.Pages


## SEE

    mdls(1)

## SEEALSO

    mdls(1), mdfind(1), mdimport(1), mds(8)

