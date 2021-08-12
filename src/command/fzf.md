---
status: DONE
title: fzf
tags: [general,purpose,command,line,fuzzy,search,finder]
---

# `fzf`

## BRIEF

General-purpose command-line fuzzy finder.

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install fzf
```


## USECASES

----
#### To run `fzf` keyboard bindings:

    # <ctrl+t>   # fuzzy search files; keyboard binding (CHANGED)
    # <ctrl+r>   # fuzzy search command line history; keyboard binding (CHANGED)


```bash
#ℹ︎ fuzzy search files; keyboard binding
❯ <alt+f>
```


```bash
#ℹ︎ fuzzy search current working directory for directories/folders; keyboard binding
❯ <alt+c>
```


```bash
#ℹ︎ fuzzy search command line history; keyboard binding
❯ <alt+r>
```


----
#### To run builtin featured searches:


```bash
#ℹ︎ fuzzy search `ssh` targets
❯ ssh ** <tab>    
```


```bash
#ℹ︎ fuzzy search process to terminate
❯ kill -9 ** <tab>
```

    ❯ unset ** <tab>
    ❯ export ** <tab>
    ❯ unalias ** <tab>

----
#### To [dis|en]able selection of multiple results:


```bash
#ℹ︎ enable multiple selection pf fuzzy search results
❯ fzf -m
```


```bash
#ℹ︎ disable multiple selection pf fuzzy search results
❯ fzf +m
```


----
#### To select results, press `tab` on current selection in results menu list:


```bash
#ℹ︎ fuzzy search file to `rm`, multi-select enabled
❯ rm <ctrl+t>
```


```bash
#ℹ︎ fuzzy search file to `ls`, multi-select enabled
❯ ls <alt+c> 
```

    >
       371/371 (2)
      >img.png    <tab>
       file.pdf
      >script.py  <tab>
       .
       .
       .

    ls img.png script.py

----
#### To run `fzf` in a separate `tmux` pane:


```bash
#ℹ︎ run `fzf` in `tmux` pane on the right
❯ fzf-tmux -r 30%
```


----
#### To extract elements from line with delimiters and field index expressions:


```bash
#ℹ︎ fuzzy search, delimited line, slice (field index expression) selection
❯ echo "yes:no:maybe\nlater:and:more" | fzf -d ":" --with-nth="-2.."
```

    >
     2/2 (0)
    > no:maybe
      and:more

----
#### To create a yes, no menu:


```bash
#ℹ︎ fuzzy menu, disabled search, yes no menu
❯ echo "yes\nno" | fzf --disabled
```

    >
     2/2 (0)
    > yes
      no

----
#### To pass a query, and exit if there are no matches, or if it has only one match:

    ❯ fzf --exit-0 --select-1 -q "Theme: "

----
#### To perform a fuzzy version of `grep`, you can use the `--filter=<query>` option:


```bash
#ℹ︎ fuzzy search grep, with sorting
❯ fzf -f "backup_ .sh$"
```

    scripts/backup_all.sh
    scripts/backup_brain.sh
    scripts/backup_config.sh
    scripts/backup_backups.sh
    scripts/backup_projects.sh

----
#### To specify additional keyboard-keys that complete (end) `fzf` interactive mode, you can use the `--expect=KEY[,...]` option:


```bash
#ℹ︎ add additional keys to complete/terminate fuzzy search
❯ fzf --expect=ctrl-v,ctrl-t,alt-s --expect=f1,f2,~,@
```

    ctrl-v
    .zsh_sessions

Note, on termination with one specified expected keys, `fzf` will print the expected key on first line of output, else an empty line.

----
#### To read/print input/output delimited by ASCII NUL characters instead of newline characters, you can use the `--[read|print]0` options:

----
#### To perform a synchronous multi-staged fuzzy search, effectively filtering down the output:

    ❯ fzf --multi | fzf --sync --multi | fzf --sync
           ^                ^                ^
        stage 1  ---->  stage 2  ------>  stage 3

----
#### To display some content in a preview window, you can use the `--preview` option, and you can configure the preview window with the `--preview-window` option:


```bash
#ℹ︎ preview current line text
❯ fzf --multi --preview="echo {}"
```


```bash
#ℹ︎ preview space-seperated list of selected lines, else current line
❯ fzf --multi --preview="echo {+}"
```


```bash
#ℹ︎ preview zero-based ordinal index of current line
❯ fzf --multi --preview="echo {n}"
```


```bash
#ℹ︎ preview space-seperated list of zero-based ordinal index of selected lines, else current line
❯ fzf --multi --preview="echo {+n}"
```


```bash
#ℹ︎ preview newline-seperated list of zero-based ordinal index of selected lines, else current line
❯ fzf --multi --preview="echo {+n} | xargs -n1"
```


```bash
#ℹ︎ preview newline-seperated list of selected lines, else current line
❯ fzf --multi --preview="cat {+f}"
```


```bash
#ℹ︎ preview arbitrarily scripted newline-seperated list of selected lines, else current line
❯ fzf --multi --preview="cat {+f} | xargs -I % echo %"
```


Available placeholders to use in the `--preview` option command:

    $LINES | preview window lines
    $COLUMNS | preview window columns
    $FZF_PREVIEW_LINES | preview window lines
    $FZF_PREVIEW_COLUMNS | preview window columns

    {} | current line (single-quoted)
    {q} | current query string (single-quoted)
    {n} | zero-based ordinal index of current line
    {f} | path of the temporary file that holds the evaluated list

    {+} | space-separated list of evaluated selected lines, else current line
    {+n} | space-separated list of ordinal index of selected lines, else current line
    {+f} | path of the temporary file that holds the newline-seperated list of evaluated selected lines, else current line

When using the `--delimiter` option with the `{}` placeholder, you can transform the replacement string, by specifying a field index expression between the braces, e.g.:

    {1}      The 1st field
    {2}      The 2nd field
    {-1}     The last field
    {-2}     The 2nd to last field
    {3..5}   From the 3rd field to the 5th field
    {2..}    From the 2nd field to the last field
    {..-3}   From the 1st field to the 3rd to the last field
    {..}     All the fields

----
#### To bind a `key` or an `event` to an `action, use the `--bind=(KEY:ACTION|EVENT:ACTION)[,...]` option:

    ❯ fzf --bind=ctrl-j:accept,ctrl-k:kill-line

