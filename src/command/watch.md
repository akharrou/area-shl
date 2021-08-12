---
status: INCOMPLETE
title: "watch"
tags: [watch,print,display,show,periodically,executed,program,output,terminal,fullscreen]
---

# `watch`

## INSTALLATION


```bash
#ℹ︎ installation of `watch`
❯ brew install watch
```


## USECASES

----
#### To watch, and automatically refresh, command/process/script output, at specified interals:


```bash
#ℹ︎ watch periodically executed/run process/command/script output in full terminal screen
❯ watch --no-title --precise --interval=1 --differences --exec ""
```


You can exit screen on first output change:

    -g, --chgexit
            Exit when the output of command changes.

You can choose how to handle errors:

    -b, --beep
            Beep if command has a non-zero exit.
    -e, --errexit
            Freeze updates on command error, and exit after a key press.

## RECIPIES

----
#### To watch process/command/script output, and send mail on first change:


```bash
#ℹ︎ send mail on process/command/script output change
❯ watch -g -d "ls -l | fgrep joe" && | mail -s "Progress" mailto@example.com <<< "Joe finally did some work."
```


You could loop this for continous mails per change.

----
#### Miscellaneous possibilities:


```bash
#ℹ︎ watch sent mail
❯ watch -n 60 from
```


```bash
#ℹ︎ watch directory content changes
❯ watch -d ls -l
```


```bash
#ℹ︎ watch user owned file changes
❯ watch -d "ls -l | fgrep joe"
```



## VARIABLES

    WATCH_INTERVAL=1   # default refresh interval


## SEE

    watch(1)

## SEEALSO

    tail(1), head(1), wait(1), entr(1), trap

## SEEFURTHER

- [🌎 Repository](https://gitlab.com/procps-ng/procps)
