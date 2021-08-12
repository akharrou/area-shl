---
status: TODO
title: "awk"
tags: [find,replace,files,contents,text,processor,language]
---

# `awk`

## BRIEF

Full-featured text processing language with a syntax reminiscent of C.

## INSTALLATION


```bash
#ℹ︎ installation of `awk`
❯ *comes pre-installed*
```


## USECASES

----
#### To


```bash
#ℹ︎ select output line X
❯ awk "NR==X"
```



```bash
#ℹ︎ get/print/display matching regex pattern expression text
❯ echo "somePATTERNtext" | awk "/PATTERN/ {print $1}"
```


## RECIPES

----
#### To


```bash
#ℹ︎ get/print/display file contennts lines from shortest to longest
❯ awk ’{ print length($0) " " $0; }’ FILE | sort -n | cut -d " " -f 2-
```


You can use `sort -r` to reverse the sorting, i.e from longest to shortest.

----
#### To split/divide/breakup files/standard-input based on POSIX extended regular expressions:

    TODO awk -F "([.] )|( / )" ’/^[0-9]{1,3}[.]/{x="F"$1"("$2").txt";}{print >x;}’ I_Ching_Wilhelm_Translation.txt

    TODO gawk ’match($0, /^([0-9]{1,3})[.] (.*) \/ (.*)$/, ary){x="F"ary[1]"("ary[2]")";}{print >x;}’ I_Ching_Wilhelm_Translation.txt


## NOTES

`awk` accepts POSIX Extended Regular Expression (ERE) patterns.

## SEE

    awk(1)

## SEEALSO

    sed(1), perl(1)

## SEEFURTHER

- [🌎 Reference: Primer](https://tldp.org/LDP/Bash-Beginners-Guide/html/Bash-Beginners-Guide.html#chap_06)
- [🌎 Reference: Micro-primer](https://tldp.org/LDP/abs/html/abs-guide.html#AWK)
