---
status: INCOMPLETE
title: "jq"
tags: [parser,processor,filter,reformatter,manipulate,json]
---

# Json-Query (`jq`)

## BRIEF

    ❯ jq [OPTIONS] JQSCRIPT [DATAFILE ...]
	❯ jq [OPTIONS] --args JQSCRIPT [DATASTRINGS ...]
	❯ jq [OPTIONS] --jsonargs JQSCRIPT [DATAJSON ...]
    ❯ jq [OPTIONS] --null-script --from-file JQSCRIPTFILE

Options (switches):

    Mode:
    --from-file (-f)          read `jq` script from file
    -L DIR                    search and import `.jq` scripts found in DIR

    Input:
    --raw-input (-R)          consider each input line as a JSON string
    --slurp (-s)              read input as array
    --null-input (-n)         ignore input

    Preset Variables:
    --argjson VAR VAL         set $VAR to json VAL
    --arg VAR VAL             set $VAR to string VAL
    --slurpfile VAR FILE      set $VAR to array from FILE json lines
    --rawfile VAR FILE        set $VAR to string from FILE
    --jsonargs                args after script are json stored in `$ARGS`
    --args                    args after script are strings stored in `$ARGS`

    Output:
    --sort-keys (-S)          sort keys on output
    --join-output (-j)        omit newline between output lines
    --compact-output (-c)     compact output, instead of pretty formatted
    --raw-output (-r)         produce raw string output, instead of JSON
    --exit-status (-e)        set exit status based on output (false|null=1)
    --unbuffered (-r)         produce raw string output, instead of JSON

    Style:
    --monochrome-output (-M)  uncolored output
    --ascii-output (-a)       colored output
    --color-output (-C)       colored output
    --tab                     indent using tabs
    --indent N                indent using N spaces

## INSTALLATION


```bash
#ℹ︎ installation of `jq`
❯ brew install jq
```


## USECASES

----
#### To


```bash
#ℹ︎ get/print/display formatted colorized JSON
❯ EXPR | jq
```


----
#### To execute `jq` script from file:

    ❯ cat > jqscript.jq
    #!/usr/bin/env jq -f
    .
    ❯ ./jqscript.jq data.json

This works because the kernel will pass the name of the script (`$0`) as first argument to the shebang command. `jq` scripts can only use switches (options) that require no arguments (e.g. -sraf).

    ❯ jq --from-file jqscript.jq data.json

----
#### To get information about `jq`:


```bash
#ℹ︎ get/print/display list of all builtin filters/functions
❯ jq -n builtins
```


```bash
#ℹ︎ get/print/display information about jq
❯ jq --version
```


## RECIPIES

    ❯ <playlist-NAME.json jq ’.items | map({ channel: .snippet.videoOwnerChannelTitle, title:.snippet.title, id: "https://www.youtube.com/watch?v=\(.snippet.resourceId.videoId)" })’ | bat   # process google youtube data api call of playlist videos

----
#### To turn a space separated word query into a fuzzy regex search:

     Input: "smart notes"

    Script: split(" ") | map(select(. != "")) | . as $arr | length as $len | []
            | until( length == $len; [.[], "(\($arr|join("|")))"]) | join(".*")
            | ".*\(.).*"

    Script: split(" ") | map(select(. != "")) | . as $arr
            | reduce .[] as $word ( ".*"; .+"(\($arr|join("|"))).*" )

    Output: ".*(smart|notes).*(smart|notes).*"

For use with, e.g.:

    ❯ <$DIR/$FILE \
    /usr/local/bin/jq --arg QUERY "$1" ’
    {
        items: .items | map(select(.title|test(
            $QUERY | split(" ") | map(select(. != "")) | . as $arr
            | reduce .[] as $word ( ".*"; .+"(\($arr|join("|"))).*" )
        ; "i")))
    }’ | tee $HOME/.cache/alfred.out


## VARIABLES

    # Order: null, false, true, numbers, strings, arrays, objects
    # Format: <ansi-style>;<ansi-color>
    export JQ_COLORS="${ANSI_DIM};${ANSI_8_FG_WHITE}:${ANSI_BOLD};${ANSI_8_FG_YELLOW}:${ANSI_BOLD};${ANSI_8_FG_YELLOW}:${ANSI_RESET};${ANSI_8_FG_WHITE}"

## ALIASES

    alias jq="jq -L $CONFIG/jq/libjq"


## NOTES

**CONTENTS**:

- *1. Types*
- *2. Basic Operators*
- *3. Basic Filters*
- *4. Basic Functions*
- *5. Regular Expressions*
- *6. Dates*
- *7. Basic Control Flow*
- *8. User-Defined Variables*
- *9. User-defined Functions*
- *10. Abstract functions*
- *11. I/O Facilities*
- *12. Output Formatters/Escapers*
- *13. SQL-Style Operators*
- *14. Streaming*
- *15. Modules/Libraries*

### Types

1. Null: `null`
2. Boolean: `[true|false]`
3. Numbers: `[:digit:]*`
4. Strings: `"[:print:]*"`
5. Arrays: `[Item,…]`
6. Objects: `{Key:Value,…}`

>- Numbers are 64-bit floating points.
>- `Item` is a value of any type.
>- `Key` is a symbol consisting of a series of characters.
>- `Value` is a value of any type.

### Basic Operators

    Operator                    Associativity
    --------------------------  ---------------------
    (...)                       n/a
    \                           right
    ,                           left
    //                          right
    = |= += -= *= /= %= //=     nonassoc
    or                          left
    and                         left
    == != < > <= >=             nonassoc
    + -                         left
    * / %                       left
    -                           none
    ?                           none
    ?//                         nonassoc

    Input: [2, 4, 6, 8]
    Script: [.[] + 2], [.[] - 2], [.[] * 2], [.[] / 2], [.[] % 2]
    Output: [4,6,8,10], [0,2,4,6], [4,8,12,16], [1,2,3,4], [0,0,0,0]

     Input: {name:"John",last:"Doe"}
    Script: .name |= "James"
    Output: {"name":"James","last":"Doe"}

    Script: null and 1, null or 1, (1 | not)
    Output: false, true, false

    Script: 1 == 0, 1 != 0, 1 > 0, 1 < 0, 1 <= 0, 1 >= 0
    Output: false, true, true, false, false, true

     Input: { bar: 2 }
    Script: .foo, .foo // 1, .bar // 3
    Output: null, 1, 2

     Input: {a:1,b:2,c:3}
    Script: .a = (.a+1) | .b|=.+1 | .c += 1
    Output: {"a":2,"b":3,"c":4}

>- `=` (plain assignment) doesn’t pass through the current field value to the RHS, so `.` represents `{a:1,b:2,c:3}`.
>- `|=` (update assignment) does pass through the current field to the RHS, so `.` represents the field `.b`, i.e `2`.
>- All assignments act as the plain assignment, in that they do not pass through the current field value to the RHS.

