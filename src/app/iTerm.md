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
📂 `~/.config/iterm2` | Directory containing application configurations.

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
