---
status: INCOMPLETE
title: "zsh/compdef"
tags: [zsh,zshell,shell,extension,module,completion]
---

# `zsh/compdef`

## BRIEF

The `zsh/compdef` module makes available several builtin commands which can be used in [user-defined completion widgets](https://zsh.sourceforge.io/Doc/Release/Completion-Widgets.html#Completion-Widgets).

## INSTALLATION


```bash
#ℹ︎ installation of `zsh/compdef`
❯ *comes pre-installed*
```


## RECIPES

----
#### To


```bash
#ℹ︎ get/print/display all completion funcs/functions
❯ for command completion in ${(kv)_comps:#-*(-|-,*)}
do
    printf "%-32s %s\n" $command $completion
done | sort
```


## GUIDE

----
#### To create a [completion widget](https://zsh.sourceforge.io/Doc/Release/Completion-Widgets.html):

*Completion widgets* are widget functions that can run builtin completion functions. Another way to understand them, is that they are completion functions that can be triggered/called via shell keybindings.

```zsh
_complete-remotes () {
  case $words[1] in
    git) load_helper_functions _git; __git_remotes;;
    *) _hosts;;
  esac
}
compdef -k _complete-remotes complete-word ’^[r’
```

>- the above code binds `alt+r` to complete git remote names when on a git command line, and host names elsewhere
>- `complete -k WIDGETFUNC KEYSEQUENCE` registers the widget function `WIDGETFUNC` as a completion widget, which allows it to run completion builtins, and binds it to the keybinding `KEYSEQUENCE` (e.g. `^[r`, i.e `alt+r`)

----
#### To create a [completion function](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#Functions-4):

----
#### To create an [autoloadable completion file](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#Autoloaded-files):

I.e create files that add auto-completion for a specific command, and a file automatically gets loaded into `zsh` on shell startup:

1. Pick a name for your completion file, and create the file

    - it must start with underscore `_`
    - it will become the name of the completion function that will be binded to the desired command

    >- what will effectively happen is that a function will be created, whose name will be the name of the file, and whose definition will be the content of the file.

1. Add `#compdef` tag to the first line of the file:

    ```zsh
    #compdef NAME ...
    ```

    ...where `NAME` is one of:

    - name of a command
    - a special context in the form `-context-`

    This will effectively cause the completion function to be binded to a specified command.

    ```zsh
    #compdef "_FUNCTION ARG1 ARG2" CMD
    ```

    ```zsh
    #compdef _FUNCTION CMD1 CMD2 CMD3
    ```

    ```zsh
    #compdef _FUNCTION [[-P CMDPATTERN] [-N CMD] ...]
    ```

1. Add path of directory containing the completion file to: `$fpath` or `$_comdpir` arrays:

    ```zsh
    fpath=(DIRPATH $fpath)
    # OR
    _comdpir=(DIRPATH $_comdpir)
    ```

4. Bind completion function to command:

    >- you can copy and assign completions of one command, to another:
    >
    >       ❯ compdef DSTCMD=SRCCMD

!!! info "Notes"

    - if after creating or editing an autoloadable completion file, something doesn’t seem to work, then you can try:

        - running `❯ compdump`
        - running `❯ unfunction _COMPFUNC && autoload -U _COMPFUNC`, where `COMPFUNC` is the completion function that isn’t working
        - manually deleting the completion dump file

----
#### To quickly reload completion functions for debugging purposes:

```zsh
function reloadzcomp() {
  local f
  f=($ZDOTDIR/completions/*(.))
  unfunction $f:t 2> /dev/null
  autoload -U $f:t
}
```


## INIT

    # zmodload zsh/compdef

## PROCEDURES

    # reload completion functions for quick debugging
    function reloadzcomp()
    {
        local f
        f=($ZDOTDIR/completions/*(.))
        unfunction $f:t 2> /dev/null
        autoload -U $f:t
    }


## NOTES

### Completion System

| Object | Description
| - | -
| **Function** ||
| `compinit` | initializes completion system
| `compinstall` | configures aspects of the completion system
| `compdef` | binds completion functions to commands; can also be used to make completion configuration changes.
| `compadd` | takes information and feeds it to the core of the completion system.
| `compaudit` | run security check.
| `compdumb` | dumps completion cache data. you can run this after changing completion configurations.
| `bashcompinit` | provides compatibility with `bash`’s programmable completion system. When run it will define the functions, `compgen` and `complete` which correspond to the bash builtins with the same names. It will then be possible to use completion specifications and functions written for bash.
| **Variable** ||
| `_compdir` | (array) contains directory paths where completion functions are to be searched and found, if not already in function search path, i.e in `$fpath`.

<!-- *completion candidate*
:   Values that a completion can expand to. -->

<!-- completer functions
:   functions that generate completion matches -->

<!-- tags
:   represents different types of matches -->

#### `compinit`

Initializes the completion system.

    ❯ compinit [-Ciu] [-d dumpfile]

| Option | Meaning
| - | -
| `-d dumpfile` | next invocation of compinit will read the dumped file instead of performing a full initialization
| `-u` | avoid security check tests and make all files found be used without asking
| `-i` | silently ignore all insecure files and directories
| `-C` | omit check performed to see if there are new functions, and omit security check entirely

#### `compdef`

#### `compadd`

`compadd` is the core low level builtin command that is responsible for actually controlling and adding all completions. It is this function that all other completion functions call under the hood.

```zsh
compadd [ -akqQfenUl12C ] [ -F array ]
        [-P prefix ] [ -S suffix ]
        [-p hidden-prefix ] [ -s hidden-suffix ]
        [-i ignored-prefix ] [ -I ignored-suffix ]
        [-W file-prefix ] [ -d array ]
        [-J group-name ] [ -X explanation ] [ -x message ]
        [-V group-name ] [ -o [ order ] ]
        [-r remove-chars ] [ -R remove-func ]
        [-D array ] [ -O array ] [ -A array ]
        [-E number ]
        [-M match-spec ] [ -- ] [ words ... ]
```

| Option | Meaning
| - | -
| `-i ignored-prefix`<br>`-P prefix`<br>`-p hidden-prefix` | three levels of prefixes, inserted in order: `-i`, `-P`, `-p`; e.g.: `-i pre1/ -S pre2/ -I pre3/` -> `pre1/pre2/pre3/MATCH`
| `-s hidden-suffix`<br>`-S suffix`<br>`-I ignored-suffix` | three levels of suffixes, inserted in order: `-s`, `-S`, `-I`; e.g.: `-s /suf1 -S /suf2 -I /suf3` -> `MATCH/suf1/suf2/suf3`
| `-a` | words are taken as names of arrays (e.g. `foo`, `foo[2,-1]`) and the possible matches are their values
| `-k` | words are taken as names of associative arrays (e.g. `foo`, `foo[(R)*bar*]`) and the possible matches are their keys
| `-o ORDER` | sets order in which matches are sorted. `ORDER` is one of:<br><br>`match`: determined by match strings<br>`nosort`: preserves order in which they are given<br>`numeric`: sorts numerically, rather than lexicographically<br>`reverse`: reverses sort order
| `-X/x EXPLANATION` | `EXPLANATION` is printed above currently selected completion list. `-x`, additionally causes `EXPLANATION` to be printed even if there are no matches in the group.
| ...TODO ||

### Completion Functions

There are three kinds of things that can have completions generated for them:

- commands: a command’s arguments (e.g. `12`, `file.txt`), options (e.g. `-f`, `--format=`), and option arguments (or values, e.g. `-f FMT`,  `-fFMT`, `--format=FMT`)
- word lists: a character separated list of individual words, e.g.: `foo,bar,baz`, `foo,bar=2,baz=file.txt`, `02:A3:23:09`, that effectively form a single long word
- values: a word representing e.g. a user, group, file, pid, shell option, shell parameter.

The following table presents the *completion system’s [utility] functions*, for completing each kind of thing:

| Function | Description |
| - | -
| **Command Completion** ||
| [`_describe`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fdescribe) | Used for creating simple completions consisting of words with descriptions (but no actions)
| [`_alternative`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005falternative) | Can be used to generate completion candidates from other utility functions or shell code.
| [`_arguments`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005farguments) | Used to specify how to complete individual options & arguments for a command with unix style options.
| [`_regex_arguments`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fregex_005farguments) | Creates a function for matching commandline arguments with regular expressions, and then performing actions/completions.
| [`_regex_words`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fregex_005fwords-_005b-_002dt-term-_005d) | Creates a function for matching commandline arguments with regular expressions, and then performing actions/completions.
| [`_gnu_generic`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fgnu_005fgeneric) | Can be used to complete options for commands that understand the `--help` option.
| **Word-List Completion** ||
| [`_values`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fvalues) | Used for completing arbitrary keywords (values) and their arguments, or comma separated lists of such combinations.
| [`_multi_parts`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fmulti_005fparts) | Used for completing multiple parts of words separately where each part is separated by some char, e.g. for completing partial filepaths: `/u/i/sy` -> `/usr/include/sys`
| [`_sep_parts`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fsep_005fparts) | Like `_multi_parts` but allows different separators at different parts of the completion.
| **Value Completion** ||
| [`_path_files`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fpath_005ffiles) | generates completion list of file paths
| [`_files`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005ffiles) | calls `_path_files` with all options except `-g` and `-/`
| `_dirs` |
| `_users` | generates completion list of user names
| `_groups` | generates completion list of group names
| [`_options`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005foptions) | generates completion list of the names of shell options
| [`_parameters`](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fparameters) | generates completion list of the names of shell parameters/variables (can restrict to those matching a pattern)
| `_pids` | generates completion list of currently running process IDs (pids)
| `_net_interfaces` | generates completion list of network interface names
| `_hosts` | generates completion list of network interface names
| `_ports` | generates completion list of network interface names
| `_port` | generates completion list of network interface names
| **Debugging** ||
| `_complete_help` | displays information about context names, tags, and completion functions used when completing at the current cursor position
| `_complete_help` | as above but displays even more information
| `_complete_debug` | performs ordinary completion, but captures in a temporary file a trace of the shell commands executed by the completion system


#### `_describe`

Generates a single completion list for the current argument, based on the specified array(s).

```zsh
❯ _describe -t TAG MESSAGE ARRAY1 [-- ARRAY2] ...
```

| Option | Meaning
| - | -
| `-t TAG` | with `-t`, a tag can be specified; default is `values` or, if the `-o` option is given, `options`. used in place of context with `zstyle`, to match it.
| `DESCR` | aka `MESSAGE`, string displayed above completion list, describing completion list candidates
| `ARRAY` | name of an array containing completion candidates (values), as strings of the form; `CANDIDATE`, or `CANDIDATE:EXPLANATION`, e.g.: `foo`, and/or `foo:explanation of foo`.

>- literal colons in completion may or may not required to be quoted with a backslash: `a\:description`.
>- `ARRAY2` may need to have the same number of elements as `ARRAY1`

Example:

=== "Single array"

    ```zsh
    #compdef cmd
    local -a cmdarray=(
        ’generator’
        ’compiler:run compiler’
    )
    _describe -t "commands" "command" cmdarray
    ```

    ```zsh
    ❯ cmd <tab>
    [command]
    compiler   -- run compiler
    generator
    ```

=== "Multiple arrays"

    ```zsh
    #compdef cmd
    local -a arr1=(
        ’a’
        ’b:explanation of b’
    )
    local -a arr2=(
        ’c:explanation of c’
        ’d:explanation of d’
    )
    local -a arr3=(
        ’e:explanation of e’
        ’f:explanation of f’
    )
    _describe -t "commands" "command" arr1 -- arr2 -- arr3
    ```

    ```zsh
    ❯ cmd <tab>
    [command]
    a
    b  -- explanation of b
    c  -- explanation of c
    d  -- explanation of d
    e  -- explanation of e
    f  -- explanation of f
    ```

#### `_alternative`

    ❯ _alternative [-O NAME] [-C NAME] SPEC ...

Generates alternative, i.e different but equally possible, completion lists for the current argument, based on the specified `SPEC`(s).

| Option | Meaning
| - | -
| `-o NAME` | same way as by the `_arguments` completion function
| `-C NAME` | give a different name for the argument context field
| `SPEC` | same as for `_arguments` completion function

>- accepted `ACTION`s are those accepted by the `_arguments` completion function, excluding the `->STRING` and `=...` forms.

Example:

```zsh
_alternative \
    "args:options:((
        a:’description and more’
        b:’description and more’
        c:’description and more’
    ))" \
    "dirs:userdirs:($userdirs)" \
    "pids:PIDs:($(ps -A -o pid=))" \
    "files:files:_files"
```

```zsh
❯ cmd <tab>
[options] [userdirs] [PIDs] [files]
a  -- description and more
b  -- description and more
c  -- description and more
/Library/WebServer
/var/db/analyticsd
/var/db/appinstalld
/var/db/applepay
/var/db/appstore
/var/db/astris
.
.
.
```

... and the equivalent using `_arguments`:

```zsh
_arguments \
    "::options:((
        a:’description and more’
        b:’description and more’
        c:’description and more’
    ))" \
    "::userdirs:($userdirs)" \
    "::PIDs:($(ps -A -o pid=))" \
    "::files:_files"
```

#### `_arguments`

    ❯ _arguments [-nswWCRS] [-A PAT] [-O NAME] [-M MATCHSPEC] [:] SPEC ...
    ❯ _arguments [OPT ...] -- [-l] [-i PATS] [-s PAIR] [HELPSPEC ...]

| Option | Meaning
| ---- | -------
| `-s` | enable option stacking for single-letter options, e.g.: `-xyz`, as opposed to the default `-x -y -z`. applies only to single hyphen options.
| `-S` | drop completion after `--` in command line, and ignore the `--`.
| `-C` | tells `_arguments` to modify and set the `$curcontext` parameter, for an action of the form `->STRING`, to the string value of the form: `:complete:COMMAND:$context`.<br><br>Where `$context` is a different value depending on where cursor is positioned on the command-line (i.e before or after certain arguments/options), but always a string of the form: `argument-N`, `option-OPTNAME-N`, or `rest`. But the actual `$context` parameter itself, when accessed will return an empty array.<br><br>`COMMAND` is the shell command for which completion is being produced.
| `-O NAME` | pass elements of array `NAME` as arguments to the functions called to execute `ACTION`s
| `-A PAT` | Do not complete options after the first non-option argument on the line. `PAT` is a pattern matching all strings which are not to be taken as arguments.
| `SPEC` | specification of a command-line option or argument completion candidate

`SPEC` (specification) is:

| Form | Meaning
| ---- | -------
| **`SPEC` is one of:** ||
| **(Non-Option) Argument `SPEC`** *(e.g. files, pids)* ||
| `N:MESSAGE:ACTION`<br>`N::MESSAGE:ACTION` | the `N`’th (mandatory/optional) argument<br><br>`N` means this option is, and will only appear in completions list if the cursor is at, the `N`’th positional argument on the command-line. `:` (one colon preceding `MESSAGE`) means option is mandatory, `::` (two colons) means option is optional.
| `:MESSAGE:ACTION`<br>`::MESSAGE:ACTION` | the NEXT (mandatory/optional) argument<br><br>`:MESSAGE` means this is mandatorily the next argument to be specified on the command-line. `:` (one colon preceding `MESSAGE`) means option is mandatory, `::` (two colons) means option is optional.
| `*:MESSAGE:ACTION`<br>`*::MESSAGE:ACTION`<br>`*:::MESSAGE:ACTION` | the REST of the arguments<br><br>`*` indicates that once all positional/next `SPEC` arguments and options have been delt with, this `SPEC` may be repeated, in the completion candidates list, indefinitely, it is the `SPEC` for the "rest [of the] arguments" (e.g. to provide an arbitrary number of files, like in the case of `cat`)<br><br>`::` (two colons preceding `MESSAGE`) means `$words` special array and the `$CURRENT` special parameter are modified to refer only to the normal arguments when the action is executed or evaluated<br><br>`:::` (three colons) means they are modified to refer only to the normal arguments covered by this description
| `*PATTERN:MESSAGE:ACTION`<br>`*PATTERN::MESSAGE:ACTION`<br>`*PATTERN:::MESSAGE:ACTION` | user given words matching pattern are to be completed using the `ACTION`.<br><br>number of colons means the same thing as for the `*:…` forms of ordinary arguments.<br><br>this form of `SPEC` only applies to the last `OPTARG` for an option taking multiple arguments.<br><br>E.g.: `*=FILE*:file:_files`
| **Option `SPEC`** *(e.g. `-f FMT`, `--format FMT`, `-f=FMT`, `--format=FMT`,`-fFMT`, `+FMT`)* ||
| `OPTSPEC`<br>`*OPTSPEC` | non-repeatable/repeatable option<br><br>`*` indicates that `OPTSPEC` may be repeated in the completion candidates list indefinitely
| `OPTSPEC[EXPLANATION]` | `-h[display helpful information]`<br>specifies<br>`-h -- display helpful information`<br><br>`EXPLANATION` is a string. it is displayed next to option in completion listing
| `OPTSPEC` `OPTARG`<br>`OPTSPEC[EXPLANATION]OPTARG` | add optional or mandatory option argument (e.g. `--color=…`, where `[auto|always|never]` are mandatory option arguments: `--color=always`)|
| `(EXCLUDEOPTS)OPTSPEC`<br>`(EXCLUDEOPTS)OPTSPEC[EXPLANATION]`<br>`(EXCLUDEOPTS)OPTSPEC` `OPTARG`<br>`(EXCLUDEOPTS)OPTSPEC[EXPLANATION]OPTARG` | specify a set of options to be excluded after the completion of `OPTNAME`, i.e to the right of `OPTNAME` on the command-line<br><br>`EXCLUDEOPTS` is a space separated list of words and/or numbers; the words are `OPTNAME`s, the numbers are argument numbers. Also possible is: star `*` for the rest of the arguments in list (i.e. specifications of the form `*:...`), colon `:` for all normal (non-option) arguments, and hyphen `-` for all options.<br><br>E.g.: `(-two -three 1)-one:…` completes the option `-one` and says that if `-one` appears on the command line, the options `-two` and `-three` and the first ordinary argument will not be completed after it.<br><br>`(: * -)-h` excludes all other completion candidates once the `-h` option has been placed on the command-line |
| **`SPEC` groups:** ||
| `+ GROUPNAME [SPEC ...]` | creates a group of non-mutually exclusive group `SPEC`s. completion of a `SPEC` from the group, excludes it from the list of subsequent completions.
| `+ (GROUPNAME) [SPEC ...]` | creates a group of mutually exclusive `SPEC`s. completion of a `SPEC`, excludes the rest of the `SPEC`s within that group from the list of subsequent completions.
| **`SPEC` sets:** ||
| `- SETNAME [SPEC ...]` | creates a set of `SPEC`s. completion of a `SPEC` from a set, excludes the `SPEC`s from all other sets from the list of subsequent completions.

>- If an option in a group appears on the command line, it is stored in the associative array `opt_args` with `group-option` as a key. In the example above, a key `operation-c` is used if the option `-c` is present on the command line.

| Form | Meaning
| - | -
| **`OPTSPEC` is one of:** ||
| `-+OPTNAME` | used to specify that `-OPTNAME` and `+OPTNAME` are both valid; in all the remaining forms, the leading `-` may be replaced by or paired with `+` in this way.
| `-OPTNAME` | `-foo:…` specifies `-foo ARG`<br>`+foo:…` specifies `+foo ARG`<br>`-+foo:…` specifies `-foo ARG` or `+foo ARG` <br><br>completion result shall be: minus sign `-`, followed by `OPTNAME`, directly followed by an optional option value/argument, as a separated word
| `-OPTNAME-` | `-foo-:…` specifies `-fooARG` <br><br>option value/argument must come directly after option as part of the same word, i.e as glued/joint words.
| `-OPTNAME+` | `-foo+:…` specifies `-fooARG` or `-foo ARG` <br><br>option value/argument may come directly after option as part of the same word, i.e as glued/joint words, or may come as a separate word after the option.
| `-OPTNAME=` | `-foo=:…` specifies `-foo=ARG` or `-foo ARG`<br><br>option value/argument may come as next word, or as same word separated by an equals sign `=`
| `-OPTNAME=-` | `-foo=-:…` specifies `-foo=ARG`<br><br>option value/argument must come after an equals sign in the same word
| **`OPTARG` is one of:** ||
| `:MESSAGE:ACTION`<br>`::MESSAGE:ACTION` | `:MESSAGE` option argument is mandatory. `::MESSAGE` option argument is optional.<br><br>`MESSAGE` is displayed as completion group in completion list.<br><br>Example:<br>`--color=-:when:(always never auto)`<br>OR<br>`--color=-[specify when to use colors]:when:(always never auto)`<br>specifies<br>`--color=always`, `--color=never` or `--color=auto` |
| **`MESSAGE` is one of:** ||
| ` ` | (1 or more white space characters) either displays no group, or if `ACTION` has a default `MESSAGE`, inherits it (e.g. `file` message is inherited from `_file`, `process ID` from `_pids`)
| `STRING` | (space separated words) `STRING` is displayed as name of completion group
| **`ACTION` is one of:** ||
| `( )` | i.e single unquoted space, between parentheses. displays `MESSAGE` but no completions. useful where an argument is required but it is not possible or desirable to generate matches for it
| `(ITEM1 ITEM2 ...)` | list of possible matches (e.g. `:foo:(foo bar baz)`)
| `((ITEM1\:DESC1 ...))` | list of possible matches, with their descriptions (e.g. `:foo:((a\:bar b\:baz))`). matches together with their descriptions will be listed, if the description style is set with the values tag in the context.
| `->STRING` | sets `$state_descr` to `MESSAGE`, sets `$state` to `STRING`, and returns control to the calling function/script. then it is up to the calling function/script to generate completions (e.g. with `_describe`, `_alternative`, `_arguments`)<br><br>if used, the calling function should declare the following to avoid altering global environment: `local context; local -a state state_descr line; declare -A opt_args`
| ``(`EXPR`)``<br>`($(EXPR))` | `EXPR` is evaluated as shell code to generates completion candidate matches
| `COMPFUNC`<br>`(COMPFUNC)` | `COMPFUNC` is a completer function (e.g. `_path_files`, `_files`, `_pids`); a builtin function that generates completion candidate matches
| `= ACTION` | inserts dummy word onto the completion command-line, while not changing the point at which completion is taking place (??? still don’t get this)
| `WORD ...` | (??? still don’t get this)

>- `ACTION` determines how completions should be generated.
>- if all arguments are specified in the form `:message:action` in the correct order, then numbers (i.e `n:`) are unnecessary.
>- `SPEC` can be preceded with `!` to exclude the option from showing up in completion list, and skip it if provided on command-line. the leading `!` indicates that `zsh` shouldn't offer this option during completion. The benefit of providing a spec for an option that shouldn't be completed is that, if someone *does* use it, we can correctly suppress completion of other options afterwards [by placing them in exclusion parentheses list at the beginning].
>- any literal colon in an `OPTNAME`, `MESSAGE`, or `ACTION` must be preceded by a backslash, e.g.: `\:`.
>- regarding `OPTARG`, it may be repeated for options which take multiple arguments, e.g.: `:MESSAGE1:ACTION1:MESSAGE2:ACTION2`.
>- `zsh` merges completion possibilities together when they have the same description
>- to save the output of an external command, you should use `_call_program`, as it lets advanced users override the actual program that is called (e.g.: `VAR=$(_call_program ls -1 /etc/)`

A few variables are available to the calling function/script, they are:

| Variable | Value
| ---- | -------
| `$CURRENT` | integer representing index of the word at which the cursor is currently at. the `COMMAND` itself is index `1`, the first argument/option is index `2`, and so on.
| `$context` | if `-C` flag is not used with `_arguments`, then, when returning to the calling function to perform an action of the form `->STRING`, `$context` is set to a string of the form: `option-OPTNAME-N`, `argument-N`, or `rest`, based on the current argument/option being completed.<br><br>if `-C` flag is used with `_arguments`, `$context` is empty
| `$curcontext` | if `-C` flag is used with `_arguments`, then, when returning to the calling function to perform an action of the form `->STRING`, `$curcontext` is set to a string of the form: `:complete:COMMAND:$context`, where `$context` is a string of the form: `option-OPTNAME-N`, `argument-N`, or `rest`.<br><br> if `-C` flag is NOT used with `_arguments`, then, when returning to the calling function to perform an action of the form `->STRING`, `$curcontext` is set to the string: `:complete:COMMAND`.<br><br>E.g: when completing the argument of the `-o` option, `$curcontext` is set to `option-o-1`; when completing the second normal (non-option) argument it is set to: `argument-2`; if there are no more positional/next arguments, it is set to: `rest`.
| `$state` | scalar variable used by the state mechanism in the _arguments()<br><br>when returning to the calling function to perform an action of the form `->STRING`, `$state` is set to the `SPEC`’s `STRING`.<br><br>E.g: for a given `SPEC` like: `1:command:->cmds`, `$state` is set to the string: `cmds`.
| `$state_descr` | when returning to the calling function to perform an action of the form `->STRING`, `$state` is set to the `SPEC`’s `MESSAGE`.<br><br>E.g: for a given `SPEC` like: `1:command:->cmds`, `$state_descr` is set to the string: `command`.
| `$line` | (array) set to the normal arguments from the command line, i.e. the non-option words from the command line after the command name excluding all options and their arguments.
| `$words` | an array set to the command-line words, the command being completed included
| `$opt_args` | an associative array set to the command-line options (e.g.: `-d`, `--format`) as its keys and their corresponding option argument (if any) as its values (e.g. `--format=FMT`, `opt_args[--format]` will return `FMT`). for options that have more than one argument these are given as one string, separated by colons (e.g.: `FMT1:FMT2:FMT3…`).

Example:

=== "Same Options"

    To specify options of identical explanations, you can use brace expansion:

    ```zsh
    _arguments \
        "(: * -)"{-h,--help}"[display help information]"
    ```

    ...expands to:

    ```zsh
    _arguments \
        "(: * -)--help[display help information]" \
        "(: * -)-h[display help information]"
    ```

    >- the `(: * -)` at the beginning of the `SPEC` tells `zsh` not to complete any other operands (`:` and `*`) or options (`-`) after this one has been used.
    >- a convention for `zsh` completion functions is to generally combine `SPEC`s for options with different names using brace expansion, and to list the short option first, e.g.: `{-f,--format}`.

=== "Options w/ Arguments"

    ```zsh
    _arguments \
        "--color=[specify when to use colors in output]:\
            when:((
                never\:'never use colors'
                auto\:'use colors or not based on stdout, TERM, etc.'
                always\:'always use colors'
                ansi\:'always use ANSI colors (even on Windows)'
            ))"
    ```

    ```zsh
    ❯ cmd <tab>
    ❯ cmd --color=<tab>
    [when]
    always  -- always use colors
    ansi    -- always use ANSI colors (even on Windows)
    auto    -- use colors or not based on stdout, TERM, etc.
    never   -- never use colors
    ```

=== "State Machine"

    ```zsh
    _arguments \
        ":arg:->STATE-1" \
        ":arg:->STATE-2" \
        ":arg:->STATE-3"

    case "$state" in
        "STATE-1")
            compadd "STATE-1a" "STATE-1b" "STATE-1c";;
        "STATE-2")
            compadd "STATE-2a" "STATE-2b" "STATE-2c";;
        "STATE-3")
            compadd "STATE-3a" "STATE-3b" "STATE-3c";;
    esac
    ```

    ```zsh
    ❯ cmd <tab>
      STATE-1a
    > STATE-1b
      STATE-1c
    ❯ cmd STATE-1b <tab>
      STATE-2a
      STATE-2b
    > STATE-2c
    ❯ cmd STATE-1b STATE-2c <tab>
    > STATE-3a
      STATE-3b
      STATE-3c
    ❯ cmd STATE-1b STATE-2c STATE-3a
    ```

=== "Groups"

    To specify `SPEC` groups, that can be referenced in exclusion lists:

    ```zsh
    _arguments \
        "(group2--x)-a" \
        + group1 \
            -m \
            "(group2)-n" \
        + group2 \
            -x \
            -y
    ```

    >- when `-a` is completed, `group2--x`, i.e the option `-x` form the group `group2`, will then on be excluded from the completion list.
    >- when `group1--n`, i.e the option `-n` from the group `group1`, is completed, all specifications from `group2` will then on be excluded from the completion list.

    ```zsh
    _arguments \
        -a \
        -b \
        + "(operation)" \
            {-c,--compress}"[compress]" \
            {-d,--decompress}"[decompress]" \
            {-l,--list}"[list]"
    ```

    >- when an option from group `operation` is completed, all specifications from `operation` will then on be excluded from the completion list.

=== "Sets"

    To specify mutually exclusive sets of `SPEC`s:

    ```zsh
    _arguments \
        -a \
        - set1 \
            -c \
            -b \
        - set2 \
            -d \
            ":arg:(x2 y2)"
    ```

    >- This defines two sets. When the command line contains the option `-c`, or `-b`, the `-d` option and the argument will not be considered possible completions. When it contains `-d` or an argument, the option `-c` and `-b` will not be considered. However, after `-a` both sets will still be considered valid.

=== "Complex"

    ```zsh
    _arguments -C -s -S \
        "-l+:left border:" \
        "-format:paper size:(letter A4)" \
        "*-copy:output file:_files::resolution:(300 600)" \
        ":postscript file:_files -g \*.\(ps\|eps\)" \
        "*:page number:"
    ```

    >- `-s` enables single-letter option stacking (e.g. `-xyz`); `-S` drops completion after an occurrence of `--` in the command-line; `-C` causes `$curcontext` to be set to a string of the form: `:complete:COMMAND:$context`, where `COMMAND` is the command being completed, and where `$context` is one of: `argument-N`, `option-OPTNAME-N`, or `rest`.
    >- The `-format` option takes one argument in the next word, described as `paper size` for which only the strings `letter` and `A4` will be completed.
    >- The `-copy` option may appear more than once on the command line and takes two arguments. The first is mandatory and will be completed as a filename. The second is optional (because of the second colon before the description `resolution`) and will be completed from the strings `300` and `600`.
    >- The last two descriptions say what should be completed as arguments. The first describes the first argument as a `postscript file` and makes files ending in `ps` or `eps` be completed. The last description gives all other arguments the description `page numbers` but does not offer completions.

#### `_regex_words`

TODO: <https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fregex_005fwords-_005b-_002dt-term-_005d>

#### `_regex_arguments`

TODO: <https://zsh.sourceforge.io/Doc/Release/Completion-System.html#index-_005fregex_005farguments>

#### `_values`

```zsh
❯ _values [-O ARRAY] [-s SEP] [-wC] DESCR SPEC ...
```

| Option | Meaning
| ------ | -------
| `-o ARRAY` | elements of array `ARRAY` are passed to `compadd` when executing an `ACTION`
| `-s SEP`/`-S SEP` | separate values with specified `SEP` character (default: `=`). this character is automatically added after each value in the chain of values; if this option is not present, only a single value will be completed per word. there’s no difference between `s` and `S` as far as I’ve seen
| `-w` | check other currently present arguments on the command-line, rather than just current word (formed by the chained values), to determine which values are already present
| `-C` | treated in the same way as it is by `_arguments` completion function
| `DESCR` | (i.e description) a completion candidate description string, printed above the completion list
| `SPEC` | specfication describing value and its arguments.<br><br>`SPEC` is of the same form as `_arguments` completion function, except: that no minus `-` or plus `+` sign is required at the beginning, and values can have only one argument.

Available variables are:

| Variable | Description
| - | -
| `$val_args` | (associative array) reports values and their arguments; this works similarly to the `opt_args` associative array used by `_arguments`
| `$context` | set to the name of the value whose argument is to be completed
| `$state` | (scalars)
| `$state_descr` | (scalars)

>- when using an action of the form `->STRING`, the calling function/script should declare the following `local` parameters:
>
>   ```zsh
>   local context state state_descr line
>   declare -A val_args
>   ```
>
>- for `->STRING` actions, or action completer functions (e.g. `_files`, `_pids`), the seperator character cannot be automatically added. to get the usual behaviour of adding the value seperator character `SEP` as an auto-removable suffix (e.g. like directories’ `/`), the calling function (e.g. custom user function, `_files`, `_pids`) has to add the separator `SEP` as a suffix by passing the options `-qS SEP` either directly or indirectly to `compadd` (e.g.: `_files -qS ,` ; `_pids -qS ,`).

Example:

```zsh
_values -s "," "description" \
    "*foo" \
    "*bar[local directory files]:file:_files -qS ," \
    "*baz[running process]: :_pids -qS ," \
    "(two)*one[number]:first count:" \
    "two[another number]::second count:(1 2 3)"
```

```zsh
❯ cmd <tab>
[description]
bar  -- local directory files
baz  -- running process
foo
one  -- number
two  -- another number
```

```zsh
...
❯ cmd foo,bar=13.txt,baz=408,two=2,one=5,foo,foo
```

>- The space separated `SPEC` list specifies five possible values: `foo`, `bar`, `baz`, `one`, and `two`.
>- The first, `foo`, is not described, takes no arguments, and may appear more than once.
>- The second, `bar`, is described as `local directory files`, may appear more than once, and takes one mandatory argument described as `file`, the `_files` completion function is specified, so it will complete local directory files.
>- The third, `baz`, is described as `running process`, may appear more than once, and takes one mandatory argument, not described, the `_pids` completion function is specified, so it will complete running processes.
>- The fourth `one`, has a `(two)` at the beginning which says that if the value `one` is on the command-line, the `SPEC` `two` will no longer be considered a possible completion.
>- Finally, the last `SPEC`, `two`, is described as `another number` and takes an optional argument described as `second count` for which the completions (to appear after an `=`) are `1`, `2`, and `3`.
>- The `_values` function will complete lists of these `SPEC` values, separated by commas.

#### `_sep_parts`

```zsh
❯ _sep_parts ARRAY [SEP] [ARRAY [SEP]] ...
```

Where `ARRAY` is the name of an array parameter or a quoted list of words in parentheses.

Example:

```zsh
# _sep_parts "(foo bar)" @ "(news ftp)" : "(woo laa)"

❯ cmd <tab>
  bar
> foo
❯ cmd foo@<tab>
> ftp
  news
❯ cmd foo@ftp:<tab>
> laa
  WoO
❯ cmd foo@ftp:laa
```

#### `_multi_parts`

Gives user the ability to choose value at each `SEP` character, i.e every step along the path.

```zsh
❯ _multi_parts [-i] SEP ARRAY
```

Where `ARRAY` is the name of an array parameter or a quoted list of words in parentheses. `-i` option causes `_multi_parts` to insert a unique match even if that requires multiple separators to be inserted.

>- where as `_sep_parts` asks up front, i.e in its function call, for the available choices at every step of the path, and builds up the entire path at the command-line during completion, `_multi_parts` asks up front for all possible paths in their entirety, and figures out the possible choices at every step at the command-line during completion
>- one difference between `_sep_parts` and `_multi_parts`, is that `_sep_parts` allows for different `SEP` characters at each step, whereas `_multi_parts` does not.

Example:

```zsh
# _multi_parts : "(
#     00:11:22:33:44:55
#     00:23:72:56:67:78
#     00:23:34:45:56:67
#     00:23:45:56:67:78
#     00:23:45:91:67:78
#     00:25:11:56:67:78
#     00:25:45:56:67:78
# )"

❯ cmd <tab>
❯ cmd 00:<tab>
> 23
  25
❯ cmd 00:23:<tab>
  34
> 45
  72
❯ cmd 00:23:45:<tab>
  56
> 91
❯ cmd 00:23:45:91:<tab>
❯ cmd 00:23:45:91:67:<tab>
❯ cmd 00:23:45:91:67:78
```

#### Value Completion Functions

>- Value completion functions can be used as valid `SPEC` `ACTION`s, for command and word-list completion functions.

=== "_path_files, _files, _dirs"

    ```zsh
    # _path_files
    # _files

    ❯ cmd <tab>
    [file]
    Makefile
    README.md
    build.sh
    mkdocs.yml
    package-lock. json
    site/
    src/
    theme/
    venv
    ```

    >- completes all cwd files

    ```zsh
    # _path_files -/
    # _files -/
    # _dirs

    ❯ cmd <tab>
    [directory]
    site/
    src/
    theme/
    venv/
    ```

    >- completes all cwd directories

    ```zsh
    # _path_files -g "*.(md|sh|yml)"

    ❯ cmd <tab>
    [file]
    README.md
    build.sh
    mkdocs.yml
    ```

    >- completes all cwd files ending in: `.md`, `.sh`, or `.yml`

    ```zsh
    # _path_files -W /etc/ -g "*.(conf|db)"

    [file]
    aliases.db
    asl.conf
    autofs.conf
    kern_ loader.conf
    man.conf
    newsyslog.conf
    nfs.conf
    notify.conf
    ntp.conf
    ntp_opendirectory.conf
    pf.conf
    resolv.conf
    rtadvd.conf
    sudo.conf
    syslog.conf
    ```

    >- completes all files, from `/etc/` directory ending in: `.conf` or `.db`.

    `_files` can be used as a shorthand for `_path_files`. `_files` calls `_path_files` with all options except `-g` and `-/`.

=== "_options"

    ```zsh
    # _options

    ❯ cmd <tab>
    [zsh option]
    aliases
    aliasfuncdef
    allexport
    alwayslastprompt
    alwaystoend
    appendcreate
    appendhistory
    autocd
    autocontinue
    autolist
    automenu
    .
    .
    .
    ```

=== "_parameters"

    ```zsh
    # _parameters

    ❯ cmd <tab>
    [parameter]
    !
    #
    $
    *
    -
    0
    ?
    @
    XDG_BIN_HOME
    XDG_CACHE_HOME
    XDG_CONFIG_DIRS
    XDG_CONFIG_HOME
    XDG_DATA_DIRS
    XDG_DATA_HOME
    XDG_RUNTIME_DIR
    XDG_STATE_HOME
    .
    .
    .
    ```

=== "_users"

    ```zsh
    # _users

    ❯ cmd <tab>
    [user]
    akharrou
    root
    ```

=== "_groups"

    ```zsh
    # _groups

    ❯ cmd <tab>
    [group]
    staff
    sys
    tty
    utmp
    wheel
    ```

=== "_pids"

    ```zsh
    # _pids

    ❯ cmd <tab>
    [process ID]
    605 johndoe/usr/sbin/distnoted
    606 johndoe lusr/sbin/cfprefsd
    608 johndoe/usr/libexec/UserEventAgent
    611 johndoe/usr/libexec/knowledge-agent
    613 johndoe/usr/libexec/lsd
    614 johndoe/usr/libexec/secd
    .
    .
    .
    ```

=== "_net_interfaces"

    ```zsh
    # _net_interfaces

    ❯ cmd <tab>
    [network interface]
    ap1
    awdle
    bridge®
    en®
    en1
    en2
    en3
    en4
    en5
    gif0
    11w0
    100
    stfe
    utun®
    utun1
    utun2
    utun3
    utun4
    utun5
    ```

=== "_hosts"

    ```zsh
    # _hosts

    ❯ cmd <tab>
    [host]
    broadcasthost
    localhost
    .
    .
    .
    ```

=== "_ports"

    ```zsh
    # _ports

    ❯ cmd <tab>
    [ports]
    http
    ftp
    htcp
    netcp
    tcp-id-port
    .
    .
    .
    ```

=== "_port"

    ```zsh
    # _port

    ❯ cmd <tab>
    [Port actions]
    activate      -- Activate the given ports
    archivefetch  -- Fetch archive for the given ports
    build         -- Build the given ports
    bump          -- Update the outdated checksums of a Portfile
    cat           -- Writes the Portfiles of the given ports to stdout
    .
    .
    .
    ```

### Misc

Good `zsh` completion examples include: `rg`, `tar`, `cvs`, and `ssh`.

## SEEFURTHER

- [🌎 Documentation](https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html)
- [🌎 Page: Zsh-Completions Howto](https://github.com/zsh-users/zsh-completions/blob/master/zsh-completions-howto.org)
- [🌎 Page: Blog ➤ Writing Zsh Completion for Padrino](https://wikimatze.de/writing-zsh-completion-for-padrino/)
- [🌎 Page: Linux Zsh Completions Howto](https://web.archive.org/web/20190411104837/http://www.linux-mag.com/id/1106/)
- [🌎 Page: `ripgrep`’s zsh completion file](https://github.com/BurntSushi/ripgrep/blob/master/complete/_rg)
