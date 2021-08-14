---
status: INCOMPLETE
title: "direnv"
tags: [automatically,load,unload,current,directory,environment,variables]
---

# `direnv`

## INSTALLATION


```bash
#ℹ︎ installation of `direnv`
❯ brew install direnv
```


## USECASES

----
#### To manage directory environment:


```bash
#ℹ︎ edit `.envrc`
❯ direnv edit .
```


```bash
#ℹ︎ allow/accept or disallow/deny execution of `.envrc`
❯ direnv [allow|deny] .
```


## RECIPES

----
#### Tutorial example:

    ❯ mkdir ~/my-project
    ❯ cd ~/my-project
    ❯ echo ${FOO-nope}
    nope
    ❯ echo export FOO=foo > .envrc
    .envrc is not allowed
    ❯ direnv allow .
    direnv: reloading
    direnv: loading .envrc
    direnv export: +FOO
    ❯ echo ${FOO-nope}
    foo
    ❯ cd ..
    direnv: unloading
    ❯ echo ${FOO-nope}
    nope


## INIT

    [[ $SHELL = /bin/bash ]] && eval "$(direnv hook bash)"
    [[ $SHELL = /bin/zsh ]] && eval "$(direnv hook zsh)"

## ALIASES

    alias di="echo dotenv_if_exists > .envrc && touch .env && direnv allow ."


## PATHS

Path | Description
- | -
`$XDG_CONFIG_HOME/direnv/direnvrc` | `direnv` configuration file.
`$XDG_CONFIG_HOME/direnv/lib/*.sh` | Third-party extensions to `direnv-stdlib`.
`$XDG_DATA_HOME/direnv/allow` | Records which `.envrc` files have been `direnv` allowed.
`PROJECTROOT/.envrc` | User directory-specific environment configuration file.
`PROJECTROOT/.env` | User directory-specific environment file.

## SEE

    direnv(1)
    direnv-stdlib(1)
    direnv.toml(1)
    direnv-fetchurl(1)

## SEEFURTHER

- [🌎 Documentation](https://github.com/direnv/direnv/wiki)
- [🌎 Repository](https://github.com/direnv/direnv)
- [🌎 Page: Visual-Studio-Code Extension](https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-direnv)
