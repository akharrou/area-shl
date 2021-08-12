---
status: DONE
title: "Install"
tags: [macos,operating,system,os,software,boot,installer]
---

# Install

## INSTALLATION


```bash
#ℹ︎ installation of `Install`
❯ *comes pre-installed*
```


## USECASES

----
#### To create/make bootable installers:


```bash
#ℹ︎ create/make bootable installer; for macOS 11 (Big Sur)
❯ sudo /Applications/Install\ macOS\ Big\ Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --nointeraction --downloadassets
```



```bash
#ℹ︎ create/make bootable installer; for macOS 10.15 (Catalina)
❯ sudo /Applications/Install\ macOS\ Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --nointeraction --downloadassets
```



```bash
#ℹ︎ create/make bootable installer; for macOS 10.14 (Mojave)
❯ sudo /Applications/Install\ macOS\ Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --nointeraction --downloadassets
```



```bash
#ℹ︎ create/make bootable installer; for macOS 10.13 (High Sierra)
❯ sudo /Applications/Install\ macOS\ High\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --applicationpath /Applications/Install\ macOS\ High\ Sierra.app
```



```bash
#ℹ︎ create/make bootable installer; for macOS 10.12 (Sierra)
❯ sudo /Applications/Install\ macOS\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --applicationpath /Applications/Install\ macOS\ Sierra.app
```



```bash
#ℹ︎ create/make bootable installer; for OS X 10.11 (El Capitan)
❯ sudo /Applications/Install\ OS\ X\ El\ Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --applicationpath /Applications/Install\ OS\ X\ El\ Capitan.app
```



```bash
#ℹ︎ create/make bootable installer; for OS X 10.10 (Yosemite)
❯ sudo /Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --applicationpath /Applications/Install\ OS\ X\ Yosemite.app
```



## NOTES

For confirmation before erasing the drive, remove --nointeraction from the command.

The optional --downloadassets flag is new in macOS 10.14 (Mojave). It downloads assets which may be required during installation, like updates.

The --applicationpath flag is deprecated since macOS 10.14 (Mojave) and will throw an error if used.

You can download the software from the App Store or the Apple Developers website.

## SEEALSO

    install(1), installer(8)

## SEEFURTHER

- [🌎 Page: Apple Developer Download Index](https://developer.apple.com/download/all/)
