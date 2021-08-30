---
status: INCOMPLETE
title: "pipenv"
tags: [python,project,virtualenv,packages,manager]
---

# `pipenv`

## INSTALLATION


```bash
#ℹ︎ installation of `pipenv`
❯ pip install pipenv
```


## BRIEF

Creates and manages a virtualenv for your projects, as well as adds/removes packages from your Pipfile as you install/uninstall packages. It also generates the ever-important Pipfile.lock, which is used to produce deterministic builds.

## USECASES

----
#### To [re]create a virtualenv, and drop you within it in a sub-shell, optionally with a specified Python version: (`ctrl+d`: to exit virtualenv shell)

    ❯ pipenv shell --three   # python version 3.*
    ❯ pipenv shell --python 3.9   # python version 3.9

    ❯ pipenv --rm   # remove virtualenv

If a virtualenv already exists, `pipenv` will remove it and create a new one, "recreate". You can alternatively remove the virtualenv manually.

----
#### To [un]install PyPI packages specified in `Pipfile.lock`, and `Pipfile`, and other packages, into virtualenv:
--ignore-pipfile — Ignore the Pipfile and install from the Pipfile.lock.

    ❯ pipenv install   # `Pipfile.lock` & `Pipfile` packages under: `[packages]`
    ❯ pipenv install --dev   # `Pipfile.lock` & `Pipfile` packages under: `[packages]` & `[dev-packages]`
    ❯ pipenv install -r <FILE>   # install packages specificied in `<FILE>` (e.g. `requirements.txt`)
    ❯ pipenv install --skip-lock   # ignore `Pipfile.lock`, install just from `Pipfile`
    ❯ pipenv install --ignore-pipfile   # ignore `Pipfile`, install just from `Pipfile.lock`

    ❯ pipenv install PACKAGE   # other packages
    ❯ pipenv install "requests>=1.4"   # other packages at specific versions
    ❯ pipenv install -e DIRECTREFERENCE   # other packages (editable mode)

    ❯ pipenv install -e .   # local package (editable mode)

    ❯ pipenv uninstall PACKAGE
    ❯ pipenv uninstall --all-dev   # all developement packages
    ❯ pipenv uninstall --all   # all packages

Installing other packages automatically adds them to `Pipfile`, and `Pipfile.lock`, though not to `Pipfile.lock`, if the environemnt variable `PIPENV_SKIP_LOCK=false` is set, this makes things much faster, you can then just `❯ pipenv lock` when your done.

All package [un]installations can be done from outside the virtualenv, or from within. Only the virtualenv environemnt will ever be effected, never the global environment.

----
#### To install local project in virtualenv, and run it within virtualenv:

    ❯ pipenv install -e .
    ❯ pipenv install -e ".[dev,test]"

    ❯ pipenv run tpltpkg-cli
    ❯ pipenv run python -m tpltpkg
    ❯ pipenv run python main.py
    ❯ pipenv run python

----
#### To generate `Pipfile.lock`. Install all packages from `Pipfile.lock`. And do both:

    ❯ pipenv lock   # create `Pipfile.lock`
    ❯ pipenv sync   # install `Pipfile.lock`
    ❯ pipenv update   # Do `lock`, then `sync`

----
#### To generate `[dev-]requirements.txt`:

    ❯ pipenv lock -r   # only `[packages]`
    ❯ pipenv lock -r --dev-only   # only `[dev-packages]`
    ❯ pipenv lock -r --dev   # `[packages]` and `[dev-packages]`

    ❯ pipenv lock -r > requirements.txt
    ❯ pipenv lock -r --dev-only > dev-requirements.txt

