---
status: DONE
title: "zsh/fzf-tab"
tags: [zsh,zshell,shell,plugin,replace,tab,completetion,fzf]
---

# `zsh/fzf-tab`

## BRIEF

Replace zsh’s default tab completion selection menu with `fzf`’s search and selection menu.

## INSTALLATION


```bash
#ℹ︎ installation of `fzf-tab`
❯ git clone https://github.com/Aloxaf/fzf-tab ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/fzf-tab
```


## USECASES

----
#### To use `fzf-tab`, just press ++tab++ in autocomplete contexts:

    ❯ ech ++tab++
    ❯ cd ++tab++
    ❯ ps ++tab++
    ❯ pkill ++tab++
    ❯ ssh ++tab++


```bash
#ℹ︎ disable fzf-tab and fallback to compsys
❯ disable-fzf-tab
```


```bash
#ℹ︎ enable fzf-tab
❯ enable-fzf-tab
```


```bash
#ℹ︎ toggle the state of fzf-tab. ?
❯ toggle-fzf-tab
```



## INIT

    plugins+=(fzf-tab)

## VARIABLES

    FZF_TAB_GROUP_COLORS=(
        $'\033[94m' $'\033[32m' $'\033[33m' $'\033[35m' $'\033[31m' $'\033[38;5;27m' $'\033[36m' $'\033[38;5;100m' $'\033[38;5;98m' $'\033[91m' $'\033[38;5;80m' $'\033[92m' $'\033[38;5;214m' $'\033[38;5;165m' $'\033[38;5;124m' $'\033[38;5;120m'
    )

## EXTRAS

    zstyle ':fzf-tab:*' fzf-command 'fzf'
    zstyle ':fzf-tab:*' fzf-pad 1000 # fzf window length
    zstyle ':fzf-tab:*' continuous-trigger "/" # [/|tab|'|...]
    zstyle ':fzf-tab:*' continuous-trigger "'" # [/|tab|'|...]
    zstyle ':fzf-tab:*' continuous-trigger "\"" # [/|tab|'|...]
    zstyle ':fzf-tab:*' continuous-trigger ":" # [/|tab|'|...]
    zstyle ':fzf-tab:*' continuous-trigger "tab" # [/|tab|'|...]
    zstyle ':fzf-tab:*' accept-line alt-enter
    zstyle ':fzf-tab:*' print-query alt-o
    zstyle ':fzf-tab:*' query-string prefix input first

    zstyle ':fzf-tab:*' default-color $'\033[37m'
    zstyle ':fzf-tab:*' group-colors $FZF_TAB_GROUP_COLORS
    zstyle ':fzf-tab:*' show-group full # [full|brief|none]
    zstyle ':fzf-tab:*' single-group header # [prefix|color|header]
    zstyle ':fzf-tab:*' switch-group 'alt-"' "alt-'" # [,|.|'|/|...]
    zstyle ':fzf-tab:*' prefix '· '$'\033[37m' # item list prefix

    zstyle ':fzf-tab:complete:*' fzf-flags \
        '--no-exact' \
        '-i' \
        '--multi' \

    zstyle ':fzf-tab:complete:*' fzf-bindings \
        'ctrl-v:close+close+execute-silent({_FTB_INIT_}code "$realpath")' \
        'alt-;:toggle-out' \
        'shift-tab:toggle-out' \
        # 'tab:accept' \

    # -- Context specific -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    zstyle ':fzf-tab:complete:cd:*' popup-pad 30 0
    zstyle ':fzf-tab:complete:cd:*' fzf-preview '/usr/local/bin/exa --icons --classify -aT -L 1 -s=type $realpath'
    zstyle ':fzf-tab:complete:cd:*' fzf-flags \
        '--preview-window=right,50%,wrap,nofollow,cycle,nohidden,~1' \

    zstyle ':fzf-tab:complete:git:*' fzf-preview ''
    zstyle ':fzf-tab:complete:git:*' fzf-flags \
        '--preview-window=right,50%,wrap,nofollow,cycle,hidden' \


## PATHS

Path | Description
- | -
`~/.oh-my-zsh/custom/plugins/fzf-tab` | Directory containing plugin.

## SEEALSO

    fzf, fzf.vim, autojump

## SEEFURTHER

- [🌎 Documentation](https://github.com/Aloxaf/fzf-tab/wiki)
- [🌎 Repository](https://github.com/Aloxaf/fzf-tab)
