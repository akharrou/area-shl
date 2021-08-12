---
status: DONE
title: "xcode-select"
tags: [manages,active,xcode,bsd,developer,tools,directory]
---

# `xcode-select`

## BRIEF

`xcode-select` controls the location of the developer directory used by `xcrun(1)`, `xcodebuild(1)`, `cc(1)`, and other Xcode and BSD development tools. This also controls the locations that are searched for by `man(1)` for developer tool manpages.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To manage developer command line tools:


```bash
#ℹ︎ install command line developer tools from Apple Developer Software Downloads Index
❯ xcode-select --install
```



```bash
#ℹ︎ locate/get/print Xcode/command-line-developer-tools path and version information
❯ xcode-select --print-path && xcode-select --version
```

    /Applications/Xcode.app/Contents/Developer
    xcode-select version 2384.


```bash
#ℹ︎ unset user-specified xcode developer directory, and find the default one; fixes problems
❯ xcode-select --reset
```


----
#### To specify/switch Xcode/command-line-developer-tools developer directory:

    ❯ env DEVELOPER_DIR="/Applications/Xcode-beta.app" clang --verison   : run/execute developer-command-line-tool using alternate/different developer directory

    ❯ xcode-select --switch /Applications/Xcode-beta.app/Contents/Developer   : switch Xcode/command-line-developer-tools directory (e.g. beta)
    ❯ xcode-select --switch /Applications/Xcode.app/Contents/Developer   : switch back Xcode/command-line-developer-tools directory


## VARIABLES

    # set Xcode/command-line-tools developer directory
    export DEVELOPER_DIR="/Applications/Xcode.app/Contents/Developer"


## PATHS

Path | Description
- | -
📂 `/Applications/Xcode.app/Contents/Developer` | Default developer directory.

## SEE

    xcode-select(1)

## SEEALSO

    xcodebuild(1), xcrun(1), brew(1), mas(1), softwareupdate(8)

## SEEFURTHER

- [🌎 Page: Apple Developer Videos](https://developer.apple.com/videos/)
- [🌎 Page: Apple Developer Software Downloads Index](https://developer.apple.com/download/all/)
