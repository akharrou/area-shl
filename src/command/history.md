---
status: INCOMPLETE
title: "history"
tags: [get,print,shell,command,history,list,report]
---

# `history`

## BRIEF

    ❯ history [-c] [-d OFFSET] [N]
    ❯ history -awrn [FILENAME]
    ❯ history -ps ARG [ARG...]

Display the history list with line numbers. Lines listed with a `*` have been modified.

    -c
        Clear history list by deleting all of the entries
    -d
        Deletes the history entry at offset `OFFSET`
    N
        List last `N` lines
    -w
        Writes out the current history to the history file
    -r
        Read the file and append the contents to the history list instead
    -a
        Append history lines from this session to the history file
    -n
        Read all history lines not already read from the history file and append them to the history list

If `FILENAME` is given, then that is used as the history file else if `$HISTFILE` has a value, that is used, else `~/.bash_history`.

If the `-s` option is supplied, the non-option `ARG`s are appended to the history list as a single entry. The `-p` option means to perform history expansion on each `ARG` and display the result, without storing anything in the history list.

If the `$HISTTIMEFORMAT` variable is set and not null, its value is used as a format string for `strftime(3)` to print the time stamp associated with each displayed history entry. No time stamps are printed otherwise.

## INSTALLATION


```bash
#ℹ︎ installation of `history`
❯ *comes builtin*
```


## USECASES

----
#### To get/print shell command history:

    ❯ history
    ❯ history | bat
    ❯ history | fzf
    ❯ <alt+r>


## VARIABLES

    HISTFILE="$CACHE/$SHELLNAME/history"
    HISTSIZE=20000
    SAVEHIST=10000


## ENVIRONMENT

Variable | Description
- | -

    ＄HISTFILE
       shell command history file.

    ＄HISTTIMEFORMAT
       time stamp format string (`strftime(3)`)

    ＄HISTSIZE
       maximum lines of history saved

    ＄SAVEHIST
       ?

## SEE

    history(1)

