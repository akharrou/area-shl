---
status: INCOMPLETE
title: "infocmp"
tags: [compare,get,print,display,terminfo,terminals,capability,capabilities,descriptions]
---

# `infocmp`

## INSTALLATION


```bash
#ℹ︎ installation of `infocmp`
❯ *comes builtin*
```


## USECASES

----
#### To compare `terminfo` capability entries for different terminals:


```bash
#ℹ︎ compare and get/print/display common terminal capabilties (capability commonalities)
❯ infocmp -c <TERMNAME1> <TERMNAME2>
```



```bash
#ℹ︎ compare and get/print/display different terminal capabilties (capability differences)
❯ infocmp -d <TERMNAME1> <TERMNAME2>
```



```bash
#ℹ︎ get/print/display missing terminal capabilities
❯ infocmp -n <TERMNAME1> <TERMNAME2>
```


----
#### To list `terminfo` entry terminal capabilities:


```bash
#ℹ︎ get/print/display list terminal capabilities, one-per-line
❯ infocmp -I1 | $PAGER
```



```bash
#ℹ︎ get/print/display list terminfo terminal capabilities, using terminfo names
❯ infocmp -I <TERMNAME>
```



```bash
#ℹ︎ get/print/display list terminfo terminal capabilities, using C variable name
❯ infocmp -L <TERMNAME>
```



```bash
#ℹ︎ get/print/display list terminfo terminal capabilities, using termcap names
❯ infocmp -C <TERMNAME>
```



```bash
#ℹ︎ get/print/display list terminfo terminal capabilities, when using -C, put out all capabilities in termcap form
❯ infocmp -r <TERMNAME>
```


If no termnames are given, the environment variable `TERM` will be used for the terminal name.

----
#### To convert `terminfo` terminal capabilities list into C initializer for a `TERMTYPE` structure:


```bash
#ℹ︎ get/print/display list `terminfo` terminal capabilities as C initializer `TERMTYPE` structure:
❯ infocmp -Ee
```

        {
            xterm_256color_alias_data,
            (char *)0,    /* pointer to string table */
            xterm_256color_bool_data,
            xterm_256color_number_data,
            xterm_256color_string_data,
    #if NCURSES_XNAMES
            (char *)0,    /* pointer to extended string table */
            (char **)0,    /* ...corresponding names */
            44,        /* count total Booleans */
            39,        /* count total Numbers */
            414,        /* count total Strings */
            0,        /* count extensions to Booleans */
            0,        /* count extensions to Numbers */
            0,        /* count extensions to Strings */
    #endif /* NCURSES_XNAMES */
        }

    static char xterm_256color_alias_data[] = "xterm-256color|xterm with 256 colors";

    static char xterm_256color_s_cbt[] = "\033[Z";
    static char xterm_256color_s_bel[] = "\007";
    static char xterm_256color_s_cr [] = "\015";
    .
    .
    .


## ENVIRONMENT

Variable | Description
- | -
`$TERMINFO`| If set, it is interpreted as the pathname of a directory containing the compiled description you are working on. Only that directory is searched. If not set, the directory `$HOME/.terminfo/` will be searched for a compiled description.

## PATHS

Path | Description
- | -
`/usr/share/terminfo/*/*` | Directory containing `terminfo` database entries.

## SEE

    infocmp(1M)

## SEEALSO

    tic(1M), toe(1M), captoinfo(1M), infotocap(1M), term(5)

