---
status: DONE
title: "mkdocs"
tags: [project,documentation,static,website,generator]
---

# `mkdocs`

## INSTALLATION


```bash
#ℹ︎ installation of `mkdocs`
❯ pip install mkdocs
```


## USECASES

----
#### To build static documentation website, start/run web server, and host/serve it


```bash
#ℹ︎ build static documentation website
❯ mkdocs build
```



```bash
#ℹ︎ build static documentation website, and start/run live-reloading web server
❯ mkdocs serve
```


Served on `http://127.0.0.1:8000/` else on whatever is configured in `mkdocs.yml`.

## RECIPES

----
#### To create a new `mkdocs` project:

    ❯ mkdocs new DIRNAME
    ❯ mkdocs serve


## NOTES

Project layout:

    .
    ├── mkdocs.yml    # the configuration file
    ├── docs/
    │   ├── index.md  # the documentation homepage
    │   └── ...       # other markdown pages, images and other files
    └── site/         # build directory, built docs site

## PATHS

Path | Description
- | -
`PROJECTROOT/mkdocs.yml` | Per project directory configuration file.

## SEE

    mkdocs -h

## SEEALSO

    sphinx-doc

## SEEFURTHER

- [🌎 Home](https://www.mkdocs.org/)
- [🌎 Documentation](https://www.mkdocs.org/)
- [🌎 Documentation: Github Wiki](https://github.com/mkdocs/mkdocs/wiki)
- [🌎 Repository](https://github.com/mkdocs/mkdocs)
- [🌎 Page: Mkdocs Material Plugin Theme](https://squidfunk.github.io/mkdocs-material/)
