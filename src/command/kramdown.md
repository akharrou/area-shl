---
status: DONE
title: "kramdown-rfc2629"
tags: [converts,formats,processes,markdown,to,rfc,style,document]
---

# `kramdown-rfc2629`

## INSTALLATION


```bash
#ℹ︎ installation of `kramdown-rfc2629`
❯ gem install kramdown-rfc2629
```


## USECASES

----
#### To convert markdown to RFC style `.xml`, `.txt`, `.html`, and `.pdf` file formats:


```bash
#ℹ︎ convert markdown source file and make RFC style xml, text, html, and pdf documents
❯ kramdown-rfc2629 --verbose --v3 FILE.md >FILE.rfc3.xml && xml2rfc --verbose --table-borders=full --no-pagination --v3 --text --html FILE.rfc3.xml
```



```bash
#ℹ︎ convert markdown source file and make RFC style xml, text, html, and pdf documents
❯ kdrfc FILE.md
```



## PROCEDURES

    rfc()
    {
        [[ $# < 1 ]] && echo "usage: $0 [FILE ...]" && return

        local infile=$1
        local filename=${infile%.*}

        kramdown-rfc2629 --v3 \
            --verbose \
            ${filename}.md \
            >${filename}.rfc3.xml \
        && xml2rfc --v3 \
            --verbose \
            --table-borders=full \
            --no-pagination \
            \
            --text \
            --html \
            --pdf \
            ${filename}.rfc3.xml

        # && kramdown-rfc2629 \
        #     --no-v3 \
        #     ${filename}.md \
        #     >${filename}.rfc2.xml
        # && xml2rfc \
        #     --verbose \
        #     --v2 \
        #     --nroff \
        #     ${filename}.rfc2.xml
    }


## SEE

    kramdown-rfc2629 -h

## SEEALSO

    kdrfc, xml2rfc, mmark

## SEEFURTHER

- [🌎 Home](https://kramdown.gettalong.org/)
- [🌎 Repository](https://github.com/cabo/kramdown-rfc2629)
