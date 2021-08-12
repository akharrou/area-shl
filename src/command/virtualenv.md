---
status: INCOMPLETE
title: virtualenv
tags: [python,virtual,environment,manager]
---

# `virtualenv`

## BRIEF

Tool to create, and manage, isolated Python environments.

## INSTALLATION


```bash
#ℹ︎ installation
❯ pip install virtualenv
```


```bash
#ℹ︎ installation
❯ brew install virtualenv
```


## USECASES

----
#### To create, activate/drop-into, deactivate/leave, and remove a virtual environments: (`<name>` is by convention `venv`)


```bash
#ℹ︎ create virutal python environment
❯ virtualenv NAME
```


```bash
#ℹ︎ activate virutal python environment
❯ source NAME/bin/activate
```



```bash
#ℹ︎ deactivate virutal python environment
❯ deactivate
```


```bash
#ℹ︎ remove virutal python environment
❯ rm -rf NAME/
```


## RECIPES

----
#### Typical workflow:

    ❯ virtualenv venv
    ❯ . venv/bin/activate
    ❯ (venv) pip install -r requirements.txt
    ...

    ❯ (venv) pip freeze --local > requirements.txt
    ❯ deactivate
    ❯ rm -rf venv/


## SEEALSO

    pipenv, tox, poetry

## SEEFURTHER

- [🌎 Documentation](https://virtualenv.pypa.io/en/latest/)
