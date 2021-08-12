---
status: TODO
title: hexdunmp
tags: [display,file,memory,bytes,format,ascii,binary,decimal,hexadecimal]
---

# `hexdunmp`

## BRIEF

The hexdump utility is a filter which displays the specified files, or the standard input, if no files are specified, in a user specified format (binary, decimal, hexadecimal, ascii).

## INSTALLATION

 
```bash
#ℹ︎ installation
❯ *hexdunmp comes pre-installed*
```


## USECASES

----
#### To preview bytes and human readable characters on the side:


```bash
#ℹ︎ view memory bytes and human readable ascii characters
❯ hexdump -C file
```



## PROCEDURES

    # TODO: add preview; shows file at line of ascii characters
    # ❯ hd   # print/display file memory bytes and human readable ascii characters
    function hd()   # print/display file memory bytes and human readable ascii characters
    {
        if [[ $# -ne 0 ]]; then
            hexdump -C $@ \
            | command bat --file-name "$(file $@ | sed 's/: /\nMime:\n/')" \
            | fzf --multi --header-lines=$(( `file $@ | wc -l | bc` + 4 ))
            return
        fi

        local file=$(fzf)
        if [[ $file ]]; then
            hexdump -C $file \
            | command bat --file-name "$(file $file | sed 's/: /\nMime:\n/')" \
            | fzf --multi --header-lines=$(( `file $file | wc -l | bc` + 4 ))
        fi
    }


## SEE

    hexdump(1)

## SEEALSO

    xxd(1), od(1), hexyl