### Basic Filters

Every `jq` epxression is a filter.

    Program:
    STDIN --> jq FILTER --> STDOUT

    Pipeline:
    INPUT --> FILTER(1) | FILTER(2) --> OUTPUT

    Lists:
    INPUT --> FILTER(1), FILTER(2) --> OUTPUT

`jq` actually passes around these amorphous lists between filters, and acts upon each item, a map of sorts. `jq` effectively processes lists of JSON elements and outputs lists of JSON elements, in parallel. E.g.:

     Input:
    Script: 82, 23, 41
    Output: 82, 23, 41

     Input: 82, 23, 41
    Script: . + 1
    Output: 83, 24, 42

     Input: 5
    Script: . * 2, . + 3, . / 5
    Output: 10, 8, 1

#### Identity: `.`

     Input: null, true, false, 23, [1,2], {"k":"v"}
    Script: .
    Output: null, true, false, 23, [1,2], {"k":"v"}

#### Filter Seperator: `… , …`

    Syntax: F1, F2, …

     Input: null, true, false, 23, [1,2,3], {a:1,b:2,c:3}
    Script: .[]?
    Output: 1, 2, 3, 1, 2, 3

#### Filter Combiner: `… | …`

    Syntax: F1 | F2

     Input:
    Script: 1 | .
    Output: 1

#### Filter Grouper: `(…)`

    Syntax: (F1.1 | F1.2)

     Input: { "a": 99 }
    Script: { "a": (.a+1) }
    Output: { "a": 100 }

     Input:
    Script: { ("a"+(1|tostring)): 59 }
    Output: { "a1": 59 }

>- Without the parenthesis `.a+1`, and `"a"+1|tostring`, would cause `jq` to throw an error.

#### Constructors

    Syntax:
        CONSTANT   constant constructor
        […]        array constructor
        {…}        object constructor

     Input:
    Script: 1,"2",[3,"4",[5],{k:6}],{k1:7,k2:"8",k3:[9,"10"],k4:{k41:11}}
    Output: 1,"2",[3,"4",[5],{k:6}],{k1:7,k2:"8",k3:[9,"10"],k4:{k41:11}}

     Input: {"name": "John", "last": "Doe", "age": 12 }
    Script: .name,.last,.age, [.name,.last,.age], {name,lname:.last,age:23}
    Output: "John", "Doe", 12, ["John", "Doe", 12], {"name":"John","lname":"Doe","age":23}

     Input: { a:1, b:2, c:3, d:4, e:[5.1,5.2] }
    Script: { a, b, c, e:.e[], f:(.d+2) } | .b |= tostring | .g = 7 | del(.c)
    Output: {a:1,b:"2",e:5.1,f:6,g:7}, {a:1,b:"2",e:5.2,f:6,g:7}

>- `.a` is unchanged, `.d` is omitted/dropped, `.f` is added and assigned the value of `.d+2`, `.b` is re-assigned, `.g` is added, `.c` is deleted, and `.e` expands and results in two objects, each with a value from the original array.

     Input: {name:"John"}
    Script: {(.name):"Doe"}
    Output: {"John":"Doe"}

>- Parentheses around the key means it will be evaluated as an expression.

#### [Optional] Object Identifier Index: `.FIELD`, `.["FIELD"]`

     Input: null, true, false, 23, [1,2], {"k":"v"}
    Script: .k?
    Script: .["k"]?
    Output: null, "v"

     Input: {"k":{"k1":"v"}}
    Script: .k.k1?
    Script: .["k"]["k1"]?
    Output: "v"

     Input: {"k":[1,2]}
    Script: .k[0]?
    Script: .["k"][0]?
    Output: 1

>- `EXPR?`, is shorthand for `try EXPR`.
>- if you try to access an object field on other than an object or null, `jq` will throw an error.

#### Array/String Index/Slice: `.[N]` `.[N:M]`, `first`, `last`, `nth(N)`, `first(EXPR)`, `last(EXPR)`, `nth(N; EXPR)`, `limit(N; EXPR)`

     Input: null, true, false, 23, [1,2], {"k":"v"}
    Script: .[1]?
    Output: null, 2

     Input: [1,2,3,4,5]
    Script: .[1:], .[:1], .[-1:], .[:-1] .[2:4]
    Output: [2,3,4,5], [1], [5], [1,2,3,4], [3,4]

>- `EXPR?`, is shorthand for `try EXPR`.
>- `N` is included, and `M` is excluded, in the outputted array.
>- if you try to access an index on other than an array or null, `jq` will throw an error.

     Input: [1,2,3]
    Script: first, last, nth(1), first(4,5,6), last(4,5,6), nth(1; 4,5,6)
    Output: 1, 3, 2, 4, 6, 5

     Input: [1,2,3,4,5], {a:1,b:2,c:3,d:4,e:5}
    Script: limit(2; .[]), limit(2; 1,2,3,4,5)
    Output: 1,2,
            1,2,
            1,2

#### Array/Object Value Iterator: `.[]`

     Input: null, true, false, 23, [1,2,3], {a:1,b:2,c:3}
    Script: .[]?
    Output: 1, 2, 3, 1, 2, 3

>- `EXPR?`, is shorthand for `try EXPR`.
>- if you try to access iterator over than an array or an object, `jq` will throw an error.

#### Recursive Decent: `..`, `recurse`, `recurse(F)`, `recurse(F; condition)`, `walk(F)`

     Input: [null,false,true,{"a":1,"b":"Hi","c":[1,2]}]
    Script: ..
    Script: recurse
    Output: [null,false,true,{"a":1,"b":"Hi","c":[1,2]}]
            null
            false
            true
            {"a":1,"b":"Hi","c":[1,2]}
            1
            "Hi"
            [1,2]
            1
            2

>- `..` produces the same output as `recurse`.

     Input: {items:[{name:"John",age:12},{name:"Tim",age:14}]}
    Script: path(..) | map(tostring) | join("/")
    Output: ""
            "items"
            "items/0"
            "items/0/name"
            "items/0/age"
            "items/1"
            "items/1/name"
            "items/1/age"

