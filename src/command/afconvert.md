---
status: DONE
title: "afconvert"
tags: [convert,audio,sources,files]
---

# `afconvert`

## INSTALLATION


```bash
#ℹ︎ installation of `afconvert`
❯ *comes pre-installed*
```


## USECASES

----
#### To convert audio sources files formats:


```bash
#ℹ︎ convert audio sources files format
❯ afconvert SRC -f FORMAT
```


```bash
#ℹ︎ convert audio sources files format
❯ afconvert SRC DST -f FORMAT
```



## NOTES

Audio file `-f` and data formats `-d` each support the following formats:

    ’3gpp’ = 3GP Audio (.3gp)
               data_formats: ’Qclp’ ’aac ’ ’aace’ ’aacf’ ’aach’ ’aacl’
                             ’aacp’ ’samr’
    ’3gp2’ = 3GPP-2 Audio (.3g2)
               data_formats: ’Qclp’ ’aac ’ ’aace’ ’aacf’ ’aach’ ’aacl’
                             ’aacp’ ’samr’
    ’adts’ = AAC ADTS (.aac, .adts)
               data_formats: ’aac ’ ’aach’ ’aacp’
    ’ac-3’ = AC3 (.ac3)
               data_formats: ’ac-3’

    ’AIFC’ = AIFC (.aifc, .aiff, .aif)
               data_formats: I8 BEI16 BEI24 BEI32 BEF32 BEF64 UI8 ’ulaw’  ’alaw’
                             ’MAC3’ ’MAC6’ ’ima4’ ’QDMC’ ’QDM2’  ’Qclp’ ’agsm’

    ’AIFF’ = AIFF (.aiff, .aif)
               data_formats: I8 BEI16 BEI24 BEI32

    ’amrf’ = AMR (.amr)
               data_formats: ’samr’ ’sawb’

    ’m4af’ = Apple MPEG-4 Audio - Lossless (.m4a, .m4r)
               data_formats: ’aac ’ ’aace’ ’aacf’ ’aach’ ’aacl’ ’aacp’
                             ’ac-3’ ’alac’ ’ec-3’ ’paac’ ’pac3’ ’qec3’ ’zec3’

    ’m4bf’ = Apple MPEG-4 AudioBooks (.m4b)
               data_formats: ’aac ’ ’aace’ ’aacf’ ’aach’ ’aacl’ ’aacp’ ’paac’

    ’caff’ = CAF - Apple Core Audio Format (.caf)
               data_formats: ’.mp1’ ’.mp2’ ’.mp3’ ’QDM2’ ’QDMC’ ’Qclp’
                             ’Qclq’ ’aac ’ ’aace’ ’aacf’ ’aach’ ’aacl’
                             ’aacp’ ’ac-3’ ’alac’ ’alaw’ ’dvi8’ ’ec-3’
                             ’ilbc’ ’ima4’ I8 BEI16 BEI24 BEI32 BEF32
                             BEF64 LEI16 LEI24 LEI32 LEF32 LEF64 ’ms\x00\x02’
                             ’ms\x00\x11’ ’ms\x001’ ’ms \x00’ ’paac’ ’pac3’
                             ’pec3’ ’qaac’ ’qac3’ ’qach’ ’qacp’ ’qec3’
                             ’samr’ ’ulaw’ ’zaac’ ’zac3’ ’zach’ ’zacp’  ’zec3’

    ’ec-3’ = EC3 (.ec3)
               data_formats: ’ec-3’
    ’MPG1’ = MPEG Layer 1 (.mp1, .mpeg, .mpa)
               data_formats: ’.mp1’
    ’MPG2’ = MPEG Layer 2 (.mp2, .mpeg, .mpa)
               data_formats: ’.mp2’
    ’MPG3’ = MPEG Layer 3 (.mp3, .mpeg, .mpa)
               data_formats: ’.mp3’

    ’mp4f’ = MPEG-4 Audio - Lossy (.mp4)
               data_formats: ’aac ’ ’aace’ ’aacf’ ’aach’ ’aacl’ ’aacp’
                             ’ac-3’ ’ec-3’ ’qec3’ ’zec3’

    ’NeXT’ = NeXT/Sun (.snd, .au)
               data_formats: I8 BEI16 BEI24 BEI32 BEF32 BEF64 ’ulaw’
    ’Sd2f’ = Sound Designer II (.sd2)
               data_formats: I8 BEI16 BEI24 BEI32
    ’WAVE’ = WAVE (.wav)
               data_formats: UI8 LEI16 LEI24 LEI32 LEF32 LEF64 ’ulaw’ ’alaw’

## SEE

    afconvert(1)
    afconvert -h

## SEEALSO

    afplay(1), afinfo(1), afhash(1), afida(1)

