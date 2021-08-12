---
status: DONE
title: "fg"
tags: [send,move,return,running,job,to,foreground]
---

# `fg`

## BRIEF

Move job to the foreground, i.e to active prompt focus. Place the job identified by `JOBSPEC` in the foreground, making it the current job.  If `JOBSPEC` is not present, (the shell’s notion of) the current job is used, usually the most recently launched job.

Exit Status: Status of command placed in foreground, or failure if an error occurs.

    Bash & Zsh

    ❯ fg [JOBSPEC ...]

## INSTALLATION


```bash
#ℹ︎ installation of `fg`
❯ *comes builtin*
```


## USECASES

----
#### To move a background job to the foreground:


```bash
#ℹ︎ move/bring/return current (most recently launched) job to foreground
❯ sleep 3 & fg
```

    [1] 21798
    [1]  + 21798 running    sleep 3


```bash
#ℹ︎ move/bring/return single job to foreground, specified by job name
❯ sleep 3 & fg %sleep\ 3
```

    [1] 22085
    [1]  + 22085 running    sleep 3


```bash
#ℹ︎ move/bring/return multiple jobs to foreground, specified by job number
❯ sleep 3 & sleep 5 & fg %1 %2
```

    [1] 22210
    [2] 22211
    [1]  - 22210 running    sleep 3
    [2]  - 22211 running    sleep 5


## SEE

    builtins(1)

## SEEALSO

    bg, &(literal-ampersand), disown, nohup(1), jobs

