---
status: INCOMPLETE
title: "gs"
tags: [postscript,language,files,interpreter]
---

# Ghostscript (`gs`)

## BRIEF

*PostScript* (PS) is an interpreted, stack-based, dynamically-typed, reverse Polish notation, Turing complete programming language. It is a page description language (PDL), i.e it is designed to draw things on [physical paper] pages.

Here’s a "Hello world!" program:

```ps
%!PS-Adobe-2.0       % announce version of Adobe PostScript
                     % that file is compliant with
/Courier             % name the desired font
20 selectfont        % choose the size in points and establish
                     % the font as the current one
72 500 moveto        % position the current point at
                     % coordinates x=72, y=500 (the origin is at the
                     % lower-left corner of the page)
(Hello world!) show  % stroke the text in parentheses
showpage             % print all on the page
```

Also worthy of mention is, *Printer Command Language*, more commonly referred to as PCL, a page description language developed by Hewlett-Packard as a printer protocol and has become a de facto industry standard. PCL 6 Enhanced is a stack-based, object-oriented protocol, similar to PostScript. However, it is restricted to binary encoding as opposed to PostScript, which can be sent either as binary code or as plain text.

## INSTALLATION


```bash
#ℹ︎ installation of `ghostscript`
❯ brew install ghostscript
```


## USECASES

----
#### To


```bash
#ℹ︎ interpret/run/process postscript file/document
❯ gs <FILE>.ps
```



```bash
#ℹ︎ open/view/display postscript file/document
❯ /System/Applications/Preview.app/Contents/MacOS/Preview <FILE>.ps
```


It is also possible to convert PostScript files to PDF using `ps2pdf`.


## NOTES

There exists a frontend that displays a preview of postscript files called Ghostview (`gv`).

## SEE

    gs(1)

## SEEALSO

    pdf2ps(1), pdflatex(1)

## SEEFURTHER

- [🌎 Home](https://www.ghostscript.com/)
- [🌎 Page: Ghostview (`gv`)](http://pages.cs.wisc.edu/~ghost/gv/)
