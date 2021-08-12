---
status: INCOMPLETE
title: "locate"
tags: [search,find,get,print,list,matching,filenames,in,filesystem]
---

# `locate`

## INSTALLATION


```bash
#ℹ︎ installation of `locate`
❯ *comes pre-installed*
```


## USECASES

----
#### To search/find matching filenames in filesystem and print/list them:


```bash
#ℹ︎ search/find/get/print/display number of matching filenames in filesystem
❯ locate -c usr/include/signal.h
```

    9


```bash
#ℹ︎ search/find/get/print/display list matching filenames in filesystem (case-insensitively)
❯ locate -i usr/include/signal.h
```

    /Applications/Xcode.app/Contents/Developer/Platforms/AppleTVOS.platform/Developer/SDKs/AppleTVOS.sdk/usr/include/signal.h
    /Applications/Xcode.app/Contents/Developer/Platforms/AppleTVSimulator.platform/Developer/SDKs/AppleTVSimulator.sdk/usr/include/signal.h
    /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/usr/include/signal.h
    /Applications/Xcode.app/Contents/Developer/Platforms/WatchOS.platform/Developer/SDKs/WatchOS.sdk/usr/include/signal.h
    /Applications/Xcode.app/Contents/Developer/Platforms/WatchSimulator.platform/Developer/SDKs/WatchSimulator.sdk/usr/include/signal.h
    /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/usr/include/signal.h
    /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator.sdk/usr/include/signal.h
    /Library/Developer/CommandLineTools/SDKs/MacOSX10.15.sdk/usr/include/signal.h
    /Library/Developer/CommandLineTools/SDKs/MacOSX11.3.sdk/usr/include/signal.h


```bash
#ℹ︎ get/print/display locate datebase statistics information
❯ locate -S
```


    Database: /var/db/locate.database
    Compression: Front: 10.17%, Bigram: 61.89%, Total: 7.37%
    Filenames: 2374072, Characters: 335806082, Database size: 24740887
    Bigram characters: 9427559, Integers: 215749, 8-Bit characters: 273


## ENVIRONMENT

Variable | Description
- | -
`$LOCATE_PATH`| Path to the locate database if set and not empty, ignored if the -d option was specified.

## PATHS

Path | Description
- | -
📂 `/var/db/locate.database` | Locate database.
📂 `/usr/libexec/locate.updatedb` | Script to update the locate database.
📂 `/System/Library/LaunchDaemons/com.apple.locate.plist` | Job that starts the database rebuild.

## SEE

    locate(1)

## SEEALSO

    mdfind(1), find(1), fd(1), which(1), whereis(1)

