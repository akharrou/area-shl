---
status: INCOMPLETE
title: "brew"
tags: [macos,package,formulae,cask,applications,command,line,programs,manager]
---

# `brew`

## BRIEF

Manages installation and update of command line and application programs, for MacOS.

## INSTALLATION


```bash
#ℹ︎ installation of `brew`
❯ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


## USECASES

----
#### To search for packages:


```bash
#ℹ︎ regex search/find packages (casks/formulae) by name
❯ brew search --cask --formula "/REGEX/"
```



```bash
#ℹ︎ regex search/find packages (casks/formulae) by description
❯ brew search --cask --formula --desc "/REGEX/"
```



```bash
#ℹ︎ regex search/find formulae (external-command-line-programs) by name and description
❯ brew desc --search "/REGEX/"
```


    ❯ brew desc --name "/REGEX/"   # regex search/find formulae (external-command-line-programs) only by name

    ❯ brew desc --description "/REGEX/"   # regex search/find formulae (external-command-line-programs) only by description

----
#### To get information about packages, and taps repositories:


```bash
#ℹ︎ get/print package terminal information summary
❯ brew info PACKAGE
```



```bash
#ℹ︎ get/print/open package homepage website
❯ brew homepage PACKAGE
```



```bash
#ℹ︎ get/print/open package github formula website
❯ brew info --github PACKAGE
```



```bash
#ℹ︎ get/print/open package in json representation
❯ brew info --json PACKAGE
```



```bash
#ℹ︎ get/print/list dependencies tree of specified package/external-command-line-program
❯ brew deps --tree --full-name PACKAGE
```



```bash
#ℹ︎ get/print/list build dependencies of specified package/external-command-line-program
❯ brew deps --tree --full-name --include-build --annotate PACKAGE
```



```bash
#ℹ︎ get/print/list dependencies (installed) packages (casks/formulae) that specify PACKAGES as [build|test|optional|recommended] dependencies
❯ brew uses --installed [--include-[build|test|optional|recommended]] PACKAGES
```



```bash
#ℹ︎ get/print/list packages dependant on PACKAGES (dependencies)
❯ brew uses --installed [--include-[build|test|optional|recommended]] PACKAGES
```



```bash
#ℹ︎ show specific extra installation options for specified formula package
❯ brew options koekeishiya/formulae/skhd
```

    --with-logging
        Redirect stdout and stderr to log files
    --HEAD
        Install HEAD version


```bash
#ℹ︎ get/print/display package (formula/cask) source Ruby script
❯ brew cat PACKAGE
```



```bash
#ℹ︎ get/print/display taps information
❯ brew tap-info --installed && echo && brew tap-info
```

    homebrew/core: 2 commands, 5698 formulae
    /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core (6,173 files, 457.7MB)
    From: https://github.com/Homebrew/homebrew-core

    homebrew/cask: 3953 casks
    /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask (5,592 files, 344.1MB)
    From: https://github.com/Homebrew/homebrew-cask

    8 taps, 0 pinned, 0 private, 5702 formulae, 4 commands, 22,256 files, 921.0MB


```bash
#ℹ︎ get/print/display latest available version
❯ brew bump PACKAGE
```



```bash
#ℹ︎ get/print/display formula script location path
❯ brew formula FORMULA
```


----
#### To install/postinstall/reinstall/uninstall packages:


```bash
#ℹ︎ install/add packages
❯ brew install PACKAGES
```



```bash
#ℹ︎ install/add external-commands-line-programs
❯ brew install --formula PACKAGES
```



```bash
#ℹ︎ install/add native macOS applications
❯ brew install --cask PACKAGES
```



```bash
#ℹ︎ only install package dependencies
❯ brew install --only-dependencies PACKAGES
```



```bash
#ℹ︎ compile formula from source code, with specified C-Compiler [gcc-N|llvm_clang|clang]
❯ brew install --HEAD --build-from-source -cc clang PACKAGES
```



```bash
#ℹ︎ re-run package (formula) post-installation steps/scripts
❯ brew postinstall FORMULA
```



```bash
#ℹ︎ re-install package (casks/formulae)
❯ brew reinstall PACKAGES
```



```bash
#ℹ︎ symbolically links packages (formulae) to brew’s prefix directory
❯ brew link --dry-run PACKAGES
```



```bash
#ℹ︎ unlink/remove/delete symbolic links of packages (formulae) from brew’s prefix directory
❯ brew unlink --dry-run PACKAGES
```



```bash
#ℹ︎ uninstall/remove/rm external-commands-line-programs/applications
❯ brew uninstall --ignore-dependencies PACKAGES
```


For `brew install` and `reinstall`: unless `HOMEBREW_NO_INSTALL_CLEANUP` is set, `brew cleanup` will then be run for the upgraded formulae or, every 30 days, for all formulae.

----
#### To tap (into other) repositories, i.e to expand software (casks/formulae) available for installion:


```bash
#ℹ︎ set/add/install (external expandatory) repositories
❯ brew tap REPO
```



```bash
#ℹ︎ unset/remove/delete/uninstall (external expandatory) repositories
❯ brew untap REPO
```


These additional Git repos contain descriptions of additional sets of package formulae, so that they may be available for installation.

----
#### To fetch ???:

    ❯ brew fetch --HEAD --build-from-source PACKAGE
    ❯ brew fetch --build-from-source PACKAGE

----
#### To list installed packages (formulae and casks), with version:


```bash
#ℹ︎ get/print/list installed external-commands-line-programs, with versions
❯ brew list --formulae --version
```



```bash
#ℹ︎ get/print/list installed native macOS applications, with versions
❯ brew list --cask --version
```



```bash
#ℹ︎ get/print/list all installed packages (both formulae and casks), with versions
❯ cat <(brew list --cask --version) <(brew list --formulae --version)
```



```bash
#ℹ︎ get/print/list installed packages in long format
❯ brew list -l
```

    ==> Formulae
    total 0
    drwxr-xr-x  3 johndoe  staff   96 Nov  8  2020 adns
    drwxr-xr-x  3 johndoe  staff   96 Jun 28 20:28 aom
    drwxr-xr-x  3 johndoe  staff   96 Feb 26 08:32 apr
    ...


```bash
#ℹ︎ get/print/list installed formulae that aren’t dependencies (non-dependency packages)
❯ brew leaves
```

    adns
    aria2
    aspell
    autojump
    ...


```bash
#ℹ︎ get/print/list all outdated installed packages (casks & formulae)
❯ brew outdated
```

    bat (0.18.1) < 0.18.2
    git-delta (0.8.2) < 0.8.3
    yq (4.9.6) < 4.9.8
    ...


```bash
#ℹ︎ get/print/list casks (native applications) with `auto_updates` or `version :latest`
❯ brew outdated --greedy
```

    bat (0.18.1) < 0.18.2
    git-delta (0.8.2) < 0.8.3
    yq (4.9.6) < 4.9.8
    iterm2 (3.4.1) != 3.4.8
    brave-browser (87.1.18.75,118.75) != 1.26.74.0,126.74
    google-chrome (88.0.4324.150,4324.150) != 91.0.4472.114
    ...


```bash
#ℹ︎ get/print/list tapped (external installable software expandatory) repositories
❯ brew tap
```

    homebrew/core
    homebrew/cask
    homebrew/cask-fonts
    homebrew/cask-versions
    homebrew/services
    homebrew/bundle


```bash
#ℹ︎ get/print/list all pinned (upgrade prevented) packages
❯ brew list --pinned
```



```bash
#ℹ︎ get/print/list pinned taps
❯ brew tap --list-pinned
```


----
#### To check missing dependencies:


```bash
#ℹ︎ test/check for missing package dependencies
❯ brew missing --hide=python@3.9 pillow
```

    python@3.9

----
#### To update, i.e fetch the newest version of Homebrew and all formulae:


```bash
#ℹ︎ fetch newest Homebrew and package (formulae) versions
❯ brew update
```



```bash
#ℹ︎ fetch newest Homebrew and package (formulae) versions, and reset to latest origin/HEAD
❯ brew update-reset
```


----
#### To upgrade outdated casks and outdated, unpinned formulae:


```bash
#ℹ︎ upgrade packages (casks/formulae)
❯ brew upgrade --dry-run
```


For `brew upgrade`: unless `HOMEBREW_NO_INSTALL_CLEANUP` is set, `brew cleanup` will then be run for the upgraded formulae or, every 30 days, for all formulae.

----
#### To cleanup, i.e purge/remove stale/outdated/old lock files/downloads/versions of installed packages (casks/formulae)


```bash
#ℹ︎ remove/delete/uninstall not/no-longer needed dependencies packages (formulae) of other packages (formulae)
❯ brew autoremove --dry-run
```


    ❯ brew cleanup --dry-run [PACKAGES]  # remove/delete/uninstall stale/old/outdated locks/files/packages

Removes all downloads more than 120 days old; adjusted via `HOMEBREW_CLEANUP_MAX_AGE_DAYS`.

----
#### To prevent packages from being upgraded upon `brew upgrade` invocations:


```bash
#ℹ︎ pin/prevent packages from being-upgraded/upgrading
❯ brew pin PACKAGE
```



```bash
#ℹ︎ unpin/unprevent packages from being-upgraded/upgrading
❯ brew unpin PACKAGE
```


Note you cannot pin casks (native applications) because a huge number of them auto-update, which is not something that can be reliably prevented.

----
#### To get/print/list Homebrew’s version, environment variables and paths:


```bash
#ℹ︎ get/print/list homebrew’s current version
❯ brew --version
```

    Homebrew 3.2.2-74-gdbcd764
    Homebrew/homebrew-core (git revision abf09de703; last commit 2021-07-17)
    Homebrew/homebrew-cask (git revision bd7e17f24c; last commit 2021-07-17)


```bash
#ℹ︎ get/print/list homebrew’s git repository location path
❯ brew --repository
```

    /usr/local/Homebrew/


```bash
#ℹ︎ get/print/list homebrew’s cask (native applcations) installations location path
❯ brew --cache
```

    /Users/johndoe/.cache/brew


```bash
#ℹ︎ get/print/list homebrew’s tap (expandatory repository) installations location path
❯ brew --repo [TAPS]
```

    /usr/local/Homebrew/
    /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core


```bash
#ℹ︎ get/print/list homebrew’s formulae (command-line programs) installations location path
❯ brew --cellar [FORMULAE]
```

    /usr/local/Cellar
    /usr/local/Cellar/ripgrep


```bash
#ℹ︎ get/print/list homebrew’s cask (native applcations) installations location path
❯ brew --caskroom [CASKS]
```

    /usr/local/Caskroom
    /usr/local/Cellar/google-crhome


```bash
#ℹ︎ get/print/list homebrew’s formulae installation symbolic links location path
❯ brew --prefix [FORMULAE]
```

    /usr/local
    /usr/local/opt/ripgrep


```bash
#ℹ︎ get/print/list homebrew’s build environment variables, flags, includes, executables, paths
❯ brew --env --shell=auto
```

    export CC="clang"
    export CXX="clang\+\+"
    export OBJC="clang"
    export OBJCXX="clang\+\+"
    export HOMEBREW_CC="clang"
    export HOMEBREW_CXX="clang\+\+"
    export MAKEFLAGS="-j16"
    export CMAKE_PREFIX_PATH="/usr/local"
    export CMAKE_INCLUDE_PATH="/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/System/Library/Frameworks/OpenGL.framework/Versions/Current/Headers"
    export CMAKE_LIBRARY_PATH="/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/System/Library/Frameworks/OpenGL.framework/Versions/Current/Libraries"
    export PKG_CONFIG_LIBDIR="/usr/lib/pkgconfig:/usr/local/Homebrew/Library/Homebrew/os/mac/pkgconfig/11"
    export HOMEBREW_VERBOSE="1"
    export HOMEBREW_GIT="git"
    export HOMEBREW_SDKROOT="/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk"
    export ACLOCAL_PATH="/usr/local/share/aclocal"
    export PATH="/usr/local/Homebrew/Library/Homebrew/shims/mac/super:/usr/bin:/bin:/usr/sbin:/sbin"

----
#### To enable automatic updating/upgrading/cleaning of packages once every specified interval (defaul: 24 hours):


```bash
#ℹ︎ initiate background upgrade and cleanup of packages once every 24 hours
❯ brew autoupdate start --upgrade --cleanup --enable-notification --immediate
```



```bash
#ℹ︎ pause autoupdating
❯ brew autoupdate stop
```



```bash
#ℹ︎ cancel autoupdating
❯ brew autoupdate delete
```


For casks, `brew` might need user account password. If you want to be prompted on a graphical window, instead of via terminal, you can setup `sudo`’s helper `askpass` program and set the environment variable, `SUDO_ASKPASS`, to its path.

----
#### To manage MacOS installations (formulae, casks, taps, apps, services, etc), with `brew bundle` and its `Brewfile`:


```bash
#ℹ︎ list `Brewfile` dependencies
❯ brew bundle list
```



```bash
#ℹ︎ dump list of installed packages, with versions, into `Brewfile`
❯ brew bundle dump --describe --force
```



```bash
#ℹ︎ install, and upgrade all listed `Brewfile` packages
❯ brew bundle install
```



```bash
#ℹ︎ test/check that all dependencies from `Brewfile` are installed
❯ brew bundle check
```



```bash
#ℹ︎ uninstall all dependencies not listed in `Brewfile`
❯ brew bundle cleanup
```


To specify `Brewfile` path, either: set `HOMEBREW_BUNDLE_FILE` with specified location, use `--file` option and specify your location, or use `--global` option for `~/.Brewfile`.

----
#### To access developer functionality:


```bash
#ℹ︎ turn-on verbose, debug, developer, mode flags/variables
❯ env HOMEBREW_VERBOSE=1 HOMEBREW_CURL_VERBOSE=1 HOMEBREW_VERBOSE_USING_DOTS=1 HOMEBREW_DEBUG=1 HOMEBREW_DEVELOPER=1 brew
```



```bash
#ℹ︎ edit/modify/change package (formula/cask) source Ruby script
❯ brew edit PACKAGE
```



```bash
#ℹ︎ check/debug formula Ruby script issues
❯ brew readall TAP
```


## RECIPIES

----
#### To find what package a command is from, or what packages are included in a package:


```bash
#ℹ︎ find/get/print/display/show command’s original brew package, or a packages included commands
❯ ls -l /usr/local/bin | grep FORMULA
```



## INIT

    eval "$(brew shellenv)"
    # export HOMEBREW_PREFIX="/usr/local"
    # export HOMEBREW_CELLAR="/usr/local/Cellar"
    # export HOMEBREW_REPOSITORY="/usr/local/Homebrew"
    # export PATH="/usr/local/bin:/usr/local/sbin${PATH+:$PATH}";
    # export MANPATH="/usr/local/share/man${MANPATH+:$MANPATH}:";
    # export INFOPATH="/usr/local/share/info:${INFOPATH:-}";
    export HOMEBREW_CACHE="${XDG_CACHE_HOME:-"~/.cache"}/brew"
    export HOMEBREW_LOGS="${XDG_CACHE_HOME:-"~/.cache"}/brew/logs"

    # shell completion (https://docs.brew.sh/Shell-Completion)
    # if [[ ${SHELL##*/} = bash ]]; then
    #     if type brew &>/dev/null; then
    #         HOMEBREW_PREFIX="$(brew --prefix)"
    #         if [[ -r "${HOMEBREW_PREFIX}/etc/profile.d/bash_completion.sh" ]];
    #         then
    #             source "${HOMEBREW_PREFIX}/etc/profile.d/bash_completion.sh"
    #         else
    #             for COMP in "${HOMEBREW_PREFIX}/etc/bash_completion.d/"*;
    #             do
    #                 [[ -r "$COMP" ]] && source "$COMP"
    #             done
    #         fi
    #     fi
    # elif [[ ${SHELL##*/} = zsh ]]; then
    #     FPATH=$(brew --prefix)/share/zsh/site-functions:$FPATH
    #     autoload -Uz compinit
    #     compinit
    # fi

## VARIABLES

    export HOMEBREW_BROWSER=$BROWSER
    export HOMEBREW_EDITOR=$EDITOR
    export HOMEBREW_BAT=1
    export HOMEBREW_BAT_CONFIG_PATH="${XDG_CONFIG_HOME:-"~/.config"}/bat/config"

    export HOMEBREW_CASK_OPTS="\
        --quarantine \
        \
        --appdir='/Applications' \
        --colorpickerdir='~/Library/ColorPickers' \
        --prefpanedir='~/Library/PreferencePanes' \
        --qlplugindir='~/Library/QuickLook' \
        --mdimporterdir='~/Library/Spotlight' \
        --dictionarydir='~/Library/Dictionaries' \
        --fontdir='~/Library/Fonts' \
        --servicedir='~/Library/Services' \
        --input-methoddir='~/Library/Input Methods' \
        --internet-plugindir='~/Library/Internet Plug-Ins' \
        --audio-unit-plugindir='~/Library/Audio/Plug-Ins/Components' \
        --vst-plugindir='~/Library/Audio/Plug-Ins/VST' \
        --vst3-plugindir='~/Library/Audio/Plug-Ins/VST3' \
        --screen-saverdir='~/Library/Screen Savers' \
    "

    export HOMEBREW_NO_AUTO_UPDATE=1
    export HOMEBREW_NO_INSTALL_UPGRADE=1
    # export HOMEBREW_NO_INSTALL_CLEANUP=1
    export HOMEBREW_DISPLAY_INSTALL_TIMES=1
    export HOMEBREW_UPDATE_REPORT_ONLY_INSTALLED=1
    export HOMEBREW_FORBIDDEN_LICENSES=""

    export HOMEBREW_AUTO_UPDATE_SECS=300
    export HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS=30
    export HOMEBREW_CLEANUP_MAX_AGE_DAYS=120

    export HOMEBREW_BUNDLE_FILE="$CONFIG/brew/Brewfile"
    # export HOMEBREW_BUNDLE_NO_LOCK=1
    export HOMEBREW_BUNDLE_MAS_SKIP=""
    export HOMEBREW_BUNDLE_BREW_SKIP=""
    export HOMEBREW_BUNDLE_CASK_SKIP=""
    export HOMEBREW_BUNDLE_TAP_SKIP=""
    export HOMEBREW_BUNDLE_WHALEBREW_SKIP=""

    # export HOMEBREW_NO_GITHUB_API=1
    # export HOMEBREW_GIT_NAME=""
    # export HOMEBREW_GIT_EMAIL=""
    # export HOMEBREW_GITHUB_API_TOKEN=""
    # export HOMEBREW_GITHUB_PACKAGES_TOKEN=""
    # export HOMEBREW_GITHUB_PACKAGES_USER=""

    if [[ `uname -s` = *Darwin* ]]; then
        export HOMEBREW_CORE_GIT_REMOTE="https://github.com/Homebrew/homebrew-core"
    elif [[ `uname -s` = *Linux* ]]; then
        export HOMEBREW_ARCH="native"
        export HOMEBREW_CORE_GIT_REMOTE="https://github.com/Homebrew/linuxbrew-core"
        export HOMEBREW_DISPLAY=$DISPLAY
    fi

    export HOMEBREW_COLOR=1
    export HOMEBREW_INSTALL_BADGE="🍺"
    # export HOMEBREW_NO_COLOR=1
    # export HOMEBREW_NO_EMOJI=1
    # export HOMEBREW_FORCE_VENDOR_RUBY=1
    # export HOMEBREW_FORCE_BREWED_GIT=1
    # export HOMEBREW_FORCE_BREWED_CURL=1
    # export HOMEBREW_CURLRC=1
    export HOMEBREW_CURL_RETRIES=3
    export HOMEBREW_NO_ANALYTICS=1
    # export HOMEBREW_NO_BOOTSNAP=1

    export HOMEBREW_FAIL_LOG_LINES=15
    export HOMEBREW_VERBOSE=1
    export HOMEBREW_VERBOSE_USING_DOTS=1
    # export HOMEBREW_CURL_VERBOSE=1
    # export HOMEBREW_DEBUG=1
    # export HOMEBREW_DEVELOPER=1

## ALIASES

    alias brewi="brew info"
    alias brews="brew search"
    alias brewsc="brew search --cask"
    alias brewsf="brew desc --search"
    alias brewa="brew install"
    alias brewr="brew uninstall"
    alias brewp="brew pin"
    alias brewlp="brew list --pinned && brew tap --list-pinned"
    alias brewo="brew update && echo; echo 'OUTDATED:'; brew outdated"
    alias brewu="brew upgrade && brew cleanup"
    alias brewuf="brew upgrade --formula && brew cleanup"
    alias brewuc="brew upgrade --cask && brew cleanup"

## PROCEDURES

    [[ `alias brewl 2>/dev/null` ]] && unalias brewl
    [[ `declare -f brewl 2>/dev/null` ]] && unset -f brewl
    # ❯ brewl PACKAGE   # get listing of packages, with versions
    function brewl()   # get listing of packages, with versions
    {
        if [[ ! -r $CACHE/brew/pkg-listing.txt || $1 = --f* || $1 == -f ]]; then
            [[ ! -d $CACHE/brew ]] &&\
                mkdir -p $CACHE/brew/
            [[ ! -f $CACHE/brew/pkg-listing.txt ]] &&\
                touch $CACHE/brew/pkg-listing.txt
            cat <(brew list --cask --version) <(brew list --formulae --version)\
                1>$CACHE/brew/pkg-listing.txt
            [[ $1 = --force || $1 == -f ]] && set -- ""
        fi
        cat $CACHE/brew/pkg-listing.txt \
        | fzf \
            --multi \
            --query="$1" \
            --preview "brew info \$(echo {} | grep -oE '^(\w-?_?@?\.?)+')" \
            --preview-window "right,50%,nowrap,nofollow,cycle,nohidden"
    }

    # ❯ borigin COMMAND   # [B]rew [Origin]; find/get/print/display/show command’s original brew package, or a package’s included commands
    function borigin()   # [B]rew [Origin]; find/get/print/display/show command’s original brew package, or a packages included commands
    {
        local cmd="$1"

        echo "/usr/local/bin:" \
        && ls -l /usr/local/bin \
            | grep "$cmd" \
            | rg -oP "([\w-]+\.?@?)+ -> (?:\.\./Cellar/)([\w-]+\.?@?)+" \
            | sed -e 's|../Cellar/||' \
        && echo "\\n/usr/local/opt:" \
        && ls -l /usr/local/opt \
            | grep "$cmd" \
            | rg -oP "([\w-]+\.?@?)+ -> (?:\.\./Cellar/)([\w-]+\.?@?)+" \
            | sed -e 's|../Cellar/||'
        return

        # only show origin for existing commands, not commands included in a package
        ls -l /usr/local/bin/*$cmd* \
        | sed -E -e 's|.+/usr/local/bin/||' \
                 -e 's|../Cellar/||' \
                 -e 's|/.+||'
    }


## NOTES

- `brew install` never needs `sudo`. `brew --cask install` may need `sudo` on occasion. You can script it not to terminal prompt you by making use of the (documented) `SUDO_ASKPASS` variable in `man brew-cask`.

- After download, the `.app` bundle is moved to `--appdir=...` if specified, otherwise to the system’s `/Applications` folder (by default).

    A directory under `Caskroom/` is created for the cask. Each version installed of the cask has a separate directory within `Caskroom/CASK/`. Within each `Caskroom/APP/VERSION/` is a symbolic link to the real application bundle. Additionally, if executables are included in the installation script, they are symbolically linked to `/usr/local/bin`.

    Casks:

        /usr/local/Caskroom/visual-studio-code/1.58.2/Visual Studio Code.app -> /Applications/Visual Studio Code.app/
        /usr/local/bin/code -> /Applications/Visual Studio Code.app/Contents/Resources/app/bin/code*

    Forumlas:

        /usr/local/opt/rg -> ../Cellar/ripgrep/13.0.0/
        /usr/local/bin/rg -> ../Cellar/ripgrep/13.0.0/bin/rg*

- Official taps are in `Taps/homebrew/homebrew-…`:

        Taps/homebrew/homebrew-core/
        Taps/homebrew/homebrew-cask/
        Taps/homebrew/homebrew-cask-fonts/
        Taps/homebrew/homebrew-cask-versions/
        Taps/homebrew/homebrew-services/
        Taps/homebrew/homebrew-bundle/

    Other non-official taps are in `Taps/homebrew/…`:

        Taps/homebrew/koekeishiya/
        Taps/homebrew/teamookla/

## PATHS

Path | Description
- | -
`/usr/local/Homebrew/` | Homebrew git repository.
`/usr/local/Homebrew/Library/Homebrew/` | Homebrew standard implementation scripts.
`/usr/local/Homebrew/Library/Taps/` | Homebrew extention implementation scripts.
`/usr/local/Caskroom/` | Directory containing (versioned) installations of casks (native applications).
`/usr/local/Cellar/` | Directory containing (versioned) installations of formulae (command-line programs).

## SEE

    brew(1)

## SEEALSO

    mas, MacPorts, softwareupdate

## SEEFURTHER

- [🌎 Home](https://brew.sh/)
- [🌎 Documentation](https://docs.brew.sh/)
- [🌎 Repository](https://github.com/Homebrew/brew)
- [🌎 Page: Brew cask](https://github.com/Homebrew/homebrew-cask)
- [🌎 Page: Brew whalebrew](https://github.com/whalebrew/whalebrew)
- [🌎 Page: Brew drivers](https://github.com/Homebrew/homebrew-cask-drivers)
- [🌎 Page: Brew fonts](https://github.com/Homebrew/homebrew-cask-fonts)
- [🌎 Page: Brew services](https://github.com/Homebrew/homebrew-services)
