---
status: INCOMPLETE
title: "sox"
tags: [play,record,manipulate,audio,files,player]
---

# `sox`, `play` & `rec`

## BRIEF

Sound eXchange (SoX), the "Swiss Army knife" of audio manipulation. Consists of three commands: (1) `sox`, (2) `play`, (3) `rec`.

## INSTALLATION


```bash
#ℹ︎ installation of `sox`, `play`, `rec`
❯ brew install sox
```


# USECASES

----
#### To play an audio file:


```bash
#ℹ︎ run/output/play music/tone/alert sound audio file
❯ play /System/Library/Sounds/Glass.aiff
```

    /System/Library/Sounds/Glass.aiff:

    File Size: 475k      Bit Rate: 2.30M
      Encoding: Signed PCM
      Channels: 2 @ 24-bit
    Samplerate: 48000Hz
    Replaygain: off
      Duration: 00:00:01.65

    In:100%  00:00:01.65 [00:00:00.00] Out:79.2k [|]        Clip:0
    Done.


## PATHS

Path | Description
- | -
📂 `/System/Library/Sound/` | Directory containing macOS system sound files.
📂 `/System/Library/PrivateFrameworks/ScreenReader.framework/Versions/A/Resources/Sounds/` | Directory containing more macOS system sound files.

## SEE

    sox(1), play(1), rec(1)

## SEEALSO

    afplay(1)

## SEEFURTHER

- [🌎 Home](http://sox.sourceforge.net/)
- [🌎 Documentation](http://sox.sourceforge.net/Docs/Documentation)
- [🌎 Repository](https://github.com/chirlu/sox)
