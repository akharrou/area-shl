---
status: INCOMPLETE
title: "ed"
tags: [oldest,line,oriented,text,editor]
---

# `ed`

## INSTALLATION


```bash
#ℹ︎ installation of `ed`
❯ *comes pre-installed*
```


## USECASES

----
#### To

    ❯ ed FILE

## RECIPES

----
#### Create and edit a file:

    ❯ touch file.txt
    ❯ ed file.txt
    0
    a
    Hello world !
    This is one if not the oldest editors in the world.
    This is my third and final line.
    .
    1
    Hello world !
    2
    This is one if not the oldest editors in the world.
    3
    This is my third and final line.
    1,$p
    Hello world !
    This is one if not the oldest editors in the world.
    This is my third and final line.
    w
    99
    q


## NOTES

A few commands:

    [0-9]+  -- print specified line number
    p       -- print last added line
    $p      -- print last of file
    2,$p    -- print entire file, start at specified line (2)
    ,p      -- print entire file, from beginning
    a       -- add text to file (insert mode)
    1a      -- add text to file after line specified line (1)
    .       -- stop adding text to file (exit insert mode)
    w       -- save file, print number of characters in file
    q       -- quit editor

## SEE

    ed(1)
    ed -h
    info Ed

## SEEALSO

    vi(1), nvim(1), visual-studio-code


# SEEN:
#
# - [Trying The Oldest Text Editor In Linux - The ed Command](https://www.youtube.com/watch?v=Wn6TLK4H-Ck)
