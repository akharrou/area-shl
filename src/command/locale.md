---
status: DONE
title: "locale"
tags: [get,print,list,show,display,locale,variables,categories,keywords,values,settings]
---

# `locale`

## SYNTAX

    ❯ locale [-a|m]
    ❯ locale [-ck] LOCALE_CATEGORY [...]

## INSTALLATION


```bash
#ℹ︎ installation of `locale`
❯ *comes pre-installed*
```


## USECASES

----
#### To get information about set locale:


```bash
#ℹ︎ get/print all currently set locale environment variables
❯ locale
```

    LANG="en_US.UTF-8"
    LC_COLLATE="en_US.UTF-8"
    LC_CTYPE="en_US.UTF-8"
    LC_MESSAGES="en_US.UTF-8"
    LC_MONETARY="en_US.UTF-8"
    LC_NUMERIC="en_US.UTF-8"
    LC_TIME="en_US.UTF-8"
    LC_ALL="en_US.UTF-8"


```bash
#ℹ︎ get/print/list all locale category names, keywords, and values
❯ locale -ck LC_ALL
```

    LC_MONETARY
    currency_symbol="$"
    LC_TIME
    d_fmt="%m/%d/%Y"
    d_t_fmt="%a %b %e %X %Y"
    day="Sunday";"Monday";"Tuesday";"Wednesday";"Thursday";"Friday";"Saturday"
    LC_NUMERIC
    decimal_point="."
    LC_TIME
    era=""
    era_d_fmt=""
    era_d_t_fmt=""
    era_t_fmt=""
    LC_MONETARY
    frac_digits=2
    LC_NUMERIC
    grouping="3;3"
    .
    .
    .


```bash
#ℹ︎ get/print specific locale category keywords and values
❯ locale -k LC_TIME
```

    ab_day="Sun";"Mon";"Tue";"Wed";"Thu";"Fri";"Sat"
    abday="Sun";"Mon";"Tue";"Wed";"Thu";"Fri";"Sat"
    day="Sunday";"Monday";"Tuesday";"Wednesday";"Thursday";"Friday";"Saturday"
    abmon="Jan";"Feb";"Mar";"Apr";"May";"Jun";"Jul";"Aug";"Sep";"Oct";"Nov";"Dec"
    mon="January";"February";"March";"April";"May";"June";"July";"August";"September";"October";"November";"December"
    am_pm="AM";"PM"
    t_fmt_ampm="%I:%M:%S %p"
    era=""
    era_d_fmt=""
    era_t_fmt=""
    era_d_t_fmt=""
    alt_digits=""
    d_t_fmt="%a %b %e %X %Y"
    d_fmt="%m/%d/%Y"
    t_fmt="%H:%M:%S"

----
#### To get all available locales:

    ❯ locale -a  # get/print/list all available locales
    en_NZ
    nl_NL.UTF-8
    pt_BR.UTF-8
    fr_CH.ISO8859-15
    eu_ES.ISO8859-15
    eu_ES
    fr_BE
    en_US.UTF-8
    de_CH
    sk_SK.UTF-8
    de_DE.UTF-8
    am_ET.UTF-8
    uk_UA
    en_US.US-ASCII
    .
    .
    .


## NOTES

`LC_*` variables (see ENVIRONMENT) are referred to as "locale categories". Each locale category encompasses a certain number of "locale keywords", and each "locale keyword" has a value (e.g. number, string, array), a "locale keyword value".

For example, you can see the locale keywords that the `LC_TIME` locale category encompasses with: `❯ locale -k LC_TIME`.

All systems provide a POSIX locale, also known as the `"C"` locale, assignable via `"POSIX"` or `"C"`; it is the default locale.

## ENVIRONMENT

Variable | Description
- | -
`$LC_CTYPE`| Defines character classification and case conversion.
`$LC_COLLATE`| Defines collation rules.
`$LC_MONETARY`| Defines the format and symbols used in formatting of monetary information.
`$LC_NUMERIC`| Defines the decimal delimiter, grouping, and grouping symbol for non-monetary numeric editing.
`$LC_TIME`| Defines the format and content of date and time information.
`$LC_MESSAGES`| Defines the format and values of affirmative and negative responses.

## SEE

    locale(1)

## SEEALSO

    localedef(1)

## SEEFURTHER

- [🌎 Documentation: UNIX Specification ➤ Locale](https://pubs.opengroup.org/onlinepubs/007908799/xbd/locale.html)
