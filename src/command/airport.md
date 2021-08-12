---
status: INCOMPLETE
title: "airport"
tags: [manage,manipulate,Apple,airport,get,print,scan,wireless,networks,status,information]
---

# `airport`

## BRIEF

    ❯ airport INTERFACE VERB OPTIONS

    INTERFACE
        If an interface is not specified, airport will use the first AirPort interface on the system.

    VERB
        Is one of the following:

        prefs
            If specified with no key value pairs, displays a subset of AirPort preferences for the specified interface.

            Preferences may be configured using key=value syntax. Keys and possible values are specified below. Boolean settings may be configured using ’YES’ and ’NO’.

            DisconnectOnLogout (Boolean)
            JoinMode (String)
                Automatic
                Preferred
                Ranked
                Recent
                Strongest
            JoinModeFallback (String)
                Prompt
                JoinOpen
                KeepLooking
                DoNothing
            RememberRecentNetworks (Boolean)
            RequireAdmin (Boolean)
            RequireAdminIBSS (Boolean)
            RequireAdminNetworkChange (Boolean)
            RequireAdminPowerToggle (Boolean)
           AllowLegacyNetworks (Boolean)
            WoWEnabled (Boolean)

        logger
            Monitor the driver’s logging facility.

        sniff
            If a channel number is specified, airportd will attempt to configure the interface to use that channel before it begins sniffing 802.11 frames. Captures files are saved to `/tmp`. Requires super user privileges.

        debug
            Enable debug logging. A debug log setting may be enabled by prefixing it with a `+`, and disabled by prefixing it with a `-`.

            AirPort Userland Debug Flags
                DriverDiscovery
                DriverEvent
                Info
                SystemConfiguration
                UserEvent
                PreferredNetworks
                AutoJoin
                IPC
                Scan
                802.1x
                Assoc
                Keychain
                RSNAuth
                WoW
                P2P
                Roam
                BTCoex
                AllUserland - Enable/Disable all userland debug flags

            AirPort Driver Common Flags
                DriverInfo
                DriverError
                DriverWPA
                DriverScan
                AllDriver - Enable/Disable all driver debug flags

            AirPort Driver Vendor Flags
                VendorAssoc
                VendorConnection
                AllVendor - Enable/Disable all vendor debug flags

            AirPort Global Flags
                LogFile - Save all AirPort logs to /var/log/wifi.log

    OPTIONS
        Is one of the following: No options currently defined.

Legacy commands: (supported arguments)

    -c[<arg>], --channel=[<arg>]
        Set arbitrary channel on the card

    -z, --disassociate
        Disassociate from any network

    -I, --getinfo
        Print current wireless status, e.g. signal info, BSSID, port type etc.

    -s[<arg>], --scan=[<arg>]
        Perform a wireless broadcast scan. Will perform a directed scan if the optional <arg> is provided

    -x, --xml
        Print info as XML

    -P, --psk
        Create PSK from specified pass phrase and SSID. The following additional arguments must be specified with this command:

            --password=<arg>
                Specify a WPA password

            --ssid=<arg>
                Specify SSID when creating a PSK

    -h, --help
        Show this help

Examples:

Configuring preferences (requires admin privileges)

    sudo airport en1 prefs JoinMode=Preferred RememberRecentNetworks=NO RequireAdmin=YES

Sniffing on channel 1:

    airport en1 sniff 1

## INSTALLATION


```bash
#ℹ︎ installation of `airport`
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print information about current and surrounding networks:


```bash
#ℹ︎ run/perform wireless internet networks broadcast scan
❯ airport --scan
```

    SSID BSSID             RSSI CHANNEL HT CC SECURITY
      N1 51:2d:e9:71:40:60 -70  36      Y  -- WPA2(PSK/AES/AES)
      N2 51:2d:e9:71:40:90 -69  36      Y  -- WPA2(PSK/AES/AES)
      N3 51:2d:e9:71:40:20 -68  5,+1    Y  -- WPA2(PSK/AES/AES)


```bash
#ℹ︎ get/print current wireless status information
❯ airport --getinfo --xml
```


## RECIPIES

----
#### To


```bash
#ℹ︎ get/print current network Service Set Identifier (SSID)
❯ airport -I | awk ’/ SSID: (.+)/ {print $2}’
```


The abbreviation SSID stands for Service Set Identifier. This is the unique name that identifies a wireless network.


## INIT

    [[ ! -L /usr/local/bin/airport ]] &&\
        ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/local/bin/airport


## SEE

    airport

## SEEALSO

    networksetup(8)

