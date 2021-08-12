---
status: INCOMPLETE
title: "Google Chrome"
tags: [google,native,application,web,browser,viewer,navigator]
---

# Google Chrome

## INSTALLATION


```bash
#ℹ︎ installation of `google-chrome`
❯ brew install --cask Google-Chrome
```


## USECASES

----
#### To open websites with the Google Chrome application:


```bash
#ℹ︎ open website page with google chrome application, in active window
❯ open -a /Applications/Google\ Chrome.app "https://www.google.com"
```



## ALIASES

    alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"

## PROCEDURES

    # ❯ b   # fuzzy search chrome [B]ookmarks, and open selected in browser
    function b()   # fuzzy search chrome [B]ookmarks, and open selected in browser
    {
        bookmarks_path="$HOME/Library/Application Support/Google/Chrome/Profile 12/Bookmarks"

        local jq_script='
            def ancestors: while(. | length >= 2; del(.[-1,-2]));
            . as $in | paths(.url?) as $key | $in | getpath($key) | {name,url, path: [$key[0:-2] | ancestors as $a | $in | getpath($a) | .name?] | reverse | join("/") } | .path + "/" + .name + "\t" + .url'

        jq -r "${jq_script}" < "${bookmarks_path}" \
        | sed -E $'s/(.*)\t(.*)/\\1\t\x1b[36m\\2\x1b[m/g' \
        | fzf --exact --multi \
        | cut -d$'\t' -f2 \
        | xargs open
    }


## SHORTCUTS

Key | Action
- | -
++cmd+period++ | open settings
++cmd+slash++ | open shortcuts

## PATHS

Path | Description
- | -
📂 `/Applications/Google Chrome.app` | Application’s bundle folder.
📂 `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` | Application’s executable program file.

## SEEALSO

    chrome-cli, gcloud, gcalcli, safari, firefox, brave, microsoft edge

## SEEFURTHER

- [🌎 Home](https://www.google.com/chrome/)
