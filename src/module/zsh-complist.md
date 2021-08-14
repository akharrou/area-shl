---
status: DONE
title: "zsh/complist"
tags: [zsh,zshell,shell,extension,module,completion]
---

# `zsh/complist`

## BRIEF

The `zsh/complist` module offers three extensions to completion listings:

- [ability to highlight matches in such a list](https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html#Colored-completion-listings)
- [ability to scroll through long lists](https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html#Scrolling-in-completion-listings)
- [a different style of menu completion](https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html#The-zsh_002fcomputil-Module)

## INSTALLATION


```bash
#ℹ︎ installation of `zsh/complist`
❯ *comes pre-installed*
```



## INIT

    zmodload zsh/complist

## VARIABLES

    ZLS_COLORS="no=0:fi=0:di=32:ln=36:pi=31:so=33:bd=44;37:cd=44;37:or=none:mi=none:su=37;41:sg=30;43:tw=30;42:ow=34;43:sa=none:st=37;44:ex=35:lc=\e[:rc=m:tc=0:sp=0:ec=none"

    LISTPROMPT=1


## NOTES

[Format for specifying `ZLS_COLORS`](https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html#Colored-completion-listings) follows the same principle as `LS_COLORS`, i.e `name=value:...`, colon-seperated name, value pairs.

## SEEALSO

    fzf-tab

## SEEFURTHER

- [🌎 Documentation](https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html#The-zsh_002fcomplist-Module)
