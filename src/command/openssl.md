---
status: INCOMPLETE
title: "openssl"
tags: [encrypt,decrypt,checksum,sign,cryptographic,signatures,files]
---

# `openssl`

## INSTALLATION


```bash
#ℹ︎ installation of `openssl`
❯ *comes pre-installed*
```


## USECASES

----
#### To compute SHA-2 (224, 384, 256, 512 bit) crypotgraphic digests/hashes:


```bash
#ℹ︎ get/print/display/return/compute sha256 digest/hash of standard input string
❯ echo -n "Hello world" | openssl sha256
```

    64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c


```bash
#ℹ︎ get/print/display/return/compute sha256 digest/hash of standard input string
❯ openssl sha256 <<< "Hello world"
```

    1894a19c85ba153acbf743ac4e43fc004c891604b26f8c69e1e83ea2afc7c48f


```bash
#ℹ︎ get/print/display/return/compute sha256 digest/hash of file
❯ openssl sha256 <(echo -n "Hello world")
```

    SHA256(/dev/fd/13)= 64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c


```bash
#ℹ︎ get/print/display/return/compute sha256 digest/hash of file
❯ openssl sha224 <FILE>
```

    SHA224(FILE)= 75efd2a4a9e3b000642e38fa6ae9d2d718c91f776269414f29d70083

----
#### To perform `base64` encryption:

    ❯ openssl base64 -e <<< "Hello world."

----
#### To perform symtetric encryption/decryption:


```bash
#ℹ︎ symetric encrypt specified file
❯ openssl aes-256-cbc -e -in INFILE
```



```bash
#ℹ︎ symetric decrypt specified file
❯ openssl aes-256-cbc -d -in INFILE
```


----
#### To check/test prime number:


```bash
#ℹ︎ check/test if number is prime
❯ openssl prime NUMBER
```


----
#### To generate/create/make, get/print/display pseudo-random data string/set:


```bash
#ℹ︎ generate/create/make, get/print/display pseudo-random hexadecimal data string/set
❯ openssl rand -hex 32
```



```bash
#ℹ︎ generate/create/make, get/print/display pseudo-random base64 data string/set
❯ openssl rand -base64 32
```


----
#### To perform asymmetric encryption/decryption communications:


```bash
#ℹ︎ generate/create/make user RSA private key
❯ openssl genpkey \
	-algorithm RSA \
	-pkeyopt rsa_keygen_bits:2048 \
	-pkeyopt rsa_keygen_pubexp:3 \
	-out privkey-USER.pem
```



```bash
#ℹ︎ generate/create/make user RSA public key
❯ openssl pkey \
	-in privkey-USER.pem \
	-out pubkey-USER.pem \
	-pubout
```



```bash
#ℹ︎ get/print/display/view/preview private key, in plaintext
❯ openssl pkey -in privkey-USER.pem -text
```



```bash
#ℹ︎ get/print/display/view/preview public key, in plaintext
❯ openssl pkey -in pubkey-USER.pem -pubin -text
```



```bash
#ℹ︎ encrypt message plaintext
❯ openssl pkeyutl \
	-encrypt \
	-pubin -inkey pubkey-RECEIVER.pem \
	-in MESSAGE.txt \
	-out MESSAGE.txt.enc
```



```bash
#ℹ︎ create/make digital message signature
❯ openssl dgst -sha512 \
	-sign privkey-SENDER.pem \
	-out signature.bin \
	MESSAGE.txt
```



```bash
#ℹ︎ decrypt message ciphertext
❯ openssl pkeyutl \
	-decrypt \
	-inkey privkey-RECEIVER.pem \
	-in MESSAGE.txt.enc \
	-out MESSAGE.txt.dec
```



```bash
#ℹ︎ verify decrypted message with specified signature
❯ openssl dgst -sha512 \
	-verify pubkey-SENDER.pem \
	-signature signature.bin \
	MESSAGE.txt.dec
```


## GUIDES

----
#### To perform RSA communications:

`USER-A` wants to send a message to `USER-B`, confidentially.
`USER-B` will want to make sure that the message came from `USER-A`, and has not been modified.
`USER-B` will also want to be able to decrypt and read the contents of the message.

1. Sender & Receiver: Generate user(s) private key

        ❯ openssl genpkey \
            -algorithm RSA \
            -pkeyopt rsa_keygen_bits:2048 \
            -pkeyopt rsa_keygen_pubexp:3 \
            -out privkey-A.pem

    Generates `privkey-A.pem`.

2. Sender & Receiver: Generate user public key (extracted out of the private key)

        ❯ openssl pkey \
            -in privkey-A.pem \
            -out pubkey-A.pem \
            -pubout

    Generates `pubkey-A.pem`. As the name implies, this file can be shared with other users.

    To view the `base64` encoded private and public keys:

        ❯ openssl pkey -in privkey-A.pem -text
        ❯ openssl pkey -in pubkey-A.pem -pubin -text