>- With the schema of the data exposed, you know exactly how the data may be accessed, e.g.: `.["items"][1]["name"]` produces "Tim".

     Input: {"name": "/", "children": [
              {"name": "/bin", "children": [
                {"name": "/bin/ls", "children": []},
                {"name": "/bin/sh", "children": []}]},
              {"name": "/home", "children": [
                {"name": "/home/stephen", "children": [
                  {"name": "/home/stephen/jq", "children": []}]}]}]}

    Script: recurse(.children[]; . != null) | .name
    Output: "/"
            "/bin"
            "/bin/ls"
            "/bin/sh"
            "/home"
            "/home/stephen"
            "/home/stephen/jq"

    Script: recurse(.children[]; .name | startswith("/home") != true) | .name
    Output: "/"
            "/bin"
            "/bin/ls"
            "/bin/sh"

     Input: [[4, 1, 7], [8, 5, 2], [3, 6, 9]]
    Script: walk(if type == "array" then sort else . end)
    Output: [[1,4,7],[2,5,8],[3,6,9]]

     Input: [{"_a":{"__b":2}}]
    Script: walk( if type == "object" then
                    with_entries( .key |= sub( "^_+"; "") )
                  else . end
            )
    Output: [{"a":{"b":2}}]

### Basic Functions

- `utf8bytelength`
- `keys`, `keys_unsorted`
- `has(key)`, `del(path_expr)`
- `map`, `map_values`
- `path(path_expr)`, `setpath(paths; value)`, `getpath(paths)`, `delpath(paths)`
- `to_entries`, `from_entries`, `with_entries`
- `select(bool_expr)`
- `arrays`, `objects`, `iterables`, `booleans`, `numbers`, `normals`, `finites`, `strings`, `nulls`, `values`, `scalars`
- `empty`

#### `length`, `utf8bytelength`

     Input: null, true, false, 23, "Str😂", [1,2,3], {a:1,b:2,c:3}
    Script: try length catch "err"
    Output: 0, "err", "err", 23, 4, 3, 3

     Input: null, true, false, 23, "Str😂", [1,2,3], {a:1,b:2,c:3}
    Script: try utf8bytelength catch "err"
    Output: "err", "err", "err", "err", 7, "err", "err"

#### String Functions and Interpolation: `startswith(STR)`, `endswith(STR)`, `ltrimstr(STR)`, `rtrimstr(STR)`, `split(STR)`, `split(REGEX; FLAGS)`, `join(STR)`, `explode`, `implode`, `ascii_downcase`, `ascii_upcase`

     Input: "John Doe"
    Script: startswith("John"), endswith("Doe")
    Output: true, true

     Input: "John Michael Doe"
    Script: ltrimstr("John "),
            rtrimstr(" Doe"),
            (ltrimstr("John ") | rtrimstr(" Doe"))
    Output: "Michael Doe"
            "John Michael"
            "Michael"

     Input: "John Doe"
    Script: split(" "), (split(" ") | join(" "))
    Output: ["John","Doe"], "John Doe"

     Input: "Michael;12; John;11; Foo;14; Doe;14;"
    Script: split(";\\d+?; ?"; "")
    Output: ["Michael","John","Foo","Doe",""]

     Input: "John Doe"
    Script: explode, (explode | implode)
    Output: [74,111,104,110,32,68,111,101], "John Doe"

     Input: "John Doe"
    Script: ascii_downcase, ascii_upcase
    Output: "john doe", "JOHN DOE"

String interpolation (or formatted strings) can be accomplished with:

    Syntax: "\(FILTER)"

     Input: { "name": "John Doe", "age": 86 }
    Script: "\(.name) is \(.age) years old."
    Output: "John Doe is 86 years old."

>- Any filter is valid inside parentheses. Output of parentheses is converted to a string and substituted.

#### `keys`, `keys_unsorted`

     Input: null, true, false, 23, "Str😂", [1,2,3], {a:1,b:2,c:3}
    Script: try keys_ catch "err"
    Output: "err", "err", "err", "err", "err", [0,1,2], ["a","b","c"]

     Input: null, true, false, 23, "Str😂", [1,2,3], {a:1,b:2,c:3}
    Script: try keys_unsorted catch "err"
    Output: "err", "err", "err", "err", "err", [0,1,2], ["a","b","c"]

#### `has(KEY)`, `in(DATA)`

    # check if number/key passed as argument, exists as index/key in data (array/object) passed as input
     Input: null, true, false, 23, "Str😂", [1,2,3], {a:1,b:2,c:3}
    Script: try has("a") catch "err"
    Output: false, "err", "err", "err", "err", "err", true

    # check if numbers/strings passed as input, exist as indexes/keys in data (array/object) passed as argument
     Input: [0,1,2,12]
    Script: map(in([1,2,3]))
    Output: [true,true,true,false]

     Input: ["a","b","c","d"]
    Script: map(in({a:1,b:2,c:3}))
    Output: [true,true,true,false]

>- `PATHEXPR` is an epxression used to access data, e.g.: `.a.b[0].c`.
>- `in` is the inverse of `has`, just like `inside` is the inverse of `contains`

#### `paths`, `paths(NODEFILTER)`, `path(PATHEXPR)`

    # get all possible paths of current input data, except itself
     Input: [null, true, false, 23, "str", [1,2,3], {a:1,b:2,c:3}]
    Script: paths
    Output: [1]
            [3]
            [4]
            [5,0]
            [5,1]
            [5,2]
            [6,"a"]
            [6,"b"]
            [6,"c"]

    # get path of specified PATHEXPR
     Input: [null, true, false, 23, "str", [1,2,3], {a:1,b:2,c:3}]
    Script: path(.[6].a)
    Output: [6,"a"]

    # get all possible paths of current input data, including itself
     Input: {"items":[{"name":"John","age":12},{"name":"Tim","age":14}]}
    Script: path(..)
    Output: []
            ["items"]
            ["items",0]
            ["items",0,"name"]
            ["items",0,"age"]
            ["items",1]
            ["items",1,"name"]
            ["items",1,"age"]

More useful examples:

    # get paths to all leaf nodes
     Input: [null, true, false, 23, "str", [1,2,3], {a:1,b:2,c:3}]
    Script: paths(scalars)
    Output: [1]
            [3]
            [4]
            [5,0]
            [5,1]
            [5,2]
            [6,"a"]
            [6,"b"]
            [6,"c"]

    # get current input data schema
     Input: {"items":[{"name":"John","age":12},{"name":"Tim","age":14}]}
    Script: path(..) | map(tostring) | join("/")
    Output: ""
            "items"
            "items/0"
            "items/0/name"
            "items/0/age"
            "items/1"
            "items/1/name"
            "items/1/age"

>- `NODEFILTER` is one of: `arrays`, `objects`, `iterables`, `booleans`, `numbers`, `normals`, `finites`, `strings`, `nulls`, `values`, `scalars`, `scalars_or_empty`.
>- `PATHEXPR` is an epxression used to access data, e.g.: `.a.b[0].c`.

