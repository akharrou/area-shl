---
status: INCOMPLETE
title: "login"
tags: [login,into,computer,system]
---

# `login`

## INSTALLATION


```bash
#ℹ︎ installation of `login`
❯ *comes pre-installed*
```


## USECASES

----
#### To login into computer system, on specified user account:


```bash
#ℹ︎ login into computer system, on specified user account
❯ login [USER]
```

    Password:*password*


## PATHS

Path | Description
- | -
📂 `/etc/motd` | Message-of-the-day.
📂 `/etc/nologin` | Disallows logins.
📂 `/var/run/utmpx` | Current logins.
📂 `/var/mail/user` | System mailboxes.
📂 `.hushlogin` | Makes login quieter.
📂 `/etc/security/audit_user` | User flags for auditing.
📂 `/etc/security/audit_control` | Global flags for auditing.

## SEE

    login(1)

## SEEALSO

    logout(1), exit(1)

