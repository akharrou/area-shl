---
status: DONE
title: "basename"
tags: [convert,extract,get,print,display,path,file,part,portion,without,extension,suffix]
---

# `basename`

## INSTALLATION


```bash
#ℹ︎ installation of `basename`
❯ *comes pre-installed*
```


## USECASES

----
#### To


```bash
#ℹ︎ get/print/display filename
❯ basename ~/.config/shell/bat.1
```

    bat.1


```bash
#ℹ︎ get/print/display filename without extension
❯ basename -s .1 shell/bat.1 shell/cat.1   # get/print/display
```

    bat
    cat


```bash
#ℹ︎ get/print/display filename without directory path or extensions
❯ s="/usr/local/cat.tar.xz"; basename ${s/%.*/}
```

    cat


## PROCEDURES

    # ❯ filename PATH   # get/print/display filename without directory path or extensions
    function filename()   # get/print/display filename without directory path or extensions
    {
        local pth=$1
        basename ${pth/%.*/}
    }


## SEE

    basename(1)

## SEEALSO

    dirname(1)

