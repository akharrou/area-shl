---
status: INCOMPLETE
title: "Shellscript"
tags: [shellscript,terminal,command,line,prompt,scripting,language]
---

# Shellscript

## USECASES

----
#### To create a whileloop, to duplicate a file:

    ❯ i=0
    while (( i++ < 100 )); do
      cp test.ogg "test$i.ogg"
    done

----
#### To create an infinite whileloop, to say/speak something out loud:

    ❯ while true; do say "hello world \!" ; done
    ❯ while (( 1 )); do say "hello world \!" ; done

----
#### To create a forloop, to iterate over files and do something with them:

    ❯ for file in **/*; do echo $file; done
    ❯ for file in $(fd --type f); do echo $file; done
    ❯ for file in $(find . -type f);
    do
        echo $file;
    done

----
#### To create a range forloop, to iterate over a sequence of numbers, with variables, with padding:

    ❯ for i in {1..5}; do echo $i; done
    1
    2
    3
    4
    5

    ❯ BEGIN=0; END=5; for i in $(seq $BEGIN $END); do echo $i; done
    1
    2
    3
    4
    5

    ❯ for i in {0001..1010}; do echo $i; done
    ❯ padtowidth=4; for i in $(seq $BEGIN $END); do printf "%0*d\n" $padtowidth $i; done
    0001
    0002
    0095
    0096
    0997
    0998
    1009
    1010
    ...

----
#### To implement a switch-case command:

    ❯ case "$1"
    in
        0) echo "zero found";;
        1) echo "one found";;
        2) echo "two found";;
        3*) echo "something beginning with 3 found";;
    esac

----
#### To turn on debugging:

    ❯ set -x

----
#### To turn off debugging:

    ❯ set +x

----
#### Retrieve N-th piped command exit status:

    ❯ printf "foo" | fgrep "foo" | sed "s/foo/bar/"
    ❯ echo ${PIPESTATUS[0]}   # replace 0 with N

----
#### To create a lockfile:

    ❯ ( set -o noclobber; echo > my.lock ) || echo "Failed to create lock file"

## RECIPIES

----
#### To rename files in folder with name and (padded) counter:

    ❯ i=1; padtowidth=4; for file in *; do tmp=$(printf "%0*d\n" $padtowidth $i); ((i++)); mv $file "Article - $tmp"; done

- Prepending commands with `\` bypasses any aliases. E.g.: `\stat`, `\ls`.
- Common dummy variables: foobar, foo, bar, baz, qux, quux, quuz, corge, grault, garply, waldo, fred, plugh


## NOTES

1. Relational operators
2. Boolean operators
3. Arithmetic operators
4. Bitwise operators
5. String operators
6. File Test operators
7. Control operators
8. Redirection operators
9. Substitution operators

---

### Relational operators

| Syntax      | Semantics                                                      |
| ----------- | -------------------------------------------------------------- |
| `==`, `-eq` | check equality operands; returns `true` if equal, else `false` |
| `!=`, `-ne` | inequality; " "                                                |
| `<`, `-lt`  | less than; " "                                                 |
| `<=`, `-le` | less than or equal to; " "                                     |
| `>`, `-gt`  | greater than; " "                                              |
| `>=`, `-ge` | greater than or equal to; " "                                  |


```bash
#ℹ︎ check equality relational operator
❯ if [[ $a == $b ]]; then …; fi
```


```bash
#ℹ︎ check inequality relational operator
❯ if [[ $a != $b ]]; then …; fi
```


```bash
#ℹ︎ check less than relational operator
❯ if [[ $a < $b ]]; then …; fi 
```


```bash
#ℹ︎ check less than or equal to relational operator
❯ if [[ $a <= $b ]]; then …; fi
```


```bash
#ℹ︎ check greater than relational operator
❯ if [[ $a > $b ]]; then …; fi 
```


```bash
#ℹ︎ check greater than or equal to relational operator
❯ if [[ $a >= $b ]]; then …; fi
```


### Boolean operators

| Syntax | Semantics                                                     |
| ------ | ------------------------------------------------------------- |
| `&&`   | Logical AND; `true` if both operands are `true`, else `false` |
| `||`   | Logical OR; `false` if both operands are `false` else `true`  |
| `!`    | Logical NOT; `true` if `false`, and `false` if `true`.        |


```bash
#ℹ︎ conditional boolean AND operator
❯ if [[ $a && $b ]]; then …; fi
```


```bash
#ℹ︎ conditional boolean OR operator
❯ if [[ $a || $b ]]; then …; fi
```


```bash
#ℹ︎ conditional boolean NOT operator
❯ if [[ ! $a ]]; then …; fi    
```


### Arithmetic operators

| Syntax | Semantics                          |
| ------ | ---------------------------------- |
| `+`    | add two operands (variables)       |
| `-`    | subtract " "                       |
| `*`    | multiply " "                       |
| `/`    | divide " "                         |
| `%`    | find the remainder on division " " |
| `++`   | increment operand                  |
| `--`   | decrement operand                  |


```bash
#ℹ︎ add numbers, with arithmetic operator
❯ echo $((a + b))
```


```bash
#ℹ︎ subtraction numbers, with arithmetic operator
❯ echo $((a - b))
```


```bash
#ℹ︎ multiply numbers, with arithmetic operator
❯ echo $((a * b))
```


```bash
#ℹ︎ divide numbers, with arithmetic operator
❯ echo $((a / b))
```


```bash
#ℹ︎ modulus numbers, with arithmetic operator
❯ echo $((a % b))
```


```bash
#ℹ︎ increment numbers, with arithmetic operator
❯ ((++a))        
```


```bash
#ℹ︎ decrement numbers, with arithmetic operator
❯ ((--b))        
```


### Bitwise operators

| Syntax | Semantics
| ------ | ------------------------------------------------------------------- |
| `&`    | Bitwise AND; performs binary AND operation on bits of the operands  |
| `|`    | Bitwise OR; performs binary OR operation on bits of the operands    |
| `^`    | Bitwise XOR; performs binary XOR operation on bits of the operands  |
| `~`    | Bitwise NOT; performs binary NOT operation on bits of the operands  |
| `<<`   | Bitwise Left Shift; shifts bits of the operand to the left by `n`   |
| `>>`   | Bitwise Right Shift; shifts bits of the operand to the right by `n` |


```bash
#ℹ︎ bitwise AND operator
❯ echo $(( a & b )) 
```


```bash
#ℹ︎ bitwise OR operator
❯ echo $(( a | b )) 
```


```bash
#ℹ︎ bitwise XOR operator
❯ echo $(( a ^ b )) 
```


```bash
#ℹ︎ bitwise NOT operator
❯ echo $(( ~a ))    
```


```bash
#ℹ︎ bitwise left shift operator
❯ echo $(( a << 1 ))
```


```bash
#ℹ︎ bitwise right shift operator
❯ echo $(( b >> 3 ))
```


### String operators

| Syntax | Semantics                                   |
| ------ | ------------------------------------------- |
| `=`    | Checks if two string operands are equal     |
| `!=`   | Checks if two string operands are not equal |
| `-z`   | Checks if string operand size is zero       |
| `-n`   | Checks if string operand size is non-zero   |
| `STR`  | Checks if STR string is not empty           |


```bash
#ℹ︎ check if strings equal
❯ if [[ $a = $b ]]; then …; fi 
```


```bash
#ℹ︎ check if strings unequal
❯ if [[ $a != $b ]]; then …; fi
```


```bash
#ℹ︎ check if strings zero size
❯ if [[ -z $a ]]; then …; fi   
```


```bash
#ℹ︎ check if strings non-zero size
❯ if [[ -n $a ]]; then …; fi   
```


```bash
#ℹ︎ check if strings non-empty
❯ if [[ $a ]]; then …; fi      
```


### File Test operators

| Syntax | Semantics                                                          |
| ------ | ------------------------------------------------------------------ |
| `-e`   | Checks if file exists                                              |
| `-s`   | Checks if file has size greater than 0                             |
| `-r`   | Checks if file is readable                                         |
| `-w`   | Checks if file is writable                                         |
| `-x`   | Checks if file is executable                                       |
| `-f`   | Checks if file is an ordinary file (not directory or special file) |
| `-d`   | Checks if file is a directory                                      |
| `-b`   | Checks if file is a block special file                             |
| `-c`   | Checks if file is a character special file                         |
| `-u`   | Checks if file has its set user ID (SUID) bit set                  |
| `-g`   | Checks if file has its set group ID (SGID) bit set                 |
| `-k`   | Checks if file has its sticky bit set                              |
| `-p`   | Checks if file is a named pipe                                     |
| `-t`   | Checks if file descriptor is open and associated with a terminal   |


```bash
#ℹ︎ check if file exists
❯ if [[ -e FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file has size greater than 0
❯ if [[ -s FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file is readable
❯ if [[ -r FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file is writable
❯ if [[ -w FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file is executable
❯ if [[ -x FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file is ordinary file
❯ if [[ -f FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file is directory
❯ if [[ -d FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file is block special file
❯ if [[ -b FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file is character special file
❯ if [[ -c FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file set user ID (SUID) bits
❯ if [[ -u FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file set group ID (SGID) bits
❯ if [[ -g FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file set sticky bit
❯ if [[ -k FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file is named pipe
❯ if [[ -p FILE ]]; then …; fi
```


```bash
#ℹ︎ check if file descriptor is open and terminal associated
❯ if [[ -t FILE ]]; then …; fi
```


### Control operators

#### List terminators

| Syntax | Semantics                 |
| ------ | ------------------------- |
| `;`    | command terminator        |
| `&`    | run command in background |

    ❯ COMMAND1 ; COMMAND2
    ❯ COMMAND1 & COMMAND2

#### Logical operators

| Syntax | Semantics                                                       |
| ------ | --------------------------------------------------------------- |
| `&&`   | AND operator, run each command if previous exits successfully   |
| `||`   | OR operator, run commands in order until one exits successfully |
| `!`    | NOT operator, negates the return status of a command            |

    ❯ COMMAND1 && COMMAND2
    ❯ COMMAND1 || COMMAND2
    ❯ ! COMMAND

#### Pipe operators

| Syntax | Semantics                                               |
| ------ | ------------------------------------------------------- |
| `|`    | passes `stdout` of one command to `stdin` of another    |
| `|&`   | passes `stdout` and `stderr` of one cammand to `stdin` of another |

    ❯ COMMAND1 | COMMAND2
    ❯ COMMAND1 |& COMMAND2

>- `|&` is shorthand for `2>&1 |` in `bash` and `zsh`.
>- A command built from the pipe operator is called a pipeline.

#### Other list punctuation

| Syntax | Semantics                                |
| ------ | ---------------------------------------- |
| `;;`   | marks end of a `case` statement          |
| `;&`   | marks to fall through to the next case   |
| `;;&`  | marks to go on and test subsequent cases |

### Redirection operators

| Syntax | Semantics                                                 |
| ------ | --------------------------------------------------------- |
| `<`    | gives input to a command, file is open in read-only mode  |
| `<>`   | gives input to a command, file is open in read+write mode |
| `>`    | directs the output of a command into a file. if the file exists, its contents will be overwritten and if it does not exist it will be created. often used to choose whether something should be printed to standard error or standard output.
| `>|` | directs the output of a command into a file, but overwrites target, even if the shell has been configured to refuse overwriting (with `set -C` or `set -o noclobber`). if file exists, replaces content, else creates file.
| `>>` | directs the output of a command into a file, but if the target file exists, it is appended to the file.
| `&>`, `&>>`, `>&`, `>>&`, | redirect both standard error and standard output, replacing or appending, respectively.
| `>&-`, `<&-`  | -
| `x>&y`, `x<&y`  | -
| `<<`  | a "here document", it often used to print multi-line strings. it takes `Text` as input, that is, everything from the first occurrence of `WORD` to the next occurrence of `WORD`. WORD is often "EoF" or variations thereof.
| `<<<`  | "here strings", similar to "here documents", but intended for a single line.

    ❯ COMMAND < file.txt
    ❯ COMMAND <> file.txt

    ❯ COMMAND > stdout.txt
    ❯ COMMAND 1>stdout.txt 2>stderror.txt

    ❯ COMMAND < file.txt > stdout.txt 2> stderror.txt
    ❯ COMMAND < file.txt 1>stdout.txt 2> stderror.txt

    ❯ COMMAND >| stdout.txt
    ❯ COMMAND >> out.txt
    ❯ COMMAND &> stdout_and_stderror.txt
    ❯ COMMAND &>> stdout_and_stderror.txt

>- When surrounded by digits (e.g. `1>&2`) or `-` on the right side (e.g. `4>&-`) either redirects the file descriptor, or closes it, respectively.
>- The `&>` variant originates in `bash`, while the `>&` variant comes from `csh` (decades earlier). They both conflict with other POSIX shell operators and should not be used in portable sh scripts.

    ❯ COMMAND << WORD
    heredoc> text
    heredoc> WORD

    ❯ cat << EOF
    heredoc> Something really nice and long for
    heredoc> everyone to read.
    heredoc> EOF
    Something really nice and long for
    everyone to read.

    ❯ COMMAND << WORD | COMMAND1 ...
    pipe heredoc> text
    pipe heredoc> WORD

    ❯ cat << eof | sed "s/ /_/g"
    pipe heredoc> Something really nice and long for
    pipe heredoc> everyone to read.
    pipe heredoc> eof
    Something_really_nice_and_long_for
    everyone_to_read.

    ❯ COMMAND <<< WORD
    ❯ echo <<< eof something really \"nice and enjoyable\"
    something really "nice and enjoyable"

### Substitution operators

| Syntax | Semantics
| ------ | ---------
| `=COMMAND` | (zsh only); substitutes a command for its full path. behavior can be turned off with `setopt noequals`.
| `$VAR` | access variable value
| `…`, `$(…)` | command substitutions, substitutes a command for its output
| `>(…)` | replaces a process with a named-pipe (FIFO), acting as its input stream, that can be written to.
| `<(…)` | replaces a process with a named-pipe (FIFO), containing its output, that can be read from; although similar in behavior to `=(…)`, it is better in space efficiency, and portability.
| `=(…)` | (zsh only); replaces a process with [the name of] a file, containing its output, that can be written to


```bash
#ℹ︎ get command full path
❯ echo =python3
```

    /usr/local/opt/python@3.9/bin/python3
    ❯ ls -l =echo
    -rwxr-xr-x  1 root  wheel  120848 Jan  1  2020 /bin/echo


```bash
#ℹ︎ get PATH variable value
❯ echo $PATH     
```

    /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin


```bash
#ℹ︎ command substitution, get command output
❯ var=`command...` 
```


```bash
#ℹ︎ command substitution, get command output
❯ var=$(command...)
```



```bash
#ℹ︎ process substitution, get process input named-pipe (fifo)
❯ echo >(echo hi &>/dev/null)      
```

    /dev/fd/16


```bash
#ℹ︎ process substitution, get process output named-pipe (fifo)
❯ echo <(echo hi); cat <(echo hi)  
```

    /dev/fd/14


```bash
#ℹ︎ process substitution, get process output file name
❯ echo =(echo hi); cat =(echo hi)  
```

    /tmp/zshBtzgeO
    hi

### Shell keywords (or reserved words)

`bash`:

| Word       | Description            |
| ---------- | ---------------------- |
| `!`        | Pipelines              |
| `[[`       | Conditional Constructs |
| `]]`       | Conditional Constructs |
| `{`        | Command Grouping       |
| `}`        | Command Grouping       |
| `case`     | Conditional Constructs |
| `do`       | Looping Constructs     |
| `done`     | Looping Constructs     |
| `elif`     | Conditional Constructs |
| `else`     | Conditional Constructs |
| `esac`     | Conditional Constructs |
| `fi`       | Conditional Constructs |
| `for`      | Looping Constructs     |
| `function` | Shell Functions        |
| `if`       | Conditional Constructs |
| `in`       | Conditional Constructs |
| `select`   | Conditional Constructs |
| `then`     | Conditional Constructs |
| `time`     | Pipelines              |
| `until`    | Looping Constructs     |
| `while`    | Looping Constructs     |

References:

- <https://www.gnu.org/software/bash/manual/html_node/Reserved-Word-Index.html>
- <https://www.gnu.org/software/bash/manual/bash.html#Reserved-Words>

### Shell substitutions/expansions

0. Special Parameters
1. Brace substitution/expansion
2. Tilde substitution/expansion
3. Parameter substitution/expansion / variable substitution/expansion / string substitution/expansion
4. Command substitution
5. Process substitution
6. Arithmetic substitution/expansion
7. Word Splitting
8. Filename substitution/expansion
9. Quote Removal

#### Special parameters

| Variable  | Meaning
| --------- | ---------------------------------------------------
| `$0`      | Filename of script
| `$1 - $9` | Positional parameters #1 - #9
| `${10}`   | Positional parameter #10
| `$#`      | Number of positional parameters
| `"$*"`    | All the positional parameters (as a single word) `^[1]`
| `"$@"`    | All the positional parameters (as separate strings) `^[1]`
| `${#*}`   | Number of positional parameters
| `${#@}`   | Number of positional parameters
| `$?`      | Return value of previous command/job
| `$$`      | Process ID (PID) of script
| `$-`      | Flags passed to script (using set)
| `$_`      | Last argument of previous command/job
| `$!`      | Process ID (PID) of last job run in background

    [1]: must be QUOTED

References:

- <https://www.gnu.org/software/bash/manual/bash.html#Special-Parameters>
- <https://tldp.org/LDP/abs/html/abs-guide.html#REFCARDS>

#### Brace expansion

| Type       | Syntax                           |
| ---------- | -------------------------------- |
| Words      | {value1[,...|{subvalue1[,...]}]} |
| Characters | {start..stop}                    |
| Numbers    | {start..stop..step}              |

    ❯ echo a{b,c,d}e
    abe ace ade

    ❯ echo file{1,2,3,4,5}
    file1 file2 file3 file4 file5

    ❯ echo /usr/{local/{bin,opt},lib/{cron,log}}
    /usr/local/bin /usr/local/opt /usr/lib/cron /usr/lib/log

    ❯ echo file{A..z}
    fileA fileB fileC fileD fileE fileF fileG fileH fileI fileJ fileK fileL fileM fileN fileO fileP fileQ fileR fileS fileT fileU fileV fileW fileX fileY fileZ file[ file\ file] file^ file_ file` filea fileb filec filed filee filef fileg fileh filei filej filek filel filem filen fileo filep fileq filer files filet fileu filev filew filex filey filez

    ❯ echo file{0..20..5}
    file0 file5 file10 file15 file20

    ❯ echo {000..10..1}
    000 001 002 003 004 005 006 007 008 009 010

References:

- <https://www.gnu.org/software/bash/manual/bash.html#Brace-Expansion>

#### Tilde Expansion

| Expr  | Meaning
| ----- | -------------------------------------------------
| `~`   | expands to `$HOME`
| `~+`  | expands to `$PWD`
| `~-`  | expands to `$OLDPWD`
| `~N`  | The string that would be displayed by ‘dirs +N’
| `~+N` | The string that would be displayed by ‘dirs +N’
| `~-N` | The string that would be displayed by ‘dirs -N’

    ❯ echo ~/foo
    /Users/johndoe/foo

    ❯ echo ~fred/.config
    /Users/fred/.config

    ❯ # PWD=/Users/johndoe/.config
    ❯ echo ~+/shell/zsh
    $PWD/shell/zsh
    ${PWD-"~+"}/shell/zsh
    /Users/johndoe/.config/shell/zsh

    ❯ # PWD=/Users/johndoe/.cache
    ❯ echo ~-/zsh
    $OLDPWD/zsh
    ${OLDPWD-"~-"}/zsh
    /Users/johndoe/.cache/zsh

    ❯ dirs -p
    /Users/johndoe
    /Users/johndoe/.data
    /Users/johndoe/.cache
    /Users/johndoe/.config
    ❯ echo ~{0..3}
    ❯ echo ~-{0..3}
    ❯ echo ~-0 ~-1 ~-2 ~-3
    /Users/johndoe /Users/johndoe/.data /Users/johndoe/.cache /Users/johndoe/.config
    ❯ echo ~+{0..3}
    /Users/johndoe/.config /Users/johndoe/.cache /Users/johndoe/.data /Users/johndoe

References:

- <https://www.gnu.org/software/bash/manual/bash.html#Tilde-Expansion>

#### Parameter substitution/expansion / Variable substitution/expansion / String substitution/expansion

| Expression         | Meaning
| ------------------ | -------
| `${var}`           | Value of `var` (same as `$var`)
| `${var-$DEFAULT}`  | If `var` not set, evaluate expression as `$DEFAULT`
| `${var:-$DEFAULT}` | If `var` not set or is empty, evaluate expression as `$DEFAULT` ^[1]
| `${var=$DEFAULT}`  | If `var` not set, evaluate and assign `$DEFAULT` to `var`, evaluate expression as `$var`
| `${var:=$DEFAULT}` | If `var` not set or is empty, evaluate and assign `$DEFAULT` to `var`, evaluate expression as `$var` ^[1]
| `${var+$OTHER}`    | If `var` set, evaluate expression as `$OTHER`, otherwise as null string
| `${var:+$OTHER}`   | If `var` set, evaluate expression as `$OTHER`, otherwise as null string
| `${var?$ERR_MSG}`  | If `var` not set, print `$ERR_MSG` and abort script with an exit status of 1.
| `${var:?$ERR_MSG}` | If `var` not set, print `$ERR_MSG` and abort script with an exit status of 1.
| `${!varprefix*}`   | Matches all previously declared variables beginning with `varprefix` (indirect expansion)
| `${!varprefix@}`   | Matches all previously declared variables beginning with `varprefix` (indirect expansion)

    [1]: test for both parameter’s existence, and that its value is not null
    [2]: negative offset values start at the end of the list. they should be given one space seperation from colon

| Expression                    | Meaning
| ----------------------------- | -------
| `${@} `                       | Positional argument list
| `${#} `                       | Length of positional argument list
| `${@[N]} `                    | Positional argument at index `N` ^[2]
| `${@:position}`               | List of positional argument elements, starting from offset position`$position` (inclusive) ^[2]
| `${@:position:length}`        | List of positional argument elements, starting from offset position`$position`, and stopping at `$length` (inclusive) ^[2]
| `${array[@]} `                | List of `$array` elements
| `${#array[@]} `               | Length of `$array` list
| `${array[N]} `                | `$array` argument at index `N` ^[2]
| `${array[@]:position}`        | List of `$array` elements, starting from `$position` (inclusive) ^[2]
| `${array[@]:position:length}` | List of `$array` elements, starting from `$position`, and stopping at `$length` (inclusive) ^[2]

    [1]: test for both parameter’s existence, and that its value is not null
    [2]: negative offset values start at the end of the list. they should be given one space seperation from colon

| Expression                         | Meaning
| ---------------------------------- | -------
| `${:-"string"} `                   | Literal string `"string"`
| `${#:-"string"} `                  | Length of the literal string `"string"`
| `${string}`                        | `$string`
| `${#string}`                       | Length of `$string`
| `${string:position}`               | Extract substring from `$string` starting from the offset position `$position` (negative values start from end of list)
| `${string:position:length}`        | Extract `$length` character substring from `$string` starting from the offset position `$position` [zero-indexed, first character is at position 0]
| - | -
| `${string#substring}`              | Strip shortest match of `$substring` from front of `$string`
| `${string##substring}`             | Strip longest match of `$substring` from front of `$string`
| `${string%substring}`              | Strip shortest match of `$substring` from back of `$string`
| `${string%%substring}`             | Strip longest match of `$substring` from back of `$string`
| - | -
| `${string/substring/replacement}`  | Replace first match of `$substring` with `$replacement`
| `${string//substring/replacement}` | Replace all matches of `$substring` with `$replacement`
| `${string/#substring/replacement}` | If `$substring` matches from the front of `$string`, substitute `$replacement` for `$substring`
| `${string/%substring/replacement}` | If `$substring` matches from the back of `$string`, substitute `$replacement` for `$substring`

| Expression                                | Meaning
| ----------------------------------------- | -------
| `expr match "$string" "$substring"`       | Length of matching `$substring`* at beginning of `$string`
| `expr "$string" : "$substring"`           | Length of matching `$substring`* at beginning of `$string`
| `expr index "$string" $substring`         | Numerical position in `$string` of first character in `$substring`* that matches [0 if no match, first character counts as position 1]
| `expr substr $string $position $length`   | Extract `$length` characters from `$string` starting at `$position` [0 if no match, first character counts as position 1]
| `expr match "$string" "\($substring\)"`   | Extract `$substring*`, searching from beginning of `$string`
| `expr "$string" : "\($substring\)"`       | Extract `$substring*` , searching from beginning of `$string`
| `expr match "$string" ".*\($substring\)"` | Extract `$substring*`, searching from end of `$string`
| `expr "$string" : ".*\($substring\)"`     | Extract `$substring*`, searching from end of `$string`

Examples:

    ❯ string=01234567890abcdefgh
    ❯ echo ${string:7}
    7890abcdefgh
    ❯ echo ${string:7:0}

    ❯ echo ${string:7:2}
    78
    ❯ echo ${string:7:-2}
    7890abcdef
    ❯ echo ${string: -7}
    bcdefgh
    ❯ echo ${string: -7:0}

    ❯ echo ${string: -7:2}
    bc
    ❯ echo ${string: -7:-2}
    bcdef
    ❯ set -- 01234567890abcdefgh
    ❯ echo ${1:7}
    7890abcdefgh
    ❯ echo ${1:7:0}

    ❯ echo ${1:7:2}
    78
    ❯ echo ${1:7:-2}
    7890abcdef
    ❯ echo ${1: -7}
    bcdefgh
    ❯ echo ${1: -7:0}

    ❯ echo ${1: -7:2}
    bc
    ❯ echo ${1: -7:-2}
    bcdef
    ❯ array[0]=01234567890abcdefgh
    ❯ echo ${array[0]:7}
    7890abcdefgh
    ❯ echo ${array[0]:7:0}

    ❯ echo ${array[0]:7:2}
    78
    ❯ echo ${array[0]:7:-2}
    7890abcdef
    ❯ echo ${array[0]: -7}
    bcdefgh
    ❯ echo ${array[0]: -7:0}

    ❯ echo ${array[0]: -7:2}
    bc
    ❯ echo ${array[0]: -7:-2}
    bcdef
    ❯ set -- 1 2 3 4 5 6 7 8 9 0 a b c d e f g h
    ❯ echo ${@:7}
    7 8 9 0 a b c d e f g h
    ❯ echo ${@:7:0}

    ❯ echo ${@:7:2}
    7 8
    ❯ echo ${@:7:-2}
    bash: -2: substring expression < 0
    ❯ echo ${@: -7:2}
    b c
    ❯ echo ${@:0}
    ./bash 1 2 3 4 5 6 7 8 9 0 a b c d e f g h
    ❯ echo ${@:0:2}
    ./bash 1
    ❯ echo ${@: -7:0}
    ❯ array=(0 1 2 3 4 5 6 7 8 9 0 a b c d e f g h)
    ❯ echo ${array[@]:7}
    7 8 9 0 a b c d e f g h
    ❯ echo ${array[@]:7:2}
    7 8
    ❯ echo ${array[@]: -7:2}
    b c
    ❯ echo ${array[@]: -7:-2}
    bash: -2: substring expression < 0
    ❯ echo ${array[@]:0}
    0 1 2 3 4 5 6 7 8 9 0 a b c d e f g h
    ❯ echo ${array[@]:0:2}
    0 1
    ❯ echo ${array[@]: -7:0}

References:

- <https://www.gnu.org/software/bash/manual/bash.html#Shell-Parameter-Expansion>
- <https://tldp.org/LDP/abs/html/string-manipulation.html>
- <https://tldp.org/LDP/abs/html/abs-guide.html#REFCARDS>

#### Arithmetic Expansion

    $(( expression ))

Examples:

    ❯ echo $(( 1 + 1 ))
    2
    ❯ echo $(( 3 == 3 ))
    1

References:

- <https://www.gnu.org/software/bash/manual/bash.html#Arithmetic-Substitution>

#### Command Substitution

    $(command-list)
    `command-list`

Examples:

    ❯ echo `date`
    Sat Jul 3 15:57:35 +03 2021
    ❯ echo $(date | cut -d" " -f1,2,3,4,5,6)
    Mon Jul 5 09:29:10 +03
    ❯ cat $(< /etc/hosts)
    # Set zsh shell dotfiles folder ZDOTDIR="$HOME/.config/zsh" umask 0077

References:

- <https://www.gnu.org/software/bash/manual/bash.html#Command-Substitution>

#### Process Substitution

    <(command-list)
    >(command-list)

Examples:

    ❯ pr -mt <(cat /etc/hosts) <(cat /etc/hosts)
    file1-contents file2-contents

    ❯ cat <(brew list --cask --version) <(brew list --formulae --version) 1>/tmp/brew/packages
    .
    .
    .

>- process substitutions happen in parallel; `<(…)` are delegated to separate sub-shells and do their jobs at the same time.

References:

- <https://www.gnu.org/software/bash/manual/bash.html#Command-Substitution>

#### Word Splitting

TODO

#### Filename Expansion

    ❯ echo /etc/host?
    /etc/hosts

    ❯ echo /etc/hos??
    /etc/hosts

    ❯ echo /etc/hos*
    /etc/hosts /etc/hosts.equiv

### Prompt Customization

When executing interactively, bash displays the primary prompt `PS1` when it is ready to read a command, and the secondary prompt `PS2` when it needs more input to complete a command. Bash displays `PS0` after it reads a command but before executing it. Bash displays `PS4` as described above before tracing each command when the `-x` option is enabled. Bash allows these prompt strings to be customized by inserting a number of backslash-escaped special characters that are decoded as follows:

| Char         | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| `\a`         | ASCII bell character (07)                                     |
| `\d`         | date in “Weekday Month Date” format (e.g., “Tue May 26”)      |
| `\e`         | ASCII escape character (033)                                  |
| `\h`         | hostname up to the first ‘.’                                  |
| `\H`         | hostname                                                      |
| `\j`         | number of jobs currently managed by the shell                 |
| `\l`         | basename of the shell’s terminal device name                  |
| `\n`         | newline                                                       |
| `\r`         | carriage return                                               |
| `\s`         | name of the shell                                             |
| `\t`         | current time in 24-hour HH:MM:SS format                       |
| `\T`         | current time in 12-hour HH:MM:SS format                       |
| `\@`         | current time in 12-hour am/pm format                          |
| `\A`         | current time in 24-hour HH:MM format                          |
| `\u`         | username of the current user                                  |
| `\v`         | version of bash (e.g., 2.00)                                  |
| `\V`         | release of bash, version + patch level (e.g., 2.00.0)         |
| `\w`         | current working directory, with tilde abbreviated $HOME       |
| `\W`         | current working directory basename w/ tilde abbreviated $HOME |
| `\!`         | history number of this command                                |
| `\#`         | command number of this command                                |
| `\$`         | if the effective UID is 0, a #, otherwise a $                 |
| `\nnn`       | character corresponding to the octal number `nnn`             |
| `\\`         | literal backslash                                             |
| `\D{format}` | date, format passed to `strftime(3)`                          |
| `\[`         | begin non-printing character sequence                         |
| `\]`         | end non-printing character sequence                           |

>- Non-printing character sequences can be used to embed a terminal con­trol sequence into the prompt.

### Shell types

- **Interactive & Non-Interactive**

    **Interactive shells** are shells wherein user interacts with it, using keyboard. For example, the shell you use to type commands is interactive.

    **Non-Interactive shells** are shells wherein users don’t interact with it. For example, when you run a shell-script, or run a command line program, the computer spawns a non-interactive shell to run it in.

- **Login & Non-Login**

    **Login shells** are shells that source/run/execute a set of pre-designated files once at startup/entry/login and at shutdown/exit/logout. For example, `bash` login shells will look for and source `/etc/bashrc`, `/etc/profile`, `.bash_profile` (else `.bash_login`, else `.profile`) at login, and `.bash_logout` at logout; `zsh` login shells will look for and source `/etc/zshenv`, `.zshenv`, `/etc/zprofile`, `.zprofile`, `/etc/zshrc`, `.zshrc`, `/etc/zlogin`, `.zlogin`, at login, and `.zlogout`, `/etc/zlogout` at logout. These whould be the top-level shell that you use in your terminal.

    **Non-login shells** are shells that source/run/execute another set of pre-designated files once at startup/entry/login. For example, `bash` sources `.bashrc` at login; `zsh` sources `/etc/zshenv`, `.zshenv`, `/etc/zshrc` and `.zshrc` at login. These would be sub-shells that you run within your top-level shell.

Shells can be any one of the two combinations of attributes: interactive login shells (the ones you use), interactive non-login shells (sub-shells within login shells), non-interactive login shells

### Pattern matching

| Syntax            | Semantics                                             |
| ----------------- | ----------------------------------------------------- |
| `*`               | Matches any string, including the null string         |
| `?`               | Matches any single character                          |
| `**/*`            | Matches any directory and sub-directory               |
| `[…]`             | Matches any of the contained characters               |
| `[:CLASS:]`       | Matches characters included in character class `^[1]` |
| `?(pattern-list)` | Matches zero or one occurrence of patterns `^[2]`     |
| `*(pattern-list)` | Matches zero or more occurrences of patterns `^[2]`   |
| `+(pattern-list)` | Matches one or more occurrences of patterns `^[2]`    |
| `@(pattern-list)` | Matches one of patterns `^[2]`                        |
| `!(pattern-list)` | Matches anything except one of patterns `^[2]`        |

    [1]: character classes
    [2]: requires the `extglob` shell option be set via `shopt`

| Class  | Description                         |
| ------ | ----------------------------------- |
| digit  | digit characters                    |
| alpha  | alphabetical characters             |
| alnum  | alphabetical characters and digits  |
| lower  | lowercase alphabetical characters   |
| upper  | uppercase alphabetical characters   |
| print  | printable characters (ASCII 32-126) |
| word   | letters, digits and `_`             |
| punct  | punctuation characters              |
| ascii  | ascii characters                    |
| cntrl  | control characters                  |
| blank  | -                                   |
| space  | -                                   |
| graph  | -                                   |
| xdigit | -                                   |

## ENVIRONMENT

Variable | Description
- | -
`$IFS`| Recognized word delimiters.

## PATHS

Path | Description
- | -
📂 `/etc/shells` | system valid login shells

## SEEALSO

    test(1), expr(1), ascii(7), errno(1), signal(3)