#### `setpath(PATHS; VALUE)`, `getpath(PATHS)`, `delpath(PATHS)`

     Input: {a:{b:[{c:1},{d:2}]}}
    Script: path(.a.b.[0].e)
    Output: ["a","b",0,"c"]

     Input: {a:{b:[{c:1},{d:2}]}}
    Script: setpath(["a","b",2]; {e:3})
    Output: {a:{b:[{c:1},{d:2},{"e":3}]}}

     Input: {a:{b:[{c:1},{d:2}]}}
    Script: getpath(["a","b",0,"c"],["a","b",0])
    Output: 1, {c:1}

     Input: {a:{b:{c:1}}}
    Script: del(.a.b.c)
    Output: {"a":{"b":{}}}

     Input: {a:{b:[{c:1},{d:2}]}}
    Script: delpaths([["a","b",0,"c"],["a","b",1]])
    Output: {a:{b:[{}]}}

>- `PATHEXPR` is an epxression used to access data, e.g.: `.a.b[0].c`.

More useful examples:

     Input: {"items":[{"name":"John","age":12},{"name":"Tim","age":14}]}
    Script: getpath(path(..))
    Output: {"items":[{"name":"John","age":12},{"name":"Tim","age":14}]}
            [{"name":"John","age":12},{"name":"Tim","age":14}]
            {"name":"John","age":12}
            "John"
            12
            {"name":"Tim","age":14}
            "Tim"
            14

     Input: {"items":[{"name":"John","age":12},{"name":"Tim","age":14}]}
    Script: delpaths([0,1] | map(["items",.]))
    Output: {"items":[]}

#### `to_entries`, `from_entries`, `with_entries`

    Script: to_entries
    Output: [{"key":"a","value":1},{"key":"b","value":2},{"key":"c","value":3}]

    Script: to_entries | [.[] | {key,value:(.value+1)}] | from_entries
    Script: to_entries | map({key,value:(.value+1)}) | from_entries
    Script: with_entries({key,value:(.value+1)})
    Output: {"a":2,"b":3,"c":4}

    Input: [1,5,3,0,7]
    Script: map(select(. >= 2))
    Output: [5,3,7]

#### `empty`

     Input:
    Script: [1,2,empty,3]
    Output: [1,2,3]

#### `add`

    Input: [1,2,3], {a:1,b:2,c:3}, ["Hi ","Tim",null,empty], {g:"Hi ",p:"Tim"}
    Script: add
    Output: 6
            6
            "Hi Tim"
            "Hi Tim"

#### `select(BOOLEXPR)`

     Input: 1,2,3,4,5,6
    Script: select(. % 2 == 0)
    Output: 2,4,6

     Input: [1,2,3,4,5,6]
    Script: map(select(. % 2 == 0))
    Output: [2,4,6]

     Input: {a:1,b:2,c:3,d:4}
    Script: map_values(select(. % 2 == 0))
    Output: {"b":2,"d":4}

>- `BOOLEXPR` is an expression that evaluates to a boolean value.
>- `select()` is perhaps defined as:
>
>        def select(f): if f then . else empty end;

#### `contains(ELEMENT)`, `inside(ELEMENT)`

    # check if argument data is in input data
     Input: "foobar"
    Script: contains("foo"), contains("oba"), contains("b"+"a"+"r")
    Output: true, true, true

     Input: [null,false,true,23,"23",[1,2],{a:1,b:2}]
    Script: contains([null],[false,true],[23,"23"],[[1,2]],[{},{a:1},{b:2}])
    Output: true, true, true, true, true

     Input: {a:1,b:[1,2],c:3}
    Script: contains({},{a},{a:1},{b},{b:[1]},{b:[1,2]})
    Output: true, true, true, true, true, true

    # check if input data is in argument data
     Input: "bar"
    Script: inside("foobar")
    Output: true

>- `ELEMENT` is a filter that evaluates to some value.
>- `inside` is the inverse of `contains`, just like `in` is the inverse of `has`

#### `indices(ELEM)`, `index(s)`, `rindex(s)`

     Input: "a,b, cd, efg, hijk"
    Script: indices(", ")
    Output: [3,7,12]

     Input: [0,1,2,1,3,1,4]
    Script: indices(1)
    Output: [1,3,5]

     Input: [0,1,2,3,1,4,2,5,1,2,6,7]
    Script: indices([1,2])
    Output: [1,8]

     Input: "a,b, cd, efg, hijk"
    Script: index(", ")
    Output: 3

     Input: "a,b, cd, efg, hijk"
    Script: rindex(", ")
    Output: 12

#### `min`, `max`, `min_by(PATHEXPR)`, `max_by(PATHEXPR)`

     Input: [5,4,2,7]
    Script: min
    Output: 2

     Input: [{"foo":1, "bar":14}, {"foo":2, "bar":3}]
    Script: max_by(.foo)
    Output: {"foo":2, "bar":3}

>- `min`, `max` must take values of array type.
>- `min_by`, `max_by` must take values of object type.

#### `bsearch(ELEM)`

     Input: [1,2,3,4,6,7,8,9]
    Script: bsearch(9), bsearch(5), [.[:bsearch(5)+1][], 5, .[bsearch(5)+1:][]]
    Output: 7, -5, [1,2,3,4,5,6,7,8,9]

>- `ELEM` is a value of any type.

#### `flatten`, `flatten(DEPTH)`

     Input: [[1,[2,[]]],[3,[4,[]]],[5,[6,[]]]]
    Script: flatten, flatten(3), flatten(2), flatten(1)
    Output: [1,2,3,4,5,6],
            [1,2,3,4,5,6],
            [1,2,[],3,4,[],5,6,[]],
            [1,[2,[]],3,[4,[]],5,[6,[]]]

#### `range(START)`, `range(STOP;START)`, `range(STOP;START;STEP)`, `repeat(EXPR)`, `combinations`, `combinations(N)`

     Input:
    Script: [range(5)]
    Output: [0,1,2,3,4]

     Input:
    Script: [range(0;101;5)]
    Output: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]

>- `START` inclusive, `STOP` exclusive.

     Input:
    Script: repeat("yes")
    Output: "yes", "yes", …

     Input: [[1,2,3],[4,5,6]]
    Script: [ combinations | "\(.[0])\(.[1])" ]
    Output: ["14","15","16","24","25","26","34","35","36"]

     Input: [1,2,3,4,5,6]
    Script: [ combinations(2) | "\(.[0])\(.[1])" ]
    Output: ["11","12","13","14","15","16",
             "21","22","23","24","25","26",
             "31","32","33","34","35","36",
             "41","42","43","44","45","46",
             "51","52","53","54","55","56",
             "61","62","63","64","65","66"]

#### `tonumber`, `tostring`

     Input: null, false, true, 23, "23", [1,2], {a:1,b:2}
    Script: try tonumber catch "err"
    Output: "err", "err", "err", 23, 23, "err", "err"

     Input: null, false, true, 23, "23", [1,2], {a:1,b:2}
    Script: try tostring catch "err"
    Output: "null", "false", "true", "23", "23", "[1,2]", "{\"a\":1,\"b\":2}"

