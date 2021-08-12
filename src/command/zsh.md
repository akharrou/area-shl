---
status: TODO
title: "zsh"
tags: [unix,interactive,shell,command,interpreter,prompt,script,processor,program]
---

# `zsh`

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install zsh
```


## USECASES

----
#### To check `zsh` shell information:


```bash
#ℹ︎ check zsh shell version
❯ zsh --version
```


----
#### To list all registered `zle` commands:


```bash
#ℹ︎ list all registered zle commands
❯ zle -al
```


----
#### To start sub-shells:


```bash
#ℹ︎ run/launch/execute login sub-shell
❯ zsh --login
```

    sourcing /etc/zshenv
    sourcing .zshenv
    sourcing $CONFIG/shell/.environment
    sourcing /etc/zprofile
    sourcing .zprofile
    sourcing $CONFIG/shell/.profile
    sourcing /etc/zshrc
    sourcing .zshrc
    sourcing /etc/zlogin
    sourcing .zlogin
    sourcing $CONFIG/shell/.login
    ^D
    sourcing .zlogout
    sourcing $CONFIG/shell/.logout
    sourcing /etc/zlogout
    *exits*


```bash
#ℹ︎ run/launch/execute non-login sub-shell
❯ zsh
```

    sourcing /etc/zshenv
    sourcing .zshenv
    sourcing $CONFIG/shell/.environment
    sourcing /etc/zshrc
    sourcing .zshrc
    ^D
    *exits*

----
#### To make use of defined environment variables:


```bash
#ℹ︎ currently running operating system
❯ echo $OS
```

    OSX


```bash
#ℹ︎ currently running operating system type
❯ echo $OSTYPE
```

    darwin20.0


```bash
#ℹ︎ check which shell is currently running
❯ echo $SHELL
```

    /bin/zsh


```bash
#ℹ︎ check zsh shell version
❯ echo $ZSH_VERSION
```

    5.8


```bash
#ℹ︎ check sub-shell depth level
❯ echo $ZSH_SUBSHELL; (echo $ZSH_SUBSHELL; (echo $ZSH_SUBSHELL))
```

    0
    1
    2


## ALIASES

    ZSHRC="$ZDOTDIR/.zshrc"
    alias zshrc="$EDITOR $ZSHRC"
    alias sz="source $ZSHRC"

## EXTRAS

    if [[ $SHELL = *zsh ]]; then

        unalias run-help
        autoload -U run-help

        # this is necessary because 'w' is a command
        bindkey '^[w' backward-delete-word

        # FIXES TERMINAL KEYS; THIS IS BECAUSE WE HAVE TO REMAP CERTAIN KEY PRESSES IN ITERM SETTINGS SO THAT VIM CAN UNDERSTAND THEM
        bindkey \^U backward-kill-line
        bindkey '^[9' backward-kill-line
        bindkey '^[[1;3C' forward-word
        bindkey '^[[1;3D' backward-word
        bindkey '^[$a' end-of-line
        bindkey '^[0i' beginning-of-line
        bindkey '^[[45;5u' undo
        bindkey '^[z' undo
        bindkey '^[Z' redo

        # bindkey '^[x' cut

        # bindkey '^[c' copy
        # x-copy-region-as-kill () {
        #     zle copy-region-as-kill
        #     print -rn $CUTBUFFER | pbcopy
        # }
        # x-kill-region () {
        #     zle kill-region
        #     print -rn $CUTBUFFER | pbcopy
        # }
        # x-yank () {
        #     zle yank-pop
        #     print $CUTBUFFER | pbcopy
        # }

        # zle -N x-copy-region-as-kill
        # zle -N x-kill-region
        # zle -N x-yank
        # bindkey -e '\ew' x-copy-region-as-kill
        # bindkey -e '^W' x-kill-region
        # bindkey -e '\eC' x-yank

        # bindkey '^[v' paste

        # ! TODO change alt+[left|right] to jump to end|beginning of word, not to next one

        # ctrl+l --> clears the screen
        # alt+l (capslock+l) --> does 'ls' automatically

    fi


## NOTES

### Extension Modules

For zsh extension modules, see files: `./zsh-*`.

## ENVIRONMENT

Variable | Description
- | -
`$OS`| currently running operating system
`$OSTYPE`| currently running operating system
`$SHELL`| path to shell program currently running
`$USER`| currently active user
`$ZSH_VERSION`| version of zsh shell
`$ZSH_SUBSHELL`| value equivalent to the level of sub-shell invoked in (0 indexed).

## PATHS

Path | Description
- | -
📂 `/bin/zsh` | `zsh` executable file location path
📂 `${TMPPREFIX}*` | default is `/tmp/zsh*`
📂 `$ZSH_CUSTOM/plugins/` | zsh installed external plugins folder
📂 `$ZSH_CUSTOM/themes/` | zsh installed external themes folder
📂 `/etc/zshenv` | system wide zsh shell environment initialization/startup file
📂 `/etc/zprofile` | system wide zsh shell profile initialization/startup file
📂 `/etc/zshrc` | system wide zsh shell configuration initialization/startup file
📂 `/etc/zlogin` | system wide zsh shell login setup initialization/startup file
📂 `/etc/zlogout` | system wide zsh shell logout cleanup shutdown file
📂 `$ZDOTDIR/.zshenv` | system user zsh shell environment initialization/startup file
📂 `$ZDOTDIR/.zprofile` | system user zsh shell profile initialization/startup file
📂 `$ZDOTDIR/.zshrc` | system user zsh shell configuration initialization/startup file
📂 `$ZDOTDIR/.zlogin` | system user zsh shell login setup initialization/startup file
📂 `$ZDOTDIR/.zlogout` | system user zsh shell logout cleanup shutdown file

## SEE

    zsh(1)
    zshzle(1)
    zshbuiltins(1)
    zshoptions(1)

## SEEALSO

    sh(1), bash(1), csh(1), tcsh(1)

## SEEFURTHER

- [🌎 Home](https://zsh.sourceforge.io/)
- [🌎 Documentation](https://zsh.sourceforge.io/Doc/Release/)
- [🌎 Repository](https://github.com/zsh-users/zsh)
