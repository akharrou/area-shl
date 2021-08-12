---
status: DONE
title: "date"
tags: [get,print,display,change,formatted,datetime,time,string]
---

# `date`

## INSTALLATION


```bash
#ℹ︎ installation of `date`
❯ *comes pre-installed*
```


## USECASES
----
#### To print current datetime, formatted: (see `Formatting Elements` below):

    ❯ date +"%Y"   # print year
    2021
    ❯ date +%V   # Week-Of-The-Year
    24


```bash
#ℹ︎ get/print/display current (now) seconds timestamp
❯ date +%s
```



```bash
#ℹ︎ get/print/display UTC datetime
❯ date -u
```

    Thu Jun 17 08:27:50 UTC 2021


```bash
#ℹ︎ get/print/display RFC-2822 datetime format
❯ date -R
```

    Sat, 10 Jul 2021 05:38:22 +0300


```bash
#ℹ︎ get/print/display Apple`s long datetime
❯ date +"%A, %B %d, %Y at %T %p GMT%Z"
```

    Thursday, June 09, 2021 at 11:29:04 AM GMT+03
    Thursday, June 17, 2021 at 11:29:04 AM GMT+03


```bash
#ℹ︎ get/print/display file datetime prefix
❯ date +"%Y%m%d_%H%M%S"
```

    20210617_112840

----
#### To get/print/display date, time, and datetime, in the current locale’s format:


```bash
#ℹ︎ get/print/display locale formatted date
❯ date +"`locale d_fmt`"
```

    07/10/2021


```bash
#ℹ︎ get/print/display locale formatted time
❯ date +"`locale t_fmt`"
```

    10:46:30


```bash
#ℹ︎ get/print/display locale formatted datetime
❯ date +"`locale d_t_fmt`"
```

    Sat Jul 10 10:46:30 2021

See `❯ locale -k LC_TIME` for all time related locale keywords/values.

----
#### To convert datetime/date/time formats:

    ❯ date -r 1625885198 +%D  # (MACOS); get/print/display converted unix timestamp date
    07/10/21


```bash
#ℹ︎ (LINUX); convert unix timestamp date
❯ date -d @1440359821
```

    Sun Aug 23 22:57:01 +03 2015


```bash
#ℹ︎ get/print/display converted datetime formats
❯ date -jf %Y%m%d_%I%M%S 20210710_053053 +%B\ %d,\ %Y
```

    July 10, 2021


```bash
#ℹ︎ convert datetime format to RFC-2822
❯ date -jf %Y%m%d_%I%M%S 20210710_053053 +"%a, %d %b %Y %T %z"
```

    Sat, 10 Jul 2021 05:30:53 +0300

----
#### To adjust/change datetime by a specified duration:

    ❯ date
    Sat Jul 10 09:51:17 +03 2021


```bash
#ℹ︎ adjust/change (without setting) datetime by a specified value/duration
❯ date -v Jan -v +1y -v -17S
```

    Mon Jan 10 09:51:00 +03 2022

`VAL` can be string denoting a month (e.g.: "-v August", set month to August).
`VAL` can be numeric, in which case one of the following must follow it: `y`, `m`, `w`, `d`, `H`, `M` or `S` (e.g.: "-v +23M", add 23 minutes to current datetime).

----
#### To get/print/display/display/show the time in another timezone:


```bash
#ℹ︎ get/print/display current datetime in specified timezone
❯ env TZ="America/Los_Angeles" date
```

    Thu Jun 17 01:27:41 PDT 2021

See `/usr/share/zoneinfo/**/*` for all available timezones.


## PROCEDURES

    # ❯ tz   # fuzzy-search/find/get available system timezones
    function tz()   # fuzzy-search/find/get available system timezones
    {
        find /usr/share/zoneinfo/* \
        | fzf --delimiter='/' --with-nth=5.. \
        | cut -d '/' -f 5-
    }

    # ❯ sec2time   # converts seconds to formatted time: "Xd Xh Xm Xs"
    function sec2time   # converts seconds to formatted time: "Xd Xh Xm Xs"
    {
        # credit: https://unix.stackexchange.com/a/27014/443097

        local T=$1
        local D=$((T/60/60/24))
        local H=$((T/60/60%24))
        local M=$((T/60%60))
        local S=$((T%60))
        local result=""

        (( D > 0 )) && result="${D}d "
        (( H > 0 )) && result="${result}${H}h "
        (( M > 0 )) && result="${result}${M}m "
        (( S > 0 )) && result="${result}${S}s "
        echo -e "${result}" | sed -e 's/[[:space:]]*$//'
    }


## NOTES

- Formatting elements:

    Syntax      |  Semantics
    ----------  |  ---------
    `%a`        |  abbreviated day name (i.e. mon, tue, wed)
    `%A`        |  full day name (i.e. Monday, Tuesday, Wednesday)
    `%b`, `%h`  |  abbreviated month name (i.e. jan, feb, mar)
    `%B`        |  full month name (January, February, March)
    `%c`        |  locales date and time (full date and time)
    `%C`        |  century (e.g. displays 19 for 1999 and 20 for 2020)
    `%d`        |  day of month (i.e. 01, 02, 03)
    `%D`        |  same as M/D/Y (i.e. 04/20/16)
    `%e`        |  day of month padded (i.e. ` 1`, ` 2`)
    `%F`        |  full date, same as yyyy-mm-dd
    `%H`        |  hour (00, 01, 02, 21, 22, 23)
    `%I`        |  hour (1,2,3,10,11,12)
    `%j`        |  day of year (i.e. 243)
    `%k`        |  hour padded (i.e. `1` becomes ` 1`)
    `%l`        |  hour padded (12 hour clock)
    `%m`        |  month number (1,2,3)
    `%M`        |  minute (1,2,3,57,58,59)
    `%n`        |  new line
    `%N`        |  nanoseconds
    `%p`        |  AM or PM
    `%P`        |  like %p but lowercase (ironically)
    `%r`        |  locales 12 hour clock time
    `%R`        |  24 hour version of hour and minute
    `%s`        |  seconds since 1970-01-01 00:00:00
    `%S`        |  second (01,02,03, 57, 58, 59)
    `%t`        |  a tab
    `%T`        |  time same as %H:%M:%S
    `%u`        |  day of week (1 is Monday, 2 is Tuesday etc)
    `%U`        |  week number of year (Sunday as first day of the week)
    `%V`        |  ISO week number with Monday as the first day of the week
    `%w`        |  day of week (0 is Sunday)
    `%W`        |  week number of the year with Monday as the first day of week
    `%x`        |  locales date representation (12/31/2015)
    `%X`        |  locales time representation (14:44:44)
    `%y`        |  last two digits of year
    `%Y`        |  year
    `%z`        |  numeric time zone (i.e. -0400)
    `%:z`       |  numeric time zone as follows (i.e. -04:00)
    `%::z`      |  numeric time zone as follows (i.e. -04:00:00)
    `%Z`        |  alphabetic time zone abbreviation (GMT)
    `-`         |  a single hyphen prevents zero padding
    `_`         |  a single underscore pads with spaces
    `0`         |  pads with zeroes
    `^`         |  use uppercase if possible
    `#`         |  use opposite case if possible

- The format for `$TZ` is a pathname relative to `/usr/share/zoneinfo`. For example:

    
```bash
#ℹ︎ change/set system timezone environment variable
❯ TZ=America/Los_Angeles
```


## ENVIRONMENT

Variable | Description
- | -
`$TZ`| The timezone to use when displaying dates.

## PATHS

Path | Description
- | -
📂 `/usr/share/zoneinfo/**/*` | Directory containing the available timezone information (required for displaying time for that timezone with `date`).
📂 `/var/log/messages` | Record of the user setting the time.

## SEE

    date(1)

## SEEALSO

    printf(1), strftime(3), ctime(3), time(3)

