---
status: TODO
title: "java"
tags: [java,runtime,environment,interpreter,runs,interprets,executes,bytecode,files]
---

# `java`

## INSTALLATION


```bash
#ℹ︎ installation of `java`
❯ *comes pre-installed*
```


```bash
#ℹ︎ installation of `java`
❯ brew install java
```


## RECIPES

----
#### To compile and run Java code files:


```bash
#ℹ︎ execute/run/launch/start java bytecode program files
❯ java <FILE>.class
```


The step before this is to compile Java files using the Java compiler `javac`. The output of which are `.class` Java bytecode files.


## INIT

    # For the system Java wrappers to find this JDK, symlink it with
    # sudo ln -sfn /usr/local/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk

    # If you need to have openjdk first in your PATH, run:
    export PATH="/usr/local/opt/openjdk/bin:$PATH"

    # For compilers to find openjdk you may need to set:
    # export CPPFLAGS="-I/usr/local/opt/openjdk/include"


## SEE

    java

## SEEALSO

    javac

## SEEFURTHER

- [🌎 Home](none)
- [🌎 Documentation](none)
- [🌎 Repository](none)
- [🌎 Page](none)
