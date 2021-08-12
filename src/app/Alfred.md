---
status: INCOMPLETE
title: "Alfred"
tags: [application,file,launcher]
---

# Alfred

## INSTALLATION


```bash
#ℹ︎ installation of `Alfred`
❯ brew install --cask Alfred
```


## RECIPES

----
#### To cache data files, and refresh them based on specified conditions:

    SOURCE=DATAFILE.json
    DIR=$HOME/.cache/alfred
    FILE=WORKFLOW-TRIGGER.json

    if [[ ! -r $DIR/$FILE
        || `/usr/bin/stat -f%m%n $SOURCE` != `/usr/bin/stat -f%m%n $DIR/$FILE` ]]
    then
        [[ ! -d $DIR ]] &&\
            mkdir -p $DIR/
        [[ ! -f $DIR/$FILE ]] &&\
            touch $DIR/$FILE

        <$SOURCE \
        /usr/local/bin/jq ’
        {
            items: .items | map({
                   title: …,
                subtitle: …,
                     arg: …
            })
        }’ \
        1>$DIR/$FILE

        touch -mr $SOURCE $DIR/$FILE
    fi

----
#### To fuzzy search JSON items list:

    ❯ <$DIR/$FILE \
    /usr/local/bin/jq --arg QUERY "$1" ’
    {
        items: .items | map(select(.title|test(
            $QUERY | split(" ") | map(select(. != "")) | . as $arr
            | reduce .[] as $word ( ".*"; .+"(\($arr|join("|"))).*" )
        ; "i")))
    }’ \
    | tee $HOME/.cache/FILE.json

With `tee` you’ll also save the output to the specified file.


## NOTES

- External programs need to have full path.
- By default, there is no `~/` expansion, and environment variables don’t exist.
- By default, path is very limited.

## SEEALSO

    Ulauncher, dmenu

## SEEFURTHER

- [🌎 Home](https://www.alfredapp.com/)