----
#### To execute arbitrary script, you can use the `execute[-silent](...)` action, in conjunction with the `--bind` option:

    ❯ !TODO

For asynchronous execution, start your command as a background process (i.e. appending `&`).

----
#### To [dynamically] update the input list of `fzf`, without restarting `fzf`, you can use the `reload(...)` action, in conjunction with the `--bind` option:


```bash
#ℹ︎ dynamically reload fuzzy search input
❯ find * | fzf --prompt "All> " \
```

             --header "CTRL-D: Directories / CTRL-F: Files" \
             --bind "ctrl-d:change-prompt(Directories> )+reload(find * -type d)" \
             --bind "ctrl-f:change-prompt(Files> )+reload(find * -type f)"

You can use the available placeholders.


```bash
#ℹ︎ preview processes
❯ ps -ef | fzf --bind "ctrl-r:reload(ps -ef)" --header "Press CTRL-R to reload" \
```

        --header-lines=1 --layout=reverse

## RECIPES

----
#### To preview list of all selected lines, or if none selected, the current line, in preview window:


```bash
#ℹ︎ preview list of all selected items, or current line
❯ fzf --multi --preview="cat {+f}"
```


The `f` flag refers to the temporary file that contains the selected, and evaluated, line items. and the `+` appends selected lines to the temporary file, instead of just overwriting it. If no selection was made displays line currently on.

----
#### To preview file related information (e.g. contents, head, mime type, stats) on the side, as you scroll through them:


```bash
#ℹ︎ fuzzy search files, preview their contents
❯ ls | fzf --preview="head -$LINES {}"
```



```bash
#ℹ︎ fuzzy search files, preview their contents head, first N lines, on top
❯ ls | fzf --preview="head {}" --preview-window="up,30%"
```



