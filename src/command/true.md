---
status: DONE
title: "true"
tags: [return,true,zero,exit,code,value,do,nothing,successfully]
---

# `true`

## INSTALLATION


```bash
#ℹ︎ installation of `true`
❯ *comes builtin*
```


## USECASES

----
#### To always return exit code zero, in certain contexts, understood as "true" (e.g. test statements):


```bash
#ℹ︎ always return exit code zero (0)
❯ true && echo $?
```

    0

    ❯ while true; do COMMAND; done
    ❯ while :; do COMMAND; done


## SEE

    true(1)

## SEEALSO

    false(1), test(1), expr(1)

- [🌎 Page: Wikipedia ➤ true and false (commands)](https://en.wikipedia.org/wiki/True_and_false_(commands))
