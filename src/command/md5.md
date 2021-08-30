---
status: INCOMPLETE
title: "md5"
tags: [calculate,compute,generate,produce,checksum,files,string,messages]
---

# `md5[sum]`

## INSTALLATION


```bash
#ℹ︎ installation of `md5`
❯ *comes pre-installed*
```


```bash
#ℹ︎ installation of GNU extension: `md5sum`
❯ brew install coreutils
```


## USECASES

----
#### To compute MD5 message digests (pre-installed `md5` command):


```bash
#ℹ︎ compute/get/print MD5 cryptography message digest, from files
❯ md5 -q <FILE> ...
```

    e2876a4cecb829481c83c8f9e883f059


```bash
#ℹ︎ compute/get/print MD5 cryptography message digest, from standard input (stdin stream string)
❯ echo -n "message" | md5
```

    78e731027d8fd50ed642340b7c9a63b3

Note that a newline will count towards the digest if specified as such:

    ❯ md5 <<< "message"
    1df5ee28c9955544f2ebe06a6c829b57

    ❯ echo "message" | md5
    1df5ee28c9955544f2ebe06a6c829b57

----
#### To compute MD5 message digests (with `md5sum` command):



## NOTES

Do not use the MD5 algorithm for security related purposes. Instead, use an SHA-2 algorithm, implemented in the programs `sha224sum(1)`, `sha256sum(1)`, `sha384sum(1)`, `sha512sum(1)`, or the BLAKE2 algorithm, implemented in `b2sum(1)`

## SEE

    md5(1)
    md5sum(1)

## SEEALSO

    openssl(1), shasum(1), b2sum(1), cksum(1)

## SEEFURTHER

- [🌎 Documentation](https://www.gnu.org/software/coreutils/manual/coreutils.html#md5sum-invocation)
