---
status: TODO
title: "sudo"
tags: [do,run,execute,command,as,another,user,privilege,super]
---

# `sudo`

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To edit files as super-user:


```bash
#ℹ︎ do/run/execute specified command as root user (superuser)
❯ sudo COMMAND
```



```bash
#ℹ︎ do/run/execute specified command as specified user
❯ sudo --user=USER COMMAND
```



```bash
#ℹ︎ edit files as super-user
❯ sudo -e <FILE>
```


## GUIDES

----
#### To setup `sudo`’s `askpass` helper program:

`askpass` is a helper program that will be called upon invocation of `sudo -A`. It’s sole purpose is to prompt user for his account’s password via a graphical window.

For MacOS follow these steps:

1. Create a generic Keychain password

    ```zsh
    ❯ security add-generic-password -a $USER -s "sudo-askpass" -w
    ```

    The name of the Keychain item can be anything you want, here we called it: `sudo-askpass`; we’ll be using that name again below.

2. Create `askpass` script

    ```zsh
    ❯ SUDO_ASKPASS="/usr/local/bin/askpass"; touch $SUDO_ASKPASS; chmod 755 $SUDO_ASKPASS
    ```

    ```zsh
    #!/usr/bin/env zsh
    security find-generic-password -a $USER -s "sudo-askpass" -w
    ```

    The script should have the path: `/usr/local/bin/askpass`, and should be given execution permissions: `u=rwx,g=rx,o=rx`.

3. Create and export the `SUDO_ASKPASS` environment variable

    ```zsh
    export SUDO_ASKPASS="/usr/local/bin/askpass"
    ```

    In one of your shell’s initialization files (e.g. `.bashrc`, `.zshrc`), declare and assign the `SUDO_ASKPASS` environment variable to the path of the created script.

4. Use `askpass` helper program

    ```zsh
    ❯ sudo -A echo Hello world
    *graphical popup window prompting for user account password*
    Hello world
    ```


## VARIABLES

    # `sudo -A` helper executable that spits password to standard output when invoked
    export SUDO_ASKPASS="/usr/local/bin/askpass"

## PROCEDURES

    function sys_askpass()
    {
        osascript -e "do shell script \"$*\" with administrator privileges"
    }

    # function custom_askpass()
    # {
    #     osascript -e 'display dialog "Enter user password:" default answer "" with hidden answer with icon file "System:Library:Frameworks: SecurityInterface.framework:Versions:A:Resources: Lock_Locked State@2x.png" with title "sudo"' | cut -d: -f3
    # }


## PATHS

Path | Description
- | -
`/etc/sudoers` | Sudoers file.
`/etc/sudo.conf` | File containing `sudo` configurations. Stores path to `askpass` helper program.

## SEE

    sudo(8)

## SEEALSO

    security(1), su(1)

