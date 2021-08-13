---
status: DONE
title: "uuidgen"
tags: [generate,create,make,produce,128bit,universally,globally,unique,identifier,id,value,uuid,guid]
---

# `uuidgen`

## INSTALLATION


```bash
#ℹ︎ installation of `uuidgen`
❯ *comes pre-installed*
```


## USECASES

----
#### To generate/create/make a Universally/Globally Unique IDentifier (UUID/GUID):


```bash
#ℹ︎ generate/create/make get/print/display Universally/Globally Unique IDentifier (UUID/GUID)
❯ uuidgen
```

    091D09F4-28DA-4DED-8958-0531B286A6BE


```bash
#ℹ︎ generate/create/make get/print/display lowercased Universally/Globally Unique IDentifier (UUID/GUID)
❯ uuidgen | tr "[:upper:]" "[:lower:]" | tr -d "-"
```

    713989e98e444a9f8c2f6d3c3d5a5027

UUIDs are 128-bit values guaranteed to be unique over both space and time.


## SEE

    uuidgen(1)

## SEEALSO

    /dev/random

