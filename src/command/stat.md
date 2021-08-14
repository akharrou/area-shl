---
status: INCOMPLETE
title: "stat"
tags: [get,print,display,files,folders,status,information]
---

# `stat`

## INSTALLATION


```bash
#ℹ︎ installation of `stat`
❯ *comes pre-installed*
```


## USECASES

----
#### Display information in a more verbose way as known from some Linux distributions.


```bash
#ℹ︎ get/print/display verbose, human readable, file/directory status information
❯ stat -xt"%A, %B %d, %Y at %T %p GMT%Z" FILE
```

      File: "file.txt"
      Size: 116453       FileType: Regular File
    Mode: (0644/-rw-r--r--)         Uid: (  501/johndoe)  Gid: (   20/   staff)
    Device: 1,5   Inode: 29080997    Links: 1
    Access: Friday, August 13, 2021 at 12:00:00 PM GMT+03
    Modify: Friday, August 13, 2021 at 11:41:48 AM GMT+03
    Change: Friday, August 13, 2021 at 11:41:48 AM GMT+03

----
#### To get/print/display file access (`%a`), modified (`%m`), change (`%c`), birth (creation) (`%B`) datetimes:


```bash
#ℹ︎ get/print/display file/directory access datetime timestamp
❯ stat -f%a FILE
```

    1597716191


```bash
#ℹ︎ get/print/display file/directory modification datetime timestamp
❯ stat -f%m FILE
```

    1597716191


```bash
#ℹ︎ get/print/display file/directory change datetime timestamp
❯ stat -f%c FILE
```

    1597716191


```bash
#ℹ︎ get/print/display file/directory birth/creation datetime timestamp
❯ stat -f%B FILE
```

    1597716191


```bash
#ℹ︎ get/print/display file/directory access/modification/change/birth/creation datetime, as human readable formatted datetime string
❯ stat -f%SB -t"%A, %B %d, %Y at %T %p GMT%Z" FILE
```

    Friday, August 13, 2021 at 11:25:04 AM GMT+03


```bash
#ℹ︎ get/print/display all file/directory dateimes: access, modified, change, and birth/creation, as formatted datetime string
❯ stat -f"Access: %Sa%nModify: %Sm%nChange: %Sc%nCreate: %SB" -t"%A, %B %d, %Y at %T %p GMT%Z" FILE
```

    Access: Friday, August 13, 2021 at 11:28:48 AM GMT+03
    Modify: Friday, August 13, 2021 at 11:41:48 AM GMT+03
    Change: Friday, August 13, 2021 at 11:41:48 AM GMT+03
    Create: Friday, August 13, 2021 at 11:25:04 AM GMT+03

----
#### To get/print/display extract specified information about file, formatted:


```bash
#ℹ︎ get/print/display symbolic link target file
❯ stat -f%Y FILE
```

    ❯ stat -f%Y /usr/local/Caskroom/iterm2/3.4.1/iTerm.app
    /Applications/iTerm.app

## RECIPES

----
#### Miscellaneous:


```bash
#ℹ︎ check/test file access/modification/change/birth datetime
❯ (( `/usr/bin/stat -f "%m%n" FILE` < `date -v-1d +%s` )) && echo "Older than 1 day"
```



## ALIASES

    # alias stat="stat -x"


## NOTES

- Regarding the `-f FORMAT` option, any of the following combinations may be used to extract specific information from files, formatted in a desired manner:

    Form: `%<size><precision><fmt><datum>...`

    Char | Information
    - | -
    **Datetime** ||
    `%a` | last access datetime (of file)
    `%Sa` | time displayed with `strftime`, based on `-t` option value
    `%m` | last modification datetime (of file content)
    `%Sm` | time displayed with `strftime`, based on `-t` option value
    `%c` | last change datetime (of file metadata)
    `%Sc` | time displayed with `strftime`, based on `-t` option value
    `%B` | birth/creation datetime (of file inode)
    `%SB` | time displayed with `strftime`, based on `-t` option value
    **Device** ||
    `%d` | device name upon which file resides (`76252221`,`76252228`,...)
    `%r` | device number (for character & block device special files) (`7625227`,`7625219`,`7625216`,...)
    **Links** ||
    `%l` | number of hard links
    **User & Group** ||
    `%u` | user ID of file’s owner (`501`)
    `%Su` | user name of file’s owner (`johndoe`)
    `%g` | group ID of file’s owner (`20`)
    `%Sg` | group name of file’s owner (`staff`)
    **Permissions Mode** ||
    `%p` | full file mode bits value (`100721`)
    `%Sp` | full file mode bits string (`-rwx-w---x`)
    `%Hp` | user file mode bits value (`8`)
    `%SHp` | user file mode bits string (`rwx`)
    `%Mp` | groups file mode bits value (`0`)
    `%SMp` | groups file mode bits string (`-w-`)
    `%Lp` | others file mode bits value (`721`)
    `%SLp` | others file mode bits string (`--x`)
    **File/Symlink Name** ||
    `%N` | file name
    `%Y` | target of a symbolic link `<symlink-target-filename>`
    `%SY` | insert "` -> `" before target file name; ` -> <symlink-target-filename>`
    `%N%SY` | `<symlink-filename>  ->  <symlink target filename>`
    **Filename** ||
    `%z` | file size (in bytes)
    `%b` | number of blocks allocated for file
    `%k` | optimal file system I/O operation block size (`2048`,`4096`,...)
    **Filetype** ||
    `%T` | file type symbol (regular file:`*empty*`,symlink:`@`,directory:`/`,fifo:`|`,executable file:`*`,char device file:`*empty*`,block device file:`*empty*`,socket:`=`)
    `%HT` | file type name (`Regular File`, `Symbolic Link`, `Directory`, `Fifo File`, `Block Device`, `Character Device`,`Socket`)
    **Other** ||
    `%f` | user defined flags for file
    `%v` | inode generation number

    >- Available precisions of information: high (`H`), medium (`M`), low (`L`); applicable to select information chars.
    >- Results can be printed in different bases, or as string values based on the following formatters:
    >
    >     Char | Format
    >     - | -
    >     `D` | signed decimal
    >     `O` | octal
    >     `U` | unsigned decimal
    >     `X` | hexadecimal
    >     `F` | floating point
    >     `S` | formatted string

## SEE

    stat(1)

## SEEALSO

    mdls(1)

