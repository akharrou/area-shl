---
status: INCOMPLETE
title: "stty"
tags: [get,print,display,set,change,terminal,line,device,interface,option,settings]
---

# `stty`

## INSTALLATION


```bash
#ℹ︎ installation of `stty`
❯ *comes pre-installed*
```


## USECASES

----
#### To set/change terminal settings:


```bash
#ℹ︎ set/change terminal interrupt character to specified sequence
❯ stty intr ^I
```



```bash
#ℹ︎ hide/omit-echoing typed-in shell commands
❯ stty -echo
```


```bash
#ℹ︎ echo typed-in shell commands
❯ stty echo
```


Changes to terminal settings are not persistant. Add them to shell initialization files for them to be persistant.

----
#### To get/print/display terminal settings:


```bash
#ℹ︎ get/print/display all current terminal settings, BSD format
❯ stty -e
```


```bash
#ℹ︎ get/print/display all current terminal settings, IEEE format
❯ stty -a
```

    speed 38400 baud; 54 rows; 94 columns;
    lflags: icanon isig iexten echo echoe echok echoke -echonl echoctl
        -echoprt -altwerase -noflsh -tostop -flusho pendin -nokerninfo
        -extproc
    iflags: -istrip icrnl -inlcr -igncr ixon -ixoff ixany imaxbel iutf8
        -ignbrk brkint -inpck -ignpar -parmrk
    oflags: opost onlcr -oxtabs -onocr -onlret
    cflags: cread cs8 -parenb -parodd hupcl -clocal -cstopb -crtscts -dsrflow
        -dtrflow -mdmbuf
    cchars: discard = ^O; dsusp = ^Y; eof = ^D; eol = <undef>;
        eol2 = <undef>; erase = ^?; intr = ^C; kill = ^U; lnext = ^V;
        min = 1; quit = ^\; reprint = ^R; start = ^Q; status = ^T;
        stop = ^S; susp = ^Z; time = 0; werase = ^W;


## PATHS

Path | Description
- | -
`/etc/ttys` | File containing information used by various routines to initialize and control the use of terminal special files.

## SEE

    stty(1)

## SEEALSO

    tty(1), ttys(5)

