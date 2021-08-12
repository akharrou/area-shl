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
❯ sudo -e FILE
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
📂 `/etc/sudoers` | Sudoers file.
📂 `/etc/sudo.conf` | File containing `sudo` configurations. Stores path to `askpass` helper program.

## SEE

    sudo(8)

## SEEALSO

    security(1), su(1)

