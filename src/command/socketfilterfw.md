---
status: TODO
title: "socketfilterfw"
tags: [manipulate,manage,firewall]
---

# `socketfilterfw`

## BRIEF

    ❯ socketfilterfw [-d] [-l] [-k] [--getglobalstate] [--setglobalstate on | off] [--getblockall] [--setblockall on | off] [--listapps] [--getappblocked PATH] [--blockapp PATH] [--unblockapp PATH] [--add PATH] [--remove PATH] [--getallowsigned] [--setallowsigned] [--setallowsignedapp] [--getstealthmode] [--setstealthmode on | off] [--getloggingmode] [--setloggingmode on | off] [--getloggingopt] [--setloggingopt throttled | brief | detail]

`socketfilterfw` is used to control Application Firewall socket filter. The command takes the following options that are evaluated in order, and several options may be combined:

    -h
        display this help and exit
    -d
        turn on debugging
    -l
        do logging and run in daemon mode
    -k
        kill daemon

    --getglobalstate
        display if the firewall is enabled or not

    --setglobalstate on | off
        turn the firewall on or off

    --getblockall
        show whether block all is enabled or not

    --setblockall on | off
        enable or disable block all option

    --listapps
        display a list of paths of added applications

    --getappblocked PATH
        show whether connections are blocked or not for the application at PATH

    --blockapp PATH
        block the application at PATH

    --unblockapp PATH
        unblock the application at PATH

    --add PATH
        add the application at PATH to the firewall

    --remove PATH
        remove the application at PATH from the firewall

    --getallowsigned
        show whether built-in and downloaded signed applications are to automatically receive incoming connections

    --setallowsigned [on|off]
        set whether built-in signed applications are to automatically receive incoming connections or not

    --setallowsignedapp [on|off]
        set whether downloaded signed applications are to automatically receive incoming connections or not

    --getstealthmode
        show whether stealth mode is on or not

    --setstealthmode [on|off]
        set stealth mode on or off

    --getloggingmode
        show whether logging is on or not

    --setloggingmode [on|off]
        set logging to on or off

    --getloggingopt
        show logging option

    --setloggingopt [throttled|brief|detail]
        set logging option

## INSTALLATION


```bash
#ℹ︎ installation of `socketfilterfw`
❯ *comes pre-installed*
```


## USECASES

----
#### To

    ❯ sudo socketfilterfw --getglobalstate # show firewall status

    ❯ sudo socketfilterfw --setglobalstate on # turn-on/enable firewall

    ❯ sudo socketfilterfw --setglobalstate off # turn-off/disable firewall (default)


```bash
#ℹ︎ add application to firewall
❯ sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /path/to/file
```



## INIT

    [[ ! -L /usr/local/bin/socketfilterfw ]] &&\
        ln -s /usr/libexec/ApplicationFirewall/socketfilterfw /usr/local/bin/socketfilterfw


## SEE

    socketfilterfw -h

## SEEALSO

    airport, networksetup(8)

