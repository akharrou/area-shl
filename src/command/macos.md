---
status: TODO
title: "macos"
tags: [operating,system,appleco]
---

# `macos`

## RECIPIES

----
#### Miscellaneous commands:


## PATHS

Path | Description
- | -
`/` | Primary hierarchy root, and root directory of the entire file system hierarchy.

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
`/boot` | Boot loader files (e.g., kernels, `initrd`). Standard unix filesystem hierarchy

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
`/bin/` | Essential command binaries that need to be available in single-user mode, including to bring up the system or repair it, for all users (e.g., `cat`, `ls`, `cp`). These binaries that are part of the OS.

        Some Linux distributions no longer differentiate between `/bin` and `/usr/bin` and between `/sbin` and `/usr/sbin`. They may symlink `/bin` to `/usr/bin` and `/sbin` to `/usr/sbin`. Other distributions choose to consolidate all four, symlinking them to `/usr/bin`.
`/sbin/` | Essential system (or superuser) adminstrative utility binaries.

        Stands for "system (or superuser) binaries" and contains fundamental/essential utility binaries, such as `init`, usually needed to start, maintain and recover the system.

        Some Linux distributions no longer differentiate between `/sbin` and `/usr/sbin`. They may symlink `/sbin` to `/usr/sbin`.
`/lib/` | Originally essential C libraries, not Fortran ones, for the binaries in `/bin` and `/sbin`. On modern systems, it contains the shared libraries needed by programs in `/bin`, and possibly loadable kernel module or device drivers. Linux distributions may have variants `/lib32` and `/lib64` for multi-architecture support. Some Linux distributions no longer differentiate between `/lib` and `/usr/lib` and have `/lib` symlinked to `/usr/lib`.
`/opt/` | Directory for storing optionally installed, unbundled/add-on, non-self compiled, external, prepackaged-binary/application-bundle software.

        For example, `someapp` would be installed in `/opt/someapp`, with one of its command being `/opt/someapp/bin/foo`, its configuration file would be in `/etc/opt/someapp/foo.conf`, and its logs, spool and similar files in `/var/opt/someapp/logs/foo.access`.

        Unbundled packages meaning, packages that are not part of the operating system distribution, but provided by an independent source.
`/tmp/` | Temporary files.

        Contains temporary files created by apps and the system. A place for temporary files not expected to survive a reboot. Many systems clear this directory upon startup or use `tmpfs` to implement it.
`/var/` | Contains log files and other files whose content is variable.

        Stands for variable. A place for files that might change frequently - especially in size, for example e-mail sent to users on the system, or process-ID lock files.

        📂  /var/log/
            Contains various system log files.

        📂  /var/mail/
            The place where all incoming mail is stored. Users (other than root) can access their own mail only. Often, this directory is a symbolic link to `/var/spool/mail`.

        📂  /var/spool/
            Spool for tasks waiting to be processed (e.g., print queues, outgoing mail queue).

        📂  /var/src/
            The place where the uncompiled source code of some programs is.

        📂  /var/opt/
            Variable data from add-on packages that are stored in `/opt`.

        📂  /var/lib/
            Application state information.

            Persistent data modified by programs as they run (e.g., databases, packaging system metadata, etc.).

        📂  /var/lock/
            Stores lock files to track resources in use.

        📂  /var/cache/
            Application cache data.

            Such data are locally generated as a result of time-consuming I/O or calculation. The application must be able to regenerate or restore the data. The cached files can be deleted without loss of data.

        📂  /var/run/
            System run-time variable data.

            This directory contains system information data describing the system since it was booted. In FHS 3.0, `/var/run` is replaced by `/run`.

        📂  /var/tmp/
            Temporary files to be preserved between system reboots.
`/run/` | Run-time variable data.

        Information about the running system since last boot, e.g., currently logged-in users and running daemons. Files under this directory must be either removed or truncated at the beginning of the boot process, but this is not necessary on systems that provide this directory as a temporary filesystem (tmpfs).

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
`/srv/` | Server data (data for services provided by system).
`/sys/` | In some Linux distributions, contains a `sysfs` virtual filesystem, containing information related to hardware and the operating system.
`/proc/` | `procfs` virtual filesystem showing information about processes as files.

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
`/etc` | Host-specific system-wide configuration files and system databases.

        This directory historically held everything that did not belong elsewhere, however, the FHS restricts `/etc` to static configuration files and may not contain binaries.

        The name stands for "et cetera", but now it is re-explained as "Editable Text Configurations", or "Extended Tool Chest".

    Some of the main configuration files include:

    📂  /etc/passwd
    📂  /etc/hosts
    📂  /etc/group
    📂  /etc/sudoers
