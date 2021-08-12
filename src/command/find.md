---
status: TODO
title: "find"
tags: [search,find,get,print,list,matching,files,directories,entries,in,filesystem]
---

# `find`

## BRIEF

The `find` utility recursively descends the directory tree for each path listed, evaluating an expression in terms of each file in the tree.

## INSTALLATION


```bash
#ℹ︎ installation of `find`
❯ *comes pre-installed*
```


## USECASES

----
#### To search/find, get/print/display, files/directories, based on file type and regex/glob pattern:


```bash
#ℹ︎ search/find, get/print/display, files/directories, with matching filetype and case-insensitive glob pattern
❯ find SEARCHPATH -type FILETYPE -iname GLOB -print
```



```bash
#ℹ︎ search/find, get/print/display, files/directories, with matching filetype and extended case-insensitive regex pattern
❯ find -E SEARCHPATH -type FILETYPE -iregex ERE -print
```


Other ways to find files:

    # exclude files with specified name
    ❯ find . -type f ! -name "*.DS_Store"

    # find files by octal permission
    ❯ find . -type f -perm 777

    # find files with setuid bit set
    ❯ find . -xdev \( -perm -4000 \) -type f -print0 | xargs -0 ls -l

----
#### To find files with extension ".txt" and look for a string into them:

    ❯ find ./path/ -name "*.txt" | xargs grep "string"

----
#### To find files with size bigger/smaller (`[+|-]`) than `<size>`  giga/mega/kilo bytes (`[G|M|k]`) and sort them by size:

    ❯ find . -size +5M -type f -print0 | xargs -0 ls -Ssh | sort -z

----
#### To find files bigger than 2 Megabyte and list them:

    ❯ find . -type f -size +200000000c -exec ls -lh {} \; | awk "{ print $9 ": " $5 }"

----
#### To find files modified more than 7 days ago and list file information:

    ❯ find . -type f -mtime +7d -ls

----
#### To find symlinks owned by a user and list file information:

    ❯ find . -type l -user <username-or-userid> -ls

----
#### To search for and delete empty directories:

    ❯ find . -type d -empty -exec rmdir {} \;

----
#### To search for directories named build at a max depth of 2 directories:

    ❯ find . -maxdepth 2 -name build -type d

----
#### To search all files who are not in .git directory:

    ❯ find . ! -iwholename "*.git*" -type f

----
#### To find all files that have the same node (hard link) as MY_FILE_HERE:

    ❯ find . -type f -samefile MY_FILE_HERE 2>/dev/null

----
#### To search/find files/directories and execute arbitray commands/script on them, individually, or as one whole batch:


```bash
#ℹ︎ search/find files/directories, execute/run commands on each found
❯ find -E SEARCHPATH -type FILETYPE -iregex ERE \
	-exec echo {} \; \
	-exec basename {} \; \
	-exec dirname {} \;
```



```bash
#ℹ︎ search/find files/directories, execute/run commands/script on each found
❯ find -E SEARCHPATH -type FILETYPE -iregex ERE \
-exec sh -c "
	path={}
	basename=`basename {}`
	dir=`dirname {}`
	pathWithoutExtension=${path%%.*}
	basenameWithoutExtension=`basename $pathWithoutExtension`
	
	echo $path
	echo $pathWithoutExtension
	echo $dir
	echo $basename
	echo $basenameWithoutExtension
" \;
```



```bash
#ℹ︎ search/find files/directories, execute/run commands on found batch
❯ find -E SEARCHPATH -type FILETYPE -iregex ERE \
	-exec echo {} \+ \
	-exec cat {} \+
```


## RECIPES

----
#### To run externally defined shell functions within `-exec` shell scripts:

- `bash`:

        ❯ function fn::processing() {
            echo "Processing..." $1
        }
        ❯ export -f processing
        ❯ find . -name "*.mp3" -exec bash -c "fn::processing \"{}\"" \;
        .
        .
        .

    Filenames that contain spaces need to be quoted, hence: `\"{}\"`.

- `zsh`:

    `zsh` doesn’t have an equivalent export way of doing this. you can however place your function in `.zshenv`, and run a `zsh -c` script. the recommended method however is to store your would-be function code in a separate file and source it, or run it, inside the shell script.


## ALIASES

    # recursively delete `.DS_Store` files
    alias cleandstore="find . -type f -name '*.DS_Store' -ls -delete"

## PROCEDURES

    # ❯ abspaths   # print absolute path of items in directories
    function abspaths()   # print absolute path of items in directories
    {
        echo "$(find "$(pwd)/$1" -type f -maxdepth 1 -not -path '*/\.*' | sort)"
    }

    # function fname()
    # {
    #     find . -iname "*$1*" ${@:2}
    # }

    # function ffile()
    # {
    #     find . -type f -iname "*$1*" ${@:2}
    # }

    # function fdir()
    # {
    #     find . -type d -iname "*$1*" ${@:2}
    # }


## SEE

    find(1)

## SEEALSO

    fd(1), mdfind(1), locate(1)

