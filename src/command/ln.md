---
status: DONE
title: "ln"
tags: [create,make,hard,symbolic,soft,files,folders,directories,links]
---

# `ln`

## INSTALLATION


```bash
#ℹ︎ installation of `ln`
❯ *comes pre-installed*
```


## USECASES

----
#### To create hard links:

    ❯ link <source_file> <link_filename>   # create hard links to files/folders

```bash
#ℹ︎ create hard links to files/folders
❯ ln <source_file> <link_filename>
```


----
#### To symbolic (soft) links:


```bash
#ℹ︎ create soft symbolic link to files
❯ ln -s <source_file> <link_filename>
```


```bash
#ℹ︎ create soft symbolic links to folders
❯ ln -s <source_file> ... <link_dirname>
```



## NOTES

A symbolic (soft) link references the name of the original file. A hard link references the contents of the original file as an object. See `symlink(7)`.

## SEE

    ln(1)
    link(1)

## SEEALSO

    symlink(7), stat(1)

