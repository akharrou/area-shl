---
status: DONE
title: "pyenv"
tags: [manage,python,interpreter,versions]
---

# `pyenv`

## INSTALLATION


```bash
#ℹ︎ installation of `pyenv`
❯ brew install pyenv
```


```bash
#ℹ︎ installation of `pyenv` dependencies
❯ brew install openssl readline tcl-tk sqlite3 xz zlib
```


## USECASES

----
#### To


```bash
#ℹ︎ list all python versions available for installations
❯ pyenv install --list
```

    ...

----
#### To get Python interpreter information from `pyenv`:


```bash
#ℹ︎ list all Python versions available to pyenv
❯ pyenv versions
```

    system
    3.8.11
    * 3.9.6 (set by PYENV_VERSION environment variable)


```bash
#ℹ︎ get/print/display current Python interpreter directory, executable path, and version, name, path, and origin
❯ pyenv prefix; pyenv which python; pyenv version; pyenv version-name; pyenv version-file; pyenv version-origin;
```

    /Users/johndoe/.local/share/pyenv/versions/3.9.6
    /Users/johndoe/.local/share/pyenv/versions/3.9.6/bin/python
    3.9.6 (set by PYENV_VERSION environment variable)
    3.9.6
    /Users/johndoe/.local/share/pyenv/version
    PYENV_VERSION environment variable

----
#### To manage Python interpreter installations:


```bash
#ℹ︎ install python version, with compilation logs
❯ pyenv install --verbose 3.9.6
```


```bash
#ℹ︎ change globally used python version
❯ pyenv global 3.9.6 && exec $SHELL --login
```


```bash
#ℹ︎ change locally (in PWD) used python version
❯ pyenv local 3.8.11 && exec $SHELL --login
```

    ❯ python
    .
    .
    .

```bash
#ℹ︎ uninstall python version
❯ pyenv uninstall 3.9.6
```


----
#### To get administrative information:

    ❯ pyenv shell; pyenv root; echo; pyenv shims;


## INIT

    export PYENV_ROOT="$DATA/pyenv"
    export PATH="$PYENV_ROOT/bin:$PATH"
    export PYENV_VERSION="3.9.6"

    eval "$(pyenv init --path)"
    eval "$(pyenv init -)"


## ENVIRONMENT

Variable | Description
- | -
`$PYENV_ROOT`| Directory under which Python versions and shims reside. Default: `~/.pyenv`.

    ＄PYENV_VERSION
       Python version to be used.
`$PYENV_DIR`| Directory to start searching for `.python-version` files. Default: `$PWD`

## PATHS

Path | Description
- | -
📂 `$(brew --prefix pyenv)/` | `pyenv` configuration directory.
📂 `$PYENV_ROOT/` | Python versions and shims reside here.

## BUGS

1. 🐞 python build fails (1)

        ...
        rm -f /Users/johndoe/Library
        rm: /Users/johndoe/Library: is a directory
        make: [/Users/johndoe/Library] Error 1 (ignored)
        ar rcs /Users/johndoe/Library Modules/getbuildinfo.o ...
        ar: /Users/johndoe/Library: Is a directory
        make: *** [/Users/johndoe/Library] Error 1

    - 🔧 Solution #1

        1. Remove the `$LIBRARY` environment variable.

            In the shell initialization/startup files, you had the `$LIBRARY` environment variable set to `"$HOME/Library"`. Then in the build/compilation process, it used that environment variable. This crashed the build.

2. 🐞 python build fails (2)

    - 🔧 Solution #1

        See: <https://stackoverflow.com/questions/51551557/pyenv-build-failed-installing-python-on-macos/68265442#68265442>

## SEE

    pyenv -h

## SEEALSO

    rbven, phpenv, jenv

## SEEFURTHER

- [🌎 Repository](https://github.com/pyenv/pyenv)
