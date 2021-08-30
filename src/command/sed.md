---
status: INCOMPLETE
title: "sed"
tags: [piped,standard,input,stream,files,editor,inplace]
---

# `sed`

## BRIEF

Non-interactive text file editor. Reads specified files, or standard input, modifies it as specified by a list of commands, and outputs it on standard output, or edits a file in place.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To perform substitutions on input:


```bash
#ℹ︎ regex pattern matches across standard input, only keep matching pattern
❯ sed -E "s/.*(RGXPAT).*/\1/"
```


    ❯ echo "helloRGXPATworld" | sed -E "s/.*(RGXPAT).*/\1/"
    RGXPAT


```bash
#ℹ︎ regex pattern matches across standard input, keep non-matching pattern
❯ sed -E "s/RGXPAT//"
```


    ❯ echo "helloRGXPATworld" | sed -E "s/RGXPAT//"
    helloworld

----
#### To edit files/standard-input:

    ❯ sed LINESd
    ❯ sed /EREGEX/

----
#### To print a newline in between lines:


```bash
#ℹ︎ add/append a newline between lines
❯ ls | sed "s/$/\n/"
```


```bash
#ℹ︎ add/append a newline between lines
❯ ls | sed G
```


----
#### To select/get/print a specified range of lines:


```bash
#ℹ︎ get/print output and stop at specified line (beginning till line 5)
❯ cat /etc/paths | sed 5q
```


```bash
#ℹ︎ get/print only the single specified output line (only line 2 and line 5)
❯ cat /etc/paths | sed -n 2p;5p
```


```bash
#ℹ︎ get/print only the specified range of output lines (only lines 1-4, and 6-7)
❯ cat /etc/paths | sed -n 1,4p;6,7p
```


`q` quits at specified line of output.
`-n` suppresses outputing the entire output, and outputing instead only the specifically specified lines (`p` for print).


## NOTES

By default `sed` accepts POSIX Basic Regular Exppression (BRE) patterns. With the `-E` option, it accepts POSIX Extended Regular Expression (ERE) patterns.

The captured placeholders are of the format: `\N`, `N` being the one-based ordinal index of the capture parentheses. E.g.:


```bash
#ℹ︎ regex section match capture placeholder
❯ echo "Name: John Doe" | sed -E "s/Name: (.+) (.+)/\1 \2/"
```

    John Doe                                   ^     ^
                                       Capture 1   Capture 2

The full match is always captured and can be referenced with the placeholder: `&`.


```bash
#ℹ︎ regex full match capture placeholder
❯ echo "Name: John Doe" | sed -E "s/Doe/Hi &/"
```

    Name: John Hi Doe

    ❯ echo "Name: John Doe" | sed -E "s/John/Hi &/"
    Name: Hi John Doe

    ❯ echo "Name: John Doe" | sed -E "s/Name/Hi &/"
    Hi Name: John Doe

## SEE

    sed(1)

## SEEALSO

    perl(1), awk(1), ed(1), grep(1), regex, re_format

## SEEFURTHER

- [🌎 Reference: Primer](https://tldp.org/LDP/Bash-Beginners-Guide/html/Bash-Beginners-Guide.html#chap_05)
- [🌎 Reference: Micrio-primer](https://tldp.org/LDP/abs/html/abs-guide.html#AEN23170)