`/etc/paths, /etc/paths.d/` | $PATH defaults. Sourced on login shell initialization.
`/etc/manpaths, /etc/manpaths.d/` | $MANPATH defaults. Sourced on login shell initialization.
`/etc/shells` | list of acceptable shells
`/etc/ftpusers` | list of users disallowed ftp access

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
`/usr/` | Contains non-essential command-line binaries, libraries, header files, and other data.
        The "user file system": originally the directory holding user home directories, but later used to split the operating system’s programs over two disks so that basic commands would either appear in `/bin` or `/usr/bin`. It now holds executables, libraries, and shared resources that are not system critical, like the "X Window System", "KDE", "Perl", etc.
`/usr/bin/` | Other non-essential system binaries.

        Other system binaries, along side `/bin/`, that are non-essential (not needed in single-user mode); for all users.
`/usr/sbin/` | Other non-essential system binaries (e.g., daemons for various network services).

        Other system binaries, along side `/sbin/`.
`/usr/include/` | Standard include files.

        Stores the development headers used throughout the system. Header files are mostly used by the `#include` directive in C language, which historically is how the name of this directory was chosen.
`/usr/lib/` | Libraries for the binaries in `/usr/bin`, `/usr/sbin`, and programs elsewhere.

        Stores the needed libraries and data files for programs stored within `/usr` or elsewhere.
