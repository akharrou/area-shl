---
status: INCOMPLETE
title: "screencapture"
tags: [save,capture,screen,window,monitor,rectangle,frame,area,screenshots,photos,images,videos,recordings,files]
---

# `screencapture`

## INSTALLATION


```bash
#ℹ︎ installation of `screencapture`
❯ *comes pre-installed*
```


## USECASES

----
#### To capture screenshots and screen-recordings of selected windows and areas:


```bash
#ℹ︎ default/normal screenshot capture
❯ screencapture -pit jpg
```



```bash
#ℹ︎ default/normal video screen capture
❯ screencapture -pv
```



```bash
#ℹ︎ screenshot capture interactively, via dashboard
❯ screencapture -Ui
```



```bash
#ℹ︎ delayed screenshot capture (specified in seconds)
❯ screencapture -t jpg -p -T3
```



```bash
#ℹ︎ screenshot capture specified rectangle framed area
❯ screencapture -t jpg -pR 435,36,1691,1035
```



```bash
#ℹ︎ screenshot capture window interactively
❯ screencapture -t jpg -pw
```



```bash
#ℹ︎ screenshot capture interactively selected area, preview/edit output image result
❯ screencapture -t jpg -iP
```



```bash
#ℹ︎ screenshot capture interactively selected area, save to file
❯ screencapture -t jpg -i DST
```



```bash
#ℹ︎ screenshot capture interactively selected area, save to clipboard
❯ screencapture -t jpg -ci
```



```bash
#ℹ︎ screenshot capture of main desktop monitor display (1), save to clipboard
❯ screencapture -t jpg -cm
```



```bash
#ℹ︎ screenshot capture of specified desktop monitor display, save to clipboard
❯ screencapture -t jpg -cD1
```


## RECIPES

----
#### To perform optical character recognition (OCR) on screen-captured images:


```bash
#ℹ︎ perform/do/run optical character recognition (OCR) screenshot captured images
❯ file=`mktemp -u $TMPDIR/screencapture.jpg.XXXXXX` && screencapture -t jpg -i $file && convert -background white -alpha remove -alpha off -colorspace gray -fill white -resize 480% -sharpen 0x1 $file $file && tesseract --dpi 100 $file stdout | tr -d \\f | pbcopy
```


----
#### Miscellaneous:

    ❯ screencapture -t jpg -i `mktemp -u $TMPDIR/screencapture.png.XXXXXX`   # screenshot capture interactively selected area, save to temporary file


## NOTES

You can change the default location that `screencapture` saves result via:

    ❯ defaults write com.apple.screencapture location PATH

## SHORTCUTS

Key | Action
- | -
++cmd+shift+1++ | Screenshot capture interactively selected rectangular area, save to clipboard.
++cmd+shift+2++ | Screenshot capture interactively selected rectangular area, perform OCR on image, save text to clipboard.
++cmd+shift+3++ | Screenshot capture all monitor displays.
++cmd+shift+4++ | Screenshot capture interactively selected rectangular area, save to set application location.
++cmd+shift+5++ | Bring up `screencapture` dashboard.

## SEE

    screencapture(1)

## SEEALSO

    convert(1), tesseract(1)

