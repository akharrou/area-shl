---
status: DONE
title: "talk"
tags: [talk,instant,message,chat,converse,with,another,users,terminal,device]
---

# `talk`

## INSTALLATION


```bash
#ℹ︎ installation of `talk`
❯ *comes pre-installed*
```


## USECASES

----
#### To instant-message/chat/converse with specified user, on specified terminal device


```bash
#ℹ︎ instant-message/chat/converse with specified user, on specified terminal device
❯ talk USER [TTYNAME]
```



## NOTES

When first called, talk sends the message

    ❯ Message from TalkDaemon@his_machine...
      talk: connection requested by your_name@your_machine.
      talk: respond with: talk your_name@your_machine

to the user you wish to talk to.  At this point, the recipient of the message should reply by typing:

    ❯ talk your_name@your_machine

`talk` may be denied or granted by use of the `mesg(1)`, at outset talking is allowed.

## SEE

    talk(1)

## SEEALSO

    mesg(1), write(1), wall(1), who(1), nc(1)

