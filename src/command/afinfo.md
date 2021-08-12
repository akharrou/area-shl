---
status: DONE
title: "afinfo"
tags: [get,print,list,audio,sources,files,information]
---

# `afinfo`

## INSTALLATION


```bash
#ℹ︎ installation of `afinfo`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print audio sources files information:


```bash
#ℹ︎ get/print long audio sources files information
❯ afinfo --info FILE.mp3
```

    File:           FILE.mp3
    File type ID:   MPG3
    Num Tracks:     1
    ----
    Data format:     2 ch,  44100 Hz, ’.mp3’ (0x00000000) 0 bits/channel, 0 bytes/packet, 1152 frames/packet, 0 bytes/frame
                    no channel layout.
    estimated duration: 361.691400 sec
    audio bytes: 7233828
    audio packets: 13846
    bit rate: 160000 bits per second
    packet size upper bound: 1052
    maximum packet size: 523
    audio data file offset: 4096
    optimized
    audio 15947215 valid frames + 528 priming + 2849 remainder = 15950592
    Loudness Info:
        sound check info                 :
            sc ave perceived power coeff     : "878 856 "
            sc max perceived power coeff     : "18829 20501 "
            sc peak amplitude msec           : "241240 241240 "
            sc max perceived power msec      : "112927 207751 "
            sc peak amplitude                : "32380 31026 "


    sound check volume normalization gain: -1.00 dB
    info dictionary:
        genre                            : "GENRE"
        title                            : "FILE"
        album                            : "ALBUM"
        approximate duration in seconds  : "361.691"
        artist                           : "ARTIST"

    ----


```bash
#ℹ︎ get/print brief audio sources files information
❯ afinfo --brief FILE.mp3
```

    FILE.mp3, MPG3, Num Tracks:     1
    ----
    361.691 sec, format:   2 ch,  44100 Hz, ’.mp3’ (0x00000000) 0 bits/channel, 0 bytes/packet, 1152 frames/packet, 0 bytes/frame


```bash
#ℹ︎ get/print audio sources files information, as xml
❯ afinfo --xml FILE.mp3
```


## RECIPIES

----
#### To get individual pieces of audio sources files information:


```bash
#ℹ︎ get/print audio sources files bit rate
❯ afinfo FILE.mp3 | grep "bit rate"
```

    bit rate: 160000 bits per second


## SEE

    afinfo(1)
    afinfo -h

## SEEALSO

    afplay(1), afconvert(1), afhash(1), afida(1), sox(1)

