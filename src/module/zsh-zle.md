---
status: DONE
title: "zsh/zle"
tags: [zsh,zshell,shell,extension,module,]
---

# `zsh/zle`

## BRIEF

- `bindkey`
- `vared`

## INSTALLATION


```bash
#ℹ︎ installation of `zsh/zle`
❯ *comes installed with: zsh*
```


## RECIPES

----
#### To create a `zsh` widget:

    function widget::FUNCTION() {
        .
        .
        .
        local ret=$?
        return $ret
    }
    zle -N widget::FUNCTION
    bindkey "KEY" widget::FUNCTION


## INIT

    zmodload zsh/zle

## VARIABLES

    # wait for keypress timeout (in seconds); default: 0.4
    KEYTIMEOUT=0.4


## NOTES

- `zle accept-line`
- `zle reset-prompt`

(Eight) initial keymaps:

    Keymap   Role
    -------  -------------------------------
    emacs    EMACS emulation
    viins    vi emulation - insert mode
    vicmd    vi emulation - command mode
    viopp    vi emulation - operator pending
    visual   vi emulation - selection active
    isearch  incremental search mode
    command  read a command name
    .safe    fallback keymap

## SEEFURTHER

- [🌎 Documentation](https://zsh.sourceforge.io/Doc/Release/Zsh-Line-Editor.html)
