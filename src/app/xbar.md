---
status: TODO
title: "xbar"
tags: [menubar,status,bar,display,show,print,script,output]
---

# xbar

## INSTALLATION


```bash
#ℹ︎ installation of `xbar`
❯ brew install --cask xbar
```



## INIT

    # if [[ `uname -s` = *Darwin* ]]; then
    #     if [[ -d $XDG_CONFIG_HOME/xbar/plugins &&\
    #         ! -L $HOME/Library/Application\ Support/xbar/plugins ]]; then
    #         ln -s $XDG_CONFIG_HOME/xbar/plugins $HOME/Library/Application\ Support/xbar/
    #     fi
    #     if [[ -f $XDG_CONFIG_HOME/xbar/xbar.config.json &&\
    #         ! -L $HOME/Library/Application\ Support/xbar/xbar.config.json ]]; then
    #         ln -s $XDG_CONFIG_HOME/xbar/xbar.config.json $HOME/Library/Application\ Support/xbar/xbar.config.json
    #     fi
    # fi


## PATHS

Path | Description
- | -
📂 `~/Library/Application Support/xbar/plugins` | Directory containg installed plugins.

## SEEALSO

    iStat-Menus

## SEEFURTHER

- [🌎 Home](https://xbarapp.com/)
- [🌎 Repository](https://github.com/matryer/xbar)