`/usr/libexec/` | Holds programs meant to be executed by other programs rather than by users directly. Linux distributions have traditionally moved the contents of this directory into `/usr/lib`.
`/usr/src/` | Source code (e.g., the kernel source code with its header files).
`/usr/local/` | Host-specific tertiary hierarchy for local data.

        Directory for storing self-compiled and maintained software. Resembles `/usr` in structure, but its subdirectories are used for additions not part of the operating system distribution, such as custom programs or files.

        The difference between `/opt` and `/usr/local`, is that `/usr/local` is for software not managed by the system packager, but still following the standard unix deployment rules; for this reason you have `/usr/local/bin`, `/usr/local/sbin` `/usr/local/include`.

        The idea behind using a seperate hierarchy is to avoid clashes with files that are part of the operating system, which would either be overwritten or overwrite the local ones otherwise.

        /usr/local/bin/
        /usr/local/sbin/
        /usr/local/lib/
        /usr/local/libexec/
        /usr/local/opt/
        /usr/local/etc/
        /usr/local/share/
        /usr/local/var/

    📂  /usr/share/
    	Architecture-independent (shared) program data.

        On Linux and modern BSD derivatives, this directory has subdirectories such as `man` for manpages, that used to appear directly under `/usr` in older versions.

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
`/dev` | Device files directory that contains file representations of peripheral devices and pseudo-devices (e.g., `/dev/null`, `/dev/disk0`, `/dev/sda1`, `/dev/tty`, `/dev/random)`.

    Some of the main and special device files include:

        📂  /dev/null
            A device file that discards all data written to it but reports that the write operation succeeded.

        📂  /dev/null
            A device file that accepts and discards all input written to it; provides an `end-of-file` indication when read from.

        📂  /dev/zero
            A device file that accepts and discards all input written to it; produces a continuous stream of null characters (zero-value bytes) as output when read from.

        📂  /dev/full
            Aka "the always full device", is a device file that produces a continuous stream of null characters (zero-value bytes) as output when read from, and generates an `ENOSPC` ("disk full") error when attempting to write to it.

        📂  /dev/random
            A device file that produces bytes generated by the kernel’s cryptographically secure pseudorandom number generator. Sometimes variants such as `/dev/urandom` or `/dev/arandom` are also provided.

    Device naming convention: https://en.wikipedia.org/wiki/Device_file#Naming_conventions.

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
`/media/` | Mount points for removable media.

        Default mount point for removable devices, such as USB sticks, media players, CD-ROMs, etc. By common sense, the directory itself, whose subdirectories are mountpoints, is on the root partition itself.
`/mnt/` | Temporarily mounted filesystems.

        Stands for mount. Empty directory commonly used by system administrators as a temporary mount point. By common sense, the directory itself, whose subdirectories are mountpoints, is on the root partition itself.

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
`/root/` | Home directory for the root user (or superuser).

        The home directory for the superuser root - that is, the system administrator. This account’s home directory is usually on the initial filesystem, and hence not in `/home` (which may be a mount point for another filesystem) in case specific maintenance needs to be performed, during which other filesystems are not available. Such a case could occur, for example, if a hard disk drive suffers physical failures and cannot be properly mounted. By convention, this directory is on the root partition itself; in any case, it is not a link to `/home/root` or any such thing.
`/home/` | Contains user home directories on Linux and some other systems. In the original version of Unix, home directories were in `/usr` instead. Some systems use or have used different locations still: macOS has home directories in `/Users`, older versions of BSD put them in `/u`, FreeBSD has `/usr/home`.

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
`/System/` | This directory contains the system resources required by macOS to run. These resources are provided by Apple and must not be modified. This directory comprises the contents of the system domain.
`/Network/` | This directory contains the list of computers in the local area network.
`/Volumes/` | This directory contains mounted devices and volumes, either virtual or real, such as hard disks, CD’s, DVD’s, DMG mounts, etc.
`/Applications/` | This directory is where you install apps intended for use by all users of a computer. The App Store installs apps purchased by the user in this directory automatically.
`/Applications/Utilities/` | Contains a subset of apps that are intended for use in managing the local system.
`**/Library` | Directory where the system and developer code/apps store all of their related/custom data and resources. Developers use this directory to store data files, caches, resources, preferences, and even user data in some specific situations. Contains all user-specific files.

        There are several `Library` directories throughout the system:

        📂  /System/Library
            This directory is reserved for use by Apple.

        📂  /Library
            Apps that share resources between users store those resources in this `Library` directory. Sandboxed apps are not permitted to use this directory.

        📂  ~/Library
            This is the directory developers use the most because it is the one that contains all user-specific files. In iOS, `Library` is placed inside the apps data bundle. In macOS, it is the app’s sandbox directory or the current user’s home directory (if the app is not in a sandbox).

        Key subdirectories of the `Library` directory:

        📂  **/Library/Application Support/
            This directory stores all app data files except those associated with the user’s documents. For example, you might use this directory to store app-created data files, configuration files, templates, or other fixed or modifiable resources that are managed by the app.

        📂  **/Library/Caches/
            This directory stores any app-specific support files that your app can re-create easily.

        📂  **/Library/Frameworks/
            Frameworks that must be shared by multiple apps can be installed in either the local or user domain. The Frameworks directory in the system domain stores the frameworks you use to create your macOS apps.

        📂  **/Library/Preferences/
            This directory contains app-specific preference files. Developers should not create files in this directory themselves. Instead, they should use the `NSUserDefaults` class or `CFPreferences` API to get and set preference values for their app.

        For more a more complete list of `Library` subdirectories see "macOS Library Directory Details": https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/MacOSXDirectories/MacOSXDirectories.html#//apple_ref/doc/uid/TP40010672-CH10-SW1
`/Users/` | This directory contains one or more user home directories. The user home directory is where user-related files are stored. A typical user’s home directory includes the following subdirectories:

        📂  ~/Applications
            Contains user-specific apps.

        📂  ~/Desktop
            Contains the items on the user’s desktop.

        📂  ~/Documents
            Contains user documents and files.

        📂  ~/Downloads
            Contains files downloaded from the Internet.

        📂  ~/Library
            Contains user-specific app files (hidden in macOS 10.7 and later).

        📂  ~/Movies
            Contains the user’s video files.

        📂  ~/Music
            Contains the user’s music files.

        📂  ~/Pictures
            Contains the user’s photos.

        📂  ~/Public
            Contains content the user wants to share.

        📂  ~/Sites
            User-specific root website folder, contains web pages used by the user’s personal site; ("Web Sharing" must be enabled to display these pages). Note, global (top-level) root website files are stored by default in `/Library/WebServer/Documents`.

        The preceding directories are for storing user documents and media only. Apps must not write files to the preceding directories unless explicitly directed to do so by the user. The sole exception to this rule is the Library directory, which apps may use to store data files needed to support the current user.

        Of the subdirectories, only the "Public" directory is accessible by other users on the system. Access to the other directories is restricted by default.

## SEE

    hier(7)

## SEEALSO

    windows, linux, raseberry-pi, arduino

## SEEFURTHER

- [🌎 Home](https://developer.apple.com/)
- [🌎 Documentation: File Hierarchy Standard](https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html)
- [🌎 Documentation: File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html)
- [🌎 Page: Github ➤ Awesome Macos Command Line](https://github.com/herrbischoff/awesome-macos-command-line)
