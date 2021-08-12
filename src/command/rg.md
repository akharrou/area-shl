---
status: DONE
title: "rg"
tags: [regex,pcre,files,text,search,engine]
---

# `rg` (ripgrep)

## BRIEF

Recursively search the current directory for lines matching a pattern.

    ❯ rg [OPTIONS] -e PATTERN ... [PATH ...]
    ❯ rg [OPTIONS] -f PATTERNFILE ... [PATH ...]

## INSTALLATION


```bash
#ℹ︎ installation of `rg`
❯ brew install rg
```


## USECASES

----
#### To perform regular expression (ERE/PCRE) search/find operations across multiple files/directories:

Search types:

    --regexp (-e)               perform ERE or PCRE search
    --fixed-strings (-F)        perform fixed-literal-string search
    --file (-f)                 perform ERE or PCRE search, specified in file


```bash
#ℹ︎ search/find get/print/display regex line matches
❯ rg -e PCRE PATHS
```


```bash
#ℹ︎ search/find get/print/display literal string line matches
❯ rg -F STR PATHS
```


```bash
#ℹ︎ search/find matching regex pattern lines, from pattern files
❯ rg -f PATTERNFILES PATHS
```


Pattern features:

    --case-sensitive (-s)    enable case-sensitivity
    --ignore-case (-i)       enable case-insensitivity
    --smart-case (-S)        insensitivity if all lowercase, else sensitive
    --multiline (-U)         enable matching across multiple lines
    --invert-match (-v)      invert/inverse pattern
    --word-regexp (-w)       get only matches surrounded by word boundaries
    --line-regexp (-x)       get only matches surrounded by line boundaries

    ❯ rg --multiline -e PCRE
    ❯ rg --case-sensitive -e PCRE
    ❯ rg --ignore-case -e PCRE
    ❯ rg --smart-case -e PCRE
    ❯ rg -e PCRE --line-regexp
    ❯ rg -e PCRE --word-regexp
    ❯ rg -e PCRE --invert-match

Output features:

    --[no-]heading           print cluster/group file matches
    --[no|with]-filename     print match filename
    --[no-]line-number       print match line number
    --[no-]column            print match line column
    --byte-offset            print match byte offset

    --context                print N lines that come before & after match
    --before-context         print N lines that come after match
    --after-context          print N lines that come after match

    ❯ rg --with-filename --heading --line-number --column --byte-offset --context=2
    ❯ rg --no-filename --no-heading
    ❯ rg --before-context=2
    ❯ rg --after-context=2
    ❯ rg --context=2

Search features:

    --only-matching (-o)        get only matching part of matched lines
    --passthru                  get both matching and non-matching lines
    --files-with-matches (-l)   get only filenames with matches
    --files-without-matches     get only filenames without matches
    --count (-c)                get number of matched lines, for each file
    --count-matches             get total number of matches, for each file
    --files                     get would-be searched files
    --quiet                     get exit code (0=found-matches, 1=no-matches)

    ❯ rg -e PCRE --only-matching
    ❯ rg -e PCRE --passthru
    ❯ rg -e PCRE --files-with-matches
    ❯ rg -e PCRE --files-without-matches
    ❯ rg -e PCRE --count --include-zero
    ❯ rg -e PCRE --count-matches --include-zero
    ❯ rg -e PCRE --files
    ❯ rg -e PCRE --quiet

Pre-search filtering/actions:

1. Filter files by glob patterns:

        --glob=GLOB         include/exclude files, case-sensitively
        --iglob=GLOB        include/exclude files, case-insensitively

        ❯ rg --glob=’!*.pdf’ -e PCRE

2. Filter files by file types:

        --type=TYPE         only include files matching specified type globs
        --type-not=TYPE     exclude files matching specified type globs

        ❯ rg --type=web -e PCRE
        ❯ rg --type-not=sh -e PCRE
        ❯ rg --type-not=all

    See `rg --type-list` for all pre/user-defined types. Create/add-to types with `rg --type-add ’web:*.ts’`. Clear pre-defined type globs with `rg --type-clear web`.

