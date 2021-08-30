---
status: TODO
title: "man"
tags: [get,print,display,formatted,help,manual,pages]
---

# `man`

## BRIEF

Formats and displays manual pages.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To lookup manual page for a command:


```bash
#ℹ︎ lookup and print/display command/function manual pages
❯ man CMD
```

    ❯ man echo
    ❯ man ls

----
#### To compile Markdown files, into manpage format and read them:


```bash
#ℹ︎ compile/convert markdown source files to manpages format
❯ pandoc --standalone --from=markdown --to=man --output=/tmp/manpage.man SOURCE && man /tmp/manpage.man
```



## VARIABLES

    export MANPATH="/usr/share/man/:$MANPATH"
    export MANPATH="/usr/local/man/:$MANPATH"
    export MANPATH="/usr/local/share/man:$MANPATH"
    # export MANPAGER="sh -c 'col -bx | bat --plain --language=man'"

## ALIASES

    # alias manpaths='echo -e ${MANPATH//:/\\n}'

## PROCEDURES

    function manf()
    {
        if [[ $1 ]]; then
            env MANPAGER="\
                sh -c 'col -bx \
                | bat --style=plain,grid,numbers --language=man'" \
            command man $1 \
            | fzf
        else
            command bat --language=man --style=grid,numbers /dev/stdin \
            | fzf
        fi
    }

    # searches  directories in `$manpath` for man pages whose names contain `$1`
    function manpaths()
    {
        [[ ! -o nonomatch ]] && setopt nonomatch

        if (($# == 0))
        then
            echo $manpath | tr " " "\012"
        else
            for dir in $manpath
            do
                for subdir in $dir/man* $dir/cat*
                do
                    /bin/ls -l $subdir/*$1*
                done
            done |& egrep -v '([Nn]o(t found| such|t a))'
        fi
    }


## PATHS

Path | Description
- | -
`/etc/manpaths[.d/]` | Manual pages path configuration file/directory. This file, and the files in the `.d/` directory, are sourced during the initialization process of login shells.
`/usr/local/man/` | Directory containing system’s manual pages.
`/usr/share/man/` | Directory containing system’s manual pages.
`/usr/local/share/man/` | Directory containg manual pages of unbundled software.

## SEE

    man(1)

## SEEALSO

    cheat

