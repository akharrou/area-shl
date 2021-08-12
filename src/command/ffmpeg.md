---
status: TODO
title: "ffmpeg"
tags: [live,playback,video,audio,recorder,converter,previewer,visualizer,streamer,editor]
---

# `ffmpeg`

## BRIEF

Swiss knife tool for audio, and video, recording, streaming and manipulation.

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install ffmpeg
```



## PROCEDURES

    # ❯ mov2gif   # convert .mov to .gif
    function mov2gif() {
        if [[ $# < 1 ]]; then
            echo "movToGif <infile> <outfile>"
        else
            infile=$1
            outfile=$2
            ffmpeg -i $infile -pix_fmt rgb8 -r 30 $outfile
        fi
    }


## SEE

    ffmpeg(1)

## SEEALSO

    ffplay, ffprobe, vlc

## SEEFURTHER

- [🌎 Home](https://ffmpeg.org/)
- [🌎 Documentation](https://ffmpeg.org/documentation.html)
- [🌎 Repository](https://github.com/FFmpeg/FFmpeg)
