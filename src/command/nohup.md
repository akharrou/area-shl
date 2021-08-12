---
status: DONE
title: "nohup"
tags: [run,launch,start,execute,invoke,hangups,immune,process,command,script,program,utility]
---

# `nohup`

## SYNTAX

    ❯ nohup [--] UTILITY [ARG ...]

## INSTALLATION


```bash
#ℹ︎ installation of `nohup`
❯ *comes pre-installed*
```


## USECASES

----
#### To invoke utility immune to signal hangups:


```bash
#ℹ︎ run/launch/start/execute/invoke hangups immune jobs/commands/process
❯ nohup -- echo "Hello, world"; sleep 0.3 && cat nohup.out
```

    appending output to nohup.out
    Hello, world


## NOTES

If the standard output is a terminal, the standard output is appended to the file `nohup.out` in the current directory. If standard error is a terminal, it is directed to the same place as the standard output. If the output file `nohup.out` cannot be created in the current directory, the `nohup` utility creates, and uses, `$HOME/nohup.out`.

## SEE

    nohup(1)

## SEEALSO

    literal-ampersand, fg, disown, signal(3)

