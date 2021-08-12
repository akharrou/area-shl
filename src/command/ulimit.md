---
status: INCOMPLETE
title: "ulimit"
tags: [set,get,print,display,system,wide,shell,resources,usage,use,limits]
---

# `ulimit`

## BRIEF

Display, or modify, shell resource limits. Provides control over the resources available to the shell and processes it creates, on systems that allow such control. Not all options are available on all platforms.

If `LIMIT` is given, it is the new value of the specified resource; the special `LIMIT` values `soft`, `hard`, and `unlimited` stand for the current soft limit, the current hard limit, and no limit, respectively. Otherwise, the current value of the specified resource is printed. If no option is given, then `-f` is assumed.

Values are in 1024-byte increments, except for `-t`, which is in seconds, `-p`, which is in increments of 512 bytes, and `-u`, which is an unscaled number of processes.

Exit Status: Returns success unless an invalid option is supplied or an error occurs.

    Bash

    ❯ ulimit [-SHabcdefiklmnpqrstuvxPT] [LIMIT]

    Opt.  |  Behavior
    ----  |  --------
    -S    |  use the `soft` resource limit
    -H    |  use the `hard` resource limit
    -a    |  all current limits are reported
    -b    |  the socket buffer size
    -c    |  the maximum size of core files created
    -d    |  the maximum size of a process’s data segment
    -e    |  the maximum scheduling priority (`nice`)
    -f    |  the maximum size of files written by the shell and its children
    -i    |  the maximum number of pending signals
    -k    |  the maximum number of kqueues allocated for this process
    -l    |  the maximum size a process may lock into memory
    -m    |  the maximum resident set size
    -n    |  the maximum number of open file descriptors
    -p    |  the pipe buffer size
    -q    |  the maximum number of bytes in POSIX message queues
    -r    |  the maximum real-time scheduling priority
    -s    |  the maximum stack size
    -t    |  the maximum amount of cpu time in seconds
    -u    |  the maximum number of user processes
    -v    |  the size of virtual memory
    -x    |  the maximum number of file locks
    -P    |  the maximum number of pseudoterminals
    -R    |  the maximum time a real-time process can run before blocking
    -T    |  the maximum number of threads

    Zsh

    ❯ ulimit [-HSacdflmnstuv] [LIMIT]

    Opt.  |  Behavior
    ----  |  --------
    -H    |  set hard limits
    -S    |  set soft and hard limits (with-H)
    -a    |  list all current resource limits
    -c    |  core dump size limit
    -d    |  maximum size of data segment
    -f    |  size of largest file allowed
    -l    |  maximum size of locked in memory
    -m    |  maximum size of physical memory
    -n    |  maximum no. of open file descriptors
    -s    |  stack size limit
    -t    |  maximum cpu time per process
    -u    |  processes available to the user
    -v    |  maximum size of virtual memory

## INSTALLATION


```bash
#ℹ︎ installation of `ulimit`
❯ *comes builtin*
```


## USECASES

----
#### To get/print/display/report all, or individual, shell resources limits:


```bash
#ℹ︎ set/change/modify system-wide shell stack size limit
❯ ulimit -s VALUE
```


```bash
#ℹ︎ get/print/display system-wide shell stack size limit
❯ ulimit -s
```

    8192


```bash
#ℹ︎ get/print/display all system-wide shell resources limits
❯ ulimit -a
```

    -t: cpu time (seconds)              unlimited
    -f: file size (blocks)              unlimited
    -d: data seg size (kbytes)          unlimited
    -s: stack size (kbytes)             8192
    -c: core file size (blocks)         0
    -v: address space (kbytes)          unlimited
    -l: locked-in-memory size (kbytes)  unlimited
    -u: processes                       2784
    -n: file descriptors                256


## SEE

    ulimit(1)

## SEEALSO

    quota(1)

