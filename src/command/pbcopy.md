---
status: DONE
title: "pbcopy"
tags: [copy,data,contents,to,paste,from,clipboard]
---

# `pbcopy` & `pbpaste`

## INSTALLATION


```bash
#ℹ︎ installation of `pbcopy` and `pbpaste`
❯ *comes pre-installed*
```


## USECASES

----
#### To paste clipboard data contents:


```bash
#ℹ︎ paste clipboard data contents
❯ pbpaste
```


----
#### To copy data contents to clipboard:


```bash
#ℹ︎ copy text data contents to clipboard
❯ echo "Hello, world" | pbcopy && pbpaste
```

    Hello, world

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

    🏳  select & drag selection
        Creates a "text clipping" that can be dragged to any folder or file.
++ctrl+k++ | Kill (i.e delete) selection and copy it to secondary clipboard.
++ctrl+y++ | Paste secondary clipboard at cursor position.
++cmd+x++ | Kill (i.e delete) text and copy it to clipboard.
++cmd+c++ | Copy text to clipboard.
++cmd+v++ | Paste text from clipboard.
++cmd+shift+alt+v++ | Paste text from clipboard, and match style.

## SEE

    pbcopy(1)
    pbpaste(1)

## SEEALSO

    pbcopy(1), pboard(8), pbs(8)

## SEEFURTHER

- [🌎 Documentation: Pasteboard programming guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PasteboardGuide106/Articles/pbConcepts.html)
- [🌎 Page: Setapp - Clipboard tips & tricks](https://setapp.com/how-to/how-to-view-clipboard-history-on-mac)
