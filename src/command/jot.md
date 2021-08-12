---
status: DONE
title: "jot"
tags: [generate,create,make,get,print,display,sequential,random,data]
---

# `jot`

## INSTALLATION


```bash
#ℹ︎ installation of `jot`
❯ *comes pre-installed*
```


## USECASES

----
#### To generate/create/make get/print/display sequential data:

    ❯ jot REPS [LOW [HIGH [STEP]]]
    ❯ jot -n -b WORD REPS
    ❯ jot -n -s SEP -w FMT - [LOW [HIGH [STEP]]]


```bash
#ℹ︎ create/make/generate get/print/display numeric/number range/set/list/sequence, with specified start, stop, and step values
❯ jot - 0 20 2
```


    ❯ jot -p1 - 3 0 -.5
    3.0
    2.5
    2.0
    1.5
    1.0
    0.5
    0.0

    ❯ jot -s " | " - 1 10
    1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10


```bash
#ℹ︎ create/make/generate, get/print/display ASCII character/letter range/set/list/sequence, sequentially
❯ jot -s "" -w %c - A Z
```

    ABCDEFGHIJKLMNOPQRSTUVWXYZ

    ❯ jot -s "" -w %c - 48 57
    0123456789


```bash
#ℹ︎ generate/create/make repeated set/list/block of characters
❯ jot -ns "" -b "x" 512
```


----
#### To generate/create/make get/print/display random data:


```bash
#ℹ︎ generate/create/make, get/print/display infinite random data range/set
❯ jot -r 0
```



```bash
#ℹ︎ create/make/generate, get/print/display ASCII character range/set, randomly
❯ jot -r -s "" -w %c 32 a z
```

    agyqnhgtqvwvixqmtoqdgdqtipdpbrij

    ❯ jot -r -s "\n" -w %c 160 a z | rs -g 0 32
    uhysdpirjuilqwkkslgnjbjsgbqamwiq
    ajcclmiiwdptacxenyffrrplfcmbiwad
    yvclqsmpyunvdasuiqkljdelcyjqvqdg
    tyedkihlaincqemodsnmhwgqansiqyqj
    dblmjfggjauucqkbjhhnngfqcflwmaus


## NOTES

- Default arguments are: `100, 1, 100, 1`, and if seed is requested, it is picked randomly.

             REPS: unsigned integer, default: 100, 0 represents infinite
              LOW: real number, default: 1
             HIGH: real number, default: 100
        STEP/SEED: real number, default: 1, or -1

    A `-` character in place of any of the four arguments, represents an omitted argument, and is replaced with its corresponding default, `REPS` by the boundary `LOW-HIGH`.

- For the `-w` option: Octal `%o`, decimal `%d`, hexadecimal `%x` or `%X`, exponential `%e`, ASCII `%c`, zero padded `%0N...`, and right-adjusted `%-` representations are possible by using the appropriate `printf(3)` conversion specification inside word.

        %[#][ ][{+,-}][0-9]*[.[0-9]*]?

    where `?` must be one of

        [l]{d,i,o,u,x}

    or
        {c,e,f,g,D,E,G,O,U,X}

    E.g.:

        -w xa%c
        -w "-> %03c <-"
        -w "-> %03o <-"
        -w "-> %03d <-"
        -w "-> %03x <-"
        -w "-> %03X <-"
        -w "-> %e <-"

## SEE

    jot(1)

## SEEALSO

    seq(1), rs(1)

