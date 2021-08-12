---
status: INCOMPLETE
title: "zsh/spaceship"
tags: [zsh,zshell,shell,theme,prompt,spaceship]
---

# `zsh/spaceship`

## INSTALLATION


```bash
#ℹ︎ installation of `spaceship`
❯ git clone https://github.com/spaceship-prompt/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt" --depth=1
```



## INIT

    ZSH_THEME="spaceship-prompt/spaceship"

## VARIABLES

    # Adds a newline character before each prompt line
    SPACESHIP_PROMPT_ADD_NEWLINE="false"

    # Customize prompt widget order
    SPACESHIP_PROMPT_ORDER=(
        time          # Time stamps section
        user          # Username section
        dir           # Current directory section
        host          # Hostname section
        git           # Git section (git_branch + git_status)
        hg            # Mercurial section (hg_branch  + hg_status)
        package       # Package version
        gradle        # Gradle section
        maven         # Maven section
        node          # Node.js section
        ruby          # Ruby section
        elixir        # Elixir section
        xcode         # Xcode section
        swift         # Swift section
        golang        # Go section
        php           # PHP section
        rust          # Rust section
        haskell       # Haskell Stack section
        julia         # Julia section
        docker        # Docker section
        aws           # Amazon Web Services section
        gcloud        # Google Cloud Platform section
        venv          # virtualenv section
        conda         # conda virtualenv section
        pyenv         # Pyenv section
        dotnet        # .NET section
        ember         # Ember.js section
        kubectl       # Kubectl context section
        terraform     # Terraform workspace section
        exec_time     # Execution time
        line_sep      # Line break
        battery       # Battery level and status
        vi_mode       # Vi-mode indicator
        jobs          # Background jobs indicator
        exit_code     # Exit code section
        char          # Prompt character
    )


## PATHS

Path | Description
- | -
📂 `$ZSH_CUSTOM/themes/spaceship-prompt` | Directory containg theme.

## SEEALSO

    starship, zsh-powerlevel10k

## SEEFURTHER

- [🌎 Home](https://spaceship-prompt.sh/)
- [🌎 Configuration](https://spaceship-prompt.sh/options/)
- [🌎 Repository](https://github.com/spaceship-prompt/spaceship-prompt)
