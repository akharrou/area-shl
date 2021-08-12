---
status: INCOMPLETE
title: "mktemp"
tags: [create,make,temporary,file]
---

# `mktemp`

## INSTALLATION


```bash
#ℹ︎ installation of `mktemp`
❯ *comes pre-installed*
```


## USECASES

----
#### To create/make temporary file:


```bash
#ℹ︎ create/make temporary file
❯ TMPFILE=$(mktemp $TMPDIR/temp.`basename /$0`.XXXXXX) && ls -l $TMPFILE
```

    -rw-------  1 johndoe  staff  0 Jul 28 15:06 /var/folders/xs/vs26qr452dsdx83w7zq_yp100000gn/T//temp.-zsh.9BZnoL

## RECIPES

----
#### Simple uses of `mktemp`:

    1) Script should quit if it cannot get a safe temporary file

        tempfoo=`basename $0`
        TMPFILE=`mktemp /tmp/${tempfoo}.XXXXXX` || exit 1
        echo "program output" >> $TMPFILE

    2) Allow the use of $TMPDIR:

        tempfoo=`basename $0`
        TMPFILE=`mktemp -t ${tempfoo}` || exit 1
        echo "program output" >> $TMPFILE

    3) In this case, we want the script to catch the error itself.

        tempfoo=`basename $0`
        TMPFILE=`mktemp -q /tmp/${tempfoo}.XXXXXX`
        if [ $? -ne 0 ]; then
            echo "$0: Can’t create temp file, exiting..."
            exit 1
        fi


## SEE

    mktemp(1)

## SEEALSO

    mkdir(1), mkfile(8), mkfifo(1)

