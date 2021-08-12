---
status: TODO
title: "tmutil"
tags: [manipulate,manage,control,time,machine,create,list,delete,disk,mount,backups,snapshots]
---

# `tmutil`

## INSTALLATION


```bash
#ℹ︎ installation of `tmutil`
❯ *comes pre-installed*
```


## USECASES

----
#### To


```bash
#ℹ︎ get/print/display list of local saved disk/mount snapshots/states
❯ tmutil listlocalsnapshots MOUNTPATH
```



```bash
#ℹ︎ delete/remove/erase local saved disk/mount snapshot/state
❯ tmutil deletelocalsnapshots SNAPSHOTDATE
```



```bash
#ℹ︎ create/make new local snapshot
❯ tmutil localsnapshot
```


## RECIPES

----
#### To restore computer from local snapshots:

    # Restore a couple of files

        1. Nagivate to:

            ➤ Spotlight
                ➤ Time Machine
                    ➤ Locate Files
                        ➤ *select file to restore*

    # Restore more than a few files, but keep system files intact

        1. Nagivate to:

            ➤ Spotlight
                ➤ Migrate Assistant
                    ➤ Select Backup

    # Full restore

        1. Reboot system with `cmd+r`
        2. Nagivate to:

            ➤ macOS Utilities
                ➤ Restore From Time Machine Backup
                    ➤ Macintosh HD
                        ➤ *select Local Snapshot*

        3. Reboot from local snapshot


## SEE

    tmutil(1)

## SEEALSO

    rsync(1)


# VIDEOS
#
# - [How to back up your Mac with Time Machine — Apple Support](https://www.youtube.com/watch?v=geJiTXOb37w)
# - [How to restore files from a Time Machine back up — Apple Support](https://www.youtube.com/watch?v=jZmJFbjvKUw)
