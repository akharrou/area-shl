---
status: TODO
title: "bindkey"
tags: [set,unset,print,zsh,keyboard,keys,bindings]
---

# `bindkey`

## BRIEF

Manage `zsh` shell keybindings.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes builtin (with zsh shell)*
```


```bash
#ℹ︎ installation
❯ brew install zsh
```


## USECASES

----
#### To [un]set `zsh` shell keybindings:


```bash
#ℹ︎ set/rebind/overwrite zsh shell keybinding to ctrl+t
❯ bindkey "^T" some-widget
```


```bash
#ℹ︎ set/rebind/overwrite zsh shell keybinding to alt+c
❯ bindkey "\ec" some-widget
```



```bash
#ℹ︎ explicitly unset/unbind/remove/delete zsh shell ctrl+r keybinding
❯ bindkey -r "^R"
```


```bash
#ℹ︎ explicitly unset/unbind/remove/delete zsh shell alt+c keybinding
❯ bindkey -r "\ec"
```


----
#### To print all `zsh` shell keybindings set:


```bash
#ℹ︎ print all set zsh shell keybindings
❯ bindkey
```



## NOTES

To check what signal is being sent by the Terminal emulator program to the shell, you can use `cat`:


```bash
#ℹ︎ get/print/display/check character code signal sent to shell by/from terminal
❯ cat
```

    ^[e^[d^[c^C

## SEE

    bindkey(1)
    zshbuiltins(1)

## SEEALSO

    alias, declare