```bash
#ℹ︎ fuzzy search files, preview their file mime type, on top
❯ ls | fzf --preview="file {}" --preview-window="top,1%"
```



```bash
#ℹ︎ fuzzy search files, preview file status, on top
❯ ls | fzf --preview="stat -x {}" --preview-window="top,7"
```


----
#### To preview, with a pager, the file that the current line belongs to, with in context:

    #   +{2}  Base scroll offset extracted from the second field
    #   -5    Subtraction of 5 lines from base scroll offset `{2}`, so pager starts 5 lines above


```bash
#ℹ︎ preview file that current line belongs to, with 5 lines of context above
❯ rg --line-number .+ | fzf --delimiter ":" --preview "bat {1}" --preview-window "+{2}-5"
```


----
#### To preview, with a pager, the file that the current line belongs to, with the current line highlighted and centered in the preview window; additionally the pager displays a fixed header (top 3 lines) that shows the name of the file being previewed:

    #   ~3    Fix the top 3 lines (fix file header, so we can see the file name at all times)
    #   +{2}  Base scroll offset extracted from the second field
    #   +3    Extra offset to compensate for the 3-line header
    #   /2    Put in the middle of the preview area


```bash
#ℹ︎ preview current line, highlighted, and centered, within origin file, with fixed filename header
❯ rg ".+" --line-number | fzf --delimiter ":" --preview "bat --highlight-line {2} {1}" --preview-window "~3,+{2}+3/2"
```


----
#### To [dynamically] change preview window with keybindings/events:


```bash
#ℹ︎ preview window initally hidden, and on key-press preview file contents
❯ fzf --bind "?:preview:cat {}" --preview-window hidden
```


```bash
#ℹ︎ preview window initially empty, and on key-press preview file contents
❯ fzf --bind "?:preview:cat {}"
```


```bash
#ℹ︎ preview file mime type, and on key-press preview file contents
❯ fzf --preview "file {}" --bind "?:preview:cat {}"
```



## INIT

    [[ ! "$PATH" == */usr/local/opt/fzf/bin* ]] &&\
        export PATH="${PATH:+${PATH}:}/usr/local/opt/fzf/bin"

    if [[ $SHELL = *zsh ]]; then
        # [ -f $XDG_CONFIG_HOME/fzf/fzf.zsh ] && . $XDG_CONFIG_HOME/fzf/fzf.zsh
        if [[ $- == *i* ]]; then
            [[ -r /usr/local/opt/fzf/shell/completion.zsh  ]] &&\
                . /usr/local/opt/fzf/shell/completion.zsh 2> /dev/null
            [[ -r /usr/local/opt/fzf/shell/key-bindings.zsh ]] &&\
                . /usr/local/opt/fzf/shell/key-bindings.zsh 2> /dev/null
        fi
    elif [[ $SHELL = *bash ]]; then
        # [ -f $XDG_CONFIG_HOME/fzf/fzf.bash ] && . $XDG_CONFIG_HOME/fzf/fzf.bash
        if [[ $- == *i* ]]; then
            [[ -r /usr/local/opt/fzf/shell/completion.bash ]] &&\
                . /usr/local/opt/fzf/shell/completion.bash 2> /dev/null
            [[ -r /usr/local/opt/fzf/shell/key-bindings.bash ]] &&\
                . /usr/local/opt/fzf/shell/key-bindings.bash 2> /dev/null
        fi
    fi

