---
status: INCOMPLETE
title: "terminfo"
tags: [terminal,capabilities,capability,database,base]
---

# `terminfo`

## INSTALLATION


```bash
#ℹ︎ installation of `terminfo`
❯ *comes builtin*
```


## USECASES

----
#### To get/print/display `terminfo` terminal capability value:


```bash
#ℹ︎ get/print/display `terminfo` terminal capability value
❯ cat -e <(echo -n ${terminfo[kLFT]})
```

    ^[[1;2D


## VARIABLES

    export TERM=xterm-256color
    # export TERMINFO=/usr/share/terminfo/78/
    # export TERMINFO_DIRS=$(echo /usr/share/terminfo/??/ | tr " " ":")


## NOTES

What a typical `terminfo` entry looks like:

    ansi|ansi/pc-term compatible with color,
            mc5i,
            colors#8, ncv#3, pairs#64,
            cub=\E[%p1%dD, cud=\E[%p1%dB, cuf=\E[%p1%dC,
            cuu=\E[%p1%dA, dch=\E[%p1%dP, dl=\E[%p1%dM,
            ech=\E[%p1%dX, el1=\E[1K, hpa=\E[%p1%dG, ht=\E[I,
            ich=\E[%p1%d@, il=\E[%p1%dL, indn=\E[%p1%dS, .indn=\E[%p1%dT,
            kbs=^H, kcbt=\E[Z, kcub1=\E[D, kcud1=\E[B,
            kcuf1=\E[C, kcuu1=\E[A, kf1=\E[M, kf10=\E[V,
            kf11=\E[W, kf12=\E[X, kf2=\E[N, kf3=\E[O, kf4=\E[P,
            kf5=\E[Q, kf6=\E[R, kf7=\E[S, kf8=\E[T, kf9=\E[U,
            kich1=\E[L, mc4=\E[4i, mc5=\E[5i, nel=\r\E[S,
            op=\E[37;40m, rep=%p1%c\E[%p2%{1}%-%db,
            rin=\E[%p1%dT, s0ds=\E(B, s1ds=\E)B, s2ds=\E*B,
            s3ds=\E+B, setab=\E[4%p1%dm, setaf=\E[3%p1%dm,
            setb=\E[4%?%p1%{1}%=%t4%e%p1%{3}%=%t6%e%p1%{4}%=%t1%e%p1%{6}%=%t3%e%p1%d%;m,
            setf=\E[3%?%p1%{1}%=%t4%e%p1%{3}%=%t6%e%p1%{4}%=%t1%e%p1%{6}%=%t3%e%p1%d%;m,
            sgr=\E[0;10%?%p1%t;7%;%?%p2%t;4%;%?%p3%t;7%;%?%p4%t;5%;%?%p6%t;1%;%?%p7%t;8%;%?%p8%t;11%;%?%p9%t;12%;m,
            sgr0=\E[0;10m, tbc=\E[2g, u6=\E[%d;%dR, u7=\E[6n,
            u8=\E[?%[;0123456789]c, u9=\E[c, vpa=\E[%p1%dd,

All terminal capabilities have names. Capabilities are of three types:

- Boolean Capabilities

    - Form: `CAP`
    - Example: `am`, `bce`, `km`

- Numeric Capabilities

    - Form: `CAP#NUM`, where `NUM` is positive
    - Example: `cols#80`, `colors#8`

    Numeric capabilities can be specified in decimal, octal or hexadecimal, using the C programming language conventions (e.g., `255`, `0377` and `0xff` or `0xFF`).

- String Capabilities

    - Form: `CAP=VAL`
    - Example: `kLFT=\E[1;2D`, `kRIT=\E[1;2C`

    `\E` and `\e` represent the escape sequence.

For more details see `terminfo(5)`.

## ENVIRONMENT

Variable | Description
- | -
`$terminfo`| Associative array containing terminal capabilities as keys, and capability value as values.
`$TERM`| Name of current terminal name.
`$TERMINFO`| If set, it is interpreted as the pathname of a directory containing the compiled description you are working on. Only that directory is searched. If not set, the directory `$HOME/.terminfo/` will be searched for a compiled description.
`$TERMINFO_DIRS`| If `TERMINFO` and `$HOME/.terminfo/` fail and this variable is set, it will be interpreted as a list of colon-separated directories to be searched. If set but empty, it is interpreted as a command to search `/usr/share/terminfo/`).

If all fails, the system `terminfo` directory will be tried (`/usr/share/terminof/`).

## PATHS

Path | Description
- | -
`/usr/share/terminfo/*/*` | Directory containing `terminfo` database entries.
`/usr/share/terminfo/78/xterm-256color` | Compiled `terminfo` database entry for `xterm` in `256colors` mode, i.e that can handle 256 color range.
`~/.terminfo` | File containing default terminal’s compiled `terminfo` database entry.

## SEE

    terminfo(5)

## SEEALSO

    tic(1M), toe(1M), infocmp(1M), captoinfo(1M), infotocap(1M), term(5)

## SEEFURTHER

- [🌎 Page: Wikipedia ➤ Terminfo](https://en.wikipedia.org/wiki/Terminfo)
