---
status: INCOMPLETE
title: "tput"
tags: [get,print,display,set,terminal,description,information,capabilities,colors,positions,lengths]
---

# `tput`

## INSTALLATION


```bash
#ℹ︎ installation of `tput`
❯ *comes pre-installed*
```


## USECASES

----
#### To


```bash
#ℹ︎ get/print/display color range, of specified terminal
❯ tput -T$TERM colors
```

    256


```bash
#ℹ︎ get/print/display long description, of specified terminal
❯ tput -T$TERM longname
```

    xterm with 256 colors


```bash
#ℹ︎ get/print/display current terminal’s short/concise description
❯ echo $TERM
```

    xterm-256color

    ❯ echo $COLUMNS

```bash
#ℹ︎ get/print/display current number of terminal pane columns
❯ tput cols
```

    94

    ❯ echo $LINES

```bash
#ℹ︎ get/print/display current number of terminal pane lines
❯ tput lines
```

    56


```bash
#ℹ︎ ring terminal device bell
❯ tput bel
```



## ENVIRONMENT

Variable | Description
- | -
`$TERM`| Type of current terminal.
`$LINES`| Number of current terminal pane lines.
`$COLUMNS`| Number of current terminal pane columns.

## PATHS

Path | Description
- | -
📂 `/usr/share/terminfo` | Compiled terminal description database.
📂 `/usr/share/tabset` | Tab settings for some terminals.

## SEE

    tput(1)
    terminfo(5)

## SEEALSO

    tty(1), stty(1)

