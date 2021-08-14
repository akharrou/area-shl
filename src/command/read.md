---
status: INCOMPLETE
title: "read"
tags: [read,one,line,from,standard,input,stream]
---

# `read`

## BRIEF

Read a line from the standard input and split it into fields.

Reads a single line from the standard input, or from file descriptor `FD` if the `-u` option is supplied. The line is split into fields as with word splitting, and the first word is assigned to the first `NAME`, the second word to the second `NAME`, and so on, with any leftover words assigned to the last `NAME`. Only the characters found in `$IFS` are recognized as word delimiters.

If no `NAME`s are supplied, the line read is stored in the `REPLY` variable.

Exit Status: the return code is zero, unless end-of-file is encountered, read times out (in which case it’s greater than 128), a variable assignment error occurs, or an invalid file descriptor is supplied as the argument to `-u`.

### `bash`

    ❯ read [-ers] [-a ARRAY] [-d DELIM] [-i TEXT] [-n NCHARS] [-N NCHARS] [-p PROMPT] [-t TIMEOUT] [-u FD] [NAME ...]

| Options      |  Behavior
| ------------ | --------
| `-a ARRAY`   | first `NAME` is taken as an array
| `-d DELIM`   | specify delimiter to terminate input instead of newline
| `-e`         | use `Readline` to obtain the line
| `-i TEXT`    | use `TEXT` as the initial text for `Readline`
| `-n NCHARS`  | specify number of characters to read
| `-N NCHARS`  | return only after reading exactly `NCHARS` characters
| `-p PROMPT`  | output the string `PROMPT`, without a trailing newline
| `-r`         | do not allow backslashes to escape any characters
| `-s`         | do not echo input coming from a terminal
| `-t TIMEOUT` | return failure after `TIMEOUT` seconds
| `-u FD`      | read from file descriptor `FD` instead of standard input

### `zsh`

    ❯ read [-rsEertzq] [-A ARRAY] [-d DELIM] [-k NCHARS] [-u FD] [NAME ...]

| Options     | Behavior
| ----------- | --------
| `-A ARRAY`  | first `NAME` is taken as an array
| `-d DELIM`  | specify delimiter to terminate input instead of newline
| `-E`        | input read is echoed
| `-e`        | input read is echoed and not assigned
| `-s`        | suppress terminal echoing
| `-k NCHARS` | specify number of characters to read
| `-q`        | read y or n character from terminal
| `-r`        | raw mode
| `-t`        | test if input is available before reading
| `-u FD`     | read from file descriptor `FD` instead of the standard input
| `-z`        | read entry from editor buffer stack

## INSTALLATION


```bash
#ℹ︎ installation of `read`
❯ *comes builtin*
```


## USECASES

----
#### To from standard input:


```bash
#ℹ︎ prompt standard input
❯ echo Name: && read -E && echo $REPLY
```

    Name:
    James*enter*
    James
    James


```bash
#ℹ︎ ask/prompt/input for, and print/display, user password/passphrase/passcode
❯ echo -n Password: && read -se
```



```bash
#ℹ︎ ask/prompt/input for, and save/store, user password/passphrase/passcode
❯ echo -n Password: && read -s password && echo $password
```



```bash
#ℹ︎ read file one line at a time, line by line
❯ while read line; do echo $line; done < FILE
```

    Samsung
    Nokia
    LG
    Apple
    Microsoft

    ❯ while IFS="," read index value
    do
        echo $index "==" $value
    done << eof
    heredoc> steve jobs,12
    heredoc> john doe,13
    heredoc> some one,23
    heredoc> eof
    steve jobs == 12
    john doe == 13
    some one == 23


## ENVIRONMENT

Variable | Description
- | -
`$IFS`| Recognized word delimiters/seperators.

    ＄REPLY
       The line read is stored in this variable.

    ＄TMOUT
       Default timeout.

## SEEALSO

    cat(1), echo(1)

