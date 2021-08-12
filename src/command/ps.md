---
status: TODO
title: "ps"
tags: [get,print,process,status,information,table,report]
---

# `ps`

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To expose process information:


```bash
#ℹ︎ expose process information; i.e executed command, and its evaluated arguments
❯ ps -eww <pid>
```



## NOTES

### Passing passwords

Expansions, of any sort, do not prevent exposure of process information in the process table, even if but for a few moments. This is enough for an attacker to compromise that information. Example, all the following commands result in leakage, no matter the strategy:

    ❯ bash -c "echo $(echo "secret") & sleep 1" & ps -eww $!
    ❯ echo "secret" > /tmp/passwd; bash -c "echo `cat /tmp/passwd` & sleep 1" & ps -eww $!
    ❯ PASSWD=secret; bash -c "cat <(echo ${PASSWD}) & sleep 1" & ps -eww $!

```bash
#ℹ︎ expose process information, leak secrets/passwords information on command line
❯ echo "secret" > /tmp/passwd; PASSWD=$(cat /tmp/passwd); bash -c "echo ${PASSWD} & sleep 1" & ps -eww $!
```

    [1] 76381
      PID TTY           TIME CMD
    76381 ttys009    0:00.00 bash -c echo secret & sleep 1
                                            ^
                                         *leaked*

Instead pass sensitive information from protected storage and via `/dev/stdin` and/or FIFOs (process substitutions `<(…)`).


```bash
#ℹ︎ safely pass secrets/passwords information on command line
❯ umask 0077; bash -c "cat <(cat /tmp/passwd) & sleep 1" & ps -eww $!
```

    [1] 83342
      PID TTY           TIME CMD
    83342 ttys009    0:00.00 bash -c cat <(cat /tmp/passwd) & sleep 1
                                                    ^
                                                  *safe*

Side-note: on some systems, process substitution does not honor the user’s `umask`, instead creates fifo mode `0660`, leading to a possible information disclosure vulnerability (data race/leak).

    ❯ umask 0077; bash -c "ls -l <(echo /tmp/passwd) & sleep 1" & ps -eww $!
    [1] 2404
      PID TTY           TIME CMD
     2404 ttys015    0:00.00 bash -c ls -l <(echo /tmp/passwd) & sleep 1
    prw-rw----  0 johndoe  staff  12 Jun 27 23:11 /dev/fd/63
        ^
     *risky*

Best practice recommendations:

- Either in `~/.bashrc` or, better, system wide, set a restrictive `umask` This helps keep any credentials you might create in the filesystem (actual files or fifos) stay protected from other users. `umask 0077` is your friend.
- Either in `~/.bashrc` or, better, system wide, disable shell history This also helps unconsciously leaking credentials that you may have entered on the command-line (for example via `export SECRET=bacon` or `cmd -p bacon`, trusting `cmd` to not leak the password into the process table).
- Avoid storing secrets in configuration files within your project directory, lest they be compromised by rookies, and/or accidently commmited to revision control systems.
- If possible, at runtime retrieve the secret from protected-storage (e.g. file, fifo), or key-management-services (e.g. Keychain on macOS, AmazonWebServices Key Management System) and feed it into your program without any intermediate files. This requires your program in question to:
- Allow passing of the secret from a file (fifo/`<()`) or standard input (`/dev/stdin`); this avoids leaking into process-table/shell-history.

Sources:

- https://www.netmeister.org/blog/passing-passwords.html
- https://www.netmeister.org/blog/keychain-passwords.html
- https://diogomonica.com/2017/03/27/why-you-shouldnt-use-env-variables-for-secret-data/

## SEE

    ps(1)

## SEEALSO

    kill, pgrep, pkill, top

