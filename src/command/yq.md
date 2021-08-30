---
status: INCOMPLETE
title: "yq"
tags: [yaml,query,parser,processor]
---

# `yq`

## BRIEF

    ❯ yq eval SCRIPT [YAMLFILE|-] ... [FLAGS]

`-` means read from standard input.

Options:

    Input:
    --null-input (-n)   Don’t read input.

    Output:
    --tojson (-j)       Output as json
    --no-doc (-N)       Don’t print document separators (---)
    --exit-status (-e)  Set exit status to 1 if no matches, null, or false

    Action:
    --inplace (-i)      Update the (first) yaml file inplace

    Style:
    -M, --no-colors     Force print with no colors
    -P, --prettyPrint   Pretty print
    -C, --colors        Force print with colors
    -I, --indent int    Sets indent level for output (default 2)

## INSTALLATION


```bash
#ℹ︎ installation of `yq`
❯ brew install yq
```


## USECASES

----
#### To extract, and edit, `yaml` metadata header (e.g. Markdown files), optionally editing file in-place:


```bash
#ℹ︎ extract yaml metadata header
❯ yq --front-matter=extract eval YQSCRIPT <FILE>.md
```

    status: INCOMPLETE
    title: openssl

    ❯ yq --front-matter=process eval YQSCRIPT <FILE>.md  # edit/modify/change file yaml metadata header
    status: INCOMPLETE
    title: openssl
    ---

    # `openssl`
    .
    .
    .

Append the `--inplace` (`-i`) option, to enact change on file, by replacing the file with a new one with the desired edits. Doing it this way means that the original file birth/creation datetime is destroyed and the birth/creation of the new file takes over. Using utilities such as `sponge` equally destroys original birth/creation datetime.

To avoid destroying the original birth/creation datetime, use the `>` and/or `>>` operators instead, which truncates and writes to the file, or simply appends data, to the existing file. Also using `tee FILE` works, and preserves original birth/creation datetime.

If overwriting a file, i.e using `>`, you cannot read the file and write to it in one command or pipeline. To achieve desired result with POSIX toolchest, you need to use a temporary file:

    ❯ yq --front-matter=process eval YQSCRIPT <FILE>.md > <FILE>.md~; cat <FILE>.md~ > <FILE>.md && rm <FILE>.md~  # edit/modify/change file yaml metadata header, preserve birth/creation datetime

----
#### To convert/transform between `yaml` and `json` data files/standard-input:


```bash
#ℹ︎ convert/transform json data file/standard-input, into yaml
❯ yq --prettyPrint eval YQSCRIPT <FILE>.json
```



```bash
#ℹ︎ convert/transform yaml data file/standard-input, into json, compact as one line
❯ yq --prettyPrint --tojson --indent=0 eval YQSCRIPT <FILE>.yaml
```



## ALIASES

    # alias yq="yq -PCI=2"


## SEE

    yq -h

## SEEALSO

    jq(1)

## SEEFURTHER

- [🌎 Repository](https://mikefarah.gitbook.io/yq/)
