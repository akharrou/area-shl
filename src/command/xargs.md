---
status: DONE
title: "xargs"
tags: [argument,list,constructor,parallel,utility,runner]
---

# `xargs`

## BRIEF

The `xargs` utility reads space, tab, newline and end-of-file delimited strings from the standard input and executes `utility` with the strings as arguments.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


```bash
#ℹ︎ installation of GNU extension: `gxargs`
❯ brew install findutils
```


## USECASES

----
#### To fold piped input, i.e merge whitespace, and/or newline (`\n`), separated sequences of words, into a single, single-spaced, word list:


```bash
#ℹ︎ fold passed/piped standard input arguments into a word list
❯ ls | xargs
```

    file1 file2 file3 file4 file5 file6

If you don’t specify a `UTILITY`, `xargs` defaults to `echo`.

----
#### To see what command `xargs` runs, you can use the `-t` option:


```bash
#ℹ︎ preview command invocations
❯ ls | xargs -t
```

    echo file1 file2 file3 file4 file5 file6
    file1 file2 file3 file4 file5 file6

----
#### To set limit on argument list size that `UTILITY` can take on each invocation, i.e max number of arguments that can be passed to `UTILITY`, from standard input, on each invocation:


```bash
#ℹ︎ fold, and map, multiple whitespace and/or newline delimited/seperated words to a `UTILITY` command, to be run
❯ ls | xargs -n1 UTILITY
```

    UTILITY file1
    UTILITY file2
    UTILITY file3
    UTILITY file4
    UTILITY file5
    UTILITY file6

    ❯ ls | xargs -n2
    UTILITY file1 file2
    UTILITY file3 file4
    UTILITY file5 file6

    ❯ ls | xargs -n3
    UTILITY file1 file2 file3
    UTILITY file4 file5 file6

----
#### To fold, and map, piped input, N lines at a time, and map each complete fold to an invocation of `UTILITY` command, as argument list:

    ❯ ls | xargs -L2
    ❯ ls | tr "\n" "\0" | xargs -0 -n2
    file1.bak file1.json
    file2.bak file2.json


```bash
#ℹ︎ fold, and map, multiple newline delimited/seperated arguments, at a time, to a `UTILITY` command, to be run
❯ ls | xargs -L1
```



```bash
#ℹ︎ fold, and map, multiple newline delimited/seperated arguments, at a time, to a `UTILITY` command, to be run; (robust) prevents/fixes unterminated quote error
❯ ls | tr "\n" "\0" | xargs -0 -n1
```


Fold, i.e merge N newline (`\n`) separated sequences of words, into a single, single-spaced, argument (or word) list, and map, i.e pass that word list as argument list to an invocation of `UTILITY`.

I.e, to invoke `UTILITY` with N newline (`\n`) separated sequences of words, folded into a single single-spaced argument list.

----
#### To reference argument list with a placeholder (e.g. `{}`, `%`), instead of appending argument list to the end of the `UTILITY`, you can use the `-I` or `-J` options:


```bash
#ℹ︎ create duplicate backup (.bak) files
❯ ls | xargs -t -I {} cp {} {}.bak
```

    cp file1 file1.bak
    cp file2 file2.bak

    ❯ ls | xargs -t -J % cp -Rp % destdir
    cp -Rp file1 file2 file3 file4 file5 destdir

In conjunction with the `-I` option, you may use the `-R` option to specify the maximum number of times the argument list placeholder will be expanded-into/replaced-by the argument list.

    # up to 5 replacements if -R is omitted
    ❯ ls | xargs -I {} echo {}.a {}.b {}.c {}.d {}.e {}.f {}.g
    file1.a file1.b file1.c file1.d file1.e {}.f {}.g

    # up to 2 replacements as specified
    ❯ ls | xargs -R 2 -I {} echo {}.a {}.b {}.c {}.d {}.e {}.f {}.g
    file1.a file1.b {}.c {}.d {}.e {}.f {}.g

    # unbounded number of replacements with negative -R value
    ❯ ls | xargs -R -1 -I {} echo {}.a {}.b {}.c {}.d {}.e {}.f {}.g
    file1.a file1.b file1.c file1.d file1.e file1.f file1.g


