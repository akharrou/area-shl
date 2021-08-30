---
status: DONE
title: "exa"
tags: [print,display,list,folders,directories,files]
---

# `exa`

## INSTALLATION


```bash
#ℹ︎ installation of `exa`
❯ brew install exa
```


```bash
#ℹ︎ installation of `exa`
❯ cargo install exa
```


## USECASES

----
#### To list files/directories:


```bash
#ℹ︎ list all files/directories, including hidden/invisibles, including current and parent
❯ exa && exa --all && exa --all --all
```

    file
    .git file
    . .. .git file

----
#### To list files/directories recursively:


```bash
#ℹ︎ list files/directories recursively
❯ exa --recurse --level 1
```


```bash
#ℹ︎ list files/directories recursively as tree hierarchy structure
❯ exa --tree --level 1
```


----
#### To filter and sort listing of files/directories:


```bash
#ℹ︎ list files/directories, filter/ignore by glob pattern matches
❯ exa --ignore-glob="Open*|rot??.sh|*case*"
```



```bash
#ℹ︎ list files/directories, filter/ignore by list `.gitignore` patterns mentioned
❯ exa --git-ignore
```



```bash
#ℹ︎ list files/directories, [reverse] sort by type
❯ exa --sort=type [--reverse]
```


Available sorts:

Value                  | Sort
---------------------- | -----------------------------------------------
`name` or `filename`   | by name, case-insensitively
`Name` or `Filename`   | by name, case-sensitively
`cname` or `cfilename` | by name, case-insensitively and canonically
`Cname` or `Cfilename` | by name, case-sensitively and canonically
`.name` or `.filename` | by name without leading dot, case-insensitively
`.Name` or `.Filename` | by name without leading dot, case-sensitively
`size` or `filesize`   | by size, with smaller files listed first
`ext` or `extension`   | by file extension, case-insensitively
`Ext` or `Extension`   | by file extension, case-sensitively
`mod` or `modified`    | by file modified date, older files listed first
`acc` or `accessed`    | by file accessed date
`cr` or `created`      | by file created date
`inode`                | by file inode
`type`                 | by the type of file (directory, socket, link)
`none`                 | none, and lists files in an arbitrary order

----
#### To list files/directories with extra information (long view):


```bash
#ℹ︎ list files/directories with additional information, metadata, and extended attributes
❯ exa --header --long --extended
```

    Permissions Size User Date Modified Name
    drwxr-xr-x    33 root 31 Jan 18:14 aliases -> postfix/aliases
    drwxr-xr-x  7.2M ben  18 Mar  8:50  image.jpg
    .rwxr-xr-x  3.8M ben  25 May 14:29  song.mp3
                                        ├── com.apple.macl (len 72)
                                        └── com.apple.quarantine (len 57)

Flag                 | Meaning
-------------------- | ---------------------------------------------------
`-h, --header`       | Adds a header row to each column in the table.
`-@, --extended`     | Lists each file’s extended attributes and sizes.
`--color-scale`      | Highlights levels of file size distinctly.
-- | --
`-b, --binary`       | Binary file sizes, with prefixes.
`-B, --bytes`        | Byte file sizes, without any prefixes.
-- | --
`-S, --blocks`       | Lists each file’s filesystem block count.
`-g, --group`        | Lists each file’s group.
`-H, --links`        | Lists each file’s number of hard links.
`-i, --inode`        | Lists each file’s inode number.
`--git`              | Lists each file’s Git status, if tracked.
-- | --
`--time-style=STYLE` | Timestamp format: [default|iso|long-iso|full-iso]
`-t, --time=WORD`    | Timestamp field: [modified|changed,accessed|created]
`-m, --modified`     | Uses the modified timestamp field.
`-u, --accessed`     | Uses the accessed timestamp field.
`-U, --created`      | Uses the created timestamp field.
-- | --
`--no-permissions`   | Suppress the permissions column.
`--no-filesize`      | Suppress the file size column.
`--no-user`          | Suppress the user column.
`--no-time`          | Suppress the time column.


