---
status: INCOMPLETE
title: "cheat"
tags: [create,view,interactive,command,line,cheatsheets]
---

# `cheat`

## BRIEF

Create, collect, view interactive cheatsheets on the command line. It was designed to help remind *nix system administrators of options for commands that they use frequently, but not frequently enough to remember.

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install cheat
```


## USECASES

----
#### To list, create/edit, view cheatsheets:


```bash
#ℹ︎ list cheatsheets
❯ cheat -l
```


```bash
#ℹ︎ create/edit cheatsheets
❯ cheat -e CHEATSHEET
```


```bash
#ℹ︎ view cheatsheets
❯ cheat CHEATSHEET
```


    ❯ cheat -e tar
    ❯ cheat tar


## ALIASES

    alias cht="cheat"


## PATHS

Path | Description
- | -
`~/.config/cheat/cheatsheets/personal` | Personal cheatsheet files location.

## SEE

    cheat -h

## SEEFURTHER

- [🌎 Repository](https://github.com/cheat/cheat)
