---
status: TODO
title: "spctl"
tags: [manage,control,security,assessment,policy,gatekeeper]
---

# `spctl`

## INSTALLATION


```bash
#ℹ︎ installation of `spctl`
❯ *comes pre-installed*
```


## USECASES

----
#### To


```bash
#ℹ︎ add gatekeeper exception
❯ spctl --add /path/to/Application.app
```


```bash
#ℹ︎ remove gatekeeper exception
❯ spctl --remove /path/to/Application.app
```



```bash
#ℹ︎ get/print gatekeeper assessment status
❯ spctl --status
```


```bash
#ℹ︎ turn-on/enable gatekeeper assessments
❯ sudo spctl --master-enable
```


```bash
#ℹ︎ turn-off/disable gatekeeper assessments
❯ sudo spctl --master-disable
```


Especially helpful with the annoying macOS 10.15 (Catalina) system popup blocking execution of non-signed apps.


## NOTES

" Gatekeeper is a security feature of the macOS operating system by Apple. It enforces code signing and verifies downloaded applications before allowing them to run, thereby reducing the likelihood of inadvertently executing malware. Initial release date: July 25, 2012. " (Wikipedia)

## SEE

    spctl(8)

## SEEALSO

    security(1)

