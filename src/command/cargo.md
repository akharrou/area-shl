---
status: TODO
title: "cargo"
tags: [installer,manager,package,language,rust]
---

# `cargo`

## INSTALLATION


```bash
#ℹ︎ installation of `cargo`
❯ brew install rust
```



## INIT

    export CARGO_HOME="$DATA/cargo"
    export PATH="$CARGO_HOME/bin:$PATH"


## ENVIRONMENT

Variable | Description
- | -

    ＄CARGO_HOME
       Cargo data folder. Default: `~/.cargo/`.

## PATHS

Path | Description
- | -
`$CARGO_HOME/bin/` | Binaries installed by `cargo-install(1)` will be located here. If using `rustup`, executables distributed with Rust are also located here.
`$CARGO_HOME/config.toml` | The global configuration file.
`**/.cargo/config.toml` | Cargo automatically searches for a file named `.cargo/config.toml` in the current directory, and all parent directories. These configuration files will be merged with the global configuration file.
`$CARGO_HOME/credentials.toml` | Private authentication information for logging in to a registry.
`$CARGO_HOME/registry/` | This directory contains cached downloads of the registry index and any downloaded dependencies.
`$CARGO_HOME/git/` | This directory contains cached downloads of git dependencies.

## SEE

    cargo(1)

## SEEALSO

    brew, npm, pip, gem

## SEEFURTHER

- [🌎 Documentation](https://doc.rust-lang.org/stable/cargo/reference/)
