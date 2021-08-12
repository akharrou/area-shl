---
status: DONE
title: "wait"
tags: [await,wait,process,termination,report,status,do,action,run,execute,command]
---

# `wait`

## BRIEF

    ❯ wait [N]

`N` may be a process ID or a job specification; if a job specification is given, all processes in the job’s pipeline are waited for.

Wait for the specified process and report its termination status. If `N` is not given, all currently active child processes are waited for, and the return code is zero.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes builtin*
```


## USECASES

----
#### To wait for asynchronous process execution termination:


```bash
#ℹ︎ wait for child processes to terminate
❯ sleep 1 & sleep 3 & sleep 2 & wait && echo hi
```



```bash
#ℹ︎ wait for process to terminate, specified by identifer (pid)
❯ sleep 2 & wait $! && echo hi
```



## SEE

    wait(1)

## SEEALSO

    wait4path(1), entr(1), watch(1), trap
    disown, nohup(1), sleep(1), caffeinate(8), amphetamine,

