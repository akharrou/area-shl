: '
---
tags: [python,unit,testing,framework]
---

# `pytest`

## BRIEF

`pytest` is a Python framework that makes it easy to write small tests, yet scales to support complex functional testing for applications and libraries.

#### Installation

  ❯ pip install pytest

#### See

- <https://docs.pytest.org/en/stable/contents.html>

## USECASES

----
#### To run all tests in a directory, or file:

    ❯ pytest PATH

    ❯ pytest tests/
    ❯ pytest test_app.py

## NOTES

- `pytest` searches for `test_*.py` or `*_test.py` files, and from those files, `test` prefixed test functions/methods outside of class, and `test` prefixed test functions/methods inside `Test` prefixed test classes (without an `__init__` method).

- When `pytest` goes to run a test, it looks at the parameters in that test function’s signature, and then searches for fixtures, i.e functions/methods with a `@pytest.fixture()` decorator), that have the same names as those parameters. Once pytest finds them, it runs those fixtures, captures what they returned (if anything), and passes those objects into the test function as arguments.

## RECIPES

----
#### Typical package directory structure:

    setup.py
    mypkg/
        __init__.py
        app.py
        view.py
    tests/
        test_app.py
        test_view.py
        ...

    # -- OR ------------------------

    setup.py
    src/
        mypkg/
            __init__.py
            app.py
            view.py
    tests/
        __init__.py
        test_app.py
        foo/
            __init__.py
            test_view.py
        bar/
            __init__.py
            test_view.py
        ...

    # -- OR ------------------------

    setup.py
    mypkg/
        __init__.py
        app.py
        view.py
        test/
            __init__.py
            test_app.py
            test_view.py
            ...

'

## ALIASES

## PROCEDURES

## VARIABLES

## EXTRAS