## VARIABLES

    export EXA_STRICT=
    export EXA_GRID_ROWS=9999
    export EXA_ICON_SPACING="2"
    export EXA_COLORS="*=${ANSI_256_FG_WHITE}:fi=${ANSI_256_FG_WHITE}:di=1;${ANSI_256_FG_BRIGHT_MAGENTA}:ex=${ANSI_256_FG_WHITE}:pi=${ANSI_256_FG_WHITE}:so=${ANSI_256_FG_WHITE}:bd=${ANSI_256_FG_WHITE}:cd=${ANSI_256_FG_WHITE}:or=${ANSI_256_FG_WHITE}:ln=${ANSI_256_FG_WHITE}:lp=${ANSI_256_FG_MAGENTA}:or=${ANSI_BOLD};${ANSI_INVERSE};${ANSI_BLINK};${ANSI_STRIKETHROUGH};${ANSI_256_FG_BRIGHT_RED}:bO=${ANSI_BOLD};${ANSI_INVERSE};${ANSI_BLINK};${ANSI_STRIKETHROUGH};${ANSI_256_FG_BRIGHT_RED}:ga=${ANSI_256_FG_GREEN}:gm=${ANSI_256_FG_BLUE}:gd=${ANSI_256_FG_RED}:gv=${ANSI_256_FG_YELLOW}:gt=${ANSI_256_FG_MAGENTA}:da=${ANSI_256_FG_WHITE}:uu=${ANSI_256_FG_WHITE}:un=${ANSI_256_FG_WHITE}:gu=${ANSI_256_FG_WHITE}:gn=${ANSI_256_FG_WHITE}:bl=${ANSI_256_FG_CYAN}:sn=${ANSI_256_FG_BRIGHT_GREEN}:sb=${ANSI_256_FG_BRIGHT_GREEN}:df=${ANSI_256_FG_WHITE}:ds=${ANSI_256_FG_WHITE}:lc=${ANSI_256_FG_MAGENTA}:lm=${ANSI_256_FG_MAGENTA}:ur=${ANSI_BOLD};${ANSI_256_FG_BRIGHT_YELLOW}:uw=${ANSI_BOLD};${ANSI_256_FG_BRIGHT_RED}:ux=${ANSI_BOLD};${ANSI_256_FG_BRIGHT_GREEN}:ue=${ANSI_256_FG_BRIGHT_GREEN}:gr=${ANSI_256_FG_BRIGHT_YELLOW}:gw=${ANSI_256_FG_BRIGHT_RED}:gx=${ANSI_256_FG_BRIGHT_GREEN}:tr=${ANSI_256_FG_BRIGHT_YELLOW}:tw=${ANSI_256_FG_BRIGHT_RED}:tx=${ANSI_256_FG_BRIGHT_GREEN}:su=${ANSI_256_FG_WHITE}:sf=${ANSI_256_FG_WHITE}:xa=${ANSI_256_FG_WHITE}:in=${ANSI_ITALIC};${ANSI_256_FG_WHITE}:hd=${ANSI_256_FG_WHITE}:xx=${ANSI_DIM}:cc=${ANSI_INVERSE}:"

## ALIASES

    # alias l="exa"
    # alias ll="exa --long"
    alias lll="exa --long --extended"

    alias t="exa --tree"
    alias tt="exa --long --tree"
    alias ttt="exa --long --extended --tree"

    alias exa="exa \
        --color=automatic \
        --no-icons \
        --classify \
        \
        --all \
        --ignore-glob='*.DS_Store*|' \
        \
        --sort=type \
        --across \
        --group-directories-first \
        \
        --bytes \
        --blocks \
        --group \
        --links \
        --git \
        --time-style=default \
        --time=modified \
    "


## NOTES

`exa` coloring format: `<two-letter-code|fileglob>=<ansi-code>[:...]`

    256 Colors
    38;5;{ID} -> Set foreground color.
    48;5;{ID} -> Set background color.

    RGB Colors
    38;2;{r};{g};{b} -> Set foreground color as RGB.
    48;2;{r};{g};{b} -> Set background color as RGB.

## ENVIRONMENT

Variable | Description
- | -
`$EXA_COLORS`| Specifies colour scheme used to highlight files. See `exa_colors(5)`.
`$EXA_ICON_SPACING`| Number of spaces to print between an icon and its file name.
`$EXA_GRID_ROWS`| Limits the grid-details view (`exa --grid --long`) so it’s only activated when at least the given number of rows of output would be generated.
`$COLUMNS`| Overrides the width of the terminal, in characters.

## SEE

    exa(1)
    exa_colors(5)

## SEEALSO

    ls(1), tree(1), broot(1), ranger(1), lf, nnn(1),

## SEEFURTHER

- [🌎 Home](https://the.exa.website/)
- [🌎 Repository](https://github.com/ogham/exa)
