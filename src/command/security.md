---
status: INCOMPLETE
title: "security"
tags: [manage,administer,interface,security,framework,create,add,modify,change,delete,remove,keychains,keys,certificates,passcodes,passphrases,passwords]
---

# `security`

## BRIEF

Data is protected with end-to-end encryption, the highest level of data security. Data is protected with a key derived from information unique to your device, combined with your device passcode, which only you know. No one else can access or read this data.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To create/delete keychains:


```bash
#ℹ︎ create keychains
❯ security create-keychain -P KEYCHAIN-NAME
```


```bash
#ℹ︎ delete keychains
❯ security delete-keychain
```


----
#### To lock/unlock keychains:


```bash
#ℹ︎ lock specified keychain
❯ security lock-keychain "~/Library/Keychain/login.keychain-db"
```


```bash
#ℹ︎ unlock specified keychain
❯ security unlock-keychain "~/Library/Keychain/login.keychain-db"
```


----
#### To manage keychain items:


```bash
#ℹ︎ (short) create/add keychain generic (e.g. application) passwords items
❯ security add-generic-password -a $USER -s KEYWHERE -T KEYACCESS -w
```



```bash
#ℹ︎ (long) create/add keychain generic (e.g. application) passwords items
❯ security add-generic-password -a $USER -s KEYWHERE -D KEYKIND -l KEYNAME  -j KEYCOMMENT -T KEYACCESS -w
```



```bash
#ℹ︎ update/change/modify keychain generic (e.g. application) passwords items
❯ security add-generic-password -a $USER -s KEYWHERE -U -w
```



```bash
#ℹ︎ delete generic keychain passwords items
❯ security delete-generic-password -a $USER -D KEYKIND -l KEYNAME -s KEYWHERE
```


----
#### To get/print/save specified keychain items:


```bash
#ℹ︎ get/print specified generic keychain password item
❯ security find-generic-password -a KEYACCOUNT -D KEYKIND -s KEYWHERE -l KEYNAME -w 
```



```bash
#ℹ︎ get/save/store keychain items in positional arguments
❯ set pass=`security find-generic-password -l KEYNAME -w`
```



```bash
#ℹ︎ get/save/store keychain items in environment parameter/variable
❯ PASS=`security find-generic-password -l KEYNAME -w`
```


----
#### To get/print all/specified keychain databases, and/or their contents:


```bash
#ℹ︎ get/print list all keychains databases files
❯ security list-keychain
```

        "~/Library/Keychains/login.keychain-db"
        "~/Library/Keychains/Test.keychain-db"
        "/Library/Keychains/System.keychain"


```bash
#ℹ︎ get/print default keychain database file
❯ security default-keychain
```

        "~/Library/Keychains/login.keychain-db"


```bash
#ℹ︎ get/print login keychain database file
❯ security login-keychain
```

        "~/Library/Keychains/login.keychain-db"


```bash
#ℹ︎ get/print information contents of specified keychains databases files
❯ security dump-keychain "~/Library/Keychains/login.keychain-db"
```


----
#### To run `security` interactively:

    ❯ security -i

----
#### Others todo:

    ❯ security create-keypair   # create an asymmetric key pair ??
    ❯ security create-db   # create keychain database ??

    ❯ security find-key   # find keychain keys items
    ❯ security find-identity   # find identity (certificate + private key)
    ❯ security find-certificate   # find keychain certificate item
    ❯ security find-internet-password   # find internet keychain password item

    ❯ security show-keychain-info   # show the settings for keychain
    ❯ security dump-trust-settings   # display contents of trust settings
    ❯ security get-identity-preference   # get preferred identity for service

    ❯ security add-certificates   # add keychain certificates items
    ❯ security delete-certificate   # delete keychain certificates items

    ❯ security add-internet-password   # add keychain internet passwords items
    ❯ security delete-internet-password   # delete internet keychain passwords items

    ❯ security add-trusted-cert   # add trusted certificates
    ❯ security delete-identity   # delete a certificate and its private key from a keychain

    ❯ security set-keychain-settings   # set keychain settings
    ❯ security set-keychain-password   # set keychain password

    ❯ security set-key-partition-list   # set the partition list of a key
    ❯ security set-generic-password-partition-list   # set partition list of generic password item
    ❯ security set-internet-password-partition-list   # set partition list of internet password item

    ❯ security set-identity-preference   # set the preferred identity to use for a service

    ❯ security remove-trusted-cert   # remove trusted certificate(s)

    ❯ security authorize   # perform authorization operations
    ❯ security authorizationdb   # make changes to the authorization policy database

    ❯ security export   # export items from a keychain
    ❯ security import   # import items into a keychain

## RECIPES

----
#### Typical workflow:

    ❯ security list-keychains
        "/Users/johndoe/Library/Keychains/login.keychain-db"
        "/Library/Keychains/System.keychain"

    ❯ security default-keychain
        "/Users/johndoe/Library/Keychains/login.keychain-db"

    ❯ security add-generic-password -a $USER -s app.stackexchange -w
    *prompted for password*

    ❯ PASS=`security find-generic-password -a $USER -s app.stackexchange -w`
    *prompted for password*
    J*QW#78gcw8sg8ASG87g32d3

    ❯ security delete-generic-password -a $USER -s app.stackexchange


## NOTES

Note that the "service" shows up as the "where" field in keychain, label "shows" up as "name". Nice work on that UX consistency Apple.

By providing the password non-interactively, i.e in an executed command string, we are necessarily leaking it [the password] into the process table; this happens even if the password is being expanded from some other process, or variable. Sadly, the `security` utility has no other method of non-interactively accepting a password but on the command-line[1]. For this reason, it may be preferable to create the secret using the GUI application.

    ❯ security add-generic-password -a jschauma -s playground -w gVmMQgEEF

The `security` utility offers the `-i` flag to enter interactive mode, allowing you to provide the password without leaking it into the process table, but that does not allow shell expansion within the interactive prompt:

    ❯ security -i
    security> add-generic-password -a jschauma -s playground -w gVmMQgEEF[bcS15_=zD*]sHQ[IkOVY_
    security> ^D

Alternatively, you can also let `security` prompt you interactively for the password, by leaving out the last argument to the `-w` flag:

    ❯ security add-generic-password -a ${USER} -s playground -w
    password data for new item: *******
    retype password for new item: *******

## PATHS

Path | Description
- | -
📂 `~/Library/Keychains/` | Directory containing keychain database files.

## SEE

    security(1)

## SEEALSO

    sudo, systemkeychain
    AmazonWebServices Key Management System (AWS KMS)

## SEEFURTHER

- [🌎 Keychain User Guide](https://support.apple.com/guide/keychain-access/)
- [🌎 Set up iCloud Keychain](https://support.apple.com/en-us/HT204085)
- [🌎 iCloud security overview](https://support.apple.com/en-us/HT202303)
