---
status: INCOMPLETE
title: "tox"
tags: [python,automated,project,package,testing]
---

# `tox`

## BRIEF

`tox` is a generic `virtualenv` management and test command line tool you can use for encoding and running your tests, in different environments.

## INSTALLATION


```bash
#ℹ︎ installation of `tox`
❯ pip install tox
```


## USECASES

----
#### To run test environments, or specify a specific test environment:

    ❯ tox   # run all environments
    ❯ tox -p   # run all environments in parallel
    ❯ tox -e NAME   # run specified test environment, i.e `testenv:NAME`

----
#### To run test environments and grant them access to globally installed packages:

    ❯ tox --sitepackages

----
#### To run test environments, in parallel:

    ❯ tox -p [auto|all|<int>]

    ❯ tox -p auto   # limit it to CPU count
    ❯ tox -p 4   # pass an integer to set that limit
    ❯ tox -p all   # run all invoked environments in parallel

Parallel mode, by default, shows output only of failed environments, and ones marked as `parallel_show_output = true`.

## RECIPES

----
#### Test environment:

    [base]
    deps =
        pytest
        pytest-cov >= 3.5
        pywin32 >=1.0 ; sys_platform == "win32"
        octomachinery==0.0.13

    [testenv:test]
    deps =
        {[base]deps}
        dulwich

    [testenv:docs]
    deps =
        {[base]deps}
        mercurial

----
#### Test environment for documentation:

    [testenv:docs]
    description = test building documentation
    allowlist_externals = open
    commands =
        pip install -e ".[docs]"
        mkdocs build
        open site/index.html


## NOTES

### Setup

`tox` is configured either:

1. in your `pyproject.toml`:

    [tool.tox]
    legacy_tox_ini = """
    [tox]
    ...

    [testenv]
    ...
    """

2. in a `tox.ini` file, that resides next to your `setup.py` file:

        projectroot/
        ├── pyproject.toml
        ├── setup.cfg
        ├── setup.py
        ├── tox.ini   <-----------
        ├── src/
        ├── tests/
        └── ...

3. in your `setup.cfg`:

### Environments

- "Test environments are defined under the `testenv` section and individual `testenv:NAME` sections, where `NAME` is the name of a specific environment."

- "Settings defined in the top-level `testenv` section are automatically inherited by individual environments unless overridden."

- `NAME` can be generative, that is generate environments, e.g.: `[testenv:py{37,38}-django{30,31}]` would generate: `py37-django30`, `py37-django31`, `py38-django30`, and `py38-django31`.

### Environment Settings

    [tox] # globally
    minversion = 3.4.0                # [version]
    skip_missing_interpreters = true  # [config|true|false]
    isolated_build = true             # [false|true]
    ignore_errors = false             # [false|true]
    recreate = false                  # [false|true]
    ignore_outcome = false            # [false|true]
    install_command = [python -m pip install {opts} {packages} | ARGV]
    list_dependencies_command = [python -m pip freeze | ARGV]

    [<name>]    # variable env
    [testenv]   # OR base environment, inherited by all `testenv:*`s
    [testenv:*] # OR per specific `testenv`
    description = [none|SINGLE-LINE-TEXT]
    parallel_show_output = true              # [false|true]
    sitepackages = false                     # [false|true]
    basepython = py39                        # [NAME|PATH]
    allowlist_externals = echo open make     # [GLOBPAT-MULTI-LINE-LIST]
    setenv = [NAME=VALUE-MULTI-LINE-LIST]
    passenv = PIPENV_*                       # [SPACE-SEPARATED-GLOBNAMES]
    deps = [MULTI-LINE-LIST]
    commands_pre = [ARGVLIST]
    commands = [ARGVLIST]
    commands_post = [ARGVLIST]

### Substitutions

    # Globally available substitutions
    {toxinidir}
    {toxworkdir}
    {homedir}
    {distdir}
    {distshare}
    {:}
    {/}

    # Subs. for virtualenv-related sections
    {envname}
    {envpython}
    {envdir}
    {envbindir}
    {envsitepackagesdir}
    {envtmpdir}
    {envlogdir}

    # Environment variables (`os.environ["KEY"]`)
    {env:KEY}
    {env:KEY:DEFAULTVALUE}
    {env:KEY:}
    {env:KEY:{env:DEFAULT_OF_KEY}}

    # Option reuse
    {[testenvName]valueName}

## SEE

    tox(1)

## SEEALSO

    virtualenv, pipenv, poetry

## SEEFURTHER

- [🌎 Home](https://tox.readthedocs.io/en/latest/)
- [🌎 Documentation](https://tox.readthedocs.io/en/latest/)
- [🌎 Repository](https://github.com/tox-dev/tox)
- [🌎 Page: Configuration](https://tox.readthedocs.io/en/latest/config.html)
- [🌎 Page: Examples](https://tox.readthedocs.io/en/latest/examples.html)
