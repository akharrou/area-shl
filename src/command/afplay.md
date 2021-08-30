---
status: DONE
title: "afplay"
tags: [output,play,audio,file,sound,music,tone,alert]
---

# `afplay`

## INSTALLATION


```bash
#ℹ︎ installation of `afplay`
❯ *comes pre-installed*
```


## USECASES

----
#### To play an audio file to the default audio output:


```bash
#ℹ︎ run/output/play music/tone/alert sound audio file
❯ afplay /System/Library/Sound/Hero.aiff
```



```bash
#ℹ︎ run/output/play music/tone/alert sound audio file, at specified playback speed rate, for specified time duration (in seconds)
❯ afplay --debug --rate 2.5 --time 5 <FILE>.mp3
```

    Playing file: FILE.mp3
    Playing format: AudioStreamBasicDescription:  2 ch,  44100 Hz, ’.mp3’ (0x00000000) 0 bits/channel, 0 bytes/packet, 1152 frames/packet, 0 bytes/frame
    Buffer Byte Size: 20135, Num Packets to Read: 19
    Enable rate-scaled playback (rate = 2.50) using Time Domain algorithm


## PATHS

Path | Description
- | -
`/System/Library/Sound/` | Directory containing macOS system sound files.
`/System/Library/PrivateFrameworks/ScreenReader.framework/Versions/A/Resources/Sounds/` | Directory containing more macOS system sound files.

## SEE

    afplay(1)
    afplay -h

## SEEALSO

    afinfo(1), afconvert(1), afhash(1), afida(1)
    sox(1), play(1)