3. Map files, and filter files:

        --pre-glob=GLOB     Filter files to be passed to `--pre` script
        --pre=SCRIPT        Perform script on files, search resulting output

        ❯ cat > pre-pdftotext
        #!/bin/sh
        pdftotext "$1" -
        ❯ rg --pre-glob="*.pdf" --pre=./pre-pdftotext

Post-search actions:

1. Replace output:

        --replace       replace match occurrences with specified text

        ❯ rg -e PCRE --replace REPL

2. [Reverse-]Sort output:

        --sort          sort results in ascending order
        --sortr         sort results in descending order

        ❯ rg -e PCRE --sort CRITERIA
        ❯ rg -e PCRE --sortr CRITERIA

    Sort criterias include:

        none       (Default) Do not sort results. Fastest. Multi-threadable.
        path       Sort by file path. Single-threaded.
        modified   Sort by the last modified time on a file. Single-threaded.
        accessed   Sort by the last accessed time on a file. Single-threaded.
        created    Sort by the creation time on a file. Single-threaded.

----
#### To dumb down `ripgrep`:


```bash
#ℹ︎ dumb-down ripgrep, disable all smart filtering
❯ rg -uuu -e PCRE PATHS
```


`--unrestricted` (`-u`) reduces the level of "smart" searching. A single `-u` won’t respect `.gitignore` (etc.) files (`--no-ignore`). Two `-u` flags will additionally search hidden files and directories (`-./--hidden`). Three `-u` flags will additionally search binary files (`--binary`). `rg -uuu` is roughly equivalent to `grep -r`.

----
#### To get/print/display regex search results as JSON formatted output:


```bash
#ℹ︎ search/find get/print/dislay regex line matches, as JSON output format
❯ rg --json -e PCRE
```


----
#### To get/print/display information about searches, `ripgrep`, and the PCRE:

    ❯ rg --stats PAT
    4 matches
    4 matched lines
    4 files contained matches
    2591 files searched
    163 bytes printed
    491031186 bytes searched
    0.183938 seconds spent searching
    0.109749 seconds

    ❯ rg --version; rg --pcre2-version
    ripgrep 13.0.0
    -SIMD -AVX (compiled)
    +SIMD +AVX (runtime)
    PCRE2 10.32 is available
    JIT is available

## RECIPIES

----
#### To search and replace:

    ❯ rg --no-line-number --only-matching --multiline \
        -e "    📂  (.+)\n {8}(.+)" --replace="$1: $2" brew.1
    /usr/local/Homebrew/: Homebrew git repository.
    /usr/local/Homebrew/Library/Homebrew/: Homebrew standard implementation…
    /usr/local/Homebrew/Library/Homebrew/: Homebrew standard implementation…
    /usr/local/Homebrew/Library/Taps/: Homebrew extention implementation…
    /usr/local/Homebrew/Library/Taps/: Homebrew extention implementation…
    /usr/local/Caskroom/: Directory containing (versioned) installations…
    /usr/local/Cellar/: Directory containing (versioned) installations…

    ❯ rg --no-config --pcre2 --no-column --no-filename --no-line-number --multiline --trim -e=’ {4}# (.+)\n {4}❯ (.+)’ --json \
    | jq --slurp --raw-output ’
    map(
            select( .type=="match" and .data.lines.text != null )
            | .data.lines.text
            | split("    ❯ ")
            | map( ltrimstr("    #") | rtrimstr("\n") )
            | "\(.[1])\(.[0])"
    ) | .[]’


## VARIABLES

    export RIPGREP_CONFIG_PATH="$CONFIG/ripgrep/config"

