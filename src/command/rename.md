---
status: INCOMPLETE
title: "rename"
tags: [regex,edit,modify,rename,multiple,files,folders,directories,names]
---

# `rename`

## INSTALLATION


```bash
#ℹ︎ installation of `rename`
❯ brew install rename
```


```bash
#ℹ︎ installation of `rename`
❯ brew install util-linux
```


## USECASES

----
#### To lowercase all files and folders in current directory:


```bash
#ℹ︎ rename files/directories to lowercase characters
❯ rename "y/A-Z/a-z/" *
```


----
#### To replace "sometext" with "replacedby" in all files in current directory:


```bash
#ℹ︎ rename/substitute files/directories, with regex pattern
❯ rename "s/sometext/replacedby/" *
```



## PROCEDURES

    # To prepend formatted date string (e.g. `2021_0217184736`) to all files
    function rename_PrependDate_AllFiles()
    {
        for file in $(find . -type f ! -name '*.DS_Store'); do
            rename "s~${file##*/}~;$(strftime "%Y_%m%d%H%M%S" $(\stat -f %B $file))${file##*/}~" $file
        done
    }

    # To remove prefix date string from all subfiles
    function rename_RemoveDatePrefix_AllFiles()
    {
        rename 's/;\d+_\d+;/;/' **/*
    }


## SEE

    rename(1)

## SEEALSO

    perl(1), mv(1)

## SEEFURTHER

- [🌎 Home](http://plasmasturm.org/code/rename/)
