---
status: TODO
title: "shellcheck"
tags: [shell,script,analysis,linter,grammar,syntax,checker]
---

# `shellcheck`

## INSTALLATION


```bash
#ℹ︎ installation of `shellcheck`
❯ brew install shellcheck
```


## USECASES

----
#### To


```bash
#ℹ︎ check/lint/analyze shellscript file grammar/syntax
❯ shellcheck --shell=bash <FILE>.sh
```



```bash
#ℹ︎ check/lint/analyze shellscript file grammar/syntax, output patch
❯ shellcheck --shell=bash --format=diff <FILE>.sh
```


Available formats are:


## SEE

    shellcheck(1)

## SEEALSO

    eslint

## SEEFURTHER

- [🌎 Home](https://www.shellcheck.net/)
- [🌎 Repository](https://github.com/koalaman/shellcheck)
