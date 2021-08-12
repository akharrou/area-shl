---
status: DONE
title: "XDG"
tags: [specification,standard,base,user,desktop,configuration,data,cache,directories]
---

# XDG Base Directory

## BRIEF

A specification that efines four categories of so called "DotFiles" and the corresponding directories in a users home directory that should be used for those.


## ENVIRONMENT

Variable | Description
- | -
`$XDG_CONFIG_HOME`| User-specific configuration files base directory. Default: `$HOME/.config`
`$XDG_DATA_HOME`| User-specific data files base directory. Default: `$HOME/.local/share`.
`$XDG_STATE_HOME`| User-specific state files base directory. Default: `$HOME/.local/state`.
`$XDG_CACHE_HOME`| User-specific non-essential (cache) data files base directory. Default: `$HOME/.cache`.
`$XDG_CONFIG_DIRS`| User-specific preference-ordered set of base directories to search for configuration files in addition to the `$XDG_CONFIG_HOME` base directory. The directories in `$XDG_CONFIG_DIRS` should be seperated with a colon `:`. Default: `/etc/xdg`.
`$XDG_DATA_DIRS`| User-specific preference-ordered set of base directories to search for data files in addition to the `$XDG_DATA_HOME` base directory. The directories in `$XDG_DATA_DIRS` should be seperated with a colon `:`. Default: `/usr/local/share/:/usr/share/`
`$XDG_RUNTIME_DIR`| Base directory relative to which user-specific non-essential runtime files and other file objects (such as sockets, named pipes, ...) should be stored. The directory MUST be owned by the user, and he MUST be the only one having read and write access to it. Its Unix access mode MUST be `0700`. Default: none.
`$XDG_BIN_HOME`| (Non-standard); User-specific executable files may be stored in `$HOME/.local/bin`. Distributions should ensure this directory shows up in the Unix `$PATH` environment variable, at an appropriate place.

- It is relative to these directories, that respective files should be written, by all programs.

- All paths set in these environment variables must be absolute. If an implementation encounters a relative path in any of these variables it should consider the path invalid and ignore it.

- `＄XDG_STATE_HOME`:

    This is data that should persist between (application) restarts, but that IS NOT IMPORTANT OR PORTABLE ENOUGH, that it should be stored in `$XDG_DATA_HOME`.

    It may contain:

    - actions history (logs, history, recently used files, …)
    - current state of the application that can be reused on a restart (view, layout, open files, undo history, …).

- `＄XDG_RUNTIME_DIR`:

    The lifetime of the directory MUST be bound to the user being logged in. It MUST be created when the user first logs in and if the user fully logs out the directory MUST be removed. If the user logs in more than once he should get pointed to the same directory, and it is mandatory that the directory continues to exist from his first login to his last logout on the system, and not removed in between. Files in the directory MUST not survive reboot or a full logout/login cycle.

- `＄XDG_BIN_HOME`:

    Since `$HOME` might be shared between systems of different achitectures, installing compiled binaries to `$HOME/.local/bin` could cause problems when used on systems of differing architectures. This is often not a problem, but the fact that `$HOME` becomes partially achitecture-specific if compiled binaries are placed in it should be kept in mind.

## SEEFURTHER

- [🌎 Documentation](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html)