#### `type`, `arrays`, `objects`, `iterables`, `booleans`, `numbers`, `normals`, `finites`, `strings`, `nulls`, `values`, `scalars`

     Input: null, false, true, 23, "23", [1,2], {a:1,b:2}
    Script: type
    Output: "null", "boolean", "boolean", "number", "string", "array", "object"

     Input: [null, true, false, 23, -23, "str", [1,2], [3,4], {a:1,b:2,c:3}]
    Script: {arrays:map(arrays)}
            {objects:map(objects)}
            {iterables:map(iterables)}
            {booleans:map(booleans)}
            {numbers:map(numbers)}
            {normals:map(normals)}
            {finites:map(finites)}
            {strings:map(strings)}
            {nulls:map(nulls)}
            {values:map(values)}
            {scalars:map(scalars)}
    Output: {"arrays":[[1,2],[3,4]]}
            {"objects":[{"a":1,"b":2,"c":3}]}
            {"iterables":[[1,2],[3,4],{"a":1,"b":2,"c":3}]}
            {"booleans":[true,false]}
            {"numbers":[23,-23]}
            {"normals":[23,-23]}
            {"finites":[23,-23]}
            {"strings":["str"]}
            {"nulls":[null]}
            {"values":[true,false,23,-23,"str",[1,2],[3,4],{"a":1,"b":2,"c":3}]}
            {"scalars":[null,true,false,23,-23,"str"]}

>- `BOOLEXPR` is an expression that evaluates to a boolean value.
>- `NODEFILTER` is one of: `arrays`, `objects`, `iterables`, `booleans`, `numbers`, `normals`, `finites`, `strings`, `nulls`, `values`, `scalars`.

#### Math Functions

>- `jq` supports IEEE-754 double-precision (64-bit) floating point numbers.

Zero Argument Functions: `acos` `acosh` `asin` `asinh` `atan` `atanh` `cbrt` `ceil` `cos` `cosh` `erf` `erfc` `exp` `exp10` `exp2` `expm1` `fabs` `floor` `gamma` `j0` `j1` `lgamma` `lgamma_r` `log` `log10` `log1p` `log2` `logb` `nearbyint` `pow10` `rint` `round` `significand` `sin` `sinh` `sqrt` `tan` `tanh` `tgamma` `transpose` `trunc` `y0` `y1`

Two Argument Functions: `atan2` `copysign` `drem` `fdim` `fmax` `fmin` `fmod` `frexp` `hypot` `jn` `ldexp` `modf` `nextafter` `nexttoward` `pow` `remainder` `scalb` `scalbln` `yn`

Three Argument Functions: `fma`

Examples:

     Input: [[4,1,7],
             [8,5,2],
             [3,6,9]]
    Script: transpose
    Output: [[4,8,3],
             [1,5,6],
             [7,2,9]]

#### `infinite`, `nan`, `isinfinite`, `isnan`, `isfinite`, `isnormal`, `isempty`

     Input:
    Script: infinite, nan
    Output: 1.7976931348623157e+308, null

     Input:
    Script: (infinite | isinfinite),
            (nan | isnan),
            (infinite | isfinite),
            (infinite | isnormal),
            (nan | isfinite),
            (nan | isnormal),
            (23 | isfinite),
            (23 | isnormal)
    Output: true,
            true,
            false,
            false,
            true,
            false,
            true,
            true

     Input:
    Script: isempty(empty)
    Output: true

#### `sort`, `sort_by`, `unique`, `unique_by`, `group_by`, `reverse`

     Input: [2,3,2,1,1,3]
    Script: sort, (sort|reverse), unique, (unique|reverse)
    Output: [1,1,2,2,3,3]
            [3,3,2,2,1,1]
            [1,2,3]
            [3,2,1]

     Input: [ {b:2,ib:"b"},{c:1,ic:"a"},{a:1,ia:"a"},{b:1,ib:"a"},
              {b:2,ia:"c"},{a:1,ia:"a"},{b:2,ia:"a"},{b:2,ib:"a"} ]
    Script: sort, unique
    Output: [
                {"a":1,"ia":"a"}, {"a":1,"ia":"a"},
                {"b":2,"ia":"a"}, {"b":2,"ia":"c"},
                {"b":1,"ib":"a"}, {"b":2,"ib":"a"}, {"b":2,"ib":"b"},
                {"c":1,"ic":"a"}
            ]
            [
                {"a":1,"ia":"a"},
                {"b":2,"ia":"a"}, {"b":2,"ia":"c"},
                {"b":1,"ib":"a"}, {"b":2,"ib":"a"}, {"b":2,"ib":"b"},
                {"c":1,"ic":"a"}
            ]

>- `sort` and `unique`, sort objects by their keys, in-order, first, followed by their key-values, in-order. In this case, starting with the keys ["a","b","c"]; then the keys ["ia","ib","ic"]; then the corresponding values of the first keys: [1,2,3]; then the corresponding values of the second keys ["a", "b", "c"].

     Input: [{n:2,id:2312},{n:3,id:6231},{n:1,id:7921}]
    Script: sort_by(.id), unique_by(.n), group_by(.n)
    Output: [{"n":2,"id":2312},{"n":2,"id":6231},{"n":1,"id":7921}],
            [{"n":1,"id":7921},{"n":2,"id":2312}],
            [ [{"n":1,"id":7921}], [{"n":2,"id":2312},{"n":2,"id":6231}] ]

>- `sort`, `sort_by`, `unique`, `unique_by`, `group_by`, and `reverse` only take array values.
>- `reverse` can be useful to reverse current order, or sort order.

#### `error(STR)`, `halt`, `halt_error`, `halt_error(EXITCODE)`, `$__loc__`

     Input:
    Script: error("Hello world, this is an error message")
    Output: jq: error (at <unknown>): Hello world, this is an error message

     Input:
    Script: "Error: somthing went wrong\n" | halt_error(1)
    Output: Error: somthing went wrong

     Input:
    Script: try error($__loc__) catch .
    Output: {"file":"<top-level>","line":1}

>- `EXITCODE` is a number (default: 5).

### Regular Expressions (PCRE)

    Syntax:
        STRING | FILTER( REGEX )
        STRING | FILTER( REGEX; FLAGS )
        STRING | FILTER( [REGEX] )
        STRING | FILTER( [REGEX, FLAGS] )

>- `FILTER` is one of `test`, `match`, or `capture`.

