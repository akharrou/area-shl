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
#### To optically recognize characters of specified PDFs:


```bash
#ℹ︎ recognize PDF characters
❯ ocrmypdf INFILE.pdf OUTFILE.pdf
```



```bash
#ℹ︎ recognize PDF characters, at specific image dots per inch
❯ ocrmypdf --image-dpi DPINUM IMAGE OUTFILE.pdf
```



```bash
#ℹ︎ recognize PDF characters, of specified language
❯ ocrmypdf --language eng+fra+ara INFILE.pdf OUTFILE.pdf
```


----
#### To OCR concatenated images:

    ❯ img2pdf IMAGE.[jpg|png|tiff] > INFILE.pdf; ocrmypdf INFILE.pdf OUTFILE.pdf ; rm INFILE.pdf

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