## VARIABLES

    # UNUSED BINDINGS: the ones w/ `alt--` as a key trigger
    # UNUSED OPTIONS:
    # --nth=N[,..]
    # --with=nth=N[,..]
    # --delimiter=STR
    # --disabled
    # --no-mouse
    # --jump-labels=CHARS
    # --border
    # --min-height=HEIGHT
    # --history=HISTFILE
    # --history-size=1000
    # --filter=STR
    # --expect=KEY

    FZF_COPY_TO_CLIPBOARD_SPACE_SEPERATED_LIST="execute-silent(echo -n {+} | pbcopy)"
    FZF_COPY_TO_CLIPBOARD_NEWLINE_SEPERATED_LIST="execute-silent(cat {+f} | perl -pe \"chomp if eof\" | pbcopy)"

    FZF_DEFAULT_BASE_COMMAND="fd --color=never --hidden --exclude='.git'"
    FZF_DEFAULT_BASE_OPTS="\
        --extended \
        --no-exact \
        -i \
        --literal \
        --algo=v2 \
        --sort \
        --no-tac \
        --tiebreak=begin,end,length,index \
        --multi \
        --cycle \
        --no-keep-right \
        --hscroll \
        --hscroll-off=10 \
        --no-filepath-word \
        \
        --query='' \
        --select-1 \
        --exit-0 \
        --no-print-query \
        --no-read0 \
        --no-print0 \
        --clear \
        --no-sync \
        \
        --no-height \
        --border=rounded \
        --layout=reverse \
        --margin=0,0,0,0% \
        --padding=1,1,1,1% \
        --info=inline \
        --prompt='❯ ' \
        --header='⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻' \
        --pointer='👉🏼' \
        --marker='✔ ' \
        --header-lines=0 \
        \
        --unicode \
        --ansi \
        --tabstop=2 \
        --bold \
        --no-black \
        --color=fg:${HEX_WHITE},fg+:${HEX_WHITE}:regular,bg:${HEX_BLACK},bg+:#343d46,hl:#0dbc79,hl+:#FFEB3B,info:${HEX_DIM},prompt:${HEX_GOLD},pointer:#ef5350,marker:${HEX_GREEN},header:#90CAF9,spinner:${HEX_DIM},preview-fg:${HEX_WHITE},preview-bg:${HEX_BLACK},gutter:${HEX_BLACK},query:${HEX_WHITE}:regular,disabled:${HEX_DIM},border:${HEX_DIM} \
        \
        --preview='cat {+f}' \
        --preview-window='right,50%,nowrap,follow,cycle,hidden,~0,+0-0/1' \
        \
        --bind 'ctrl-c:abort' \
        --bind 'ctrl-g:abort' \
        --bind 'ctrl-q:abort' \
        --bind 'esc:abort' \
        --bind 'enter:accept' \
        --bind 'double-click:accept' \
        --bind 'enter:accept-non-empty' \
        --bind 'double-click:accept-non-empty' \
        \
        --bind 'change:first' \
        --bind 'alt-shift-up:first' \
        --bind 'alt-shift-down:last' \
        --bind 'up:up' \
        --bind 'alt-k:up' \
        --bind 'ctrl-p:up' \
        --bind 'down:down' \
        --bind 'alt-j:down' \
        --bind 'ctrl-n:down' \
        --bind 'page-up:page-up' \
        --bind 'page-down:page-down' \
        --bind 'alt-K:half-page-up' \
        --bind 'alt-J:half-page-down' \
        \
        --bind 'ctrl-n:next-history' \
        --bind 'ctrl-p:previous-history' \
        \
        --bind 'alt-;:preview-up' \
        --bind 'alt-l:preview-down' \
        --bind 'shift-up:preview-up' \
        --bind 'shift-down:preview-down' \
        --bind 'alt-u:preview-half-page-up' \
        --bind 'alt-d:preview-half-page-down' \
        --bind 'alt-::preview-page-up' \
        --bind 'alt-L:preview-page-down' \
        --bind 'alt--:preview-bottom' \
        --bind 'alt--:preview-top' \
        --bind 'alt--:refresh-preview' \
        --bind 'alt-\:toggle-preview-wrap' \
        --bind 'alt-p:toggle-preview' \
        --bind 'ctrl-p:toggle-preview' \
        --bind 'alt-e:toggle-preview' \
        --bind 'alt-enter:execute(bat {+f})' \
        \
        --bind 'ctrl-f:forward-char' \
        --bind 'right:forward-char' \
        --bind 'ctrl-b:backward-char' \
        --bind 'left:backward-char' \
        --bind 'alt-f:forward-word' \
        --bind 'shift-right:forward-word' \
        --bind 'alt-b:backward-word' \
        --bind 'shift-left:backward-word' \
        --bind 'home:beginning-of-line' \
        --bind 'ctrl-a:beginning-of-line' \
        --bind 'ctrl-e:end-of-line' \
        --bind 'end:end-of-line' \
        \
        --bind 'del:delete-char' \
        --bind 'ctrl-d:delete-char/eof' \
        --bind 'ctrl-h:backward-delete-char' \
        --bind 'bspace:backward-delete-char' \
        --bind 'ctrl-h:backward-delete-char/eof' \
        --bind 'bspace:backward-delete-char/eof' \
        --bind 'alt--:kill-word' \
        --bind 'alt-bs:backward-kill-word' \
        --bind 'ctrl-w:unix-word-rubout' \
        --bind 'ctrl-u:unix-line-discard' \
        --bind 'ctrl-k:kill-line' \
        --bind 'ctrl-u:clear-query' \
        \
        --bind 'alt-[:cancel' \
        --bind 'alt-~:clear-screen' \
        --bind 'alt-q:close' \
        \
        --bind 'alt--:disable-search' \
        --bind 'alt--:enable-search' \
        --bind 'alt-0:toggle-search' \
        \
        --bind 'right-click:toggle' \
        --bind 'alt--:toggle+up' \
        --bind 'alt--:toggle+down' \
        --bind 'ctrl-i:toggle-out' \
        --bind 'tab:toggle-out' \
        --bind 'shift-tab:toggle-in' \
        --bind 'alt--:toggle-all' \
        --bind 'alt--:select' \
        --bind 'alt--:deselect' \
        --bind 'alt--:deselect-all' \
        --bind 'alt-a:select-all+accept' \
        --bind 'ctrl-l:clear-selection' \
        \
        --bind 'alt-y:$FZF_COPY_TO_CLIPBOARD_SPACE_SEPERATED_LIST' \
        --bind 'alt-c:$FZF_COPY_TO_CLIPBOARD_NEWLINE_SEPERATED_LIST' \
        --bind 'alt--:yank' \
        \
        --bind 'alt--:jump' \
        --bind 'alt-f:jump-accept' \
        \
        --bind 'alt-i:replace-query' \
        --bind 'alt-o:print-query+$FZF_COPY_TO_CLIPBOARD_NEWLINE_SEPERATED_LIST' \
        \
        --bind 'alt-z:ignore' \
        --bind 'alt-s:toggle-sort' \
        --bind 'alt-?:change-prompt(Help ❯ )+preview()+close+reload(PAGER=less && man fzf)' \
    "

    export FZF_DEFAULT_COMMAND="$FZF_DEFAULT_BASE_COMMAND"
    export FZF_DEFAULT_OPTS="$FZF_DEFAULT_BASE_OPTS \
        --preview-window 'right,50%,nowrap,nofollow,cycle,hidden,~3,+0' \
        --preview '[[ -f {} ]] && bat {} || exa --tree --level 1 {}' \
    "

    export FZF_ALT_C_COMMAND="echo -n on > /tmp/FD_HIDDEN_OPTION; $FZF_DEFAULT_COMMAND --type directory"
    export FZF_ALT_C_OPTS="$FZF_DEFAULT_OPTS \
        \
        --preview-window 'nohidden' \
        --bind 'alt-h:reload(\
            if [[ \$(cat /tmp/FD_HIDDEN_OPTION) == off ]]; then \
                echo -n on > /tmp/FD_HIDDEN_OPTION; \
                fd --color=never --type directory --hidden; \
            else \
                echo -n off > /tmp/FD_HIDDEN_OPTION; \
                fd --color=never --type directory; \
            fi \
        )' \
    "

    INITIAL_QUERY="${*:-}"
    RG_PREFIX="\
        rg \
            --no-config \
            --hidden \
            --glob='!.git' \
            --color=always \
            --no-heading \
            --smart-case \
            --line-number \
            --column \
    "
    export FZF_CTRL_T_COMMAND="$RG_PREFIX $(printf %q "$INITIAL_QUERY")"
    export FZF_CTRL_T_OPTS="$FZF_DEFAULT_OPTS \
        --disabled \
        --query='$INITIAL_QUERY' \
        --delimiter=':' \
        --with-nth='1,3..' \
        --preview-window='top,70%,border-bottom,hidden,nofollow,cycle,~3,+{2}+3/2' \
        --preview='bat \
                    --wrap=character \
                    --terminal-width=\$FZF_PREVIEW_COLUMNS \
                    --file-name {1} \
                    --highlight-line {2} \
                    {1}' \
        --prompt='Regex ❯ ' \
        --bind='change:first+reload(sleep 0.03; $RG_PREFIX {q} || true)'
        --bind=\"alt-':unbind(change,alt-')+change-prompt(❯ )+enable-search+clear-query+first\" \
        --bind='alt-o:execute-silent( code --reuse-window --goto {1}:{2}:{3} )' \
        --bind='alt-enter:execute( bat {1} --highlight-line {2} )' \
        --bind='enter:abort+execute-silent( code --reuse-window --goto {1}:{2}:{3} )' \
    "

    export FZF_TMUX=false   # always run `fzf` in a tmux pane
    export FZF_TMUX_OPTS="$FZF_DEFAULT_OPTS"

