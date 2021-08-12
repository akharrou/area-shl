---

status: DONE
title: "disown"
tags: [remove,delete,unbind,shell,jobs,control,from,current,login,session]
---

# `disown`

## BRIEF

Remove jobs from current shell, i.e removes each `JOBSPEC` from the current login shell’s table of active jobs.

If no `JOBSPEC` is present, and neither the `-a` nor the `-r` option is supplied, (the shell’s notion of) the current job is used, usually the most recently launched job.

Exit Status: returns success unless an invalid option or `JOBSPEC` is given.

    Bash

    ❯ disown [-h] [-ar] [JOBSPEC ... | PID ...]

    Opt.  |  Behavior
    ----  |  --------
    -a    |  remove all jobs if `JOBSPEC` is not supplied
    -r    |  remove only running jobs
    -h    |  marks `JOBSPEC` as immune to `SIGHUP`

    Zsh

    ❯ disown [JOBSPEC ...]

## INSTALLATION


```bash
#ℹ︎ installation of `disown`
❯ *comes builtin*
```


## USECASES

----
#### To disown/disattach/remove job from shell’s job control:


```bash
#ℹ︎ remove/delete/disattach all jobs from shell’s control
❯ disown -a
```


```bash
#ℹ︎ remove/delete/disattach all running jobs from shell’s control
❯ disown -r
```



```bash
#ℹ︎ remove/delete/disattach job from shell’s control, specified by job name, or number
❯ sleep 5 & sleep 6 & sleep 7 & disown %sleep\ 5 %2 %3
```


    ❯ sleep 99 &
    [1] 70111
    ❯ jobs -l
    [1]+ 70111 Running   sleep 99 &
    ❯ ps 70111
      PID   TT  STAT      TIME COMMAND
    70111 s004  S      0:00.00 sleep 99
    ❯ disown %1
    ❯ jobs -l
    ❯ ps 70111
      PID   TT  STAT      TIME COMMAND
    70111 s004  S      0:00.00 sleep 99


## NOTES

`disown` removes the process from the shell’s job control, but it still leaves it connected to the terminal. One of the results is that the shell won’t receive the job’s output; also the shell won’t send it hangup signals (SIGHUP), and therefore if the shell exits, the process won’t be terminated.

## SEE

    builtins(1)

## SEEALSO

    literal-ampersand, fg, nohup(1), jobs

