---
status: INCOMPLETE
title: "perl"
tags: [language,interpreter,files,editor,inplace]
---

# `perl`

## BRIEF

    Opt.      |  Behavior
    ----      |  --------
    -0        |  set input record separator ($/), in octal or hex
    -C        |  control some unicode features
    -D        |  set debugging flags
    -E        |  like -e but enable all optional features
    -F        |  split() pattern for autosplit (-a)
    -I        |  specify @INC/#include directory (may be used more than once)
    -M        |  module.. executes "use/no module..." before executing script
    -S        |  look for the script using PATH environment variable
    -T        |  turn on taint checks
    -U        |  allow unsafe operations
    -V        |  print perl configuration information
    -W        |  enable all warnings (ignores "no warnings")
    -X        |  disable all warnings (ignores "use warnings")
    -a        |  autosplit mode with-n or-p (splits $_ into eF)
    -c        |  check syntax only (runs BEGIN and END blocks)
    -d        |  run under control of a debugging/tracing module
    -dt       |  run scripts under debugger (debugged code uses threads)
    -dt:      |  run under debugging/tracing module (uses threads) control
    -d        |  run scripts under debugger
    -e        |  run one line of program
    -f        |  disable executing $Config{sitelib}/sitecustomize.plat startup
    -h        |  list help summary
    -i [EXT]  |  edit <> files in place (make backup if extension supplied)
    -l        |  enable line ending processing, specifies line terminator
    -m        |  module.. executes "use/no module..." before executing script
    -n        |  assume "while (<>) { ... }" loop around your script
    -p        |  assume loop like -n but print line also like sed
    -s        |  enable some switch parsing for switches after script name
    -t        |  turn on taint checks but only issue warnings
    -u        |  dump core after parsing script
    -v        |  print version, patchlevel and license
    -w        |  turn warnings on for compilation of your script (recommended)
    -x        |  ignore text before #!perl line and optionally cd to directory

## INSTALLATION


```bash
#ℹ︎ installation of `perl`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print/display regex matching file lines:


```bash
#ℹ︎ search/find and get/print/display captured regex matching text files lines
❯ perl -0ne ’/(PCRE2)/g && print "$1\n"’ FILES
```



```bash
#ℹ︎ search/find and get/print/display captured regex matching text file line, across standard input, keeping only captured match
❯ perl -0ne ’/(PCRE2)/g && print "$1\n"’
```


----
#### To edit files:


```bash
#ℹ︎ add line before/above/atop specified file line number
❯ perl -0pe ’print "TEXT\n" if $. == LINENUM’ FILE
```



```bash
#ℹ︎ search/find and replace/change/substitute file line matching regex pattern
❯ perl -0pe ’s/PCRE2/REPL/g;’ FILE
```



```bash
#ℹ︎ search/find and replace/change/substitute, if specified file line number
❯ perl -0pe ’s/PCRE2/REPL/g if $. == LINENUM;’ FILE
```



```bash
#ℹ︎ add line after/below/under specified file line number
❯ perl -0ne ’print; print "TEXT\n" if $. == LINENUM’ FILE
```



```bash
#ℹ︎ search/find and delete file line matching regex pattern
❯ perl -0ne ’print unless /PCRE2/’ FILE
```



```bash
#ℹ︎ delete specified file line number
❯ perl -0ne ’print if $. != LINENUM’ FILE
```



```bash
#ℹ︎ search/find and replace/change/substitute line matching regex pattern, and delete line matching regex pattern
❯ perl -0ne ’s/PCRE2/REPL/g; print unless /PCRE2/;’ FILE
```


To actually modify the file, in place, add the `-i [EXT]` option. You can optionally save/store a backup of the the original file by specifying an a shell path pattern, to be used for copying the file:

    ❯ perl -i ".bak" ...
    ❯ perl -i "*.bak" ...
    ❯ perl -i "old/*.orig" ...

Creates `FILE.bak`, `FILE.bak`, and `old/FILE.orig`, respectively before editing the original file in place.

----
#### Miscellaneous:


```bash
#ℹ︎ remove non-standard ASCII characters/letters
❯ perl -pe ’s/[^[:ascii:]]//g’
```


----
#### To split/divide/breakup files/standard-input, based on Perl Compatible Regular Expressions (PCRE2):


```bash
#ℹ︎ split/divide/breakup files/standard-input, based-on/with/via/by/using Perl Compatible Regular Expressions (PCRE2)
❯ perl -ne ’if(/(PCRE2)/) {close fd; open fd, ">", sprintf("OUTFILE-$1.c");} print fd’ INFILE
```


The `$1` represents the first capture group, it, or another capture group, can be used to name the outfiles.


## NOTES

- `$.` represents the current line number.
- `$_` represents the current line.
- `$/` represents the input record separator.
- `$\` represents the output record separator.

To cause the entire file to be read as one string to allow multiline search/replace, either use the `-0` option (optionally `-0"077"`), or add `BEGIN{undef $/;}` to the beginning of the program; make sure to also use both `m` and `s` pattern modifiers `/PCRE/ms`: `perl -0pe "/PCRE/msg"`

The `s` PCRE modifier will cause the `.` character to match newlines in addition to everything else. The `m` PCRE modifier will cause the `^` and `$` anchors to match the beginning and end of lines instead of the entire string.

## SEE

    perl(1)

## SEEALSO

    sed(1), awk(1), ed(1), grep(1), regex, re_format

## SEEFURTHER

- [🌎 Documentation: Perl Regular Expressions](https://perldoc.perl.org/perlre)
