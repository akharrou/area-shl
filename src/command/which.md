---
status: INCOMPLETE
title: which
tags: [get,print,display,list,program,executable,file,path,location]
---

# `which`

## BRIEF

    Bash  Behavior
    ----  -----------------------------------------------------------
    -a    print all occurrences in path
    -s    no output, just return 0 if all executables are found, else 1

    Zsh   Behavior
    ----  -----------------------------------------------------------
    -S    show steps in the resolution of symlinks
    -a    print all occurrences in path
    -m    treat the arguments as patterns
    -p    always do a path search
    -s    print symlink free path as well
    -w    print command type
    -X    specify spaces to use for indentation in function expansion

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes builtin*
```


## USECASES

----
#### To locate program/command [executable] file path, or binded to aliases:


```bash
#ℹ︎ locate relevant program/command executable file path, or binded alias
❯ which CMD   
```


```bash
#ℹ︎ locate all program/command executable file path, and binded aliases
❯ which -a CMD
```



```bash
#ℹ︎ (ZSH); locate original program/command executable file path
❯ which -p CMD  
```



## SEE

    locate(1), find(1), whereis(1)

