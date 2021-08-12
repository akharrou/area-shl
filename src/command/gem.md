---
status: TODO
title: "gem"
tags: [ruby,language,package,manager]
---

# `gem`

## INSTALLATION


```bash
#ℹ︎ installation of `gem`
❯ brew install ruby
```


## USECASES

----
#### To manage Ruby packages:


```bash
#ℹ︎ search ruby packages
❯ gem search GEMNAME
```


```bash
#ℹ︎ install ruby packages
❯ gem install GEMNAME
```



```bash
#ℹ︎ update ruby packages
❯ gem update [GEMNAME]
```


```bash
#ℹ︎ cleanup ruby packages
❯ gem cleanup
```



```bash
#ℹ︎ list ruby packages
❯ gem list
```



## INIT

    export PATH="/usr/local/lib/ruby/gems/3.0.0/bin:$PATH"


## PATHS

Path | Description
- | -
📂 `/usr/local/lib/ruby/gems/3.0.0/bin/` | Default directory containing binaries installed by `gem`.

## SEE

    gem(1)

## SEEALSO

    ruby(1)

## SEEFURTHER

- [🌎 Home](https://rubygems.org/)
- [🌎 Documentation](https://guides.rubygems.org/)
- [🌎 Repository](https://www.github.com/)
