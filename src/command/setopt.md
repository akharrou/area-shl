---
status: TODO
title: "setopt"
tags: [zsh,zshell,shell,options,control,settings]
---

# `setopt`

## SYNTAX

    ❯ setopt [ {+|-}options | {+|-}o option_name ] [ -m ] [ name ... ]

## BRIEF

Set the options for the shell. All options specified either with flags or by name are set.

If no arguments are supplied, the names of all options currently set are printed. The form is chosen so as to minimize the differences from the default options for the current emulation (the default emulation being native zsh, shown as `<Z>` in `zshoptions(1)`). Options that are on by default for the emulation are shown with the prefix no only if they are off, while other options are shown without the prefix no and only if they are on. In addition to options changed from the default state by the user, any options activated automatically by the shell (for example, `SHIN_STDIN` or `INTERACTIVE`) will be shown in the list. The format is further modified by the option `KSH_OPTION_PRINT`, however the rationale for choosing options with or without the no prefix remains the same in this case.

If the `-m` flag is given the arguments are taken as patterns (which should be quoted to protect them from filename expansion), and all options with names matching these patterns are set.

Note that a bad option name does not cause execution of subsequent shell code to be aborted; this is behaviour is different from that of `set -o`. This is because set is regarded as a special builtin by the POSIX standard, but `setopt` is not.

## INSTALLATION


```bash
#ℹ︎ installation of `setopt`
❯ *comes builtin*
```


## USECASES

----
#### To


```bash
#ℹ︎ disable all zsh shell aliases
❯ setopt noaliases
```



## SEE

    zshbuiltins(1)
    zshoptions(1)

## SEEALSO

    bindkey(zsh), shopt(bash)

