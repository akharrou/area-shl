---
status: DONE
title: "zsh/sched"
tags: [zsh,zshell,shell,extension,module,countdown,dated,timed,schedule,commands,executions,events]
---

# `zsh/sched`

## INSTALLATION


```bash
#ℹ︎ installation of `zsh/sched`
❯ *comes installed with: zsh*
```


## USECASES

----
#### To schedule commands to be executed after specified countdown or at some specified time:


```bash
#ℹ︎ schedule command execution events in seconds countdown
❯ sched -o +5 echo hi
```


```bash
#ℹ︎ schedule command execution events in full countdown
❯ sched -o +00:00:02 echo hi
```


```bash
#ℹ︎ schedule command execution events in full dated
❯ sched -o 14:20:32 "echo hi"
```



```bash
#ℹ︎ get/print/list scheduled command execution events
❯ echo $zsh_scheduled_events
```



## INIT

    zmodload zsh/sched


## SEEALSO

    zsh/datetime, at(1), crontab(1)

## SEEFURTHER

- [🌎 Documentation](https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html#The-zsh_002fsched-Module)
