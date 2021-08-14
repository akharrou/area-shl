---
status: DONE
title: "sw_vers"
tags: [print,macos,operating,system,version,information]
---

# `sw_vers`

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print MacOS operating system version information:


```bash
#ℹ︎ get/print MacOS operating system information
❯ sw_vers
```

    ProductName:	macOS
    ProductVersion:	11.4
    BuildVersion:	20F71


```bash
#ℹ︎ get/print MacOS operating system product name information
❯ sw_vers -productName
```

    macOS


```bash
#ℹ︎ get/print MacOS operating system product version information
❯ sw_vers -productVersion
```

    11.4


```bash
#ℹ︎ get/print MacOS operating system build version information
❯ sw_vers -buildVersion
```

    20F71


## PATHS

Path | Description
- | -
`/System/Library/CoreServices/SystemVersion.plist` | System Version information.
`/System/Library/CoreServices/ServerVersion.plist` | Server Version information.

## SEE

    sw_vers(1)

## SEEALSO

    sysctl(8), system_profiler(8), security(1), mdls(1)

