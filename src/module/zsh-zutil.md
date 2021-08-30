---
status: DONE
title: "zsh/zutil"
tags: [zsh,zshell,shell,extension,module,]
---

# `zsh/zutil`

## INSTALLATION


```bash
#ℹ︎ installation of `zsh/zutil`
❯ *comes installed with: zsh*
```



## INIT

    zmodload zsh/zutil

## EXTRAS

    # -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    # CONFIGURATIONS

    # explanation strings are displayed with the option in a completion listing
    zstyle ':completion:*' verbose yes

    # preview all options, even hidden ones
    zstyle ':completion:*' complete-all yes

    # preview descriptions (i.e completion groups) as `[DESCRIPTION]`
    zstyle ':completion:*:descriptions' format '[%d]'

    # preview messages as `[MESSAGE]`
    zstyle ':completion:*:messages' format '[%d]'

    # preview warnings as `[MESSAGE]`
    zstyle ':completion:*:warnings' format 'No matches for: %d'

    zstyle ':completion:*' group-name
    zstyle ':completion:*' list-colors ${(s.:.)LS_COLORS}

    # -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    # CONTEXT SPECIFIC CONFIGURATIONS

    zstyle ':completion:*:git-checkout:*' sort false # disable sort when completing `git checkout`

    # include hidden files in completions
    # _comp_options+=(globdots)
    # luke config: https://www.youtube.com/watch?v=eLEo4OQ-cuQ


## SEEFURTHER

- [🌎 Documentation](https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html#The-zsh_002fzutil-Module)
