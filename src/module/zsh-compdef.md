---
status: INCOMPLETE
title: "zsh/complete"
tags: [zsh,zshell,shell,extension,module,completion]
---

# `zsh/complete`

## BRIEF

The `zsh/complete` module makes available several builtin commands which can be used in [user-defined completion widgets](https://zsh.sourceforge.io/Doc/Release/Completion-Widgets.html#Completion-Widgets).

## INSTALLATION


```bash
#ℹ︎ installation of `zsh/complete`
❯ *comes pre-installed*
```



## INIT

    zmodload zsh/complete


## NOTES

### `compinit`

    ❯ compinit [-Ciu] [-d dumpfile]

Options:

    -d dumpfile
        next invocation of compinit will read the dumped file instead of performing a full initialization
    -u
        avoid security check tests and make all files found be used without asking
    -i
        silently ignore all insecure files and directories
    -C
        omit check performed to see if there are new functions, and omit security check entirely

Companions:

- `_compdir`: (variable) directory where completion functions are to be found, if not already in function search path
- `compinit`: (function) initializes the completion system
- `compinstall`: (function) configures aspects of the completion system
- `compdumb`: (function) dumps completion cache data. you can run this after changing completion configuration using `compdef`
- `compaudit`: (function) run security check
- `bashcompinit`: (function) provides compatibility with bash’s programmable completion system. When run it will define the functions, `compgen` and `complete` which correspond to the bash builtins with the same names. It will then be possible to use completion specifications and functions written for bash.
- `compadd`: (function) takes information and feeds it to the core of the completion system
- `compdef`: (function) binds completion functions to commands; defines a completion function OR changes completion configurations.

### Autoloaded completion files

- Completion functions start with `_`.

- Path to directory containing the completion file must be added to `fpath`/`$FPATH`, e.g.:

          fpath=(DIRPATH $fpath)

- Completion functions are defined using one of the following tags:

    - `#compdef …`

        ```bash
        #compdef _FUNCTION CMD
        #compdef "_FUNCTION ARG1 ARG2" CMD
        #compdef _FUNCTION CMD1 CMD2 CMD3
        #compdef _FUNCTION [[-P CMDPATTERN] [-N CMD] ...]
        ```

- You can copy and assign completions of one command, to another:

        ❯ compdef CMD1=CMD2

    This can be useful with command aliases.

- values that a completion can expand to is referred to as a "*completion candidate*".

- `_arguments`:
- `_describe`:
- `_multi_parts`:
- `_values`:
- `_sep_parts`:
- `_regex_arguments`:
- `_regex_words`:
- `_call_program`:

- `_alternative`: takes space separated (single or double quoted) strings of colon separated values, of the following format: `COMPTAG:COMPGROUPNAME:COMPDATA/COMPACTION`:

    Example:

        _alternative \
            "args:basic options:((
                a:’description’
                b:’description’
                c:’description’
            ))" \
        "dirs:userdirs:($userdirs)" \
        "pids:PIDs:($(ps -A -o pid=))" \
        "files:files:_files"
        "files:files:_files"

    - `TAG`: arbitrary words to categories completion
    - `COMPGROUPNAME`: completion results can categorized/grouped. the value of this field will be the name of this category/group of completion values
    - `COMPDATA`/`COMPACTION`: this is the completion data that the user will get to choose from. it can be user provided, as a double parenthesis, containing space or newline separated list of strings, of the form: `VALUE:"DESCRIPTION"`. it can also be the output of a shell script, again within double parenthesis. it can also be the output of builtin completion functions, such as `_files`, which returns current working directory files.

- `_arguments`: takes space separated (single or double quoted) strings of the following format: `OPTNAME[DESCRIPTION]:OPTVALUENAME:OPTVALUEDATA/OPTVALUEACTION` or `N:DESCRIPTION:ACTION`


`ACTIONS`:

- `_files`: (ACTION) returns current working directory files
- `_pids`: (ACTION) returns currently running process pids

## SEEFURTHER

- [🌎 Documentation](https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html)
