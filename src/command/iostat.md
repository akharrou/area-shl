---
status: INCOMPLETE
title: "iostat"
tags: [get,print,display,report,continuous,disks,cpu,input,output,io,statistics,information,stream,snapshots]
---

# `iostat`

## INSTALLATION


```bash
#ℹ︎ installation of `iostat`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print/display input/output (i/o) statistics information snapshots:


```bash
#ℹ︎ get/print/display disk devices input/output (i/o) statistics information snapshots, a specified number of times (two)
❯ iostat -w1 -c2 disk0 disk2
```

                  disk0               disk2       cpu    load average
        KB/t  tps  MB/s     KB/t  tps  MB/s  us sy id   1m   5m   15m
       17.78   27  0.47    33.96    0  0.00   4  2 93  1.79 1.87 1.83
       20.00    3  0.06     0.00    0  0.00   3  2 94  1.79 1.87 1.83


```bash
#ℹ︎ get/print/display disk devices input/output (i/o) statistics information snapshots, ad-infinitum/indefinetly
❯ iostat -w3
```

                  disk0               disk2       cpu    load average
        KB/t  tps  MB/s     KB/t  tps  MB/s  us sy id   1m   5m   15m
       17.78   27  0.47    33.96    0  0.00   4  2 93  1.58 1.82 1.82
       15.43   12  0.18     0.00    0  0.00   4  2 94  1.54 1.81 1.81
        7.88   32  0.25     0.00    0  0.00   3  2 95  1.57 1.81 1.81
    .
    .
    .
    ^C


## SEE

    iostat(1)

## SEEALSO

    netstat(1), nfsstat(1), ps(1), top(1), vm_stat(1)

