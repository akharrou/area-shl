---
status: INCOMPLETE
title: "pr"
tags: [convert,text,files,for,pagination,printing]
---

# `pr`

## INSTALLATION


```bash
#ℹ︎ installation of `pr`
❯ *comes pre-installed*
```


## USECASES

----
#### To print multiple files side by side:

    ❯ pr -l 120 -w 80


```bash
#ℹ︎ get/print/list files contents side by side comparasion
❯ pr -mt file1 file2
```



```bash
#ℹ︎ print process output side by side
❯ pr -mt <(ls dir1/) <(ls dir2/)
```



```bash
#ℹ︎ check difference of multiple process outputs
❯ diff <(ls dir1/) <(ls dir2/)
```



```bash
#ℹ︎ print/show/display memory bytes and text file side by side
❯ pr -mtw 160 <(hexdump -C /etc/hosts) <(cat /etc/hosts)
```



## SEE

    pr(1)

## SEEALSO

    join(1), paste(1), lam(1), printf(1)
    less(1), more(1), cat(1), bat(1)

