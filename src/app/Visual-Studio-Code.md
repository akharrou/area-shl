---
status: DONE
title: "Visual-Studio-Code"
tags: [macos,windows,linux,native,application,microsoft,source,code,text,editor]
---

# Visual-Studio-Code

## INSTALLATION


```bash
#ℹ︎ installation of `Visual-Studio-Code`
❯ brew install --cask Visual-Studio-Code
```


```bash
#ℹ︎ installation of `Visual-Studio-Code-Insiders`
❯ brew install --cask Visual-Studio-Code-Insiders
```


Visual Studio Code Explorers can only be downloaded and installed manually from source repository.

## USECASES

----
#### To open vscode windows, folders, and files [at specified line [and column]]:


```bash
#ℹ︎ open new vscode window
❯ code -n
```


```bash
#ℹ︎ open, and add, folder to existing vscode workspace
❯ code -a <folder>
```



```bash
#ℹ︎ open vscode on file
❯ code --goto file
```


```bash
#ℹ︎ open vscode on file, at line 4
❯ code --goto file:4
```


```bash
#ℹ︎ open vscode on file, at line 4, column 12
❯ code --goto file:4:12
```


----
#### To read from standard in, by appending `-`:


```bash
#ℹ︎ read standard input stream, as vscode file
❯ echo hi | code -
```

    ❯ while 1; do echo "hello world \!"; sleep 1; done | code -

----
#### To list extensions [with version information]:


```bash
#ℹ︎ list vscode extensions
❯ code --list-extensions
```


```bash
#ℹ︎ list vscode extensions, with versions
❯ code --list-extensions --show-versions
```


```bash
#ℹ︎ list vscode extensions, with versions, to file
❯ code --list-extensions --show-versions > extensions.txt
```


----
#### To open distinct vscode instance with external user data folder:


```bash
#ℹ︎ open vscode instance with user-data folder
❯ code --user-data-dir <dir>
```



## VARIABLES

    CODE_OPTS="\
        --user-data-dir $HOME/Library/Application\ Support/Code/ \
        --extensions-dir $HOME/.vscode/extensions \
    "
    CODE_INSIDERS_OPTS="\
    "
    CODE_EXPLORATION_OPTS="\
    "

## ALIASES

    alias code-exploration="\
        open -a /Applications/Visual\ Studio\ Code\ -\ Exploration.app"

    # alias code="code ${CODE_OPTS}"
    # alias codei="code-insiders ${CODE_INSIDERS_OPTS}"
    alias codee="code-exploration ${CODE_EXPLORATION_OPTS}"

    if [[ $SHELL = *zsh ]]; then
        alias -s {md,rmd,Rmd}="code"
    fi

## PROCEDURES

    # TODO: fuzzy search, vscode settings, keybindings, snippets, projects; with preview, and opening vscode on line at will
    # fn ()
    # {
    # }

    # ❯ c [ARGS ...]    # Fuzzy search files --> Open vscode @file:line:column of selected content
    function c()   # Fuzzy search files --> Open vscode @file:line:column of selected content
    {
        if [[ "$#" -ne 0 ]]; then
            /usr/local/bin/code $@
            return
        fi
        fl | xargs -r /usr/local/bin/code --goto
    }

    # ❯ cf [ARGS ...]    # Fuzzy search files --> Open vscode @file
    function cf()   # Fuzzy search files --> Open vscode @file
    {
        if [[ "$#" -ne 0 ]]; then
            /usr/local/bin/code $@
            return
        fi
        fzf | xargs -r /usr/local/bin/code --goto
    }

    # cg [<pattern> [VSCODE-ARGS...]]    # Fuzzy search files --> Open vscode @file:line:column of selected content
    # fn cg() { flc $1 | xargs -r code ${@:2} --goto }


## SHORTCUTS

Key | Action
- | -
++ctrl+p++ | open recent files in current window
++ctrl+r++ | open recent files/folders in current/new window
++ctrl+cmd+w++ | hide/show tabs bar.

## PATHS

Path | Description
- | -
📂 `~/.vscode` | global workspace settings
📂 `~/.vscode/extensions` | global workspace extensions
📂 `~/Library/Application\ Support/Code/` | application data folder
📂 `~/Library/Application\ Support/Code/User/` | user-data folder
📂 `~/Library/Application\ Support/Code/User/settings.json` | user settings
📂 `~/Library/Application\ Support/Code/User/keybindings.json` | user keybindings
📂 `~/Library/Application\ Support/Code/User/snippets/` | user snippets
📂 `~/Library/Application\ Support/Code/User/globalStorage/alefragnani.project-manager/projects.json` | user projects

## SEEALSO

    neovim, sublime-text, visual-studio, notion

## SEEFURTHER

- [🌎 Home](https://code.visualstudio.com/)
- [🌎 Documentation](https://code.visualstudio.com/docs)
- [🌎 Repository](https://github.com/microsoft/vscode)
