---
status: TODO
title: "quota"
tags: [get,print,display,list,disk,filesystem,usage,limits]
---

# `quota`

## INSTALLATION


```bash
#ℹ︎ installation of `quota`
❯ *comes pre-installed*
```


## USECASES

----
#### To


```bash
#ℹ︎ get/print/display/list user disk usage limits
❯ quota
```



## NOTES

Each of the following quota files is located at the root of the mounted filesystem.  The mount option files are empty files whose existence indicates that quotas are to be enabled for that filesystem. The binary data files will be created by quotacheck, if they don’t already exist.

    .quota.user       data file containing user quotas
    .quota.group      data file containing group quotas
    .quota.ops.user   mount option file used to enable user quotas
    .quota.ops.group  mount option file used to enable group quotas

## SEE

    quota(1)

## SEEALSO

    quotactl(2), quotacheck(8), repquota(8), edquota(8), quotaon(8), quotaoff(8), ulimit

