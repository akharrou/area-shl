---
status: TODO
title: "shopt"
tags: [bash,shell,set,unset,toggle,control,behavior,options,settings]
---

# `shopt`

## BRIEF

Set and unset shell options. Change the setting of each shell option OPTNAME.  Without any option arguments, list each supplied `OPTNAME`, or all shell options if no OPTNAMEs are given, with an indication of whether or not each is set.

Exit Status: returns success if `OPTNAME` is enabled; fails if an invalid option is given or `OPTNAME` is disabled.

    Bash

    ❯ shopt [-pqsu] [-o] [optname ...]

    Opt.  |  Behavior
    ----  |  --------
    -o    |  restrict OPTNAMEs to those defined for use with `set -o`
    -p    |  print each shell option with an indication of its status
    -q    |  suppress output
    -s    |  enable (set) each `OPTNAME`
    -u    |  disable (unset) each `OPTNAME`

## INSTALLATION


```bash
#ℹ︎ installation of `shopt`
❯ *comes builtin*
```


## USECASES

----
#### To


```bash
#ℹ︎ check/test if bash shell is a login shell
❯ shopt -q login_shell && echo "Login shell" || echo "Not login shell"
```



## SEE

    bash(1)

## SEEALSO

    setopt(zsh), bind(bash), bindkey(zsh)

## SEEFURTHER

- [🌎 Documentation](https://www.gnu.org/software/bash/manual/bash.html#The-Shopt-Builtin)
