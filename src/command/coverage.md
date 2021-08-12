---
status: INCOMPLETE
title: "coverage"
tags: [python,project,source,code,testing,coverage,checker]
---

# `coverage`

## BRIEF

Measure, collect, and report on code coverage in Python programs.

## INSTALLATION


```bash
#ℹ︎ installation of `coverage`
❯ pip install coverage
```


To configure `coverage`, you can either create a `.coveragerc` file, which should reside next to your `setup.py`, or place the configuration in either: `setup.cfg`, `tox.ini`, or `pyproject.toml`.

## USECASES

----
#### To gather data on unit test coverage, and print the report:


```bash
#ℹ︎ for `unittest`
❯ coverage run -m unittest discover
```


```bash
#ℹ︎ for `pytest`
❯ coverage run -m pytest [pytest-args,...]
```



```bash
#ℹ︎ print report
❯ coverage report
```


```bash
#ℹ︎ + print untested line numbers
❯ coverage report -m
```


----
#### To generate an HTML website report [out of gathered information], and open it in browser:

    ❯ coverage html
    ❯ open htmlcov/index.html

## RECIPIES

----
#### Typical workflows:

     coverage run --source=tpltpkg -m pytest -v tests/ && coverage report -m   # bare

     coverage run --source=tpltpkg -m pytest -v tests/ && coverage html && htmlcov/index.html   # html report

     pipenv run coverage run --source=tpltpkg -m pytest -v tests/ && coverage report -m   # pipenv


## PATHS

Path | Description
- | -
📂 `.coveragerc` | Configure file.
📂 `setup.cfg` | Configure file.
📂 `tox.ini` | Configure file.
📂 `pyproject.toml` | Configure file.

## SEE

    coverage --help

## SEEALSO

    pytest, tox

## SEEFURTHER

- [🌎 Documentation](https://coverage.readthedocs.io/)
- [🌎 Repository](https://github.com/nedbat/coveragepy)
