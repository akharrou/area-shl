---
status: DONE
title: "xcrun"
tags: [run,locate,get,print,display,show,developement,tools,properties,path]
---

# `xcrun`

## INSTALLATION


```bash
#ℹ︎ installation of `xcrun`
❯ *comes pre-installed*
```


## SYNTAX

    ❯ xcrun [--sdk <sdk-name>] --show-sdk-[path|version|build-version|platform-path|platform-version]
    ❯ xcrun [--sdk <sdk-name>] --find <tool-name>
    ❯ xcrun [--sdk <sdk-name>] [--run] <tool-name> <tool-argument> ...

## USECASES

----
#### To get information about SDK:

    ❯ xcodebuild -showsdks   # list available Apple SDKs


```bash
#ℹ︎ get/print selected (MacOSX) SDK path
❯ xcrun --show-sdk-path --sdk macosx
```


```bash
#ℹ︎ get/print selected (MacOSX) SDK version number
❯ xcrun --show-sdk-version --sdk macosx
```


```bash
#ℹ︎ get/print selected (MacOSX) SDK build version number
❯ xcrun --show-sdk-build-version --sdk macosx
```


```bash
#ℹ︎ get/print selected (MacOSX) SDK platform path
❯ xcrun --show-sdk-platform-path --sdk macosx
```


```bash
#ℹ︎ get/print selected (MacOSX) SDK platform version number
❯ xcrun --show-sdk-platform-version --sdk macosx
```


----
#### To find/get/print SDK (command-line) tools path location:


```bash
#ℹ︎ find/get/print default SDK command-line tool path location
❯ xcrun --find clang; xcrun --find gcc; xcrun --find lldb
```


----
#### To run/execute SDK (command-line) tools:


```bash
#ℹ︎ run/execute default SDK command-line tool
❯ xcrun --run clang --version
```



## VARIABLE

    # default SDK used
    export SDKROOT="macosx"


## ENVIRONMENT

Variable | Description
- | -

    ＄SDKROOT
       Sets default SDK to use.

## SEE

    xcrun(1)

## SEEALSO

    xcode-select, xcodebuild

