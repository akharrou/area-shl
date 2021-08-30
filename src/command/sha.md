---
status: INCOMPLETE
title: "sha"
tags: [compute,get,print,check,sha1,sha2,sha224,sha256,sha384,sha512,160,224,256,384,512,bit,message,string,file,digest,checksum]
---

# `sha` (Secure Hash Algorithm)

## BRIEF

## INSTALLATION


```bash
#ℹ︎ installation of `shasum`
❯ brew install perl
```


```bash
#ℹ︎ installation of `sha2`
❯ brew install sha2
```


```bash
#ℹ︎ installation of GNU extension: `sha1sum`, `sha224sum`, `sha256sum`, `sha384sum`, `sha512sum`
❯ brew install coreutils
```


## USECASES

----
#### To generate/compute/produce get/print/display SHA-2 file/string hash digest, using `shasum`:

----
#### To generate/compute/produce get/print/display SHA-2 file/string hash digest, using `sha(1|224|256|384|512)sum`:

----
#### To generate/compute/produce get/print/display SHA-2 file/string hash digest, using `sha2`:


```bash
#ℹ︎ generate/compute/produce get/print/display sha2 string hash digest
❯ sha2 -q -256 <(echo -n "Hello world")
```

    64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c


```bash
#ℹ︎ generate/compute/produce get/print/display sha2 file hash digest
❯ sha2 -q -256 <FILE>
```

    9b76ed8131af63dceae1a065f4f9d993b641f2e58282f747e0f6ad67b121e297


```bash
#ℹ︎ generate/compute/produce get/print/display sha2 file hash digest
❯ sha2 -ALL <FILE>
```

    SHA-256 (FILE) = 9b76ed8131af63dceae1a065f4f9d993b641f2e58282f747e0f6ad67b121e297
    SHA-384 (FILE) = d0f72a2bc706213c8292f0564460ae45034cc594ace3a85e3d8af5f3cc9765b4ca26119ec639eb6503052f3eeb96d190
    SHA-512 (FILE) = b852112efbaa8ae74f94ed3016c003b7c757a931fff2456d146e3d741058be4199e9064436784d290e58cd9d51228074954850966c01d83f9a2a238b623f262a


## NOTES

`sha1sum`, computes a 160-bit checksum for each specified file. It is more reliable than CRC (`cksum`) for detecting accidental file corruption.

MD5’s designer Ron Rivest has stated "MD5 and SHA-1 are both clearly broken (in terms of collision-resistance)". So SHA-1 should be avoided when creating new protocols, or implementing protocols with better options, consider using SHA-2 (SHA256 and SHA512), they are better options, as they have been more resilient to attacks (as of 2009). Or consider the newer BLAKE2 (`b2sum` command).

## SEE

    sha2 -h
    shasum(1)
    sha1sum(1), sha224sum(1), sha256sum(1), sha384sum(1), sha512sum(1)

## SEEALSO

    openssl(1), b2sum(1), md5(1), cksum(1)

## SEEFURTHER

- [🌎 Documentation: sha1sum Invocation](https://www.gnu.org/software/coreutils/manual/coreutils.html#sha1sum-invocation)
- [🌎 Documentation: SHA-2 Utilities](https://www.gnu.org/software/coreutils/manual/coreutils.html#sha2-utilities)
