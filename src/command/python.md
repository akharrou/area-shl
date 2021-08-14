---
status: INCOMPLETE
title: "python"
tags: [python,programming,language,interpreter,program,blue,yellow,snakes]
---

# `python`

## INSTALLATION


```bash
#ℹ︎ installation of `python`
❯ brew install python
```


## USECASES

----
#### To run an interactive Python session:


```bash
#ℹ︎ run interactive python shell/session
❯ python
```


## RECIPIES

----
#### Miscellaneous useful one-liners:


```bash
#ℹ︎ start HTTP live server
❯ python -m http.server 8000 --bind 127.0.0.1 --directory .
```


>- See [http.server](https://docs.python.org/3/library/http.server.html) for documentation, and [`livereload`](http://livereload.com/) command line program as alternative.


```bash
#ℹ︎ generate/create/make get/print/display Universally/Globally Unique IDentifier (UUID/GUID)
❯ python -c "import uuid; print(uuid.uuid4())"
```

    0abd96e5-1311-47ab-bf2b-204db2fe2c49


```bash
#ℹ︎ convert/transform json data file/standard-input, into yaml
❯ python -c "import sys, yaml, json; print(json.dumps(yaml.safe_load(sys.stdin.read())))"
```



```bash
#ℹ︎ create/make socket link file
❯ python -c ’import socket as s; sock = s.socket(s.AF_UNIX); sock.bind("/tmp/test.sock")’
```



## INIT

    export PATH="/usr/local/opt/python@3.9/libexec/bin:$PATH"

## VARIABLES

    export PYTHONSTARTUP="$CONFIG/python/pythonrc"

## ALIASES

    alias py="python"
    alias ipy="ipython"
    alias pyd="python -m pydoc"
    # alias pymodule="python setup.py build_ext --inplace"

## EXTRAS

    # LDFLAGS="-L/usr/local/opt/python@3.9/lib"
    # PKG_CONFIG_PATH="/usr/local/opt/python@3.9/lib/pkgconfig"


## ENVIRONMENT

Variable | Description
- | -
`$PYTHONHOME`| Change the location of the standard Python libraries. By default, the libraries are searched in `${prefix}/lib/python<version>` and `${exec_prefix}/lib/python<version>`, where `${prefix}` and `${exec_prefix}` are installation-dependent directories, both defaulting to `/usr/local`. When `$PYTHONHOME` is set to a single directory, its value replaces both `${prefix}` and `${exec_prefix}`. To specify different values for these, set `$PYTHONHOME` to `${pre- fix}:${exec_prefix}`.
`$PYTHONPATH`| Augments the default search path for module files. The  format is  the  same  as the shell’s $PATH: one or more directory path- names  separated  by  colons.   Non-existent   directories   are silently  ignored.   The  default  search  path  is installation dependent, but generally begins  with  `${prefix}/lib/python<version>` (see PYTHONHOME above).  The default search path is always appended to $PYTHONPATH.  If a script  argument  is  given,  the directory containing the script is inserted in the path in front of $PYTHONPATH.  The search path can be manipulated from  within a Python program as the variable sys.path.
`$PYTHONSTARTUP`| Path to file that is executed by Python before interactive sessions.
`$PYTHONY2K`| Set  this  to  a  non-empty  string  to cause the time module to require dates specified as strings  to  include  4-digit  years, otherwise  2-digit  years are converted based on rules described in the time module documentation.
`$PYTHONOPTIMIZE`| If this is set to a non-empty string it is equivalent to  specifying  the  -O option. If set to an integer, it is equivalent to specifying -O multiple times.
`$PYTHONDEBUG`| If this set to non-empty string, turns on `-d` option, if set to an integer, it is equivalent to specifying `-d` multiple times.
`$PYTHONDONTWRITEBYTECODE`| If this is set to a non-empty string it is equivalent to specifying the `-B` option.
`$PYTHONINSPECT`| If this set to non-empty string, turns on `-i` option.
`$PYTHONIOENCODING`| If this is set before running the interpreter, it overrides  the encoding  used  for stdin/stdout/stderr, in the syntax encoding- name:errorhandler The errorhandler part is optional and has  the same meaning as in str.encode. For stderr, the errorhandler part is ignored; the handler will always be `backslashreplace`.
`$PYTHONNOUSERSITE`| If this is set to a non-empty string it is equivalent to  speci- fying  the  -s  option  (Don’t  add  the  user site directory to sys.path).
`$PYTHONUNBUFFERED`| If this is set to a non-empty string it is equivalent to  speci- fying the -u option.
`$PYTHONVERBOSE`| If  this is set to a non-empty string it is equivalent to specifying the -v option. If set to an integer, it is  equivalent  to specifying -v multiple times.
`$PYTHONWARNINGS`| If  this  is set to a comma-separated string it is equivalent to specifying the -W option for each separate value.
`$PYTHONHASHSEED`| If this variable is set to "random", the effect is the  same  as specifying the -R option: a random value is used to seed the hashes of str, bytes and datetime objects. If PYTHONHASHSEED is set to an integer value, it is used as a fixed seed for generating the hash() of the types covered by the hash randomization. Its purpose is to allow repeatable hashing, such as for selftests for the interpreter itself, or to allow a cluster of python processes to share hash values. The integer must be  a  decimal  number  in  the  range [0,4294967295].  Specifying the value 0 will lead to the same hash values as when hash randomization is disabled.

## PATHS

Path | Description
- | -
`/usr/local/opt/python@3.9/libexec/bin/` | Directory in which unversioned symlinks `python`, `python-config`, `pip` etc. pointing to `python3`, `python3-config`, `pip3` etc, have been installed into.
`/usr/local/lib/python3.9/site-packages/` | Directory containing `pip` installed packages.

## SEE

    python(1)

## SEEALSO

    pypy, node, perl, python-tk

## SEEFURTHER

- [🌎 Home](https://www.python.org/)
- [🌎 Documentation](https://docs.python.org/)
- [🌎 Repository](https://github.com/python/cpython)
