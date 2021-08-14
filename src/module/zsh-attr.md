---
status: DONE
title: "zsh/attr"
tags: [zsh,zshell,shell,extension,module,get,print,display,set,change,edit,modify,list,delete,remove,extended,file,attributes]
---

# `zsh/attr`

## BRIEF

The zsh/attr module is used for manipulating extended attributes. Module builtins are:

- `zgetattr [-h] FILENAME ATTRIBUTE [PARAMETER]`
- `zsetattr [-h] FILENAME ATTRIBUTE VALUE`
- `zdelattr [-h] FILENAME ATTRIBUTE`
- `zlistattr [-h] FILENAME [PARAMETER]`

>- `-h` option causes all commands to operate on symbolic links instead of their targets.

## INSTALLATION


```bash
#ℹ︎ installation of `zsh/attr`
❯ *comes pre-installed*
```



## INIT

    zmodload zsh/attr


## SEEFURTHER

- [🌎 Documentation](https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html#The-zsh_002fattr-Module)
