---
status: DONE
title: "convertformat"
tags: [cli,convert,image,file,formats]
---

# `convertformat`

## SYNTAX

    ❯ convertformat FILEIN FILEOUT [FORMAT]

## BRIEF

Either specify a format from one of these: BMP, JPEG, PNG, TIFF, TIFFG4, PNM, GIF, WEBP, JP2. Or specify the extensions to the output file: bmp, jpg, png, tif, pnm, gif, webp, jp2.

## INSTALLATION


```bash
#ℹ︎ installation of `convertformat`
❯ *comes pre-installed*
```


## USECASES

----
#### To convert image file formats:


```bash
#ℹ︎ convert jpeg format images to png images
❯ convertformat in.jpeg out.png
```


Format can be inferred from file extension.


## SEE

    convertformat -h

## SEEALSO

    ffmpeg(1)

