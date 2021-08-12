---
status: INCOMPLETE
title: "speedtest"
tags: [check,test,internet,input,output,download,upload,inbound,outbound,speed,test]
---

# `speedtest`

## INSTALLATION


```bash
#ℹ︎ installation of `speedtest`
❯ tap brew install speedtest
```


## USECASES

----
#### To check/test/get/print/display internet input/output/i/o/download/upload/inbound/outbound speed:


```bash
#ℹ︎ check/test/get/print/display internet input/output/i/o/download/upload/inbound/outbound speed
❯ speedtest --progress=yes --unit=Mbps --precision=5
```

        Speedtest by Ookla
         Server: Speedtest.net - New York, NY (id = 10390)
            ISP: Comcast Cable
        Latency:    57.81 ms   (3.65 ms jitter)
       Download: 76.82813 Mbps (data used: 80.9 MB)
         Upload: 37.58784 Mbps (data used: 65.3 MB)
    Packet Loss:     0.0%
     Result URL: https://www.speedtest.net/result/c/8ae1220c...

----
#### To get/print/display list nearest/nearby internet service provider servers, and select them for speed test:


```bash
#ℹ︎ get/print/display list nearest/nearby internet service provider servers
❯ speedtest --servers
```


    ❯ speedtest --server-id=SERVERID


## PATHS

Path | Description
- | -
📂 `/etc/ssl/certs/ca-certificates.crt` | ?
📂 `/etc/pki/tls/certs/ca-bundle.crt` | ?
📂 `/usr/share/ssl/certs/ca-bundle.crt` | ?
📂 `/usr/local/share/certs/ca-root-nss.crt` | ?
📂 `/etc/ssl/cert.pem` | Certificate files checked.

## SEE

    speedtest(1)

## SEEALSO

    netstat(1)

