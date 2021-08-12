---
status: TODO
title: "more"
tags: [get,print,display,view,preview,output,screen,scrolling,pager,files,listing]
---

# `more`

## BRIEF

Page through text one screenful at a time.

Syntax

    ❯ more [-dlfpcsu] [-SCREENSIZE] [+/ PATTERN] [+ LINENUM] [FILE ...]

    -SCREENSIZE
        This option specifies an integer which is the screen size (in lines).
    -d
        more will prompt the user with the message "[Press space to continue, `q` to quit.]" and will display "[Press `h` for instructions.]" instead of ringing the bell when an illegal key is pressed.
    -l
        more usually treats `^L` (form feed) as a special character, and will pause after any line that contains a form feed. The `-l` option will prevent this behavior.
    -f
        Causes more to count logical, rather than screen lines (i.e., long lines are not folded).
    -p
        Do not scroll. Instead, clear the whole screen and then display the text.
    -c
        Do not scroll. Instead, paint each screen from the top, clearing the remainder of each line as it is displayed.
    -s
        Squeeze multiple blank lines into one.
    -u
        Suppress underlining.
    +/
        Specifies a string that will be searched for before each file is displayed.
    +num
        Start at line number num.

The `-n` and `-v` options are non-standard and their use in scripts is not recommended.

## INSTALLATION


```bash
#ℹ︎ installation of `more`
❯ *comes pre-installed*
```


## USECASES

----
#### To

    ❯ more FILE


## NOTES

When the output of more is redirected to a file, it outputs a small header for each file:

    :::::::::::::: filename.txt ::::::::::::::

The `less` command provides more emulation and extensive enhancements.

## SEE

    more(1)

## SEEALSO

    less(1), pr(1), nl(1), cat(1), bat(1)

