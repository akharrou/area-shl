---
status: INCOMPLETE
title: "declare"
tags: [declare,typeset,set,give,variables,attributes]
---

# `declare`

## BRIEF

    declare [-afFirtx] [-p] [name[=value] ...]

    Declare variables and/or give them attributes.  If no NAMEs are
    given, then display the values of variables instead.  The -p option
    will display the attributes and values of each NAME.

    The flags are:

    -a        to make NAMEs arrays (if supported)
    -f        to select from among function names only
    -F        to display function names (and line number and source file name if
        debugging) without definitions
    -i        to make NAMEs have the `integer` attribute
    -r        to make NAMEs readonly
    -t        to make NAMEs have the `trace` attribute
    -x        to make NAMEs export

    Variables with the integer attribute have arithmetic evaluation (see
    `let`) done when the variable is assigned to.

    When displaying values of variables, -f displays a function’s name
    and definition.  The -F option restricts the display to function
    name only.

    Using `+` instead of `-` turns off the given attribute instead.  When
    used in a function, makes NAMEs local, as with the `local` command.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To list all declared shell functions, or a specific one:


```bash
#ℹ︎ print all shell functions
❯ declare -f
```


```bash
#ℹ︎ print specified shell function
❯ declare -f FUNCTION
```


----
#### To list all declared arrays, or a specific one:


```bash
#ℹ︎ print all shell arrays
❯ declare -a
```


```bash
#ℹ︎ print specified shell array
❯ declare -a ARRAY
```


----
#### To check/test if shell function is declared:


```bash
#ℹ︎ check/test if shell function is [not] declared/exists
❯ if ! declare -f FUNCTION > /dev/null; then ...; fi
```



## NOTES

This command used to be `typeset`, but it is now deprecated and replaced by `declare`.

## SEEALSO

    alias, bindkey

