---
status: DONE
title: "wall"
tags: [broadcast,write,send,message,to,all,logged-in,users,groups,terminals,devices]
---

# `wall`

## INSTALLATION


```bash
#ℹ︎ installation of `wall`
❯ *comes pre-installed*
```


## USECASES

----
#### To broadcast/write/send message to all logged-in users, or a specified group of users:


```bash
#ℹ︎ broadcast/write/send message to all logged-in users, from file
❯ wall <FILE>
```



```bash
#ℹ︎ broadcast/write/send message to all logged-in users, from standard input
❯ wall <<< "Hello world."
```



```bash
#ℹ︎ broadcast/write/send message to specified group users
❯ wall -g GROUP <<< "Hello world."
```


    ❯ wall << eof
    Hello world !
    eof

    Broadcast Message from johndoe@Mac.local
            (/dev/ttys008) at 20:00 +03...

    Hello world !


## SEE

    wall(1)

## SEEALSO

    write(1), talk(1), mesg(1), who(1), nc(1)

