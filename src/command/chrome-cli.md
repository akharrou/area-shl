---
status: DONE
title: "chrome-cli"
tags: [google,chrome,brave,web,browser,application,interface,cli]
---

# `chrome-cli`

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install chrome-cli
```


This will also install:

    chrome-cli
    chrome-canary-cli
    chromium-cli
    brave-cli
    vivaldi-cli

These are used to interface their respective browsers.

## USECASES

----
#### To interface web browsers:


```bash
#ℹ︎ List all windows
❯ chrome-cli list windows
```


```bash
#ℹ︎ List all tabs
❯ chrome-cli list tabs
```


```bash
#ℹ︎ List tabs in specific window
❯ chrome-cli list tabs -w <id>
```


```bash
#ℹ︎ List all tabs’ link
❯ chrome-cli list links
```


```bash
#ℹ︎ List tabs’ link in specific window
❯ chrome-cli list links -w <id>
```


```bash
#ℹ︎ Print info for active tab
❯ chrome-cli info
```


```bash
#ℹ︎ Print info for specific tab
❯ chrome-cli info -t <id>
```


```bash
#ℹ︎ Open url in new tab
❯ chrome-cli open <url>
```


```bash
#ℹ︎ Open url in new window
❯ chrome-cli open <url> -n
```


```bash
#ℹ︎ Open url in new incognito window
❯ chrome-cli open <url> -i
```


```bash
#ℹ︎ Open url in specific tab
❯ chrome-cli open <url> -t <id>
```


```bash
#ℹ︎ Open url in new tab in specific window
❯ chrome-cli open <url> -w <id>
```


```bash
#ℹ︎ Close active tab
❯ chrome-cli close
```


```bash
#ℹ︎ Close active window
❯ chrome-cli close -w
```


```bash
#ℹ︎ Close specific tab
❯ chrome-cli close -t <id>
```


```bash
#ℹ︎ Close specific window
❯ chrome-cli close -w <id>
```


```bash
#ℹ︎ Reload active tab
❯ chrome-cli reload
```


```bash
#ℹ︎ Reload specific tab
❯ chrome-cli reload -t <id>
```


```bash
#ℹ︎ Navigate back in active tab
❯ chrome-cli back
```


```bash
#ℹ︎ Navigate back in specific tab
❯ chrome-cli back -t <id>
```


```bash
#ℹ︎ Navigate forward in active tab
❯ chrome-cli forward
```


```bash
#ℹ︎ Navigate forward in specific tab
❯ chrome-cli forward -t <id>
```


```bash
#ℹ︎ Activate specific tab
❯ chrome-cli activate -t <id>
```


```bash
#ℹ︎ Print size of active window
❯ chrome-cli size
```


```bash
#ℹ︎ Print size of specific window
❯ chrome-cli size -w <id>
```


```bash
#ℹ︎ Set size of active window
❯ chrome-cli size <width> <height>
```


```bash
#ℹ︎ Set size of specific window
❯ chrome-cli size <width> <height> -w <id>
```


```bash
#ℹ︎ Print position of active window
❯ chrome-cli position
```


```bash
#ℹ︎ Print position of specific window
❯ chrome-cli position -w <id>
```


```bash
#ℹ︎ Set position of active window
❯ chrome-cli position <x> <y>
```


```bash
#ℹ︎ Set position of specific window
❯ chrome-cli position <x> <y> -w <id>
```


```bash
#ℹ︎ Print source from active tab
❯ chrome-cli source
```


```bash
#ℹ︎ Print source from specific tab
❯ chrome-cli source -t <id>
```


```bash
#ℹ︎ Print Chrome version
❯ chrome-cli chrome version
```


----
#### To execute Javascript code in web browser:


```bash
#ℹ︎ Execute javascript in active tab
❯ chrome-cli execute <javascript>
```


```bash
#ℹ︎ Execute javascript in specific tabs
❯ chrome-cli execute <javascript> -t <id>
```


    ❯ chrome-cli execute <<< ’(function() {
        var nodes = document.querySelectorAll(".title a");
        var titles = [];
        for (var i = 0; i < 5; i++) {
            titles.push(nodes[i].innerHTML)
        }
        return titles.join("\n");
    })();’


## PROCEDURES

    # function getCurrentTab()
    # {
    #     CURRENT_TAB=$(chrome-cli info | head -n1 | grep -o '\d+')
    # }

    # # opens chrome browser at the page of the selected entry
    # function chromeGoto()
    # {
    #     _path="";
    #     _site="http://localhost:$PORT";

    #     [[ $# -ge 1 ]] && _path="$1"
    #     [[ $# -ge 2 ]] && _site="$2"

    #     # If current tab is not known, request it, and declare it as a variable; lasts for the shell session
    #     [ -z $CURRENT_TAB ] && CURRENT_TAB=$(chrome-cli info | head -n1 | grep -o '\d+')

    #     echo "chrome-cli open $_site/$_path -t $CURRENT_TAB"
    #     eval chrome-cli open $_site/$_path -t $CURRENT_TAB
    # }

    # function chromeGotoFile()
    # {
    #     chromeGoto "$(loc3 $1 | sed "s/ /\\\ /g")" ${@:2}
    # }

    # function chromeGotoFileHeader()
    # {
    #     chromeGoto "$(loc0 $1 | sed "s/ /\\\ /g")" ${@:2}
    # }

    # function chromeGotoRemoteFile()
    # {
    #     chromeGoto "$(loc3 $1 | sed "s/ /\\\ /g")" "https://akharrou.github.io/mkdocs-markdown"
    # }

    # function chromeGotoRemoteFileHeader()
    # {
    #     chromeGoto "$(loc0 $1 | sed "s/ /\\\ /g")" "https://akharrou.github.io/mkdocs-markdown"
    # }

    # function bg()
    # {
    #     chromeGotoFile $@
    # }

    # function bgh()
    # {
    #     chromeGotoFileHeader $@
    # }

    # function bgr()
    # {
    #     chromeGotoRemoteFile $@
    # }

    # function bgrh()
    # {
    #     chromeGotoRemoteFileHeader $@
    # }

    # function gt()
    # {
    #     _res=$(loc1 $1)
    #     editorGoto $_res;
    #     chromeGoto "$(basename "$(echo $_res | cut -d':' -f1 | sed "s/ /\\\ /g")" '.md')"
    # }

    # function bgAlfred()
    # {
    #     cd $NOTES; bgh; exit
    # }


## SEE

    chrome-cli --help

## SEEALSO

    gcalcli, gcloud, google-chrome, brave-browser, google-cloud-sdk

## SEEFURTHER

- [🌎 Repository](https://github.com/prasmussen/chrome-cli)
