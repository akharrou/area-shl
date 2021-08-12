---
status: INCOMPLETE
title: "mdfind"
tags: [spotlight,search,find,get,print,list,matching,metadata,query,files,directories,entries,in,filesystem]
---

# `mdfind`

## BRIEF

Apple’s spotlight search. Searches through entire system, looking for files,
that have metadata information, and/or filename, and/or contents matching the
specified query.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To Spotligt search system for metadata information that matches specified query:


```bash
#ℹ︎ spotlight search, matching only file names
❯ mdfind QUERY
```



```bash
#ℹ︎ spotlight search, matching only file names
❯ mdfind -name FILENAME
```



```bash
#ℹ︎ spotlight search, print total number of matches
❯ mdfind -count QUERY
```



```bash
#ℹ︎ scoped spotlight search, within specified directory
❯ mdfind -onlyin DIR QUERY
```



```bash
#ℹ︎ spotlight search, find standard C library header
❯ mdfind -name stdlib.h
```



```bash
#ℹ︎ spotlight search, find matching metadata author attribute
❯ mdfind "kMDItemAuthor == ’*MyFavoriteAuthor*’"
```



```bash
#ℹ︎ get/print/list all downloaded apps store applications
❯ mdfind kMDItemAppStoreHasReceipt=1
```



## PROCEDURES

    # ❯ sptl   # [Sp]o[tl]ight fuzzy search entire system for matching metadata, filename, contents
    function sptl()   # [Sp]o[tl]ight fuzzy search entire system for matching metadata, filename, contents
    {
        if [[ $# -ne 0 ]]; then
            command mdfind $@ \
            | fzf \
                --multi \
                --preview 'bat {}' \
                --preview-window="nofollow,~3,+{2}+3/2"
            return
        fi
        command mdfind
    }


## SEE

    mdfind(1)

## SEEALSO

    find(1), fd(1), locate(1), mdls(1), mdimport(1), mdutil(1), mds(8)

