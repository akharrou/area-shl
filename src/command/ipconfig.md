---
status: TODO
title: "ipconfig"
tags: [get,print,view,control,internet,protocol,ip,configuration,state]
---

# `ipconfig`

## INSTALLATION


```bash
#ℹ︎ installation of `ipconfig`
❯ *comes pre-installed*
```


## USECASES

----
#### To manage IP configuration:


```bash
#ℹ︎ get/print/view/display local internet protocol (IP) address
❯ ipconfig getifaddr en0
```



```bash
#ℹ︎ renew DHCP lease
❯ ipconfig set en0 DHCP
```


----
#### To get IP information fields:


```bash
#ℹ︎ get/print/list DHCP information
❯ ipconfig getpacket en0
```

    op = BOOTREPLY
    htype = 1
    dp_flags = 0
    hlen = 6
    hops = 0
    xid = 1956115059
    secs = 0
    ciaddr = 0.0.0.0
    yiaddr = 192.168.4.10
    siaddr = 192.168.4.1
    giaddr = 0.0.0.0
    chaddr = 0:3:93:7a:d7:5c
    sname = dhcp.mycompany.net
    file =
    options:
    Options count is 10
    dhcp_message_type (uint8): ACK 0x5
    server_identifier (ip): 192.168.4.1
    lease_time (uint32): 0x164a
    subnet_mask (ip): 255.255.255.0
    router (ip_mult): {192.168.4.1}
    domain_name_server (ip_mult): {192.168.4.1}
    domain_name (string): mycompany.net

    end (none):


```bash
#ℹ︎ get/print/display local router internet protocol (IP) address
❯ ipconfig getoption en0 router
```



## NOTES

See `netintro(4)`.

## SEE

    ipconfig(1)

## SEEALSO

    ifconfig(8), netstat, sysctl(8), system_profiler(8), netintro(4)

