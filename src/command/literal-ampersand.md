---
status: INCOMPLETE
title: "literal-ampersand (&)"
tags: [run,launch,execute,background,job,command]
---

# Literal ampersand (`&`)

## BRIEF

`&` is a control operator. A trailing ampersand directs the shell to run the command in the background, i.e it forks and runs it in a separate sub-shell, as a job, asynchronously.

The shell immediately prints out the forked process’s job number (in square brackets) and PID (stored in `$!`), then returns a status of `0`, and continues processing further commands in the pipeline. Once forked, the process can be seen in the jobs, and processes, table.

    $ ./myscript.py &
    [1] 1337
    $ echo $!
    1337
    $ jobs -lp
    [1]+  1337 Running   ./myscript.py &
    $ ps 1337
      PID   TT  STAT      TIME COMMAND
    1337 s006  SN     0:00.00 ./myscript.py &

The forked process’s standard output remains attached to the parent process, i.e the shell, so any output will still appear in it, and so appear in the terminal.

The job can be brought back to the command line, before it finishes, with the foreground command: `fg`

`&` can be used to run muliple jobs asynchronously, i.e at the same time, in separate sub-shells, though still always attached to the parent shell.

./script.py & ./script2.py & ./script3.py &

When running multiple jobs asynchronously, you may want to pipe the standard output/error of each to separate files or `/dev/null`.

To detach the job from the parent shell’s job control, see: `disown`.
To detach the job from the parent shell’s process, see: `nohup(1)`.
To prevent signal hangups (SIGHUP), e.g. when terminating the shell, see: `disown`, and `nohup(1)`.

## INSTALLATION


```bash
#ℹ︎ installation of literal ampersand (`&`)
❯ *comes builtin*
```


## USECASES

----
#### To run a job in the background:


```bash
#ℹ︎ run/launch/execute jobs/commands in the background asynchronously
❯ sleep 5 & echo hi
```

    [1] 54162
    hi
    .
    .
    .
    [1]  + 54162 done       sleep 5


## NOTES

`&` puts the job in the background, makes it block on attempting to read input, and makes the shell not wait for its completion.

## SEE

    builtins(1)

## SEEALSO

    fg, disown, nohup(1), jobs

## SEEFURTHER

- [🌎 Documentation](https://www.gnu.org/software/bash/manual/bash.html#Pipelines)
