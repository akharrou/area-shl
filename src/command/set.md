---
status: INCOMPLETE
title: "set"
tags: [set,unset,shell,options,positional,parameters,variables,arguments,values]
---

# `set`

## BRIEF

Set, unset, or change the value of shell options (or attributes) and positional parameters, or display the names and values of shell variables.

Using `+` rather than `-` causes these flags to be turned off. The flags can also be used upon invocation of the shell. The current set of flags may be found in `$-`. The remaining `n` `ARG`s are positional parameters and are assigned, in order, to `$1`, `$2`, `.. $n`. If no `ARG`s are given, all shell variables are printed.

Exit Status: Returns success unless an invalid option is given.

    Bash

    ❯ set [-abefhkmnptuvxBCHP] [-o OPT] [--] [ARG ...]

    Opt.    |  Behavior
    ------  |  --------
    -o OPT  |  Set the variable corresponding to OPT
    -a      |  Mark variables which are modified or created for export
    -b      |  Notify of job termination immediately
    -e      |  Exit immediately if a command exits with a non-zero status
    -f      |  Disable file name generation (globbing)
    -h      |  Remember the location of commands as they are looked up
    -k      |  All assignment arguments are placed in the environment for a
            |  command, not just those that precede the command name
    -m      |  Job control is enabled
    -n      |  Read commands but do not execute them
    -p      |  Turned on whenever the real and effective user ids do not match
            |  Disables processing of the $ENV file and importing of shell
            |  functions. Turning this option off causes the effective uid and
            |  gid to be set to the real uid and gid
    -t      |  Exit after reading and executing one command
    -u      |  Treat unset variables as an error when substituting
    -v      |  Print shell input lines as they are read
    -x      |  Print commands and their arguments as they are executed
    -B      |  the shell will perform brace expansion
    -C      |  If set, disallow existing regular files to be overwritten
            |  by redirection of output
    -E      |  `ERR` trap is inherited by shell functions
    -H      |  Enable `!` style history substitution; default when interactive
    -P      |  do not resolve symbolic links when executing commands
    -T      |  `DEBUG` and `RETURN` traps are inherited by shell functions
    --      |  Assign any remaining arguments to the positional parameters
            |  If there are no remaining arguments, the positional parameters
            |  are unset
    -       |  Assign any remaining arguments to the positional parameters
            |  The -x and -v options are turned off

    Zsh

    ❯ set [-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZadefghiklmnprstuvwxy] [-o OPT] [--] [ARG ...]

    Opt.     |  Behavior
    -------  |  --------
    -0       |  correct
    -1       |  printexitvalue
    -2       |  no-badpattern
    -3       |  no-nomatch
    -4       |  globdots
    -5       |  notify
    -6       |  ognice
    -7       |  ignoreeof
    -8       |  markdirs
    -9       |  autolist
    -A       |  define array with specified name
    -B       |  no-beep
    -C       |  no-clobber
    -D       |  pushdtohome
    -E       |  pushdsilent
    -F       |  no-glob
    -G       |  nullglob
    -H       |  rmstarsilent
    -I       |  ignorebraces
    -J       |  autocd
    -K       |  no-banghist
    -L       |  sunkeyboardhack
    -M       |  singlelinezle
    -N       |  autopushd
    -O       |  correctall
    -P       |  rcexpandparam
    -Q       |  pathdirs
    -R       |  longlistjobs
    -S       |  recexact
    -T       |  cdablevars
    -U       |  mailwarning
    -V       |  no-prompter
    -W       |  autoresume
    -X       |  listtypes
    -Y       |  menucomplete
    -Z       |  zle
    -a       |  allexport
    -d       |  no-globalrcs
    -e       |  errexit
    -f       |  no-rcs
    -g       |  histignorespace
    -h       |  histignoredups
    -i       |  interactive
    -k       |  interactivecomments
    -l       |  login
    -m       |  monitor
    -n       |  no-exec
    -o OPT   |  set specified option
    -p       |  privileged
    -r       |  restricted
    -s       |  sort arguments in descending order
    -t       |  singlecommand
    -u       |  no-unset
    -v       |  verbose
    -w       |  chaselinks
    -x       |  xtrace
    -y       |  shwordsplit

## INSTALLATION


```bash
#ℹ︎ installation of `set`
❯ *comes builtin*
```


## USECASES

----
#### To set/unset options:

    ❯ set -o aliases && set +o aliases

----
#### To set/reset positional parameters:


```bash
#ℹ︎ set shell/script/function positional arguments list parameter values
❯ set -- 01234567890abcdefgh and more && echo $1 $2 $3 && echo $@
```

    01234567890abcdefgh and more
    01234567890abcdefgh and more


## NOTES

Regarding the `-o` option, for `bash` shells:

    allexport    same as -a
    braceexpand  same as -B
    emacs        use an emacs-style line editing interface
    errexit      same as -e
    errtrace     same as -E
    functrace    same as -T
    hashall      same as -h
    histexpand   same as -H
    history      enable command history
    ignoreeof    the shell will not exit upon reading EOF
    interactive-comments
                allow comments to appear in interactive commands
    keyword      same as -k
    monitor      same as -m
    noclobber    same as -C
    noexec       same as -n
    noglob       same as -f
    nolog        currently accepted but ignored
    notify       same as -b
    nounset      same as -u
    onecmd       same as -t
    physical     same as -P
    pipefail     the return value of a pipeline is the status of
                the last command to exit with a non-zero status,
                or zero if no command exited with a non-zero status
    posix        change the behavior of bash where the default
                operation differs from the Posix standard to
                match the standard
    privileged   same as -p
    verbose      same as -v
    vi           use a vi-style line editing interface
    xtrace       same as -x

## SEE

    builtins(1)

## SEEALSO

    setopt(zsh), shopt(bash)

## SEEFURTHER

- [🌎 Documentation](https://www.gnu.org/software/bash/manual/bash.html#The-Set-Builtin)
