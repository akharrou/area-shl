---
status: DONE
title: "false"
tags: [return,false,non-zero,exit,code,value,do,nothing,unsuccessfully]
---

# `false`

## INSTALLATION


```bash
#ℹ︎ installation of `false`
❯ *comes builtin*
```


## USECASES

----
#### To always return non-zero exit code, in certain contexts, understood as "false" (e.g. test statements):


```bash
#ℹ︎ always return non-zero (1) exit code
❯ false || echo $?
```

    1

    ❯ if [ -f file == false]; then echo bye; fi


## SEE

    false(1)

## SEEALSO

    true(1), test(1), expr(1)

## SEEFURTHER

- [🌎 Page: Wikipedia ➤ true and false (commands)](https://en.wikipedia.org/wiki/True_and_false_(commands))