The `-0` option, causes `xargs` to use the null character (`\0`) as delimiter between arguments, instead of whitespaces and/or newlines.

The `tr "\n" "\0"`, substitutes newlines for null characters (`\0`) so that they can be picked up as delimiters by `xargs`. This fixes the error: `xargs: unterminated quote`, when namely there is an unterminated quote in newline delimited arguments. The `-L` flag can’t be used along with the `-0` flag, so we use the `-I` flag instead.


```bash
#ℹ︎ xargs: unterminated quote; problem
❯ echo "a ’b c\nd e" | xargs -I % echo %
```

    xargs: unterminated quote


```bash
#ℹ︎ xargs: unterminated quote; fix
❯ echo "a ’b c\nd e" | tr "\n" "\0" | xargs -0 -I % echo %
```

    a ’b c
    d e

The `<arglist-placeholder>` is arbitrarily chosen, and can be many things (e.g. `{}`, `@`, `%`). The placeholder represents the argument list, use it to position the argument list anywhere in the arguments to `UTILITY`.

The `-I` option, implies `-L1` (folds one input per `UTILITY` invocation) and `-x` (exits of argument list too big) option. Keep a space between `-I` and `<placeholder>` for portability.

The `-J` option, as opposed to `-I`, when used in conjunction with the `-n` option, can take an arbitrary number of arguments at a time, else, by default, consumes and folds entire input until termination. With `-J`, the placeholder however cannot be surrounded by quotes.


```bash
#ℹ︎ fold, and map, one arbitrarily delimited/seperated argument at a time, to a `UTILITY` command, to be run; (robust) prevents/fixes unterminated quote error; argument positioning freedom; multiple placeholder replacements; arbitray delimiter character
❯ ls | tr "\n" "\0" | xargs -0 -R -1 -I % echo % % % \! 
```



```bash
#ℹ︎ fold, and map, multiple arbitrarily delimited/seperated arguments at a time, to a `UTILITY` command, to be run; (robust) prevents/fixes unterminated quote error; argument positioning freedom; unquoted placeholder; single placeholder replacement; arbitray delimiter character
❯ ls | tr "\n" "\0" | xargs -0 -n1 -J {} echo {} \! 
```



```bash
#ℹ︎ (GNU); fold, and map, one arbitrarily delimited/seperated argument at a time, to a `UTILITY` command, to be run
❯ ls | gxargs --delimiter "\n" -I {} echo {} \! 
```


----
#### To set termination `<token>`, you can use `-E` option:

    ❯ echo -n "martin bob sam tim john" | xargs -E "bob"
    martin

----
#### To run `xargs` on a file instead of standard input:

    # take-input/read from file
    ❯ cat file | xargs ...

    # (GNU); take-input/read from file
    ❯ gxargs -a file ...

----
#### To run `UTILITY` command only if standard input exists:


```bash
#ℹ︎ run `UTILITY` command only if standard input exists, i.e if previous command passes/pipes some output
❯ echo "1" | xargs -r UTILITY
```


----
#### To run invocations of `UTILITY` in parallel [processes], you can use `-P` option, followed by the number of parallel processes desired, or `0` for unbounded:


```bash
#ℹ︎ run all invocations of `UTILITY` command in parallel [processes]
❯ ... | xargs -P0
```



```bash
#ℹ︎ run all invocations of `UTILITY` command across 2 parallel [processes]
❯ ... | xargs -P2
```


----
#### To display the limits on the command-line length which are imposed by the operating system:


```bash
#ℹ︎ (GNU); print/display operating system command-line length limits
❯ gxargs --show-limits
```



## SEE

    xargs(1)
    gxargs(1)

## SEEALSO

    find(1), fd(1), parallel(1)