## EXTRAS

    if [[ $SHELL = *zsh ]]; then

        # Replace fzf’'s `ctrl+t` binding
        bindkey -r "^T"
        bindkey "\eJ" fzf-file-widget

        # Replace fzf’'s `ctrl+t` binding
        bindkey "^R" history-incremental-pattern-search-backward
        bindkey "\er" fzf-history-widget

    elif [[ $SHELL = *bash ]]; then

        # Replace fzf’'s `ctrl+t` binding
        bind -r "\C-t"
        bind -m emacs-standard -x '"\ev": fzf-file-widget'
        bind -m vi-command -x '"\ev": fzf-file-widget'
        bind -m vi-insert -x '"\ev": fzf-file-widget'

        # Replace fzf’'s `ctrl+t` binding
        bind "'\C-r':reverse-search-history"
        # "\e[A": history-search-backward
        # "\e[B": history-search-forward
        bind -m emacs-standard -x '"\er": __fzf_history__'
        bind -m vi-command -x '"\er": __fzf_history__'
        bind -m vi-insert -x '"\er": __fzf_history__'

        # Fix rebinding issue with `alt-c`
        bind -m emacs-standard '"\C-e": redraw-current-line'
        bind -m emacs-standard '"\ec": " \C-b\C-k \C-u`__fzf_cd__`\e\C-e\C-e\C-m\C-y\C-h\e \C-y\ey\C-x\C-x\C-d"'
        bind -m vi-command '"\ec": "\C-z\ec\C-z"'
        bind -m vi-insert '"\ec": "\C-z\ec\C-z"'
    fi


