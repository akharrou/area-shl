---
status: INCOMPLETE
title: "dirs"
tags: [get,print,display,list,user,visited,remembered,directory,directories,stack]
---

# `dirs`

## BRIEF

    dirs [-clpv] [+N] [-N]

    Display the list of currently remembered directories. Directories find their way onto the list with the `pushd` command; you can get back up through the list with the `popd` command.

    The `-l` flag specifies that `dirs` should not print shorthand versions of directories which are relative to your home directory.  This means that `~/bin` might be displayed as `/homes/bfox/bin`.  The `-v` flag causes `dirs` to print the directory stack with one entry per line, prepending the directory name with its position in the stack.  The `-p` flag does the same thing, but the stack position is not prepended. The `-c` flag clears the directory stack by deleting all of the elements.

    +N  displays the Nth entry counting from the left of the list shown by dirs when invoked without options, starting with zero.

    -N  displays the Nth entry counting from the right of the list shown by dirs when invoked without options, starting with zero.

## INSTALLATION


```bash
#ℹ︎ installation of `dirs`
❯ *comes builtin*
```


## USECASES

----
#### To list directory stack (i.e previously visited directories):


```bash
#ℹ︎ list directory stack
❯ dirs     
```


```bash
#ℹ︎ list directory stack, one per line
❯ dirs -p  
```


```bash
#ℹ︎ list directory stack, one per line, full paths
❯ dirs -pl 
```


```bash
#ℹ︎ list directory stack, one per line, full paths, enumerated
❯ dirs -plv
```



## ALIASES

    alias dirs="dirs -plv"   # list, one per line, full paths, enumerated


## SEE

    dirs(1)

## SEEALSO

    cd, autojump

