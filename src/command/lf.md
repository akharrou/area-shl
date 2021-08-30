---
status: INCOMPLETE
title: "lf"
tags: [visual,file,system,manager,navigator]
---

# `lf`

## INSTALLATION


```bash
#ℹ︎ installation of `lf`
❯ brew install lf
```


## USECASES

----
#### To navigate file system with visual file manager:


```bash
#ℹ︎ navigate files system with visual file manager
❯ lf
```



## EXTRAS

    if [[ ${SHELL##*/} = zsh ]];
    then
        function widget::lf()
        {
            LBUFFER="${LBUFFER}"
            lf
            zle reset-prompt
        }
        zle -N widget::lf
        bindkey $KEY_CMD_P widget::lf
    fi


## NOTES

### Environment Variables

The following variables are exported for shell commands. These are referred with a `$` prefix on POSIX shells (e.g. `$f`), between `%` characters on Windows cmd (e.g. `%f%`), and with a `$env:` prefix on Windows powershell (e.g. `$env:f`).

| Variable   | Desription
| ---------- | ----------
| `f`        | current file selection as a full path
| `fs`       | selected file(s) separated with the value of `filesep`, as full path(s)
| `fx`       | selected file(s) (i.e. `fs`), else current file (i.e. `f`)
| `id`       | ID of the running client
| `PWD`      | present working directory
| `OLDPWD`   | initial working directory
| `LF_LEVEL` | current nesting level when you run lf from a shell spawned inside lf
| `OPENER`   | set to environment variable value, else to `start` in Windows, `open` in MacOS, `xdg-open` in others
| `EDITOR`   | set to environment variable value, else to `vi` on Unix, `notepad` in Windows
| `PAGER`    | set to environment variable value, else to `less` on Unix, `more` in Windows
| `SHELL`    | set to environment variable value, else to `sh` on Unix, `cmd` in Windows

## PATHS

Path | Description
- | -
`~/.config/lf/lfrc` | File containing configurations.
`~/.local/share/lf/files` | File containing selections.
`~/.local/share/lf/marks` | File containing marks.
`~/.local/share/lf/history` | File containing history.

>- To change configurations and data file locations, change the following environment variables: `$XDG_CONFIG_HOME`, `$XDG_DATA_HOME`.

## SEE

    lf(1)
    lf -doc

## SEEALSO

    ranger(1), nnn(1), broot(1), exa(1), tree(1)

## SEEFURTHER

- [🌎 Home](https://pkg.go.dev/github.com/gokcehan/lf)
- [🌎 Repository](https://github.com/gokcehan/lf)
