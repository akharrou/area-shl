---
status: INCOMPLETE
title: "broot"
tags: [tree,viewer,fuzzy,searcher,finder,file,manager,launcher]
---

# `broot`

## BRIEF

Explore file hierarchies with a tree-like view, manipulate files, launch actions.

Prompt:

| Prefix | Search
| -      | -
| ` `    | fuzzy search on sub path
| `/`    | regex search on file name
| `e/`   | exact string search on file name
| `f/`   | fuzzy search on file name
| `nt/`  | tokens search on file name
| `ep/`  | exact string search on sub path
| `rp/`  | regex search on sub path
| `t/`   | tokens search on sub path
| `c/`   | exact string search on file content
| `cr/`  | regex search on file content

## INSTALLATION


```bash
#ℹ︎ installation of `broot`
❯ brew install broot
```


## USECASES

----
#### To explore file hierarchy in tree-like view:


```bash
#ℹ︎ list/explore file hierarchy in tree-like view
❯ broot --sort-by-size --show-git-info --sizes --whale-spotting --dates --permissions --hidden
```

    171M /Users/johndoe/dir
       112M    2021/08/13 10:37 rwx______ akharrou staff venv
       32M     2021/08/28 14:24 rwx______ akharrou staff .git
       25M     2021/08/20 15:03 rwx______ akharrou staff site
       1.8M    2021/08/20 15:02 rwxr_xr_x akharrou staff src
       66K     2021/08/13 10:37 rwx______ akharrou staff theme
       12K     2021/08/13 10:37 rwx______ akharrou staff .github
       8196    2021/08/13 10:37 rwx______ akharrou staff README.md
      M5128    2021/08/17 00:46 rwx______ akharrou staff mkdocs.yml
       665     2021/08/13 00:02 rwx______ akharrou staff build.sh
       592     2021/08/12 23:56 rw_______ akharrou staff .draft
       303     2021/08/19 10:36 rw_______ akharrou staff Makefile
       42      2021/08/13 00:33 rw_______ akharrou staff .gitignore
       11      2021/08/11 14:51 rw_______ akharrou staff build.sh


## ALIASES

    alias br=broot


## PATHS

Path | Description
- | -
`~/.config/broot/conf.hjson` | File containing configurations.

## SEE

    broot(1)

## SEEALSO

    tree(1), exa(1), nnn(1), ranger(1), lf

## SEEFURTHER

- [🌎 Home](https://dystroy.org/broot/)
- [🌎 Repository](https://github.com/Canop/broot)