3. Sender: Encrypt message

    To encrypt, we use the public key of `USER-B`, i.e the receiver. We are using RSA to encrypt, because the key is an RSA key.

        ❯ openssl pkeyutl \
            -encrypt \
            -pubin -inkey pubkey-B.pem \
            -in MESSAGE.txt \
            -out MESSAGE.txt.enc

    Generates the encrypted message `MESSAGE.txt.enc`. On the receiving end, `USER-B`, and only `USER-B`, will be able to decrypt the message, using their private key.

    Before encryption:

        ❯ hexdump -C MESSAGE.txt
        54 68 69 73 20 69 73 20  61 6e 20 65 78 61 6d 70 |This is an examp|
        6c 65 20 6d 65 73 73 61  67 65 2e 0a             |le message..|

    After encryption:

        ❯ hexdump -C MESSAGE.txt.enc
        8a 52 ce f2 ed fc 25 42  89 e6 3d e3 68 dc 2e ca |.R....%B..=.h...|
        fb e0 d8 20 14 95 f3 77  74 01 b8 f5 d8 0a 86 6e |... ...wt......n|
        d1 a2 fd 81 78 d8 13 f4  df 77 47 bf 96 6e 13 34 |....x....wG..n.4|
        4e 0f f6 3f 44 b6 80 fe  2a 74 9e 10 f5 8a 51 bb |N..?D...*t....Q.|
        3e ac b4 f0 2c 39 0b d3  a5 22 31 ce 2b 9c 0d 14 |>...,9..."1.+...|
        6d e5 eb a7 cd fe 5d 8a  ef f7 3a 01 55 30 76 8d |m.....]...:.U0v.|
        e8 95 73 b6 73 95 e8 5e  29 ab 75 e0 91 be a4 38 |..s.s..^).u....8|
        b5 bc 5e 70 50 1f f2 7d  ee eb 59 95 cd fb 6d 9c |..^pP..}..Y...m.|
        79 e1 6a 7c 85 9e b4 0c  36 4d dc e2 f0 aa 71 f5 |y.j|....6M....q.|
        9f 27 d6 39 a2 3b 03 e1  f7 bb 0f c8 ab 99 93 1a |.’.9.;..........|
        1c cc 45 8f 8b 37 df 17  b5 ee ba 86 51 64 43 31 |..E..7......QdC1|
        9f 3d b2 51 87 58 fe ef  07 2b db ba 3c b8 bd 31 |.=.Q.X...+..<..1|
        0a 23 68 19 fc b9 38 7a  02 76 d0 f2 1d 83 ac 50 |.#h...8z.v.....P|
        cb fa c7 ea b3 4b 4f e8  79 2d ae dd 6d dc 96 8e |.....KO.y-..m...|
        4c 2f 8f 8f a8 30 14 e9  ea e8 de 98 94 39 8f 37 |L/...0.......9.7|
        54 6a 0d 15 ef 70 71 40  54 ca 1a 8c fc fd ed 3b |Tj...pq@T......;|

4. Sender: Create digital signature of message

    The basic form is to take a hash of the message, and encrypt the hash value using `USER-A`’s, i.e the sender’s, private key.

        ❯ openssl dgst -sha512 \
            -sign privkey-A.pem \
            -out signature.bin \
            MESSAGE.txt

    This will do both in a single command. Generates `signature.bin` file, which will be sent to `USER-B`, so that they may verify that the encrypted message came from `USER-A`.

5. Receiver: Decrypt the encrypted message (ciphertext)

    `USER-B` will decrypt the encrypted message with his private key.

        ❯ openssl pkeyutl \
            -decrypt \
            -inkey privkey-B.pem \
            -in MESSAGE.txt.enc \
            -out MESSAGE.txt.dec

    Generates `MESSAGE.txt.dec`.

        ❯ diff MESSAGE.txt.dec MESSAGE.txt
        ❯ hexdump -C dec-MESSAGE.txt
        54 68 69 73 20 69 73 20  61 6e 20 65 78 61 6d 70  |This is an examp|
        6c 65 20 6d 65 73 73 61  67 65 2e 0a              |le message..|

6. Receiver: Verify message, using sender’s signature

    `USER-B` will decrypt the signature with `USER-A`’s public key. `USER-B` needs to be aware of the cryptographic hash aglorithm used to sign the message, and `USER-A`’s public key.

        ❯ openssl dgst -sha512 \
            -verify pubkey-A.pem \
            -signature signature.bin \
            MESSAGE.txt.dec
        Verified OK

    No one can pretend to be `USER-A` because, they don’t have the private key of `USER-A`, which is required to encrypt the message along side the hash.


## NOTES

### Symmetric Encryption

Encryption and decryption are performed with the same key, shared-between/known-by only both users.

Symmetric encryption is generally faster, especially for large messages, than asymmetric encryption.

### Asymmetric Encryption

Encryption is performed with a public key, whilst decryption is performed with a private key.

#### Rivest-Shamir-Adleman (RSA)

    Meaning           |  Parameter
    ----------------  |  ---------
    Encryption        |  C = M^e^ % n
    Decryption        |  M = C^d^ % n
    Modulus           |  n of length b bits
    Public exponent   |  e
    Private exponent  |  d
    Prime (1)         |  p
    Prime (2)         |  q
    Exponent (1)      |  d~p~ = d (mod p - 1)
    Exponent (2)      |  d~q~ = d (mod q - 1)
    Coefficient       |  q~inv~ = q^-1^ (mod p)
    Private key       |  PR = (n, e, d, p, q, d~p~, d~q~, q~inv~)
    Public key        |  PU = (n, e)

## ENVIRONMENT

Variable | Description
- | -
`$OPENSSL_CONF`| The location of the master configuration file.

## PATHS

Path | Description
- | -
`/etc/ssl/` | Default config directory for openssl.
`/etc/ssl/lib/` | Unused.
`/etc/ssl/private/` | Default private key directory.
`/etc/ssl/openssl.cnf` | Default configuration file for openssl.
`/etc/ssl/x509v3.cnf` | Default configuration file for x509 certificates.

## SEE

    openssl(1)

## SEEALSO

    md5, shasum

## SEEFURTHER

- [🌎 Home](https://www.openssl.org/)
- [🌎 Documentation](https://www.openssl.org/docs/)
- [🌎 Repository](https://github.com/openssl/openssl)
- [🌎 Page: Youtube ➤ RSA Key Generation, Signatures and Encryption using OpenSSL](https://www.youtube.com/watch?v=RE9OSl_yuvc)
