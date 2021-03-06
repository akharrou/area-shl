---
status: TODO
title: hexdump
tags: [display,file,memory,bytes,format,ascii,binary,decimal,hexadecimal]
---

# `hexdump`

## BRIEF

The hexdump utility is a filter which displays the specified files, or the standard input, if no files are specified, in a user specified format (binary, decimal, hexadecimal, ascii).

## INSTALLATION

 
```bash
#ℹ︎ installation
❯ *hexdump comes pre-installed*
```


## USECASES

----
#### To preview bytes and human readable characters on the side:


```bash
#ℹ︎ convert/create/make get/print/display stdin/file/string to hex dump
❯ hexdump <(echo -n "Hello, world")
```

    0000000 48 65 6c 6c 6f 2c 20 77 6f 72 6c 64 20 21
    000000e


```bash
#ℹ︎ convert/create/make get/print/display stdin/file/string to hex dump, view memory octets/bytes, with  human readable ascii characters contents
❯ hexdump -C <(echo -n "Hello, world")
```

    00000000  48 65 6c 6c 6f 2c 20 77  6f 72 6c 64 20 21        |Hello, world !|
    0000000e


## PROCEDURES

    # TODO: add preview; shows file at line of ascii characters
    # ❯ hd   # print/display file memory octets/bytes and human readable ascii characters
    function hd()   # print/display file memory octets/bytes and human readable ascii characters
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

