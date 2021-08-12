---

status: INCOMPLETE
title: "traceroute"
tags: [follow,trace,print,packet,route,to,IPv4,IPv6,host,network]
---

# `traceroute`

## BRIEF

Tracks the route one’s packets follow. Elicits an ICMP TIME_EXCEEDED response from each gateway along the path to some host.

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To trace the route of one’s package:


```bash
#ℹ︎ trace internet packet route to specified host
❯ traceroute HOST
```


```bash
#ℹ︎ trace internet packet route to Cloudflare’s DNS
❯ traceroute 1.1.1.1
```


```bash
#ℹ︎ trace internet packet route to Google’s DNS
❯ traceroute 8.8.8.8
```



## NOTES

Some available DNSs:

    HOST                             |  IP ADDRESS
    -------------------------------  |  ----------------------------------
    Cloudflare                       |  1.1.1.1, 1.0.0.1
    google-public-dns-a.google.com.  |  8.8.8.8, 8.8.4.4
    ns1.telstra.net                  |  139.130.4.5
    OpenDNS                          |  208.67.222.222, 208.67.220.220
    Norton Connectsafe               |  198.153.192.1, 198.153.194.2
    DNSResolvers.com                 |  205.210.42.205, 64.68.200.200

## SEE

    traceroute(1)
    traceroute6(1)

## SEEALSO

    route(8), ping(8), netstat

