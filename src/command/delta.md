---
status: DONE
title: "delta"
tags: [viewer,previewer,get,print,list,display,show,colorized,themed,styled,git,diffs]
---

# `delta`

## INSTALLATION


```bash
#ℹ︎ installation of `delta`
❯ brew install git-delta
```


## USECASES

----
#### To get/print/display colorized `diff` output:


```bash
#ℹ︎ get/print/show/display/view colorized, themed, styled, diffs
❯ diff -u FILE1 FILE2 | delta
```



```bash
#ℹ︎ get/print/show/display/view colorized, themed, styled, diffs
❯ delta FILE1 FILE2
```



## VARIABLES

    export DELTA_PAGER="$PAGER --plain"

## ALIASES

    alias delta="\
        delta \
            --width \$COLUMNS \
            --word-diff-regex='\w+' \
    "


## NOTES

Configuration in global `git` configuration file:

    [delta]
        paging = always
        features = decorations
        max-line-length = 512 # OR: 0
        max-line-distance = 0.6 # OR: 1.0

    [delta "decorations"]
        true-color                    = auto
        side-by-side                  = false
        syntax-theme                  = base16-ocean.dark

        commit-style                  = raw
        commit-decoration-style       = bold yellow box ul
        commit-regex                  = "^commit"

        navigate                      = true # n/N: jump forward/backwards
        navigate-regexp               = "^(commit|Modified:|Added:|Removed:|Renamed:)"
        file-style                    = bold box bright-yellow # "#FFD8A0"
        file-decoration-style         = none
        file-added-label              = "Added:"
        file-modified-label           = "Modified:" # Δ
        file-removed-label            = "Removed:"
        file-renamed-label            = "Renamed:"
        file-copied-label             = "Copied:"
        diff-stat-align-width         = 48

        relative-paths                = true
        hunk-header-style             = syntax file line-number
        hunk-header-decoration-style  = ul
        hunk-header-file-style        = blue italic
        hunk-header-line-number-style = blue italic

        tabs                          = 2
        keep-plus-minus-markers       = false
        inspect-raw-lines             = true
        zero-style                    = syntax # unchanged lines
        whitespace-error-style        = 22 reverse # auto auto
        plus-style                    = syntax "#33691E"
        plus-non-emph-style           = syntax "#33691E"
        plus-emph-style               = bold green 22
        plus-empty-line-marker-style  = normal "#002800"
        minus-style                   = syntax strike "#873232"
        minus-non-emph-style          = syntax strike "#873232"
        minus-emph-style              = bold red 52
        minus-empty-line-marker-style = normal "#3f0001"

        line-numbers                  = true
        line-numbers-plus-style       = bright-green # "#81C784"
        line-numbers-minus-style      = bright-red # "#E57373"
        line-numbers-zero-style       = white # "#D8D8D8"
        line-numbers-left-format      = " {nm:>1} ┊"
        line-numbers-right-format     = " {np:>1} │ "
        line-numbers-left-style       = dim normal
        line-numbers-right-style      = dim normal
        line-buffer-size              = 32

        hyperlinks                    = false
        hyperlinks-commit-link-format = "https://mygitrepo/{commit}/"
        hyperlinks-file-link-format   = "file://{path}" # {path} {line}

Lines:

     1  ⋮ 1  │ unchanged line
     2  ⋮    │ removed line
        ⋮ 2  │ added line

Styles:

    - ANSICOLOR[NAME|CODE] OR "#HEXCODE": foreground, background
    - normal: whatever your terminal does normally
    - auto: whatever `delta` does normally
    - syntax: whatever syntax-highlighting is normally
    - raw: colors unchanged
    - "": do not apply any color/styling
    - box: draw box around text
    - blink
    - bold
    - dim
    - hidden
    - italic
    - reverse
    - strike
    - underline
    - overline
    - omit: remove element from output

## SEE

    delta -h

## SEEALSO

    diff(1), diff-so-fancy

## SEEFURTHER

- [🌎 Repository](https://github.com/dandavison/delta)
