---
status: TODO
title: "fd"
tags: [search,find,get,print,list,matching,files,directories,entries,in,filesystem]
---

# `fd`

## BRIEF

Faster and simpler `find` replacement.

## INSTALLATION


```bash
#ℹ︎ installation of `fd`
❯ brew install fd
```


## USECASES

----
#### To search/find, get/print/display, files/directories, based on file type and regex/glob pattern:


```bash
#ℹ︎ search/find files/directories, matching regex pattern
❯ fd --search-path=PATH --type=TYPE --regex PCRE
```



```bash
#ℹ︎ search/find files/directories, matching glob pattern
❯ fd --search-path=PATH --type=TYPE --glob PATTERN
```


----
#### To search/find files/directories and execute arbitray commands/script on them, individually, or as one whole batch:


```bash
#ℹ︎ execute command for each/individual search results
❯ fd --search-path=PATH --type=TYPE --regex PCRE --exec COMMAND
```



```bash
#ℹ︎ batch execute command on all search results
❯ fd --search-path=PATH --type=TYPE --regex PCRE --exec-batch COMMAND
```



```bash
#ℹ︎ execute shell script for each/individual search results
❯ fd --search-path=PATH --type=TYPE --regex PCRE --exec zsh -c SCRIPT
```


    fd --search-path=PATH --type=TYPE --ignore-case --regex PCRE \
    --exec zsh -c ’
        echo "path:" {}
        echo "basename:" {/}
        echo "parent directory:" {//}
        echo "path without file extension:" {.}
        echo "basename without file extension:" {/.}
    ’


## NOTES

Regarding `--exec` option scripts, the following placeholders are substituted by a path derived from the file search result:

    {}     path
    {/}    basename
    {//}   parent directory
    {.}    path without file extension
    {/.}   basename without file extension

## ENVIRONMENT

Variable | Description
- | -

    ＄NO_COLOR
       Disables colorized output.

    ＄XDG_CONFIG_HOME/fd/ignore
       Global ignore file.

## SEE

    fd(1)

## SEEALSO

    find(1), mdfind(1), locate(1)

## SEEFURTHER

- [🌎 Repository](https://github.com/sharkdp/fd)
- [🌎 Page: Crates ➤ regex (regex syntax)](https://docs.rs/regex/1.0.0/regex/#syntax)
- [🌎 Page: Crates ➤ globset (glob syntax)](https://docs.rs/globset/#syntax)
