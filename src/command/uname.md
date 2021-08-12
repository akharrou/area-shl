---
status: DONE
title: "uname"
tags: [get,print,operating,system,os,kernel,version,release,machine,name,processor,information]
---

# `uname`

## INSTALLATION


```bash
#ℹ︎ installation of `uname`
❯ *comes pre-installed*
```


## USECASES

----
#### To get information on the computer/machine/os:


```bash
#ℹ︎ get/print the operating system name, and release
❯ uname -sr
```

    Darwin 20.5.0


```bash
#ℹ︎ get/print the operating system name, release version
❯ uname -v
```

    Darwin Kernel Version 20.5.0: Sat May  8 05:10:33 PDT 2021; root:xnu-7195.121.3~9/RELEASE_X86_64


```bash
#ℹ︎ get/print machine hardware name, and processor architecture name
❯ uname -mp
```

    x86_64 i386


```bash
#ℹ︎ get/print computer’s communications network nodename
❯ uname -n
```

    Mac

    ❯ uname -a   # get/print all information

## RECIPES

----
#### Case switch on operating system and hardware architecture class:

    ❯ case `uname -sm` in
        Darwin\ arm64)   echo "Darwin arm64";;
        Darwin\ x86_64)  echo "Darwin x86_64";;
        Linux\ armv5*)   echo "Linux armv5*";;
        Linux\ armv6*)   echo "Linux armv6*";;
        Linux\ armv7*)   echo "Linux armv7*";;
        Linux\ armv8*)   echo "Linux armv8*";;
        Linux\ aarch64*) echo "Linux aarch64*";;
        Linux\ *64)      echo "Linux *64";;
        FreeBSD\ *64)    echo "FreeBSD *64";;
        OpenBSD\ *64)    echo "OpenBSD *64";;
        CYGWIN*\ *64)    echo "CYGWIN *64";;
        MINGW*\ *64)     echo "MINGW* *64";;
        MSYS*\ *64)      echo "MSYS* *64";;
        Windows*\ *64)   echo "Windows* *64";;
        *)               echo "none";;
    esac


## SEE

    uname(1)

## SEEALSO

    hostname(1), machine(1), sw_vers(1), sysctl(8)

