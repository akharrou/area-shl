---
status: INCOMPLETE
title: "zsh/powerlevel10k"
tags: [zsh,zshell,shell,theme,prompt,powerlevel10k]
---

# `zsh/powerlevel10k`

## INSTALLATION


```bash
#ℹ︎ installation `powerlevel10k`
❯ git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```



## INIT

    ZSH_THEME="powerlevel10k/powerlevel10k"

    # To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
    [[ ! -f $ZDOTDIR/.p10k.zsh ]] || source $ZDOTDIR/.p10k.zsh

## VARIABLES

    typeset -g POWERLEVEL9K_INSTANT_PROMPT="quiet" # [verbose|quiet|off]
    POWERLEVEL9K_MODE="nerdfont-complete"


## PATHS

Path | Description
- | -
📂 `$ZSH_CUSTOM/themes/powerlevel10k` | Directory containing theme.

## SEEALSO

    starship, zsh-spaceship, zsh-pure, zsh-dracula, zsh-gruvbox

## SEEFURTHER

- [🌎 Repository](https://github.com/romkatv/powerlevel10k)
