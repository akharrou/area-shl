---
status: DONE
title: "/dev/null"
tags: [file,device,special,null]
---

# `/dev/null`

## USECASES

----
#### To ignore command standard output and/or error:


```bash
#ℹ︎ ignore standard error by redirecting them to null device
❯ COMMAND 2>/dev/null
```



```bash
#ℹ︎ ignore standard output and error by redirecting them to null device
❯ COMMAND &>/dev/null
```



## SEE

    null(4)

## SEEALSO

    /dev/full, /dev/zero

