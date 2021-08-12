---

status: INCOMPLETE
title: "jobs"
tags: [get,print,list,jobs,status]
---

# `jobs`

## BRIEF

Display status of jobs. Lists the active jobs. `JOBSPEC` restricts output to that job. Without options, the status of all active jobs is displayed.

If `-x` is supplied, `COMMAND` is run after all job specifications that appear in `ARGS` have been replaced with the process `ID` of that job’s process group leader.

Exit Status: Returns success unless an invalid option is given or an error occurs. If `-x` is used, returns the exit status of `COMMAND`.

    Bash

    ❯ jobs [-lnprs] [JOBSPEC ...]
    ❯ jobs -x COMMAND [ARGS]

    Opt.  |  Behavior
    ----  |  ----------------------------------------------------------------
    -l    |  lists process IDs in addition to the normal information
    -p    |  lists process IDs only
    -r    |  list only running jobs
    -s    |  list only stopped jobs
    -n    |  lists only processes that changed status since last notification

    Zsh

    ❯ jobs [-Zdlprs] [JOBSPEC ...]

    Opt.  |  Behavior
    ----  |  ----------------------------------------------------------------
    -Z    |  specify string to replace shell’s argument and environment with
    -d    |  show directory from which each job was started
    -l    |  list process IDs
    -p    |  list process groups
    -r    |  list only running jobs
    -s    |  list only stopped jobs

## INSTALLATION


```bash
#ℹ︎ installation of `jobs`
❯ *comes builtin*
```


## USECASES

----
#### To list shell attached jobs:


```bash
#ℹ︎ get/print/list shell attached jobs
❯ jobs -lp
```

    [2]    40342 running    sleep 7
    [3]    40343 running    sleep 6
    [4]    40370 running    sleep 5
    [5]    40371 running    sleep 7
    [6]    40372 running    sleep 6
    [7]    40408 running    sleep 5
    [8]  - 40409 running    sleep 7
    [9]  + 40410 running    sleep 6


## SEE

    builtins(1)

## SEEALSO

    literal-ampersand, disown, nohup(1), ps(1)

