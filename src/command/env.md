---
status: INCOMPLETE
title: "env"
tags: [get,print,display,list,set,environment,variables,execute,command]
---

# `env`

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To list all available environment variables:


```bash
#ℹ︎ list all available environment variables
❯ env
```



## PROCEDURES

    # ❯ nv   # fuzzy search environment variables
    function nv()   # fuzzy search environment variables
    {
        if [[ $# -ne 0 ]]; then
            command env \
            | fzf \
                --multi \
                --query="$1" \
                --preview="cat {+f} | sed G" \
                --preview-window="50%:right:follow:hidden:wrap"
            return
        fi
        command env \
        | fzf \
            --multi \
            --preview="cat {+f} | sed G" \
            --preview-window="50%:right:follow:hidden:wrap"
    }


## SEE

    env(1)

## SEEALSO

    environ(7), printenv(1), environ(7), source, alias, declare, which(1)

