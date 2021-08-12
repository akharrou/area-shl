---
status: TODO
title: "diskutil"
tags: [manipulate,modify,verify,repair,local,disks]
---

# `diskutil`

## INSTALLATION


```bash
#ℹ︎ installation of `diskutil`
❯ *comes pre-installed*
```


## USECASES

----
#### To manage local disks:


```bash
#ℹ︎ eject local volume harddrive disk
❯ diskutil eject VOLUME
```


----
#### To list disk drives:


```bash
#ℹ︎ get/print/list all local disk drives
❯ diskutil list
```

    /dev/disk0 (internal, physical):
       #:                       TYPE NAME                    SIZE     IDENTIFIER
       0:      GUID_partition_scheme                        *1.0 TB   disk0
       1:                        EFI EFI                     314.6 MB disk0s1
       2:                 Apple_APFS Container disk1         1.0 TB   disk0s2

    /dev/disk1 (synthesized):
       #:                       TYPE NAME                    SIZE     IDENTIFIER
       0:      APFS Container Scheme -                      +1.0 TB   disk1
                                     Physical Store disk0s2
       1:                APFS Volume Macintosh HD            15.3 GB  disk1s1
       2:              APFS Snapshot com.apple.os.update-... 15.3 GB  disk1s1s1
       3:                APFS Volume Macintosh HD - Data     338.7 GB disk1s2
       4:                APFS Volume Preboot                 430.4 MB disk1s3
       5:                APFS Volume Recovery                622.9 MB disk1s4
       6:                APFS Volume VM                      1.1 GB   disk1s5

    /dev/disk2 (external, physical):
       #:                       TYPE NAME                    SIZE     IDENTIFIER
       0:     FDisk_partition_scheme                        *1.0 TB   disk2
       1:                 DOS_FAT_32 __HDD__                 1.0 TB   disk2s1


```bash
#ℹ︎ get/print/list local disk drives, in preference list format
❯ diskutil list -plist
```


```bash
#ℹ︎ get/print/list specified local disk drives
❯ diskutil list internal physical
```


```bash
#ℹ︎ get/print/list specified local disk drives
❯ diskutil list internal virtual
```


```bash
#ℹ︎ get/print/list specified local disk drives
❯ diskutil list external physical
```


```bash
#ℹ︎ get/print/list specified local disk drives
❯ diskutil list external virtual
```


----
#### To get information on local disk drives:

    ❯ diskutil info DEVICE
    Device Identifier:    disk2
    Device Node:          /dev/disk2
    Whole:                Yes
    Part of Whole:        disk2
    Device / Media Name:  Transcend

    Volume Name:          Not applicable (no file system)
    Mounted:              Not applicable (no file system)
    File System:          None

    Content (IOContent):  FDisk_partition_scheme
    OS Can Be Installed:  No
    Media Type:           Generic
    Protocol:             USB
    SMART Status:         Not Supported

    Disk Size:            1.0 TB (1000204886016 Bytes) (exactly 1953525168 512-Byte-Units)
    Device Block Size:    512 Bytes

    Media OS Use Only:    No
    Media Read-Only:      No
    Volume Read-Only:     Not applicable (no file system)

    Device Location:      External
    Removable Media:      Fixed

    Solid State:          Info not available
    Virtual:              No


## SEE

    diskutil(1)

## SEEALSO

    hdiutil(1), mount(8)

