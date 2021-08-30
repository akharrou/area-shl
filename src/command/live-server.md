---
status: DONE
title: "live-server"
tags: [live,reload,http,webpage,website,host,server]
---

# `live-server`

## BRIEF

Little development server with live reload capability, i.e ability to refresh the webpage on file changes.

Option              | Meaning
------------------- | ---------------------------------------------------------
`--host=ADDRESS`    | select binding host address (default: `$IP` or `0.0.0.0`)
`--port=NUMBER`     | select port (default: `$PORT` or `8080`)
`--open=PATH`       | launch browser to `PATH` (default: server root, i.e `.`)
`--browser=BROWSER` | specify browser to use instead of system default
`--watch=PATHS`     | comma-separated (string) paths to watch (default: all)

## INSTALLATION


```bash
#ℹ︎ installation of `live-server`
❯ npm install --global live-server
```


## USECASES

----
#### To start an HTTP live-reload web server:


```bash
#ℹ︎ run/launch/start/execute HTTP live-reload webpage/website host server
❯ live-server --host=127.0.0.1 --port=8000 --open=site/ --browser=/Applications/Google\ Chrome.app
```



## SEE

    live-server -h

## SEEALSO

    http-server, python

## SEEFURTHER

- [🌎 Home](https://www.npmjs.com/package/live-server)
- [🌎 Repository](https://github.com/tapio/live-server)
