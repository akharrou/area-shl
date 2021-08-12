---
status: INCOMPLETE
title: "pbcopy"
tags: [copy,data,content,to,clipboard]
---

# `pbcopy`

## INSTALLATION


```bash
#ℹ︎ installation of `pbcopy` and `pbpaste`
❯ *comes pre-installed*
```


## USECASES

----
#### To copy data contents to clipboard:


```bash
#ℹ︎ copy text data contents to clipboard
❯ echo "Hello, world" | pbcopy && pbpaste
```

    Hello, world


## PROCEDURES

    clipcopy() {
        # copy from standard input
        pbcopy < "${1:-/dev/stdin}"
    }

    function widget-copybuffer() {
        if which clipcopy &>/dev/null; then
            printf "%s" "$BUFFER" | clipcopy
        else
            echo "Error ($?): 'clipcopy' not found"
        fi
    }
    if [[ $SHELL = *zsh ]]; then
        zle -N widget-copybuffer
        bindkey "^O" widget-copybuffer
    fi


## SEE

    pbcopy(1)

## SEEALSO

    pbpaste(1), pboard(8), pbs(8), osascript(1)

