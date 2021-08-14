---
status: TODO
title: "who"
tags: [get,print,display,list,logged-in,users,login,names,usernames,identifiers,ids]
---

# `who`

## INSTALLATION


```bash
#ℹ︎ installation of `who`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print list of names of currently logged-in users:


```bash
#ℹ︎ get/print/display currently logged-in users list
❯ who -H
```

    USER     LINE     WHEN
    johndoe  console  Jul 22 20:34
    johndoe  ttys001  Jul 25 15:28
    johndoe  ttys002  Jul 25 17:31
    johndoe  ttys003  Jul 25 15:28
    johndoe  ttys005  Jul 25 16:47


## PATHS

Path | Description
- | -
`/var/run/utmpx` | Data file containing names of currently logged-in users.

## SEE

    who(1)

## SEEALSO

    uptime(1), ps(1), w(1), finger(1), whoami(1), logname(1), id(1), groups(1)

