---
status: INCOMPLETE
title: "gpg"
tags: [openpgp,encryption,cryptography,signing,checking,tool]
---

# `gpg` (GNU Privacy Guard)

## BRIEF

Tool for generating keys that you can encrypt things with and identify yourself with.

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install gpg
```


## USECASES

----
#### To

    ❯ gpg --version
    ❯ gpg --encrypt "data"
    ❯ gpg --decrypt "data"
    ❯ gpg --encrypt --symmetric --sign <signature>
    ❯ gpg --cipher-algo <algo>


```bash
#ℹ︎ disable caching of passphrased used for symmetric encryption
❯ gpg
```


----
#### To generate a fresh new key-pair:


```bash
#ℹ︎ generate/create a symmetric encryption/decryption key-pair (algorithm, length, expiration, identification information, passphrase, etc, are all prompted for interactively)
❯ gpg --full-key-gen
```


## RECIPES

----
#### Basic file symmetric encryption/decryption, with created identification key-pair:

    ❯ gpg --full-key-gen
    ❯ gpg --recipient <mail> --encrypt <file> ...
    ❯ gpg --decrypt <file> ...

When decrypting, `gpg` will prompt for your passphrase. Once provided it will cache it for some specified amount of time, this behavior can be disabled with the `--no-symkey-cache` option.


## SEE

    gpg(1)

## SEEALSO

    sha

## SEEFURTHER

- [🌎 Home](https://www.gnupg.org/)
- [🌎 Documentation](https://www.gnupg.org/documentation/)
- [🌎 Repository](https://github.com/gpg/gnupg)
