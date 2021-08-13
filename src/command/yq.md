---
status: TODO
title: "yq"
tags: [yaml,query,parser,processor]
---

# `yq`

## BRIEF

    ❯ yq eval SCRIPT [YAMLFILE|-] ... [FLAGS]

`-` says read from standard input.

Options:

    Input:
    --null-input (-n)   Don’t read input.

    Output:
    --tojson (-j)       output as json
    --no-doc (-N)       Don’t print document separators (---)
    --exit-status (-e)  set exit status to 1 if no matches, null, or false

    Action:
    --inplace (-i)      update the (first) yaml file inplace

    Style:
    -P, --prettyPrint   pretty print
    -I, --indent int    sets indent level for output (default 2)
    -C, --colors        force print with colors
    -M, --no-colors     force print with no colors

## INSTALLATION


```bash
#ℹ︎ installation of `yq`
❯ brew install yq
```


## USECASES

----
#### To convert/transform between `yaml` and `json` data files/standard-input:


```bash
#ℹ︎ convert/transform json data file/standard-input, into yaml
❯ yq --prettyPrint eval YQSCRIPT FILE.json
```



```bash
#ℹ︎ convert/transform yaml data file/standard-input, into json, compact as one line
❯ yq --prettyPrint --tojson --indent=0 eval YQSCRIPT FILE.yaml
```



## ALIASES

    alias yq="yq -PCI=2"
    # alias yq="yq \
    #     --prettyPrint \
    #     --colors \
    #     --indent=2 \
    #     eval \
    # "


## SEE

    yq -h

## SEEALSO

    jq(1)

## SEEFURTHER

- [🌎 Repository](https://mikefarah.gitbook.io/yq/)
