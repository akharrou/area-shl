---
status: INCOMPLETE
title: pip
tags: [python,package,installer,manager]
---

# `pip`

## BRIEF

`pip` is the package installer for Python. You can use it to install packages from the Python Package Index and other indexes.

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install pip
```


## USECASES

----
#### To list all installed packages:

    ❯ pip list

----
#### To install/uninstall (production) packages:


```bash
#ℹ︎ install specified package, at default location path
❯ pip install PACKAGE
```



```bash
#ℹ︎ install specified package, at specified/custom location path
❯ pip install PACKAGE --target DIR
```


    ❯ pip install requests
    ❯ pip install requests@git+https://github.com/psf/requests.git
    ❯ pip install requests@git+https://github.com/psf/requests.git@v1.5.12#egg=requests


```bash
#ℹ︎ install specified package, from specified/custom/different package index
❯ pip install --index-url=PKGINDEX PACKAGE
```

    ❯ pip install -i "https://test.pypi.org/simple/" tpltpkg --target .


```bash
#ℹ︎ uninstall specified package
❯ pip uninstall PACKAGE
```

    ❯ pip uninstall requests

----
#### To install/uninstall "editable/developement" (mode) packages:

    ❯ pip install -e .

```bash
#ℹ︎ install current local project, as editable/developement package
❯ pip install -e . --no-deps
```



```bash
#ℹ︎ install specified local project, as editable/developement package
❯ pip install -e PATH
```



```bash
#ℹ︎ install specified remote project, as editable/developement package
❯ pip install -e git+https://github.com/USER/REPO.git
```


    ❯ pip install -e requests@git+https://github.com/USER/REPO.git@v1.5.12#egg=REPO   # install specified remote project, as editable/developement package, at specified version tag

This installs the packages using a symlink to the development code, allowing immediate reflection of changes in project.

Also possible, but less advised (https://stackoverflow.com/a/19048754/13992057):

    ❯ python setup.py develop
    ❯ python setup.py develop --uninstall

----
#### To upgrade packages:


```bash
#ℹ︎ self-upgrade pip command
❯ pip install --upgrade pip
```


```bash
#ℹ︎ upgrade specified packages
❯ pip install --upgrade PACKAGES
```


----
#### To get/print/display package information:


```bash
#ℹ︎ get/print/display package information
❯ pip show PACKAGE
```


    ❯ pip show requests
    Name: requests
    Version: 2.24.0
    Summary: Python HTTP for Humans.
    Home-page: https://requests.readthedocs.io
    Author: Kenneth Reitz
    Author-email: me@kennethreitz.org
    License: Apache 2.0
    Location: /usr/local/lib/python3.9/site-packages
    Requires: urllib3, certifi, idna, chardet
    Required-by: twine, Sphinx, requests-toolbelt

----
#### To install-into/extract-from the environment/virtual-environment, the list of required packages (dependencies):


```bash
#ℹ︎ install python package requirements list
❯ pip install --requirement requirements.txt
```



```bash
#ℹ︎ extract global python packages, for requirements list
❯ pip freeze > requirements.txt
```


```bash
#ℹ︎ extract local virtual environment python packages, for requirements list
❯ pip freeze --local > requirements.txt
```


The requirements file is conventionally called: "[dev-]requirements.txt".


## ALIASES

    [[ `alias pipl 2>/dev/null` ]] && unalias pipl
    [[ `declare -f pipl 2>/dev/null` ]] && unset -f pipl
    # ❯ pipl [PACKAGE]   # fuzzy search through installed python packages
    function pipl()   # fuzzy search through installed python packages
    {
        if [[ ! -r $CACHE/pip/pkg-listing.txt || $1 = --f* || $1 == -f ]]; then
            [[ ! -d $CACHE/pip ]] &&\
                mkdir -p $CACHE/pip/
            [[ ! -f $CACHE/pip/pkg-listing.txt ]] &&\
                touch $CACHE/pip/pkg-listing.txt
            pip list 1>$CACHE/pip/pkg-listing.txt
            [[ $1 = --force || $1 == -f ]] && set -- ""
        fi
        cat $CACHE/pip/pkg-listing.txt \
        | fzf \
            --multi \
            --query="$1" \
            --header-lines=2 \
            --preview="pip show \$(echo {} | grep -oE '^(\w-?)+')" \
            --preview-window="right,50%,nowrap,nofollow,cycle,nohidden"
    }


## SEEALSO

    poetry, pipenv, npm

## SEEFURTHER

- [🌎 Home](https://pypi.org/)
- [🌎 Documentation](https://pip.pypa.io/)
- [🌎 Repository](https://github.com/pypa/pip)
