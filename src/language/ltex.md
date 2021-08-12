---
status: INCOMPLETE
title: "LaTeX"
tags: [document,typesetting,language]
---

# LaTeX

## GUIDES

----
#### To manually install extra packages:

Some packages cannot be installed via `tlmgr` (e.g. packages that aren’t part of "TeX Live"), and require that you install them manually.

1. Download the `zip` file from CTAN.
2. Unzip the file.
3. If not existant, create a `~/Library/texmf` (or `texmf-local`) directory.
4. Move unzipped package files in accordance with this table:

| Type   | Directory (under texmf/ or texmf-local/) | Description                                       |
| ------ | ---------------------------------------- | ------------------------------------------------- |
| .afm   | fonts/afm/foundry/typeface               | Adobe Font Metrics for Type 1 fonts               |
| .bib   | bibtex/bib/bibliography                  | BibTeX bibliography                               |
| .bst   | bibtex/bst/packagename                   | BibTeX style                                      |
| .cls   | tex/latex/base                           | Document class file                               |
| .dvi   | doc                                      | package documentation                             |
| .enc   | fonts/enc                                | Font encoding                                     |
| .fd    | tex/latex/mfnfss                         | Font Definition files for METAFONT fonts          |
| .fd    | tex/latex/psnfss                         | Font Definition files for PostScript Type 1 fonts |
| .map   | fonts/map                                | Font mapping files                                |
| .mf    | fonts/source/public/typeface             | METAFONT outline                                  |
| .pdf   | doc                                      | package documentation                             |
| .pfb   | fonts/type1/foundry/typeface             | PostScript Type 1 outline                         |
| .sty   | tex/latex/packagename                    | Style file: the normal package content            |
| .tex   | doc                                      | TeX source for package documentation              |
| .tex   | tex/plain/packagename                    | Plain TeX macro files                             |
| .tfm   | fonts/tfm/foundry/typeface               | TeX Font Metrics for METAFONT and Type 1 fonts    |
| .ttf   | fonts/truetype/foundry/typeface          | TrueType font                                     |
| .vf    | fonts/vf/foundry/typeface                | TeX virtual fonts                                 |
| others | tex/latex/packagename                    | other types of file unless instructed otherwise   |

(Source: https://en.wikibooks.org/wiki/LaTeX/Installing_Extra_Packages#Installing_a_package)


## VARIABLES

    export BIBLATEX="$CONFIG/biblatex"
    export BIBFILE="$CONFIG/biblatex/bib.bib"

## ALIASES

    # alias bib="cd $BIBLATEX"
    alias bibfile="$EDITOR $BIBFILE"
    alias tlmgrinfo="tlmgr info $@"
    alias tlmgrupdate="sudo tlmgr update --self --all --reinstall-forcibly-removed"
    # alias tex="texdoc"

## PROCEDURES

    function mylatexmk()
    {
        latexmk -pdf -dvi- $@ ; latexmk -c
    }


## PATHS

Path | Description
- | -
📂 `$HOME/Library/texmf/tex/latex/local/` | Directory containing manual package installations (for MacOS).

## SEEALSO

    tex(1), pdflatex(1), xelatex(1), latexmk(1), bibtex(1)
    tlmgr(1), texhash(1)

## SEEFURTHER

- [🌎 Home](https://www.latex-project.org/)
- [🌎 Documentation](https://en.wikibooks.org/wiki/LaTeX)
- [🌎 Repository](https://github.com/latex3/latex3)