#### `test(REGEX[; FLAGS])`, `match(REGEX[; FLAGS])`, `capture(REGEX[; FLAGS])`, `scan(REGEX)`

     Input: "Michael John Foo Doe"
    Script: test("(?<name>John|Michael|Foo|Doe)"; "g")
    Output: true

     Input: "Michael John Foo Doe"
    Script: match("(?<name>John|Michael|Foo|Doe)"; "g")
    Output: { "offset":0,"length":7,"string":"Michael",
                "captures":[
                    {"offset":0,"length":7,"string":"Michael","name":"name"}
                ]
            }
            { "offset":8,"length":4,"string":"John",
                "captures":[
                    {"offset":8,"length":4,"string":"John","name":"name"}
                ]
            }
            { "offset":13,"length":3,"string":"Foo",
                "captures":[
                    {"offset":13,"length":3,"string":"Foo","name":"name"}
                ]
            }
            { "offset":17,"length":3,"string":"Doe",
                "captures":[
                    {"offset":17,"length":3,"string":"Doe","name":"name"}
                ]
            }

     Input: "Michael:12 John:14 Foo:11 Doe:22"
    Script: capture("(?<person>(?<name>\\w+):(?<age>\\d+))")
    Output: {"person":"Michael:12","name":"Michael","age":"12"}
    Script: capture("(?<person>(?<name>\\w+):(?<age>\\d+))"; "g")
    Output: {"person":"Michael:12","name":"Michael","age":"12"}
            {"person":"John:14","name":"John","age":"14"}
            {"person":"Foo:11","name":"Foo","age":"11"}
            {"person":"Doe:22","name":"Doe","age":"22"}

     Input: "n:James n:Tim n:John n:Smith"
    Script: [scan("n:\\w+")], [scan("n:(\\w+)")], [scan("(n:)(\\w+)")]
    Output: ["n:James","n:Tim","n:John","n:Smith"],
            [["James"],["Tim"],["John"],["Smith"]],
            [["n:","James"],["n:","Tim"],["n:","John"],["n:","Smith"]]

#### `sub(REGEX; REPL[; FLAGS])`

    Input: "John012 John345 John678 John9"
    Script: sub("John(?=\\d*?)"; "Tim"),
            sub("John(\\d*?)"; "Tim"; "g"),
            gsub("John(\\d*?)"; "Tim")
    Output: "Tim012 John345 John678 John9"
            "Tim012 Tim345 Tim678 Tim9"
            "Tim012 Tim345 Tim678 Tim9"

     Input: "John012 John345 John678 John9"
    Script: sub("(?<name>John)(?<d>\\d+)"; "\(.d)\(.name)\(.d)"; "g")
    Output: "012John012 345John345 678John678 9John9"

>- `gsub` is equivalent to `sub(…; "g")`, i.e with the global modifier on.

### Datetime

Datetime is dealt with exclusively in UTC.

#### `now`, `todate`/`todateiso8601`, `fromdate`/`fromdateiso8601`, `gmtime`, `localtime`, `mktime`, `strfmtime`, `strflocaltime`, `strptime`

    Input:
    Script: now, (now | todate), (now | todate | fromdate)
    Output: 1628541519.782134,
            "2021-08-09T20:38:39Z",
            1628541519

     Input: now | (round|tostring|strptime("%s")), ((round|tostring|strptime("%s")) | mktime)
    Script: .,
            gmtime,   (gmtime | mktime), (gmtime | strftime("%Y-%m-%d")),
            localtime,(localtime|mktime),(localtime|strflocaltime("%Y-%m-%d")),
            (round|tostring|strptime("%s")),
            ((round|tostring|strptime("%s")) | mktime),
            (round|tostring|strptime("%s") | strftime("%Y-%m-%d"))
    Output: 1628543047.158505
            [2021,7,9,21,4,7.158504962921143,1,220], 1628543047, "2021-08-10",
            [2021,7,10,0,4,7.158504962921143,2,221], 1628553847, "2021-08-10",
            [2021,7,10,0,4,7,2,221], 1628553847, "2021-08-10"

     Input: "2015-03-05T23:51:47Z"
    Script: strptime("%Y-%m-%dT%H:%M:%SZ"),
            (strptime("%Y-%m-%dT%H:%M:%SZ") | mktime)
            (strptime("%Y-%m-%dT%H:%M:%SZ") | strftime("%Y-%m-%dT%H:%M:%SZ"))
    Output: [2015,2,5,23,51,47,4,63]
            1425599507
            "2015-03-05T23:51:47Z"

>- `now`: outputs seconds since Unix epoch
>- `todate`, `todateiso8601`: seconds since Unix epoch --> ISO 8601 format
>- `todate`, `fromdateiso8601`: ISO 8601 format --> seconds since Unix epoch
>- `gmtime`: outputs a "broken down time" representation of Greenwhich Meridian time
>- `localtime`: outputs a "broken down time" representation using local timezone
>- `strptime(FMT)`: formatted datetime string --> "broken down time"
>- `strtfime(FMT)`: "broken down time" --> formatted datetime string
>- `mktime`: "broken down time" --> seconds since Unix epoch

### Basic Control Flow

#### Truth table

       null : false
      false : false
       true : true
    numbers : true
    strings : true
     arrays : true
    objects : true

#### Conditional statement

    Syntax: if CONDITION then
                EXPR
            elif CONDITION then
                EXPR
            else
                EXPR
            end

     Input: { "size": 34.6, "weight": 24.1 }
    Script: if ((.size | floor) % 2) == 0 then "even" else "odd" end
    Output: "even"

> Note: `if` statements must have an `else` clause.

#### Try-Catch statement

    Syntax: try EXPR [catch EXPR]

     Input: true
    Script: try .foo catch .
    Output: "Cannot index boolean with string \"foo\""

     Input: null, true, false, 23, [1,2], {}, {foo:1}
    Script: try .foo catch "err"
    Output: null, "err", "err", "err", "err", null, 1

     Input: [{}, true, {"a":1}]
    Script: [.[]| try .a catch empty], [.[]| try .a]
    Output: [null,1], [null,1]

>- `EXPR?`, is shorthand for `try EXPR`.

Repeat an expression until it raises "break" as an error, then stop repeating without re-raising the error. But if the error caught is not "break" then re-raise it.

    Script: try repeat(EXPR) catch .=="break" then empty else error;
    Output: EXPR, EXPR, …

#### Loop structures

    # while CONDITION is true; update `.` with EXPR
     Input: 1
    Script: [while( . <  100; . * 2)]
    Output: [1,2,4,8,16,32,64]

    # while CONDITION is false; substitute `.` with EXPR
     Input: [0,1]
    Script: until( .[-1] > 1000; [.[], .[-2]+.[-1]] )
    Output: [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597]

### User-Defined Variables

You can set a variable based on current input data:

    Syntax: FILTER as $VARNAME | … $VARNAME

     Input: [86,99,13]
    Script: .[0] as $first | $first
    Output: 86

     Input: [86,99,13]
    Script: length as $len | add / $len
    Output: 66

     Input: 5
    Script: . as $i | [(.*2 | . as $i | $i), $i]
    Output: [10,5]

