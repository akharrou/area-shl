---
status: TODO
title: "mail"
tags: [send,receive,read,manage,mailbox]
---

# `mail`

## BRIEF



## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To send a mail message from strings or files:


```bash
#ℹ︎ send string as mail
❯ mail -s "subject title" mailto@example.com <<< "<message-body>"
```


```bash
#ℹ︎ send file as mail
❯ mail -s "Hello World" mailto@example.com < ~/logs/file.log
```



## INIT

    # unset MAILCHECK

## VARIABLES

    # MAILCHECK=60
    # MAIL=/var/mail/franky


## NOTES

## PATHS

Path | Description
- | -

## SEE

    mail(1)

## SEEALSO

    biff(1), write(1), wall(1), talk(1), nc(1)

