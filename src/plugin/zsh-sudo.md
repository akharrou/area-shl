---
status: DONE
title: "zsh/sudo"
tags: [zsh,zshell,shell,plugin,prepend,command,sudo]
---

# `zsh/sudo`

## INSTALLATION


```bash
#ℹ︎ installation of `sudo`
❯ *comes installed with: ohmyzsh*
```


## USECASES

----
#### To quickly prepend `sudo` bring up previous command with `sudo` prepended, or just prepend `sudo` to command-line:

    ❯ cat /etc/sudoers
    cat: /etc/sudoers: Permission denied
    *esc+esc*
    ❯ sudo cat /etc/sudoers


## INIT

    # plugins+=(sudo) # standard ohmyzsh plugin

## PROCEDURES

    __sudo-replace-buffer() {
        local old=$1 new=$2 space=${2:+ }
        if [[ ${#LBUFFER} -le ${#old} ]]; then
            RBUFFER="${space}${BUFFER#$old }"
            LBUFFER="${new}"
        else
            LBUFFER="${new}${space}${LBUFFER#$old }"
        fi
    }

    sudo-command-line() {
        [[ -z $BUFFER ]] && LBUFFER="$(fc -ln -1)"

        # Save beginning space
        local WHITESPACE=""
        if [[ ${LBUFFER:0:1} = " " ]]; then
            WHITESPACE=" "
            LBUFFER="${LBUFFER:1}"
        fi

        # Get the first part of the typed command and check if it's an alias to $EDITOR
        # If so, locally change $EDITOR to the alias so that it matches below
        if [[ -n "$EDITOR" ]]; then
            local cmd="${${(Az)BUFFER}[1]}"
            if [[ "${aliases[$cmd]} " = (\$EDITOR|$EDITOR)\ * ]]; then
                local EDITOR="$cmd"
            fi
        fi

        if [[ -n $EDITOR && $BUFFER = $EDITOR\ * ]]; then
            __sudo-replace-buffer "$EDITOR" "sudoedit"
        elif [[ -n $EDITOR && $BUFFER = \$EDITOR\ * ]]; then
            __sudo-replace-buffer "\$EDITOR" "sudoedit"
        elif [[ $BUFFER = sudoedit\ * ]]; then
            __sudo-replace-buffer "sudoedit" "$EDITOR"
        elif [[ $BUFFER = sudo\ * ]]; then
            __sudo-replace-buffer "sudo" ""
        else
            LBUFFER="sudo $LBUFFER"
        fi

        # Preserve beginning space
        LBUFFER="${WHITESPACE}${LBUFFER}"
    }

    zle -N sudo-command-line

    # Defined shortcut keys to: <Esc+Esc>
    bindkey -M emacs "$KEY_ESC$KEY_ESC" sudo-command-line
    bindkey -M vicmd "$KEY_ESC$KEY_ESC" sudo-command-line
    bindkey -M viins "$KEY_ESC$KEY_ESC" sudo-command-line


## SHORTCUTS

Key | Action
- | -
++esc+esc++ | [Bring up previous command and] prepend `sudo` to command line prompt.

## SEEFURTHER

- [🌎 Repository](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sudo)
