---
status: INCOMPLETE
title: "ranger"
tags: [visual,file,system,manager,nagivator]
---

# `ranger`

## INSTALLATION


```bash
#ℹ︎ installation of `ranger`
❯ brew install ranger
```


## USECASES

----
#### To navigate file system with visual file manager:


```bash
#ℹ︎ navigate file system with visual file manager:
❯ ranger
```



## EXTRAS

    # if [[ ${SHELL##*/} = zsh ]];
    # then
    #     function widget::ranger-cd()
    #     {
    #         ranger --choosedir=$HOME/.local/tmp/ranger/choosedir < $TTY
    #         LASTDIR=`cat $HOME/.local/tmp/ranger/choosedir`
    #         cd "$LASTDIR"
    #         zle reset-prompt
    #     }
    #     function widget::ranger()
    #     {
    #         LBUFFER="${LBUFFER}"
    #         ranger < $TTY
    #         zle reset-prompt
    #     }
    #     zle -N widget::ranger
        bindkey $KEY_CMD_P widget::ranger
    # fi


## PATHS

Path | Description
- | -
`~/.config/ranger` | Directory containing `ranger` configurations.
`~/.config/ranger/rc.conf` | File containing main configuration file. Set all settings, including visual settings.
`~/.config/ranger/commands.py` | File containing Python scripts that can be run as commands in `ranger`.
`~/.config/ranger/commands_full.py` | File containing Python scripts that can be run as commands in `ranger`.
`~/.config/ranger/scope.sh` | File containing configuration of programs used to preview files on the side.
`~/.config/ranger/rifle.conf` | File containing configurations for determining what program to use to open types of files.

## SEE

    ranger(1)

## SEEALSO

    lf,  nnn(1), broot(1), exa(1), tree(1)

## SEEFURTHER

- [🌎 Home](https://ranger.github.io/)
- [🌎 Documention](https://github.com/ranger/ranger/wiki)
- [🌎 Repository](https://github.com/ranger/ranger)
- [🌎 Page: Luke Smith’s Configurations](https://github.com/LukeSmithxyz/voidrice)
