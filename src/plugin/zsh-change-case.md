---
status: DONE
title: "zsh/zsh-change-case"
tags: [change,command,line,text,touppercase,tolowercase]
---

# `zsh/zsh-change-case`

## USECASES

----
#### To lowercase/uppercase a word:


```bash
#ℹ︎ lowercase words
❯ hello<cmd+1|numpad+1> ---> HELLO
```


```bash
#ℹ︎ uppercase words
❯ HELLO<cmd+2|numpad+4> ---> hello
```



## PROCEDURES

    _mtxr-change-case() {
        local ORIG_CASE=$1
        local DEST_CASE=$2
        local WLEFTCURSOR="${LBUFFER/* /}"
        local WRIGHTCURSOR="${RBUFFER/ */}"
        local CURRENTWORD="${WLEFTCURSOR}${WRIGHTCURSOR}"
        local BEFOREWORD="${LBUFFER:0:($(( $CURSOR - $#WLEFTCURSOR)))}"
        local AFTERWORD="${RBUFFER:($#WRIGHTCURSOR)}"

        CURRENTWORD=$(echo "$CURRENTWORD" | tr "[:$ORIG_CASE:]" "[:$DEST_CASE:]")
        LBUFFER="${BEFOREWORD}${CURRENTWORD}"
        RBUFFER="${AFTERWORD}"
        zle redisplay
    }

    _mtxr-to-upper() {
        zle _mtxr-change-case -- 'lower' 'upper'
    }

    _mtxr-to-lower() {
        zle _mtxr-change-case -- 'upper' 'lower'
    }

    zle -N _mtxr-change-case
    zle -N _mtxr-to-upper
    zle -N _mtxr-to-lower

    bindkey $KEY_ALT_2 _mtxr-to-lower       # iterm keymap: cmd+1 --> 'esc+1'
    bindkey $KEY_ALT_1 _mtxr-to-upper       # iterm keymap: cmd+2 --> 'esc+2'


## SEEFURTHER

- [🌎 Repository](https://github.com/mtxr/zsh-change-case)