>- `jq` variables are lexically-scoped bindings

You can deconstruct/destructure/unpack current data into/onto multiple variables.

     Input: [1,2,3,4,5]
    Script: . as [$x,$x,$y,$z] | $x, $y, $z, .
    Output: 2, 3, 4, [1,2,3,4,5]

     Input: [2, 3, {"c": 4, "d": 5}]
    Script: . as [$a, $b, {c: $c}] | $a + $b + $c
    Output: 9

     Input: [[0], [0, 1], [2, 1, 0]]
    Script: .[] as [$a, $b] | {a: $a, b: $b}
    Output: {"a":0,"b":null}
            {"a":0,"b":1}
            {"a":2,"b":1}

>- Note how the last example creates `$a` and `$b` thrice, once for each element of the input array elements.
>- `as` acts as a `foreach`; provides a pattern that matches the strucutre of the input.

Note that when variables are assigned, the current data is passed through to the next filter unchanged. Variables are available to all filters afterwards (downstream).

     Input: {"name":"John","last":"Doe","age":12}
    Script: . as {name: $x, last: $y, age: $z} | $x, $y, $z, .
    Output: "John", "Doe", 12, {"name":"John","last":"Doe","age":12}

#### User-Pre-Set Variables

I.e create and load variables before launch of script that are accessible throughout the script.

For each script, `jq` holds an environment variable called `$ARGS`:

    ❯ jq -n ’$ARGS’
    {"positional":[],"named":{}}

`$ARGS.positional` is an array that holds variables, given by `--jsonargs SCRIPT [JSON ...]`, or `--args SCRIPT [STR ...]`, on the command-line, accessible via: `$ARGS.positional[N]`.

`$ARGS.named` is an array that holds variables, given by `--argjson VARNAME VARVAL` (read as json value), and/or `--arg VARNAME VARVAL` (read as string value), on the command-line, accessible via: `$ARGS.named.VARNAME` or each corresponding `$VARNAME`.

    ❯ jq -n \
    --arg s0 ’23’ --arg s1 ’"Hi"’ --arg s2 ’[1,2]’ --arg s3 ’{"k":"v"}’ \
    --argjson j0 ’23’ --argjson j1 ’"Hi"’ --argjson j2 ’[1,2]’ --argjson j3 ’{"k":"v"}’ \
     --jsonargs \
     ’$ARGS’ \
     ’23’ ’"Hi"’ ’[1,2]’ ’{"k":"v"}’
    {
        "positional": [
            23,
            "Hi",
            [1,2],
            {"k":"v"}
        ],
        "named": {
            "s0":"23",
            "s1":"\"Hi\"",
            "s2":"[1,2]",
            "s3":"{\"k\":\"v\"}",
            "j0":23,
            "j1":"Hi",
            "j2":[1,2],
            "j3":{"k":"v"}
        }
    }

`jq` can also create variables out of the contents of entire files. You can use `--slurpfile VARNAME FILE` to input an entire JSON file, and assign it as an array to the variable `$VARNAME`. You can also use `--rawfile VARNAME FILE` to input an entire text file, and assign it as a string to the variable `$VARNAME`.

    ❯ jq -n --slurpfile DATA data.json ’$DATA’
    ["Hello world",23,[1,2,3],{"name":"John","last":"Doe"}]

    ❯ jq -n --rawfile DATA data.txt ’$DATA’
    "\"Hello world\"\n23\n[1,2,3]\n{\"name\":\"John\",\"last\":\"Doe\"}\n"

#### Accessing Shell Environment Variables: `$ENV`, `env`

     Input:
    Script: $ENV.PAGER, env.PAGER
    Output: "less", "less"

### User-defined Functions

    Syntax: def FUNCNAME[([$]ARG[;...])]: … ; FUNCNAME[(ARG[;...])]

     Input: 2, 5
    Script: def dbl: . * 2; dbl
    Script: def dbl(a): a as $a | $a * 2; dbl(.)
    Script: def dbl($a): $a * 2; dbl(.)
    Output: 4, 10

     Input:
    Script: def mul($a; $b): $a * $b; mul(10;2)
    Output: 20

     Input: [86, 99, 13]
    Script: def avg: add / length; avg
    Output: 66

     Input: [86, 99, 13]
    Script: def increment: . + 1; def map(f): [.[] | f]; map(increment)
    Output: [87, 100, 14]

>- `jq` functions are lexically-scoped bindings
>- Arguments are passed as filters (functions with no arguments), not as values, but as filters, kind of like callbacks. For value-argument behaviour you can prepend a dollar sign to the argument name. The `.` is an implicit argument.

### Abstract functions

#### `any`, `all`

     Input: [false,false], [1,"str"], [null,true],
            {k:false,j:false}, {k:1,j:"str"}, {k:null,j:true}
    Script: any
    Script: any(.)
    Output: false, true, true
            false, true, true
    Script: all
    Script: all(.)
    Output: false, true, false
            false, true, false
    Script: any(.==null)
    Output: false, false, true
            false, false, true
    Script: all(.==false)
    Output: true, false, false
            true, false, false

     Input: [1,2,3]
    Script: any(.[]+2;.==1), any(.[]+2;.==2), any(.[]+2;.==3),
            any(.[]+2;.==4), any(.[]+2;.==5), any(.[]+2;.==6)
    Output: false, false, true,
            true, true, false

     Input: [false,false,false]
    Script: all(.[]|not;.==true)
    Output: true

>- `any` and `all` only take arrays and objects.

#### `map`, `map_values`

     Input: [1,2,3], {a:1,b:2,c:3}
    Script: try map(. + 1) catch "err"
    Output: [2,3,4], [2,3,4]

     Input: [1,2,3], {a:1,b:2,c:3}
    Script: try map_values(. + 1) catch "err"
    Output: [2,3,4], {"a":2,"b":3,"c":4}

#### `reduce`, `foreach`

    Syntax: reduce EXPR as $VAR (INIT; UPDATE)

     Input: [1,2,3], {a:1,b:2,c:3}
    Script: reduce .[] as $item (0; .+$item)
    Output: 6, 6

     Input: ["Hello ","John ","Doe."]
    Script: reduce .[] as $s (""; .+$s)
    Output: "Hello John Doe."

    Syntax: foreach EXPR as $VAR (INIT; UPDATE; PRINT)

     Input: [1,2,3,4,5], {a:1,b:2,c:3}
    Script: [foreach .[] as $i (0; .+$i; .)]
    Output: [1,3,6,10,15], [1,3,6,10,15]

