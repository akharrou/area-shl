---
status: DONE
title: "pbpaste"
tags: [paste,clipboard,data,contents]
---

# `pbpaste`

## INSTALLATION


```bash
#ℹ︎ installation of `pbpaste`
❯ *comes pre-installed*
```


## USECASES

----
#### To paste clipboard data contents:


```bash
#ℹ︎ paste clipboard data contents
❯ pbpaste
```


## RECIPES

----
#### Miscellaneous tricks:


```bash
#ℹ︎ convert clipboard to plain text
❯ pbpaste | textutil -convert txt -stdin -stdout -encoding UTF8
```



```bash
#ℹ︎ convert clipboard data tabs to spaces
❯ pbpaste | expand | pbcopy
```



```bash
#ℹ︎ sort and strip duplicate lines from clipboard data
❯ pbpaste | sort | uniq | pbcopy
```



## SHORTCUTS

Key | Action
- | -
++cmd+v++ | Paste text from clipboard.
++cmd+shift+alt+v++ | Paste text from clipboard, and match style.

## SEE

    pbpaste(1)

## SEEALSO

    pbcopy(1), pboard(8), pbs(8)

## SEEFURTHER

- [🌎 Documentation: Pasteboard programming guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PasteboardGuide106/Articles/pbConcepts.html)
