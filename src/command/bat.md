---
status: DONE
title: "bat"
tags: [scroll,display,page,print,list,style,highlight,language,files]
---

# `bat`

## BRIEF

Clone of cat(1) with syntax highlighting and Git integration.

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install bat
```


## USECASES

----
#### To display/print file contents:


```bash
#ℹ︎ print/display/list/page file contents
❯ bat FILE ...
```


----
#### To display/print in different ways:


```bash
#ℹ︎ display/print file with grid, and line numbers
❯ bat FILE
```


```bash
#ℹ︎ display/print file without grid, and with line numbers
❯ bat -n FILE
```


```bash
#ℹ︎ display/print plain file, with automatic paging
❯ bat -p FILE
```


```bash
#ℹ︎ display/print plain file, without automatic paging
❯ bat -pp FILE
```


----
#### To display/print file with highlighted line(s):


```bash
#ℹ︎ display/print file with highlighted line(s)
❯ bat --highlight N[:M]
```


----
#### To map a certain file type with a syntax highlighting:

    # Use: `bat --list-languages` to see possible languages

    ❯ bat --map-syntax ".myignore:Git Ignore"

```bash
#ℹ︎ map file type to syntax highlighting
❯ bat -m "HISTORY:Markdown"
```


----
#### To quickly preview all `bat` themes given a target file:


```bash
#ℹ︎ quickly fuzzy preview bat themes
❯ bat --list-themes | fzf -q "Theme: " -d: --preview="bat --theme={2} --color=always FILE"
```


----
#### To add new [.tmTheme formatted] themes:


```bash
#ℹ︎ add new bat highlighting theme
❯ cd "$(bat --config-dir)/themes" && git clone https://github.com/user/repo && /usr/local/bin/bat cache --build
```



## VARIABLES

    export BAT_CACHE_PATH="$CACHE/bat"

    if [[ -r "$CONFIG/bat/config" ]]; then
        export BAT_CONFIG_PATH="$CONFIG/bat/config"
    else
        export BAT_TABS="4"
        export BAT_PAGER="less -IR"
        export BAT_STYLE="header,grid,numbers,snip"
        export BAT_THEME="base16-ocean.dark"
        export BAT_OPTS="\
            --wrap='auto' \
            --italic-text='always' \
            --tabs=${BAT_TABS} \
            --paging='always' \
            --pager='${BAT_PAGER}' \
            --decorations='always' \
            --style='${BAT_STYLE}' \
            --color='always' \
            --theme='${BAT_THEME}' \
            \
            --map-syntax '*.ino:C++' \
            --map-syntax '.ignore:Git Ignore' \
            --map-syntax '*Makefile*:Makefile' \
            --map-syntax 'Pipefile:INI' \
            --map-syntax 'pylintrc:INI' \
            --map-syntax '*.rmd:Markdown' \
            --map-syntax '*.Rmd:Markdown' \
            --map-syntax '*.Rmarkdown:Markdown' \
            --map-syntax '*.markdown:Markdown' \
            --map-syntax 'HISTORY:Markdown' \
            --map-syntax 'VERSION:Markdown' \
            --map-syntax '**/.config/cheat/**/*:Markdown' \
            "
        fi

## PROCEDURES

    # ❯ bat   # regular `bat`; else if no arguments, pass fuzzy search to `bat`
    function bt()   # regular `bat`; else if no arguments, pass fuzzy search to `bat`
    {
        [[ $# > 0 ]] && command bat $@ && return
        fzf --multi \
            --preview="cat {+f} | sed G" \
            --preview-window="50%:right:follow:hidden:wrap" \
        | xargs -r bat
    }


## NOTES

In the `bat` window, you might see: `~`, `-`, and `+` symbols, in the gutter. These symbols show how the file was modified in your `.git` repository: `+` represents added lines, `-` represents deleted lines, and `~` represents changed lines.

## PATHS

Path | Description
- | -
`~/.config/bat/config` | Configuration file.
`~/.config/bat/themes` | External themes.
`~/.cache/bat` | Cache.

## SEE

    bat(1)

## SEEALSO

    cat(1), less(1), more(1), nl(1), pr(1), hexdump(1)

## SEEFURTHER

- [🌎 Repository](https://github.com/sharkdp/bat)
