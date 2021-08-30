---
status: TODO
title: "iTerm"
tags: [native,macos,application,terminal,emulator]
---

# iTerm

## INSTALLATION


```bash
#ℹ︎ installation of `iTerm`
❯ brew install --cask iTerm2
```


## USECASES

----
#### To execute some terminal shortcuts:


```bash
#ℹ︎ toggle terminal timestamps
❯ <ctrl+alt+cmd+e>
```


```bash
#ℹ︎ pop-up window of recent paths
❯ <alt+cmd+/>
```


----
#### To change terminal login shell:

    ➤ Settings
        ➤ Profiles
            ➤ Command
                ➤ Select "Custom shell"

Then in the text box type the full path to the executable of the desired shell, e.g. one of:

        /bin/zsh
        /bin/bash
        /bin/sh
        /bin/csh
        /bin/tcsh
        /bin/ksh
        /bin/dash
        /usr/local/bin/fish
        ...


## NOTES

| Key sequence         | Binding
| -------------------- | ------
| **Movements**        ||
| `left`               | `^[[D`
| `right`              | `^[[C`
| `shift+left`         | `^[[1;2D`
| `shift+right`        | `^[[1;2C`
| `alt+left`           | `^[b`
| `alt+right`          | `^[f`
| `cmd+left`           | `^[^A`
| `cmd+right`          | `^[^E`
| `cmd+shift+left`     | `^[a`
| `cmd+shift+right`    | `^[e`
| `alt+shift+left`     | `^[[1;10D`
| `alt+shift+right`    | `^[[1;10C`
| `ctrl+shift+left`    | `^[[1;6D`
| `ctrl+shift+right`   | `^[[1;6C`
| `ctrl+shift+a`       | `^[a`
| `ctrl+shift+e`       | `^[e`
| `ctrl+a`             | `^[^A`
| `ctrl+e`             | `^[^E`
| **Command Char**     ||
| `cmd+;`              | `^[…`
| `cmd+[`              | `^[“`
| `cmd+]`              | `^[‘`
| `cmd+\`              | `^[«`
| `cmd+/`              | `^[»`
| cmd+\`               | ^[\`
| `cmd+a`              | `^[å`
| `cmd+b`              | `^[∫`
| `cmd+c`              | `^[ç`
| `cmd+d`              | split pane horizontally
| `cmd+e`              | switch terminal program window
| `cmd+f`              | `^[ƒ`
| `cmd+g`              | `^[©`
| `cmd+h`              | previous tab
| `cmd+i`              | select split pane above
| `cmd+alt+i`          | swap with split pane above
| `cmd+j`              | select split pane on left
| `cmd+alt+j`          | swap with split pane on left
| `cmd+k`              | select split pane on right
| `cmd+alt+k`          | swap with split pane on right
| `cmd+l`              | next tab
| `cmd+m`              | select split pane below
| `cmd+alt+m`          | swap with split pane on below
| `cmd+n`              | new tab with "Main" profile
| `cmd+o`              | `^[ø`
| `cmd+p`              | `^[π`
| `cmd+q`              | quit terminal program
| `cmd+r`              | `^[®`
| `cmd+s`              | `^[ß`
| `cmd+t`              | new tab
| `cmd+u`              | `^[¨`
| `cmd+v`              | paste from clipboard
| `cmd+w`              | close current terminal pane
| `cmd+x`              | `^[≈`
| `cmd+y`              | `^[¥`
| `cmd+z`              | `^[Ω`
| `cmd+shift+a`        | `^[Å`
| `cmd+shift+b`        | `^[ı`
| `cmd+shift+c`        | `^[ç`
| `cmd+shift+d`        | split pane vertically
| `cmd+shift+e`        | `^[´`
| `cmd+shift+f`        | `^[Ï`
| `cmd+shift+g`        | `^[˝`
| `cmd+shift+h`        | `^[Ó`
| `cmd+shift+i`        | `^[ˆ` (was: send text to all terminals)
| `cmd+shift+j`        | scroll one line down
| `cmd+shift+k`        | scroll one line up
| `cmd+shift+l`        | `^[Ò`
| `cmd+shift+m`        | `^[Â`
| `cmd+shift+n`        | new window with "Main" profile
| `cmd+shift+o`        | `^[Ø` (was: open profiles searcher)
| `cmd+shift+p`        | `^[∏`
| `cmd+shift+q`        | logout of computer popup
| `cmd+shift+r`        | `^[‰`
| `cmd+shift+s`        | `^[Í`
| `cmd+shift+t`        | `^[ˇ`
| `cmd+shift+u`        | `^[¨`
| `cmd+shift+v`        | `^[◊`
| `cmd+shift+w`        | close all terminal panes and tabs
| `cmd+shift+x`        | `^[˛`
| `cmd+shift+y`        | `^[Á`
| `cmd+shift+z`        | `^[¸`
| `cmd+shift+;`        | `^[Ú`
| `cmd+shift+[`        | `^[”`
| `cmd+shift+]`        | `^[’`
| `cmd+shift+\`        | `^[q`
| cmd+shift+\`         | ^[\`
| `cmd+shift+,`        | `^[¯`
| `cmd+shift+.`        | `^[˘`
| `cmd+shift+/`        | `^[¿`

>- `^[` is equivalent to `\e` and `\E`, e.g.: `^[a` is the same as `\ea` and `\Ea`.

## SHORTCUTS

Key | Action
- | -
++alt+s++ | remove first level of quotations
++alt+single-quote++ | add one level of quotations

## ENVIRONMENT

Variable | Description
- | -
`$LINES`| number of current terminal window pane vertical lines
`$COLUMNS`| number of current terminal window pane horizontal columns

## PATHS

Path | Description
- | -
`~/.config/iterm2` | Directory containing application configurations.

## BUGS

1. 🐞 Mouse scroll is ignored when iTerm is in focus.

    🔧 Solution #1
    : <space>

        1. Go to:

                ➤ Menubar
                    ➤ iTerm2
                        ➤ Secure Keyboard Entry

        2. Disable it, i.e remove the check mark by clicking on it.

## SEEALSO

    kitty, alacritty, cool-retro-term

## SEEFURTHER

- [🌎 Home](https://iterm2.com/)
- [🌎 Documentation](https://iterm2.com/documentation.html)
- [🌎 Repository](https://github.com/gnachman/iTerm2)