----
#### To run custom scripts, use the `[scripts]` option in your `Pipfile`:

    ❯ pipenv run SCRIPT
    ❯ pipenv run printspam
    ❯ pipenv run echospam

    ## Pipfile
    [scripts]
    tests = "sh -c \"coverage run --source=tpltpkg -m pytest -v tests && coverage report\""
    printspam = "python -c \"print("""I am a silly example, no one would need to do this""")\""
    echospam = "echo I am really a very silly example"
    tests = "bash ./run-tests.sh"

----
#### To retrieve information: current directory path, current virtualenv path, the current virutalenv Python interpreter path:

    ❯ pipenv --where
    /Users/johndoe/projects/projectroot

    ❯ pipenv --venv
    /Users/johndoe/.local/share/virtualenvs/projectroot--WYPLJT0

    ❯ pipenv --py
    /Users/johndoe/.local/share/virtualenvs/projectroot--WYPLJT0/bin/python

## RECIPES

----
#### Typical Pipfile:

    projectroot/
    ├── setup.py
    ├── Pipfile
    ├── Pipfile.lock
    ├── .
    ├── .
    ├── .
    ├── src/
    └── tests/

----
#### Typical workflow looks like:

    # Setup
    ❯ pipenv install -r requirements.txt   # install dependencies from local `requirements.txt`
    ❯ pipenv install                       # AND/OR install dependencies from local `Pipfile` & `Pipfile.lock`

    # Run things in virtualenv
    ❯ pipenv shell                         # drop into virtualenv
    ❯ pipenv run python                    # OR run interpreter
    ❯ pipenv run python -m tpltpkg         # OR run package dir, requires __main__.py
    ❯ pipenv run tpltpkg-cli               # OR run package cli entry point
    ❯ pipenv run python main.py            # OR run script

    ❯ pipenv lock                          # generate `Pipfile.lock` file
    ❯ `ctrl+d`                             # exit virtualenv shell
    ❯ pipenv --rm                          # remove virtualenv

----
#### Template `Pipfile`, typically found in project`s root directory:

    [[source]]
    url = "https://pypi.org/simple"
    verify_ssl = true
    name = "pypi"

    [[source]]
    url = "https://test.pypi.org/simple/"
    verify_ssl = true
    name = "testpypi"

    [requires]
    python_version = "3.9"

    [packages]
    tpltpkg = { editable = true, path = "." }
    mypkg = { index = "testpypi" }
    requests = {git = "https://github.com/requests/requests.git", editable = true, ref = "v2.20.1"}
    scrapy = "*"

    [dev-packages]
    check-manifest = { version = "3.2.1" }
    unittest2 = { version = ">=1.0,<3.0" }
    coverage = "*"
    covdefaults = "*"
    pytest = "*"
    mypy = "*"

----
#### Alternative template. Place all requirements and extra requirements (e.g. `dev`, `test`, `docs`) in `setup.[cfg|py]`:

    [[source]]
    url = "https://pypi.org/simple"
    verify_ssl = true
    name = "pypi"

    [requires]
    python_version = "3.9"

    [packages]
    tpltpkg = { path = ".", editable = true }

    [dev-packages]
    tpltpkg = { path = ".", editable = true, extras = ["dev", "test", "docs"] }

    [scripts]
    tests = "sh -c \"coverage run --source=tpltpkg -m pytest -v tests && coverage report -m\""
    docs = "mkdocs serve"


## INIT

    eval "$(pipenv --completion)"  # for zsh
    # eval (pipenv --completion)     # for bash

## VARIABLES

    # PIPENV_CACHE_DIR
    export PIPENV_COLORBLIND=false  # default
    export PIPENV_DEFAULT_PYTHON_VERSION="3"
    export PIPENV_DONT_LOAD_ENV=false  # default
    export PIPENV_DONT_USE_ASDF=false  # default
    export PIPENV_DONT_USE_PYENV=false  # default
    # PIPENV_DOTENV_LOCATION
    # PIPENV_EMULATOR
    export PIPENV_HIDE_EMOJIS=false  # default
    # PIPENV_IGNORE_VIRTUALENVS
    export PIPENV_INSTALL_TIMEOUT=900  # default, 15mins
    export PIPENV_MAX_DEPTH=3  # default
    export PIPENV_MAX_RETRIES=0  # default
    export PIPENV_MAX_ROUNDS=16  # default
    export PIPENV_MAX_SUBPROCESS=16  # default
    export PIPENV_NOSPIN=false  # default
    # PIPENV_NO_INHERIT
    # PIPENV_PIPFILE
    # PIPENV_PYPI_MIRROR
    # PIPENV_RESOLVE_VCS
    # PIPENV_SHELL
    # PIPENV_SHELL_FANCY
    export PIPENV_SKIP_LOCK=true  # default
    # PIPENV_SPINNER
    export PIPENV_TIMEOUT=120  # default
    # export PIPENV_VENV_IN_PROJECT=1
    export PIPENV_YES=false  # default
    # PIP_EXISTS_ACTION


## PATHS

Path | Description
- | -
`$HOME/.local/share/virtualenvs/` | Default directory that stores virtual environment.

## SEE

    pipenv -h

## SEEALSO

    virtualenv, tox, poetry

## SEEFURTHER

- [🌎 Documentation](https://pipenv.pypa.io/)
- [🌎 Repository](https://github.com/pypa/pipenv)
