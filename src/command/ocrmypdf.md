---
status: INCOMPLETE
title: "ocrmypdf"
tags: [pdf,images,optical,character,recognition]
---

# `ocrmypdf`

## BRIEF

Options:

    --language LANG
    --image-dpi DPI
    --output-type OUTTYPE

>- `LANG` is one of: `[eng|ara|fra|deu]`, i.e english, arabic, french, deutch.
>- `OUTTYPE` is one of: `[pdfa|pdf|pdfa-1|pdfa-2|pdfa-3]`

## INSTALLATION


```bash
#ℹ︎ installation of `ocrmypdf`
❯ brew install ocrmypdf && brew install tesseract-lang
```


## USECASES

----
#### To OCR pdfs:

    ❯ ocrmypdf in.pdf out.pdf

----
#### To OCR images (at specific DPIs):

    ❯ ocrmypdf --image-dpi 100 in.jpeg out.pdf

----
#### To OCR languages: english, french and arabic:

    ❯ ocrmypdf -l eng+fra+ara in.pdf out.pdf

----
#### To OCR concatenated images:

    ❯ img2pdf img1.jpeg img2.png img3.tiff img4.jpg > tmp.pdf; ocr tmp.pdf out.pdf ; rm tmp.pdf

## RECIPES

----
#### Typical usage:

    ❯ ocrmypdf in.pdf out.pdf
    ❯ ocrmypdf --image-dpi 100 in.jpeg out.pdf
    ❯ ocrmypdf -l eng+fra+ara in.pdf out.pdf
    ❯ img2pdf img1.jpeg img2.png img3.tiff img4.jpg > tmp.pdf; ocr tmp.pdf out.pdf ; rm tmp.pdf


## ALIASES

    alias ocr="ocrmypdf -l eng+ara+fra"

## PROCEDURES

    function ocrmyimg()
    {
        ocrmypdf --image-dpi 100 "$1" img.pdf
    }


## BUGS

1. 🐞 Refusing to work on images with alpha channel fix: to remove alpha channel, convert it to another format:

    🔧  Run: `❯ convertformat in.png out.jpg; ocr out.jpf -o out.pdf`
    : <space>

## SEE

    ocrmypdf(1)

## SEEALSO

    tesseract, img2pdf

## SEEFURTHER

- [🌎 Documentation](https://ocrmypdf.readthedocs.io/en/latest/cookbook.html)
- [🌎 Repository](https://github.com/jbarlow83/OCRmyPDF)