## PROCEDURES

    # ❯ funcs   # search all defined cheatsheet functions
    function funcs()   # search all defined cheatsheet functions
    {
        which $(rg --no-config --pcre2 --only-matching '    function .+' \
                | fzf \
                | cut -d '(' -f 1 \
                | cut -d ' ' -f 6)
    }

    # Search for all files that contain <pattern>
    function in()
    {
        local pattern="${1:-".+"}"

        rg \
            --no-config \
            --pcre2 \
            --ignore-case \
            --files-with-matches \
            "$pattern" \
            ${@:2} \
        | fzf \
            --preview 'bat --color=always {}'
    }

    # ❯ flct [PCRE]   # fuzzy search files --> [F]ilename.Ext:[L]ine:[T]ext
    function flct()   # fuzzy search files --> [F]ilename.Ext:[L]ine:[C]olumn:[T]ext
    {
        local pattern="${1:-".+"}"

        rg \
            --no-config \
            --pcre2 \
            --ignore-case \
            --line-number \
            --column \
            "$pattern" \
            ${@:2} \
        | fzf \
            --delimiter ":" \
            --preview "bat --highlight-line {2} {1}" \
            --preview-window "~3,+{2}+3/2"
    }

    # ❯ flc [PCRE]    # fuzzy search files --> [F]ilename.Ext:[L]ine:[C]olumn
    function flc()   # fuzzy search files --> [F]ilename.Ext:[L]ine:[C]olumn
    {
        local pattern="${1:-".+"}"

        rg \
            --no-config \
            --pcre2 \
            --ignore-case \
            --line-number \
            --column \
            "$pattern" \
            ${@:2} \
        | fzf \
            --delimiter=":" \
            --preview="bat --highlight-line {2} {1}" \
            --preview-window="~3,+{2}+3/2" \
            --bind='enter:execute(\
                echo {} \
                | cut -d: -f 1,2,3 \
            )+close+close'
    }

    # ❯ fl [PCRE]   # fuzzy search files --> [F]ilename.Ext:[L]ine
    function fl()   # fuzzy search files --> [F]ilename.Ext:[L]ine
    {
        local pattern="${1:-".+"}"

        rg \
            --no-config \
            --pcre2 \
            --ignore-case \
            --line-number \
            "$pattern" \
            ${@:2} \
        | fzf \
            --delimiter=":" \
            --preview="bat --highlight-line {2} {1}" \
            --preview-window="~3,+{2}+3/2" \
            --bind="alt-enter:execute(bat {1})" \
            --bind='enter:execute(\
                echo {} \
                | cut -d: -f 1,2 \
            )+close+close'

        local ret=$?
        return $ret
    }

    # ❯ fh [PCRE]     # fuzzy search files --> [F]ilename.Ext:#[H]eader
    function fh()   # fuzzy search files --> [F]ilename.Ext:#[H]eader
    {
        local pattern="${1:-"^#{1,6} .+$"}"
        local res=`
            rg --no-config -iP "$pattern" \
            | fzf --preview 'bat --color=always $(cut -d: -f1 <<< {})' \
        `
        local fileExt=`
            echo $res \
            | cut -d ":" -f 1 \
        `
        local fileHeader=`
            echo $res \
            | cut -d ":" -f 2 \
            | tr -d "\n" \
            | sed "s/#{1,6} //" \
            | tr "[:upper:][:punct:][:space:]" "[:lower:]--" \
        `
        echo "$fileExt#$fileHeader"
    }


    # == == == == == == == == == == == == == == == == == == == == == == == ==
    # == == == == == == == == == == == == == == == == == == == == == == == ==


    function kys()    # notes; To extract keywords of notes
    {
        rg --no-config --line-number --column --ignore-case --pcre2 --only-matching "\S(?<=keywords:) .+" | fzf
    }

    function uscs()    # notes; To extract usecases of notes
    {
        rg --no-config --line-number --column --ignore-case --pcre2 --only-matching "\S(?<=uscs:) \".+\"" | fzf
    }

    function sec()    # notes; To extract sections of notes
    {
        rg --no-config --line-number --column --ignore-case --pcre2 --only-matching "^#{1,6} .+$" | fzf
    }

    function exmpl()    # notes; To extract examples of notes
    {
        rg --no-config --line-number --column --ignore-case --pcre2 --only-matching "=== \".+\"$" | fzf
    }

    function abst()    # notes; To extract abstracts of notes
    {
        rg --no-config --line-number --column --ignore-case --pcre2 --only-matching "\S(?<=abstract:) .+" | fzf
    }

    function def()    # notes; To extract definition terms of notes
    {
        rg --no-config --line-number --column --pcre2 --only-matching --multiline '^[^<].+\n^: (.+)$' $(fd --type f '(nts|gst)') --json | jq '.data | select(.path.text!=null and .lines.text) | .path.text, .line_number, .lines.text' | sed -E 'N ; s/.md"\n/.md:/ ; N ; s/([0-9]+)\n/\1: / ; s/^"(.+)"$/\1/ ; s/([0-9]+): "/\1: ✏️  ?/ ; s/\\n//g ; s/\\"/"/g ; s/.+ ✏️/ ✏️/' | fzf
        # rg --no-config --line-number --column --pcre2 --only-matching --multiline --json '^.+\n^: (.+)$' "$(fd --type f '(nts|gst)')" | jq '.data | select(.path.text!=null and .lines.text) | .path.text, .line_number, .lines.text' | sed 's/\\\n//g;s/\"//g' | sed -E 'N;s/.md\n/.md:/g;N;s/([0-9]+)\n/\1:  🔖 ?/g' | fzf
        # rg --no-config --line-number --column --pcre2 --only-matching --multiline --json '^.+\n^: (.+)$' \$(fd --type f '(nts|gst)') | jq '.data | select(.path.text!=null and .lines.text) | .path.text, .lines.text' | sed 'N;s/\"\n\"/:  >/g' | sed 's/\\\n//g' | sed 's/\"//g' | fzf
    }

    function qt()    # notes; To extract informal quotes of notes
    {
        #rg --no-config --line-number --column --pcre2 --only-matching '.+“ .+ ”' | sed 's/- \*“/ “/;s/- \*\*/ @/g;s/\*\* \*“/: “/' | fzf
        rg --no-config --line-number --column --pcre2 --only-matching '“ .+ ”' | sed 's/- \*“/ “/;s/- \*\*/ @/g;s/\*\* \*“/: “/' | fzf
    }

    function ct()    # notes; To extract formal quotes of notes
    {
        rg --no-config --line-number --column --pcre2 --only-matching '\(.+ *«.+»' | sed 's/ \*«/: «/;s/(//;s/)//' | fzf
        # rg --no-config --pcre2 --only-matching "\(.+«.+»" | fzf
    }

    function bib()    # biliography; To extract bibliography citation keys from main bibliography file
    {
        cat $BIBFILE | fzf | cut -d '{' -f2 | cut -d ',' -f1 | tr -d '\n' | pbcopy && pbpaste && echo
        # rg --no-config --ignore-case --pcre2 --only-matching "\S(?<=refr:) \".+\"" | fzf
    }

    function extract-from-note()    # notes; To extract lessons of notes
    {
        rg --no-config --line-number --column --pcre2 --only-matching "\!$1: .+$" | sed -E "s/.+:\!$1: (.+)/$2 \1/" | fzf
    }

    les()
    {
        extract-from-note LESSON 💡
        # rg --no-config --line-number --column --pcre2 --only-matching '(?<= ) 💡 .+' | fzf
    }

    function mis()    # notes; To extract mistakes of notes
    {
        extract-from-note MISTAKE ❌
        # rg --no-config --line-number --column --pcre2 --only-matching '(?<=   ) ❌ .+' | fzf
    }

    function cor()    # notes; To extract corrections of notes
    {
        extract-from-note CORRECTION ✅
        # rg --no-config --line-number --column --pcre2 --only-matching '(?<=     ) ✅ .+' | fzf
    }

    function proc()    # notes; To extract procedures of notes
    {
        extract-from-note PROCEDURE 📋
        # rg --no-config --line-number --column --pcre2 --only-matching ' 📋 .+' | fzf
    }

    function ques()    # notes; To extract flashcard questions
    {
        rg --no-config --only-matching --pcre2 --multiline '(?<=!!!QUESTION <!--flashcard-->)$\n\n    .+$' | sed -E 's/.+:    (.+)/🔖 \1/;s/### //' | fzf
    }


## NOTES

- You can also use the special `--` delimiter to indicate that no more flags will be provided.

- The `--no-config` option can be used to ignore configuration files.

- Exit codes:

    - `0` exit status: at least one match was found, and no error occurred
    - `1` exit status: no match was found, and no error occurred
    - `2` exit status: error occurred

## SEE

    rg(1)

## SEEALSO

    grep(1), find(1), sed(1), awk(1), perl(1), sd(1), ag(1)

## SEEFURTHER

- [🌎 Repository](https://github.com/BurntSushi/ripgrep)
