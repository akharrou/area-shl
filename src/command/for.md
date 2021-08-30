---
status: INCOMPLETE
title: "for"
tags: [shell,statements,constructs,looping]
---

# `for`

## INSTALLATION


```bash
#ℹ︎ installation of `for`
❯ *comes builtin*
```


## USECASES

----
#### To `for` loop over objects:


```bash
#ℹ︎ loop over array variable
❯ for elem in ${ARRAY[*]}; do echo ${elem}; done
```



```bash
#ℹ︎ loop over stepped number sequence/series/list/range
❯ for i in {0..10..2}; do echo $i; done
```

    0
    2
    4
    6
    8
    10

## RECIPES

----
#### To unpack variables from array:

    ❯ arr=(
        left  LFT backward-char
        right RIT forward-char
        up    ri  up-line-or-history
        down  ind down-line-or-history
    )
    ❯ for key kcap widget in ${arr[@]}; do echo -n "key: $key\nkcap: $kcap\nwidget: $widget\n\n"; done

Also possible:

    ❯ for key   kcap widget (
          left  LFT  backward-char
          right RIT  forward-char
          up    ri   up-line-or-history
          down  ind  down-line-or-history
    ) {
        echo -n "key: $key\nkcap: $kcap\nwidget: $widget\n\n"
    }
    key: left
    kcap: LFT
    widget: backward-char

    key: right
    kcap: RIT
    widget: forward-char

    key: up
    kcap: ri
    widget: up-line-or-history

    key: down
    kcap: ind
    widget: down-line-or-history


## SEE

    builtins(1)

## SEEALSO

    while, until

## SEEFURTHER

- [🌎 Documentation](https://www.gnu.org/software/bash/manual/bash.html#Looping-Constructs)
