---
status: DONE
title: "uni"
tags: [search,query,lookup,identify,get,print,display,unicode,characters,database]
---

# `uni`

## INSTALLATION


```bash
#ℹ︎ installation of `uni`
❯ brew install uni
```


## USECASES

----
#### To get/print/display unicode character information about specified characters:

    ❯ echo "€" | uni i
    ❯ uni i €

```bash
#ℹ︎ get/print/display unicode information about specified characters
❯ uni identify €
```

         cpoint  dec    utf8        html       name (cat)
    ’€’  U+20AC  8364   e2 82 ac    &euro;     EURO SIGN (Currency_Symbol)

----
#### To search/find/get/print/display unicode characters by matching descriptions:

    ❯ uni s euro

```bash
#ℹ︎ search/find/get/print/display unicode characters by matching descriptions
❯ uni search euro -q
```

    ’₠’  U+20A0  8352   e2 82 a0    &#x20a0;   EURO-CURRENCY SIGN (Currency_Symbol)
    ’€’  U+20AC  8364   e2 82 ac    &euro;     EURO SIGN (Currency_Symbol)
    ’𐡷’  U+10877 67703  f0 90 a1 b7 &#x10877;  PALMYRENE LEFT-POINTING FLEURON (Other_Symbol)
    ’🏰’ U+1F3F0 127984 f0 9f 8f b0 &#x1f3f0;  EUROPEAN CASTLE (Other_Symbol)
    .
    .
    .

----
#### To get/print/display specified unicode point character [ranges]:

    ❯ uni p U+1F923 -q

```bash
#ℹ︎ get/print/display specified unicode point character
❯ uni print U+1F923 -q
```

    ’🤣’ U+1F923 129315 f0 9f a4 a3 &#x1f923;  ROLLING ON THE FLOOR LAUGHING (Other_Symbol)


```bash
#ℹ︎ get/print/display specified unicode point range characters
❯ uni print 2042..2044 -q
```

    ’⁂’  U+2042  8258   e2 81 82    &#x2042;   ASTERISM (Other_Punctuation)
    ’⁃’  U+2043  8259   e2 81 83    &hybull;   HYPHEN BULLET (Other_Punctuation)
    ’⁄’  U+2044  8260   e2 81 84    &frasl;    FRACTION SLASH (Math_Symbol)

    ❯ uni e -or g:face-glasses g:face-hat
    	name                          (cldr)
    🤠	cowboy hat face               (cowgirl)
    🥳	partying face                 (celebration, hat, horn)
    🥸	disguised face                (glasses, incognito, nose)
    😎	smiling face with sunglasses  (bright, cool)
    🤓	nerd face                     (geek)
    🧐	face with monocle             (stuffy)


## NOTES

- For `uni emoji`:

    - Set include emoji groups via: `g:, group:` group name, e.g.:

        ❯ uni e smiling g:cat-face

        Matches everything in the `cat-face` group with `smiling` in the name.

    - Set the gender via: `-g, -gender`, followed by:

            p, person, people
            m, man, men, male
            f, female, w, woman, women

        E.g.:

        ❯ uni e person -gender male

    - Set the skin tone modifier via: `-t, -tone`, followed by:

            n,  none
            l,  light
            ml, mediumlight, medium-light
            m,  medium
            md, mediumdark, medium-dark
            d,  dark

        E.g.:

        ❯ uni e group:hands -tone mediumlight

## SEE

    uni(1)

## SEEALSO

    figlet(1)

## SEEFURTHER

- [🌎 Repository](https://github.com/arp242/uni)
