---
status: DONE
title: "write"
tags: [send,write,broadcast,message,to,another,logged-in,users,terminal,device]
---

# `write`

## INSTALLATION


```bash
#ℹ︎ installation of `write`
❯ *comes pre-installed*
```


## USECASES

----
#### To send/write/broadcast message to another specified user:


```bash
#ℹ︎ send/write/broadcast message to another specified user
❯ write USER <<< "Hello."
```


    ❯ write USER << eof
    Hello.
    eof

If user is logged in on more than one terminal, you can specify which terminal to write to, else `write` will pick the one with the shortest idle time:

    ❯ write johndoe /dev/ttys013 <<< "Hello."


## NOTES

Traditional protocol for writing to someone:

- `-o`: (either at the end of a line, or on a line by itself) means that it’s the other person’s turn to talk

- `oo`: means that the person believes the conversation to be over

## SEE

    write(1)

## SEEALSO

    mesg(1), talk(1), wall(1), who(1), nc(1)

