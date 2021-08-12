---
status: INCOMPLETE
title: "say"
tags: [converts,text,strings,files,to,audible,audio,speech]
---

# `say`

## INSTALLATION


```bash
#ℹ︎ installation of `say`
❯ *comes pre-installed*
```


## USECASES

----
#### To speak/output text input to audio output [file]:


```bash
#ℹ︎ speak/output text, as audio
❯ say --voice=Alex "Hello, world"
```

    ❯ echo "Hello, world." | say
    ❯ say <<< "Hello, world."
    ❯ say << eof
    Hello world
    eof


```bash
#ℹ︎ speak/output text file, as audio
❯ say --voice=Alex --output-file=out.m4a "Hello, world." && afplay out.m4a   
```



```bash
#ℹ︎ speak/output text file, as audio
❯ say --input-file=<(echo "Hello, world.")   
```



```bash
#ℹ︎ convert text to audio source file
❯ say -f file.txt -o output.m4a
```



## SEE

    say(1)

## SEEALSO

    afplay(1)

