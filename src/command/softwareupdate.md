---
status: INCOMPLETE
title: "softwareupdate"
tags: [manage,macos,system,software,updates,downloads,installations]
---

# `softwareupdate`

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To manage MacOS system software updates:

    ❯ softwareupdate --list

```bash
#ℹ︎ download software file
❯ sudo softwareupdate --download SOFTWARE
```


```bash
#ℹ︎ download, and install, software file
❯ sudo softwareupdate --install [--recommended|--all|item ...] [--restart] SOFTWARE
```


## RECIPES

----
#### Updating Java:

    ❯ softwareupdate --list

        Software Update Tool

        Finding available software
        Software Update found the following new or updated software:
            * Label: MacBookAirEFIUpdate2.4-2.4
                Title: MacBook Air EFI Firmware Update, Version: 2.4, Size: 3817K, Recommended: YES, Action: restart,
            * Label: ProAppsQTCodecs-1.0
                Title: ProApps QuickTime codecs, Version: 1.0, Size: 968K, Recommended: YES,
            * Label: JavaForOSX-1.0
                Title: Java for OS X 2012-005, Version: 1.0, Size: 65288K, Recommended: YES,

    ❯ sudo softwareupdate --install JavaForOSX-1.0

        Software Update Tool

        Finding available software

        Downloading Java for OS X 2012-005
        Downloaded Java for OS X 2012-005
        Installing Java for OS X 2012-005
        Done with Java for OS X 2012-005
        Done.

    ❯ sudo softwareupdate --schedule

        Automatic check is on


## PATHS

Path | Description
- | -
`/Library/Updates/` | Directory containing downloaded software updates, that are ready for installation.

## SEE

    softwareupdate(8)

## SEEALSO

    brew(1), mas, xcode-select(1)

