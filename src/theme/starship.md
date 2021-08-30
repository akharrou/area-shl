---
status: INCOMPLETE
title: "starship"
tags: [shell,theme,prompt,starship]
---

# `starship`

## INSTALLATION


```bash
#ℹ︎ installation of `starship`
❯ brew install starship
```



## INIT

    export STARSHIP_CONFIG="$CONFIG/starship/config.toml"
    export STARSHIP_CACHE="$CACHE/starship"
    export STARSHIP_SHELL="zsh" # (default: `sh`)

    # precmd hook
    function __starshipPrecmd() {
        echo 🚀
    }

    if [[ ${SHELL##*/} = zsh ]]; then
        ZSH_THEME="starship"
        # precmd_functions+=(__starshipPrecmd)
        eval "$(starship init zsh)"
    elif [[ ${SHELL##*/} = bash ]]; then
        # starship_precmd_user_func="__starshipPrecmd"
        eval "$(starship init bash)"
    elif [[ ${SHELL##*/} = fish ]]; then
        starship init fish | source
    fi


## SEEALSO

    zsh-spaceship, zsh-powerlevel10k

## SEEFURTHER

- [🌎 Home](https://starship.rs/)
- [🌎 Documentation](https://starship.rs/config/)
- [🌎 Repository](https://github.com/starship/starship)
