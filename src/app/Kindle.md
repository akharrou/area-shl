---
status: DONE
title: "Kindle"
tags: [ebook,reader,ereader]
---

# Kindle

## INSTALLATION


```bash
#ℹ︎ installation of `Kindle`
❯ brew install --cask Kindle
```


## RECIPES

----
#### To get/set Kindle settings:


```bash
#ℹ︎ get/read/set/write Kindle user library content path
❯ defaults read com.amazon.Kindle User\ Settings.CONTENT_PATH
```



## VARIABLES

    [[ `uname -s` == *Darwin* ]] &&\
        export KINDLECONTENT="`defaults read com.amazon.Kindle User\ Settings.CONTENT_PATH`"

## ALIASES

    alias kindle="open -a /Applications/Kindle.app"


## PATHS

Path | Description
- | -
`$HOME/Library/Kindle/My Kindle Content` | Default directory containing Kindle data.

## SEEFURTHER

- [🌎 Page: Online Kindle](https://read.amazon.com/)
- [🌎 Page: Online Kindle Notebook](https://read.amazon.com/notebook)
