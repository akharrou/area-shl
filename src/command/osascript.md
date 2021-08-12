---
status: INCOMPLETE
title: "osascript"
tags: [execute,OSA,AppleScript,JavaScript,scripts,interpreter]
---

# `osascript`

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### Post a notification, alert, and dialog:


```bash
#ℹ︎ post/display notification to screen
❯ osascript -e ’display notification "BODY" with title "TITLE" subtitle "SUBTITLE" sound name "Glass"’
```

    *notification center popup box slides in, then out, with "Glass" sound*


```bash
#ℹ︎ display/post alert message box popup with buttons
❯ osascript -e ’display alert "BODY" as informational buttons { "Button1", "Button2", "Button3" } default button "Button1" cancel button "Button3" giving up after 30’
```

    0:149: execution error: User canceled. (-128)


```bash
#ℹ︎ display/post dialog message box popup with buttons
❯ osascript -e ’display dialog "BODY" default answer "DEFAULT" hidden answer false buttons { "ButtonA", "ButtonB", "ButtonC" } default button "ButtonA" cancel button "ButtonC" with title "TITLE" with icon POSIX file "/Users/johndoe/.config/iterm/iTerm2-white-chevron.icns" giving up after 30’
```

    button returned:ButtonA, text returned:DEFAULT, gave up:false

----
#### To control volume:


```bash
#ℹ︎ set volume to mute
❯ osascript -e "set volume output muted true"
```


```bash
#ℹ︎ set volume to specified level/state/number/percentage
❯ osascript -e "set volume 4"
```


## RECIPES

----
#### Create/make an Apple alias link:

    ❯ osascript -e ’tell application Finder to make alias file to POSIX file "SOURCE" at POSIX file "<targetDir>"’ 1>/dev/null  # create/make Apple alias link

Note you may use only full paths, no relative ones. You may use environment variables, as long as they expand to a full path as well. Also `Finder` must be surrounded by single or double quotes.

    tell application "Finder" ...

    ...to POSIX file "/Users/johndoe/Downloads/img.jpeg"
    ...at POSIX file "/Users/johndoe/Downloads"

    ...to POSIX file "$DOWNLOADS/img.jpeg"
    ...at POSIX file "$DOWNLOADS"

The target must be a folder/directory. The alias will have the same name as the source, except with "` (alias)`" appended to it, e.g.: `img.jpeg` -> `img.jpeg (alias)`.

----
#### Miscellaneous commands:


```bash
#ℹ︎ set system volume
❯ osascript -e ’set volume output volume <0-100>’
```


```bash
#ℹ︎ mute system volume
❯ osascript -e ’set volume output muted true’
```


```bash
#ℹ︎ logout of system
❯ osascript -e ’tell app "System Events" to log out’
```



## PROCEDURES

    function pbcopy-file() {
        osascript \
            -e 'on run args' \
            -e 'set the clipboard to POSIX file (first item of args)' \
            -e end \
            "$@"
    }

    function makeAlias() {
        echo 'osascript -e' 'tell application "Finder" to make alias file to POSIX file "/Users/johndoe/.../<sourceObject>" at POSIX file "/Users/johndoe/.../<destinationFolder>"'
    }

    # #!/usr/bin/env osascript
    # # Import Chrome History
    # tell application "Safari" to activate
    # tell application "System Events"
    #     keystroke "i" using {option down, command down}
    #     key code {49, 48, 48, 49}
    #     keystroke return
    # end tell


## SEE

    osascript(1)

## SEEALSO

    osacompile(1)

