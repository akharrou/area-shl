---
status: TODO
title: "pandoc"
tags: [universal,swiss-army-knife,multi,general,markup,file,format,converter,transformer]
---

# `pandoc`

## BRIEF

Pandoc is a Haskell library for converting from one markup format to another, and a command-line tool that uses this library.

Pandoc can convert between numerous markup and word processing formats, including, but not limited to, various flavors of Markdown, HTML, LaTeX and Word docx.

## INSTALLATION


```bash
#ℹ︎ installation of `pandoc`
❯ brew install pandoc
```


## USECASES

----
#### To convert one format to another:

    ❯ pandoc INFILE.FROMFMT -o OUTFILE.TOFMT

>- `FROMFMT` is one of: `[bibtex|biblatex|commonmark|commonmark_x|creole|csljson|csv|docbook|docx|dokuwiki|epub|fb2|gfm|haddock|html|ipynb|jats|jira|json|latex|markdown|markdown_mmd|markdown_phpextra|markdown_strict|mediawiki|man|muse|native|odt|opml|org|rst|t2t|textile|tikiwiki|twiki|vimwiki]`
>- `TOFMT` is one of: `[asciidoc|beamer|bibtex|biblatex|commonmark|commonmark_x|context|csljson|docbook|docbook5|docx|dokuwiki|epub|epub2|fb2|gfm|haddock|html|html4|icml|ipynb|jats_archiving|jats_articleauthoring|jats_publishing|jats|jira|json|latex|man|markdown|markdown_mmd|markdown_phpextra|markdown_strict|mediawiki|ms|muse|native|odt|opml|opendocument|org|pdf|plain|pptx|rst|rtf|texinfo|textile|slideous|slidy|dzslides|revealjs|s5|tei|xwiki|zimwiki]`


## ALIASES

    alias pandoc="\
        pandoc \
            --defaults=$HOME/.config/pandoc/meta/defaults.yml \
            --citeproc \
    "


## ENVIRONMENT

Variable | Description
- | -

Citation syntax:

    @smith04 says blah.
    @smith04 [p. 33] says blah.
    Smith says blah [-@smith04].   # omit author name, due to e.g. context

    Lorem ipsum [see @doe99, pp. 33-35; also @smith04, chap. 1] dolore magna aliqua.
    Lorem ipsum [@doe99, pp. 33-35, 38-39 and *passim*] dolore magna aliqua.
    Lorem ipsum [@smith04; @doe99] dolore magna aliqua.

Locator terms:

| Term      | Abbrv.       |
| --------- | ------------ |
| book      | bk./bks.     |
| chapter   | chap./chaps. |
| column    | col./cols.   |
| figure    | fig./figs.   |
| folio     | fol./fols.   |
| number    | no./nos.     |
| line      | l./ll.       |
| note      | n./nn.       |
| opus      | op./opp.     |
| page      | p./pp.       |
| paragraph | para./paras. |
| part      | pt./pts.     |
| section   | sec./secs.   |
| sub verbo | s.v./s.vv.   |
| verse     | v./vv.       |
| volume    | vol./vols.   |
| ¶/¶¶      |              |
| §/§§      |              |

In the en-US locale, locator terms can be written in either singular or plural forms. If no locator term is used, “page” is assumed.

Quotations marks:

| Quote               | Desc.             |
| ------------------- | ----------------- |
| *“ some quote. ”*   | american (unique) |
| *‘ some quote. ’*   | american          |
| *„ some quote. “*   | german            |
| *‚ some quote. ’*   | german            |
| *« some quote. »*   | french  (unique)  |
| *‹ some quote. ›*   | french  (unique)  |
| *「 some quote. 」*  | chinese  (unique) |
| *﹂ some quote. ﹁*  | chinese  (unique) |

## SEE

    pandoc(1)

## SEEALSO

    convert(1), convertformat, pdf2htmlex, textutil(1)

## SEEFURTHER

- [🌎 Home](https://pandoc.org/)
- [🌎 Documentation](https://pandoc.org/MANUAL.html)
- [🌎 Repository](https://github.com/jgm/pandoc)
