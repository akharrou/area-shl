---
status: TODO
title: "tr"
tags: [translate,squeeze,map,convert,delete,text,characters,letters]
---

# `tr`

## INSTALLATION


```bash
#ℹ︎ installation of `tr`
❯ *comes pre-installed*
```


## RECIPES

----
#### To convert characters of a certain class: (e.g. alphanumeric, uppercase, lowercase, punctuation)


```bash
#ℹ︎ convert lowercase to uppercase character classes
❯ echo "string" | tr "[:lower:]" "[:upper:]"          
```

    STRING


```bash
#ℹ︎ convert punctuation characters to dashes
❯ echo "\!\"#$%&\(\)*+,-./{\|}~ " | tr "[:punct:]" "0"
```

    000000000000000000000

----
#### To generate random secure passwords:


```bash
#ℹ︎ generate random secure passwords, of specified length
❯ LC_ALL=C tr -dc "[:alnum:]" < /dev/urandom | head -c 32
```



## PROCEDURES

    # ❯ passgen [LENGTH]   # generate random secure alphanumeric passwords, of specified length
    function passgen()   # generate random secure alphanumeric passwords, of specified length
    {
        LC_ALL=C tr -dc "[:alnum:]" < /dev/urandom | head -c ${1:-"32"}
    }


## NOTES

Available classes are:

    [:alnum:]        alphanumeric characters
    [:alpha:]        alphabetic characters
    [:blank:]        whitespace characters
    [:cntrl:]        control characters
    [:digit:]        numeric characters
    [:graph:]        graphic characters
    [:ideogram:]     ideographic characters
    [:lower:]        lower-case alphabetic characters
    [:phonogram:]    phonographic characters
    [:print:]        printable characters
    [:punct:]        punctuation characters
    [:rune:]         valid characters
    [:space:]        space characters
    [:special:]      special characters
    [:upper:]        upper-case characters
    [:xdigit:]       hexadecimal characters

## SEE

    tr(1)

## SEEALSO

    head(1), tail(1), sed(1)

