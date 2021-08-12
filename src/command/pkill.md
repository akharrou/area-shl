---
status: TODO
title: "pkill"
tags: [kill,terminate,signal,processes,by,full,partial,name]
---

# `pkill`

## BRIEF

Search process table on the running system and signal all processes that match the criteria, given on the command line.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To kill/terminate individual processes by specifying their process/application name:


```bash
#ℹ︎ terminate individual process specified by name
❯ pkill PROCNAME
```


```bash
#ℹ︎ terminate individual process specified by name; request confirmation/permission for every process matched
❯ pkill -I PROCNAME
```


```bash
#ℹ︎ terminate individual process specified by name; restrict matches to terminal associated process
❯ pkill -t TTY PROCNAME
```



## SEE

    pkill(1)

## SEEALSO

    kill, killall, pgrep, ps

