---
status: DONE
title: "literal-colon (:)"
tags: [expand,arguments,perform,redirections]
---

# Literal colon (`:`)

## BRIEF

Do nothing beyond expanding arguments and performing redirections. The return status is zero.

## INSTALLATION


```bash
#ℹ︎ installation of literal colon (`:`)
❯ *comes builtin*
```


## USECASES

----
#### To utilize literal colon (`:`) builtin:


```bash
#ℹ︎ ignore subsequent commands
❯ : echo hi
```


```bash
#ℹ︎ assign variable if non-existant or null
❯ : ${VAR:=1}
```


```bash
#ℹ︎ redirect standard error to standard output file descriptors
❯ : 2>1
```



## SEE

    builtins(1)

## SEEALSO

    literal-ampersand

