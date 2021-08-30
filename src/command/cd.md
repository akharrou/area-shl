---
status: TODO
title: "cd"
tags: [change,current,present,working,directory]
---

# `cd`

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes builtin*
```


## RECIPES

----
#### Miscellaneous:


```bash
#ℹ︎ change directory location/path, else exit/quit/return
❯ cd PATH || exit 1
```



## ALIASES

    if [[ ${SHELL##*/} = zsh ]]; then
        alias -g ..=".." # 1
        alias -g ...="../.." # 2
        alias -g ....="../../.." # 3
        alias -g .....="../../../.." # 4
        alias -g ......="../../../../.." # 5
        alias -g .......="../../../../../.." # 6
        alias -g ........="../../../../../../.." # 7
        alias -g .........="../../../../../../../.." # 8
        alias -g ..........="../../../../../../../../.." # 9
    fi

    # `dirs`
    alias -- -='cd -'
    alias "1"="cd -1"   && alias "61"="cd -61"
    alias "2"="cd -2"   && alias "62"="cd -62"
    alias "3"="cd -3"   && alias "63"="cd -63"
    alias "4"="cd -4"   && alias "64"="cd -64"
    alias "5"="cd -5"   && alias "65"="cd -65"
    alias "6"="cd -6"   && alias "66"="cd -66"
    alias "7"="cd -7"   && alias "67"="cd -67"
    alias "8"="cd -8"   && alias "68"="cd -68"
    alias "9"="cd -9"   && alias "69"="cd -69"
    alias "10"="cd -10" && alias "70"="cd -70"
    alias "11"="cd -11" && alias "51"="cd -51"
    alias "12"="cd -12" && alias "52"="cd -52"
    alias "13"="cd -13" && alias "53"="cd -53"
    alias "14"="cd -14" && alias "54"="cd -54"
    alias "15"="cd -15" && alias "55"="cd -55"
    alias "16"="cd -16" && alias "56"="cd -56"
    alias "17"="cd -17" && alias "57"="cd -57"
    alias "18"="cd -18" && alias "58"="cd -58"
    alias "19"="cd -19" && alias "59"="cd -59"
    alias "20"="cd -20" && alias "60"="cd -60"
    alias "21"="cd -21" && alias "81"="cd -81"
    alias "22"="cd -22" && alias "82"="cd -82"
    alias "23"="cd -23" && alias "83"="cd -83"
    alias "24"="cd -24" && alias "84"="cd -84"
    alias "25"="cd -25" && alias "85"="cd -85"
    alias "26"="cd -26" && alias "86"="cd -86"
    alias "27"="cd -27" && alias "87"="cd -87"
    alias "28"="cd -28" && alias "88"="cd -88"
    alias "29"="cd -29" && alias "89"="cd -89"
    alias "30"="cd -30" && alias "90"="cd -90"
    alias "31"="cd -31" && alias "71"="cd -71"
    alias "32"="cd -32" && alias "72"="cd -72"
    alias "33"="cd -33" && alias "73"="cd -73"
    alias "34"="cd -34" && alias "74"="cd -74"
    alias "35"="cd -35" && alias "75"="cd -75"
    alias "36"="cd -36" && alias "76"="cd -76"
    alias "37"="cd -37" && alias "77"="cd -77"
    alias "38"="cd -38" && alias "78"="cd -78"
    alias "39"="cd -39" && alias "79"="cd -79"
    alias "40"="cd -40" && alias "80"="cd -80"
    alias "41"="cd -41" && alias "91"="cd -91"
    alias "42"="cd -42" && alias "92"="cd -92"
    alias "43"="cd -43" && alias "93"="cd -93"
    alias "44"="cd -44" && alias "94"="cd -94"
    alias "45"="cd -45" && alias "95"="cd -95"
    alias "46"="cd -46" && alias "96"="cd -96"
    alias "47"="cd -47" && alias "97"="cd -97"
    alias "48"="cd -48" && alias "98"="cd -98"
    alias "49"="cd -49" && alias "99"="cd -99"
    alias "50"="cd -50" && alias "100"="cd -100"


## SEE

    cd(1)

## SEEALSO

    dirs, autojump, fzf-tab

