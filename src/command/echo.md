---
status: TODO
title: "echo"
tags: [get,print,display,text,on,to,screen]
---

# `echo`

## INSTALLATION


```bash
#ℹ︎ installation of `echo`
❯ *comes builtin*
```


## USECASES

----
#### To print text on standard output screen:


```bash
#ℹ︎ print text on standard output screen
❯ echo hello world
```

    hello world


```bash
#ℹ︎ convert ascii code, get/print/display ascii character representation
❯ echo -e "\x41"
```



```bash
#ℹ︎ get/print/display specified environment variable value
❯ echo $SHELL
```


## RECIPIES

----
#### Miscellaneous tricks:


```bash
#ℹ︎ print each path, in $PATH, on a separate line
❯ echo -e ${PATH//:/\\n}
```

    /usr/local/bin
    /usr/bin
    /bin
    /usr/sbin
    /sbin


```bash
#ℹ︎ substitute get/print/display literal string
❯ echo ${$(echo "/usr/local/bin")##*/}
```



## SEE

    echo(1)

## SEEALSO

    cat(1), pr(1), nl(1), bat(1)

