---
status: INCOMPLETE
title: "img2pdf"
tags: [losslessly,convert,raster,images,to,pdf]
---

# `img2pdf`

## INSTALLATION


```bash
#ℹ︎ installation of `img2pdf`
❯ pip install img2pdf
```


## USECASES

----
#### To convert/transform/concatenage images to PDF:


```bash
#ℹ︎ convert/transform/concatenage images to pdf
❯ img2pdf IMG.FMT ... -o OUTFILE.pdf
```


>- `FMT` is one of: `[ png | jpg | jpeg | tiff ]`
>- after converting images to PDF, you can transform the writing inside it to selectable text by running OCR software on it (e.g. `ocrmypdf`)


## BUGS

1. 🐞 Refusing to work on images with alpha channel

    🔧 Solution #1
    : <space>

        1. Run:

            ```
            ❯ convertformat in.png out.jpg
            ❯ ocr out.jpf -o out.pdf
            ```

## SEE

    img2pdf -h

## SEEALSO

    ocrmypdf, tesseract, magick(1), convert(1), convertformat

## SEEFURTHER

- [🌎 Repository](https://gitlab.mister-muffin.de/josch/img2pdf)
