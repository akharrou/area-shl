---
status: DONE
title: "xxd"
tags: [make,create,get,print,display,reverse,revert,text,file,string,stdin,hexdump]
---

# `xxd`

## INSTALLATION


```bash
#ℹ︎ installation of `xxd`
❯ brew install vim
```


## USECASES

----
#### To get/print/display stdin/files/strings in hexadecimal, or binary format:


```bash
#ℹ︎ convert/create/make get/print/display stdin/file/string to hexadecimal dump
❯ xxd -uppercase -cols 16 -groupsize 1 <FILE>
```

    00000000: 48 65 6C 6C 6F 2C 20 77 6F 72 6C 64              Hello, world


```bash
#ℹ︎ convert/create/make get/print/display stdin/file/string to plain hexadecimal dump
❯ xxd -plain <FILE>
```

    48656c6c6f2c20776f726c64


```bash
#ℹ︎ get/print/display reverse stdin/file/string hex dump
❯ xxd -revert <(hexdump <FILE>)
```

    Hello, world


```bash
#ℹ︎ get/print/display stdin/file/string in/as binary bits/bytes dump
❯ xxd -bits -cols 8 -groupsize 1 <FILE>
```

    00000000: 01001000 01100101 01101100 01101100 01101111 00101100  Hello,
    00000006: 00100000 01110111 01101111 01110010 01101100 01100100   world

Also useful are the following options:

- `-seek [+][-]BYTEOFFSET`: to start at a byte offset from the front/beginning (`+`) of a file, or from the back/end (`-`) of a file
- `-len BYTELIMIT`: to limit bytes processed

----
#### To generate C/C++ language static character array representing input file:


```bash
#ℹ︎ generate C/C++ static char array of input file
❯ xxd -include -capitalize <FILE>
```

    unsigned char _DEV_FD_13[] = {
      0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64
    };
    unsigned int _DEV_FD_13_LEN = 12;


## NOTES

- You can get conversions of number bases using Google’s search box, with queries of the form:

    - `0b<BINARY-NUMBER>` to `BASE`
    - `0o<OCTAL-NUMBER>` to `BASE`
    - `<DECIMAL-NUMBER>` to `BASE`
    - `0x<HEXADECIMAL-NUMBER>` to `BASE`

    Where `BASE` is one of: `binary`, `octal`, `decimal` or `hexadecimal`.

    E.g.:

    - `0b00001010 to hexadecimal` $→$ `0xA`
    - `0o012 to decimal` $→$ `10`
    - `10 to binary` $→$ `0b1010`
    - `0x0a to decimal` $→$ `10`

## SEE

    xxd(1)

## SEEALSO

    hexdump(1), od(1), hexyl

