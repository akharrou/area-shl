---
status: TODO
title: "rlng"
tags: [R,programming,language]
---

# `rlng`

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install r
```



## PROCEDURES

    # ❯ rmdh <file>   # compile Rmarkdown files (`.rmd`) to self-contained HTML output
    function rmdh() {
        file=$1;
        Rscript -e "
        library(reticulate);
        library(knitr);
        knitr::opts_chunk\$set(
            echo = TRUE,
            include = TRUE,
            fig.align = 'center',
            out.width = '90%',
            error = TRUE,
            message = FALSE,
            warning = FALSE,
            size = 'small',
            tidy = FALSE
        );
        rmarkdown::render(
            input='$file',
            output_format='html_document',
            output_yaml='$HOME/.config/pandoc/meta/rconfig.yml'
        )"
    }

    # ❯ rmdh <file>   # compile Rmarkdown files (`.rmd`) to PDF output
    function rmdp() {
        file=$1;
        Rscript -e "
        library(reticulate);
        library(knitr);
        knitr::opts_chunk\$set(
            echo = TRUE,
            include = TRUE,
            fig.align = 'center',
            out.width = '90%',
            error = TRUE,
            message = FALSE,
            warning = FALSE,
            size = 'small',
            tidy = FALSE
        );
        rmarkdown::render(
            input='$file',
            output_format='pdf_document',
            output_yaml='$HOME/.config/pandoc/meta/rconfig.yml'
        )"
    }


## SEEFURTHER

- [🌎 Home](https://www.r-project.org/)
- [🌎 Documentation](https://cran.r-project.org/manuals.html)
