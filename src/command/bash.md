---
status: TODO
title: "bash"
tags: [unix,shell,command,interpreter,interactive,prompt,script,processor,program]
---

# `bash`

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


```bash
#ℹ︎ installation of `bash` (latest version)
❯ brew install bash
```


## USECASES

----
#### To run commands/scripts in sub-shell:

----
#### To launch login and non-login shells:


```bash
#ℹ︎ launch/run/start bash login shell
❯ bash --login
```

    sourcing /etc/bashrc
    sourcing /etc/profile
    sourcing .bash_profile   # else `.bash_login`, else `.profile`
    ^D
    sourcing .bash_logout
    *logs out*


```bash
#ℹ︎ launch/run/start bash non-login shell
❯ bash
```

    sourcing .bashrc
    ^D
    *exits*

    ❯ sh -l   # sh login shell
    sourcing /etc/bashrc
    sourcing /etc/profile
    sourcing .profile
    ^D
    sourcing .bash_logout
    *logs out*

    ❯ sh   # sh non-login shell
    ^D
    *exits*
    ❯ dash -l
    sourcing /etc/profile
    sourcing .profile
    ^D
    *exits*

    ❯ ksh -l
    sourcing /etc/profile
    sourcing .profile
    ^D
    *exits*


## ALIASES

    BASHRC="$CONFIG/bash/.bash_profile"
    alias bashrc="$EDITOR $BASHRC"
    alias sb="source $BASHRC"


## PATHS

Path | Description
- | -
`/bin/bash` | `bash` executable file location path
`/etc/inputrc` | The system-wide Readline initialization file where you can configure the command line bell-style.
`~/.inputrc` | User Readline initialization file.
`/etc/bashrc` | System-wide login shell environment configuration initialization/startup file.
`/etc/profile` | System-wide login shell environment configuration initialization/startup file. This file is also sourced for the `sh`, `ksh`, and `dash` login shells.
`/etc/profile.d/` | Directory containing initialization/startup files that configure system-wide behavior of specific programs. A loop in `/etc/profile` would source everything within this directory.
`~/.bash_profile` | Preferred user login shell environment configuration initialization/startup file.
`~/.bash_login` | User login shell environment configuration initialization/startup file. This file is sourced in the absence of `~/.bash_profile`.
`~/.profile` | User login shell environment configuration initialization/startup file. This file is sourced in the absence of `~/.bash_profile`, and `~/.bash_login`. Also, this file specifically is also sourced for the `sh`, `ksh`, and `dash` login shells. It can hold the same configurations, which are then also accessible by other shells. Mind that other shells might not understand the Bash syntax.
`~/.bash_logout` | User login shell cleanup/shutdown file, executed when exiting shell. It contains specific instructions for the logout procedure.
`~/.bashrc` | User non-login shell environment configuration initialization/startup file.
`~/.bash_history` | Default bash command history file.

## SEE

    bash(1)

## SEEALSO

    sh(1), zsh(1), tcsh(1)