## NOTES

Legal operators are:

    Syntax    Semantics
    --------  -----------------------------------------------
    !word     excludes `word` exactly-matched, non-fuzzy term
    ’word     includes `word` exactly-matched, " "
    ^word     starts line with exactly-matched `word`, " "
    word$     ends line with exactly-matched `word`, " "
    ’w \ w$   OR operator, conjuncts searches
    \         match literal whitespace character

## PATHS

Path | Description
- | -
📂 `/usr/local/opt/fzf/shell/completion.zsh` | Completions file.
📂 `/usr/local/opt/fzf/shell/key-bindings.zsh` | Key bindings file.

## BUGS

1. 🐞 trying to preview file in a pager, triggered via some `--bind`ing, doesn’t work

    - 🔧 Solution #1

        `fzf` must be the last command in a pipe chain of commands, and its output mustn’t be assigned to a variable. E.g.:

            fzf --bind="alt-enter:execute(bat {})"   # works
            fzf --bind="alt-enter:execute(bat {})" | cat   # doesn’t work
            RET=$(fzf --bind="alt-enter:execute(bat {})")   # doesn’t work

## SEE

    fzf(1)

## SEEALSO

    skim, rg(1), ag(1), fd(1), ranger(1), percol(1), peco
    fzf.vim, fzf-tab

## SEEFURTHER

- [🌎 Documentation](https://github.com/junegunn/fzf/wiki)
- [🌎 Repository](https://github.com/junegunn/fzf)
