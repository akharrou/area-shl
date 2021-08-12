---
status: DONE
title: "parallel"
tags: [run,execute,parallel,jobs,processes]
---

# `parallel`

## INSTALLATION


```bash
#ℹ︎ installation of `parallel`
❯ brew install moreutils
```


## USECASES

----
#### To run multiple commands in parallel with arguments:

    ❯ parallel CMD -- ARG ...


```bash
#ℹ︎ run one same command in parallel, passing/mapping one argument correspondingly to each
❯ parallel bash -c "echo hi; sleep 2; echo bye" -- 1 2 3
```


    ❯ parallel -i echo "{} \!" -- 1 2 3 4  # run one same command in parallel, passing/mapping one argument correspondingly to each, at specified argument position
    1 !
    2 !
    3 !
    4 !

    ❯ parallel -n 2 echo -- 1 2 3 4  # run one same command in parallel, passing/mapping N (specified number) of arguments correspondingly to each
    1 2
    3 4

----
#### To run one same command in parallel, passing/mapping one argument correspondingly to each:

    ❯ parallel -- "CMD1 ARG  ..." ...


```bash
#ℹ︎ run multiple commands in parallel with arguments
❯ parallel -- "echo good morning" "echo good evening" "echo good bye"
```


----
#### To run commands/jobs in parallel, limited by number of parallel jobs or CPU load:


```bash
#ℹ︎ run parallel at most N (specified number of) commands/jobs
❯ parallel -j MAXJOBS CMD --- ARG ...
```



```bash
#ℹ︎ run parallel commands/jobs up to at most N (specified number of) CPU load
❯ parallel -l MAXLOAD CMD --- ARG ...
```


## RECIPES

----
#### To find and page through all manual pages of a command:


```bash
#ℹ︎ get/find and print/page through all manual pages of command
❯ parallel -j9 -i man {} CMD -- {1..9} | command less
```



## SEE

    parallel(1)

## SEEALSO

    find(1), fd(1), parallel(1)

## SEEFURTHER

- [🌎 Documentation](https://www.gnu.org/software/parallel/)