>- Each output of `EXPR` is bound to `$VAR`, and is accessible to the `UPDATE` and `PRINT` expressions. Each value output by `UPDATE` replaces the previous state, initially being `INIT`. The current state is represented and accessible by: `.`.
>- Regarding `foreach`, `PRINT` is evaluated for each new state to extract an output that is to be printed.
>- `foreach` is basically `reduce` with a printing instruction at each reduction step.
>- `reduce` is much more efficient than `INDEX()`.

#### (My) User-defined Abstract Functions: `_any`, `_all`, `_build`, `_filter`, `_map`, `_reduce`, `_foreach`

     Input: 1,2,3,4,5,6, [1,2,3,4,5,6], {a:1,b:2,c:3,d:4,f:5,g:6}
    Script: _filter(. % 2 == 0)
    Output: 2
            4
            6
            [2,4,6]
            {"b":2,"d":4,"g":6}

Definitions: TODO

    # abstract function to filter values of any type appropriately
    def _filter(f):
      if type == "array" then
        map(select(f))
      elif type == "object" then
        map_values(select(f))
      else
        select(f)
      end;

### I/O Facilities

>- `input`: prompts one line of input (stopped by `Enter`).

        ❯ jq -cn ’[input, input, input] | map(.)’
        "Hello"
        "John"
        "Doe"
        ["Hello","John","Doe"]

>- `inputs`: prompts endless lines of input (stopped by `ctrl+d`).

        ❯ jq -cn ’[inputs] | map(.)’
        "Hello"
        "John"
        "Doe"
        ["Hello","John","Doe"]

>- `debug`: logs/prints current input data to standard error.

        ❯ jq -cn ’1,2,3 | debug’
        ["DEBUG:",1]
        1
        ["DEBUG:",2]
        2
        ["DEBUG:",3]
        3

>- `stderr`: prints its input in raw and compact mode to standard error, with no decorations or newlines.

        ❯ jq -cn ’"str\n", 1 | stderr’
        "str\n""str\n"
        11

>- `input_filename`: Returns the name of the file whose input is currently being filtered. Note that this will not work well unless jq is running in a UTF-8 locale.

        ❯ echo 2 | jq -c ’input_filename’
        "<stdin>"

        ❯ jq -c ’input_filename’ <(echo 1)
        "/dev/fd/13"

        ❯ jq -c ’., input_filename’ data.json
        "Hello world"
        "data.json"
        23
        "data.json"
        [1,2,3]
        "data.json"
        {"name":"John","last":"Doe"}
        "data.json"

>- `input_line_number`: Returns the line number of the input currently being filtered.

    ❯ echo ’12\n13\n14’ | jq -c ’., input_line_number’
    12
    1
    13
    2
    14
    3

    ❯ jq -c ’., input_line_number’ data.json
    "Hello world"
    1
    23
    2
    [1,2,3]
    3
    {"name":"John","last":"Doe"}
    4

### Output Formatters/Escapers

    Syntax: … | format("FORMAT")
    Syntax: CONSTANT, ARRAY | @sh
            ARRAY | @csv
            ARRAY | @tsv
            ANY | @text
            ANY | @json
            ANY | @uri
            ANY | @html
            ANY | @base64
            BASE64-STRING | @base64d

     Input: ["Hello", "world", 1, 2]
    Script: @sh
    Output: "’Hello’ ’world’ 1 2"
    Script: @csv
    Output: "\"Hello\",\"world\",1,2"
    Script: @tsv
    Output: "Hello\tworld\t1\t2"
    Script: @text
    Output: "[\"Hello\",\"world\",1,2]"
    Script: @json
    Output: "[\"Hello\",\"world\",1,2]"
    Script: @uri
    Output: "%5B%22Hello%22%2C%22world%22%2C1%2C2%5D"
    Script: @html
    Output: "[&quot;Hello&quot;,&quot;world&quot;,1,2]"
    Script: @base64
    Output: "WyJIZWxsbyIsIndvcmxkIiwxLDJd"

    Input: [1,2,3]
    Script: format("tsv")
    Output: "1\t2\t3"

    Input: "WyJIZWxsbyIsIndvcmxkIiwxLDJd"
    Script: @base64d
    Output: "[\"Hello\",\"world\",1,2]"

>- `@json` is equivalent to `tojson`. `fromjson` reverses the transformation.
>- `FORMAT` is one of: `sh`, `csv`, `tsv`, `text`, `json`, `uri`, `html`, `base64`.

### SQL-Style Operators

#### `INDEX`, `INDEX`, `JOIN`, `JOIN`, `JOIN`, `IN`, `IN`

    TODO

    INDEX(stream; index_expression)
    JOIN($idx; stream; idx_expr; join_expr)
    JOIN($idx; stream; idx_expr)
    JOIN($idx; idx_expr):
    IN(s)
    IN(source; s)

### Streaming

#### `truncate_stream`, `fromstream`, `tostream`

    TODO

### Modules/Libraries

#### `import`, `include`, `modulemeta`

    Syntax:
        import "RELPATH" as NAME [<metadata>]; NAME::symbol
        include "RELPATH" [<metadata>]; symbol

    ❯ jq -L$HOME/.config/jq/libjq
     Input:
    Script: include "libjq"; {a:1,b:2} | [_schema]
    Script: import "libjq" as LIB; {a:1,b:2} | [LIB::_schema]
    Output: ["", "a", "b"]

>- The default module search path is the search path given to the `-L` command-line option, else: [`~/.jq`, `$ORIGIN/../lib/jq`, `$ORIGIN/../lib`]
>- `$ORIGIN` is substituted with path of the `jq` executable.
>- A relative path `foo/bar` would be searched for as: `foo/bar.jq` and `foo/bar/bar.jq`
>- For example, with `-L$HOME/.jq` a module `foo` can be found in `$HOME/.jq/foo.jq` and `$HOME/.jq/foo/foo.jq`.

     Input: "libjq"
    Script: modulemeta
    Output: { deps:[] }

## SEE

    jq(1)

## SEEALSO

    sed(1), awk(1), grep(1), printf(1)
    rg(1), yq(1), pup(1), xmlstarlet(1)

## SEEFURTHER

- [🌎 Home](https://stedolan.github.io/jq/)
- [🌎 Documentation](https://stedolan.github.io/jq/manual/)
- [🌎 Documentation: Github Wiki](https://github.com/stedolan/jq/wiki)
- [🌎 Repository](https://github.com/stedolan/jq)
- [🌎 Page: `jq` Builtin Function Definitions](https://github.com/stedolan/jq/blob/master/src/builtin.jq)
- [🌎 Page: `jq` Builtin C Function Definitions](https://github.com/stedolan/jq/blob/master/src/builtin.c)
- [🌎 Page: jq Cookbook](https://github.com/stedolan/jq/wiki/Cookbook)
- [🌎 Page: Build ETLs using JQ](https://github.com/textarcana/jq-cookbook)
