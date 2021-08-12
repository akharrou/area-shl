---
status: DONE
title: "errno"
tags: [search,lookup,find,get,print,list,error,codes,numbers,names,description]
---

# `errno`

## INSTALLATION


```bash
#ℹ︎ installation of `errno`
❯ *comes pre-installed*
```


## USECASES

----
#### To find name/code and description corresponding to error code/name:


```bash
#ℹ︎ search/get/print code and description of single specified error name
❯ errno ENAMETOOLONG
```

    ENAMETOOLONG 63 File name too long


```bash
#ℹ︎ search/get/print name and description of single specified error number code
❯ errno 63
```

    ENAMETOOLONG 63 File name too long

----
#### To list all error names, code numbers and description:


```bash
#ℹ︎ get/print/list all error names, number codes and description
❯ errno --list
```

    EPERM 1 Operation not permitted
    ENOENT 2 No such file or directory
    ESRCH 3 No such process
    EINTR 4 Interrupted system call
    EIO 5 Input/output error
    ENXIO 6 Device not configured
    E2BIG 7 Argument list too long
    ENOEXEC 8 Exec format error
    EBADF 9 Bad file descriptor
    ECHILD 10 No child processes
    EDEADLK 11 Resource deadlock avoided
    ENOMEM 12 Cannot allocate memory
    EACCES 13 Permission denied
    EFAULT 14 Bad address
    ENOTBLK 15 Block device required
    EBUSY 16 Resource busy
    EEXIST 17 File exists
    EXDEV 18 Cross-device link
    ENODEV 19 Operation not supported by device
    ENOTDIR 20 Not a directory
    EISDIR 21 Is a directory
    EINVAL 22 Invalid argument
    ENFILE 23 Too many open files in system
    EMFILE 24 Too many open files
    ENOTTY 25 Inappropriate ioctl for device
    ETXTBSY 26 Text file busy
    EFBIG 27 File too large
    ENOSPC 28 No space left on device
    ESPIPE 29 Illegal seek
    EROFS 30 Read-only file system
    EMLINK 31 Too many links
    EPIPE 32 Broken pipe
    EDOM 33 Numerical argument out of domain
    ERANGE 34 Result too large
    EAGAIN 35 Resource temporarily unavailable
    EWOULDBLOCK 35 Resource temporarily unavailable
    EINPROGRESS 36 Operation now in progress
    EALREADY 37 Operation already in progress
    ENOTSOCK 38 Socket operation on non-socket
    EDESTADDRREQ 39 Destination address required
    EMSGSIZE 40 Message too long
    EPROTOTYPE 41 Protocol wrong type for socket
    ENOPROTOOPT 42 Protocol not available
    EPROTONOSUPPORT 43 Protocol not supported
    ESOCKTNOSUPPORT 44 Socket type not supported
    ENOTSUP 45 Operation not supported
    EPFNOSUPPORT 46 Protocol family not supported
    EAFNOSUPPORT 47 Address family not supported by protocol family
    EADDRINUSE 48 Address already in use
    EADDRNOTAVAIL 49 Can’t assign requested address
    ENETDOWN 50 Network is down
    ENETUNREACH 51 Network is unreachable
    ENETRESET 52 Network dropped connection on reset
    ECONNABORTED 53 Software caused connection abort
    ECONNRESET 54 Connection reset by peer
    ENOBUFS 55 No buffer space available
    EISCONN 56 Socket is already connected
    ENOTCONN 57 Socket is not connected
    ESHUTDOWN 58 Can’t send after socket shutdown
    ETOOMANYREFS 59 Too many references: can’t splice
    ETIMEDOUT 60 Operation timed out
    ECONNREFUSED 61 Connection refused
    ELOOP 62 Too many levels of symbolic links
    ENAMETOOLONG 63 File name too long
    EHOSTDOWN 64 Host is down
    EHOSTUNREACH 65 No route to host
    ENOTEMPTY 66 Directory not empty
    EPROCLIM 67 Too many processes
    EUSERS 68 Too many users
    EDQUOT 69 Disc quota exceeded
    ESTALE 70 Stale NFS file handle
    EREMOTE 71 Too many levels of remote in path
    EBADRPC 72 RPC struct is bad
    ERPCMISMATCH 73 RPC version wrong
    EPROGUNAVAIL 74 RPC prog. not avail
    EPROGMISMATCH 75 Program version wrong
    EPROCUNAVAIL 76 Bad procedure for program
    ENOLCK 77 No locks available
    ENOSYS 78 Function not implemented
    EFTYPE 79 Inappropriate file type or format
    EAUTH 80 Authentication error
    ENEEDAUTH 81 Need authenticator
    EPWROFF 82 Device power is off
    EDEVERR 83 Device error
    EOVERFLOW 84 Value too large to be stored in data type
    EBADEXEC 85 Bad executable (or shared library)
    EBADARCH 86 Bad CPU type in executable
    ESHLIBVERS 87 Shared library version mismatch
    EBADMACHO 88 Malformed Mach-o file
    ECANCELED 89 Operation canceled
    EIDRM 90 Identifier removed
    ENOMSG 91 No message of desired type
    EILSEQ 92 Illegal byte sequence
    ENOATTR 93 Attribute not found
    EBADMSG 94 Bad message
    EMULTIHOP 95 EMULTIHOP (Reserved)
    ENODATA 96 No message available on STREAM
    ENOLINK 97 ENOLINK (Reserved)
    ENOSR 98 No STREAM resources
    ENOSTR 99 Not a STREAM
    EPROTO 100 Protocol error
    ETIME 101 STREAM ioctl timeout
    EOPNOTSUPP 102 Operation not supported on socket
    ENOPOLICY 103 Policy not found
    ENOTRECOVERABLE 104 State not recoverable
    EOWNERDEAD 105 Previous owner died
    EQFULL 106 Interface output queue is full
    ELAST 106 Interface output queue is full


## NOTES

Signals:

    No Name       Default Action     Description
     1 SIGHUP     terminate process  terminal line hangup
     2 SIGINT     terminate process  interrupt program
     3 SIGQUIT    create core image  quit program
     4 SIGILL     create core image  illegal instruction
     5 SIGTRAP    create core image  trace trap
     6 SIGABRT    create core image  abort program (formerly SIGIOT)
     7 SIGEMT     create core image  emulate instruction executed
     8 SIGFPE     create core image  floating-point exception
     9 SIGKILL    terminate process  kill program
    10 SIGBUS     create core image  bus error
    11 SIGSEGV    create core image  segmentation violation
    12 SIGSYS     create core image  non-existent system call invoked
    13 SIGPIPE    terminate process  write on a pipe with no reader
    14 SIGALRM    terminate process  real-time timer expired
    15 SIGTERM    terminate process  software termination signal
    16 SIGURG     discard signal     urgent condition present on socket
    17 SIGSTOP    stop process       stop (cannot be caught or ignored)
    18 SIGTSTP    stop process       stop signal generated from keyboard
    19 SIGCONT    discard signal     continue after stop
    20 SIGCHLD    discard signal     child status has changed
    21 SIGTTIN    stop process       control terminal background read attempted
    22 SIGTTOU    stop process       control terminal background write attempted
    23 SIGIO      discard signal     I/O is possible on a descriptor (fcntl(2))
    24 SIGXCPU    terminate process  cpu time limit exceeded (see setrlimit(2))
    25 SIGXFSZ    terminate process  file size limit exceeded (see setrlimit(2))
    26 SIGVTALRM  terminate process  virtual time alarm (see setitimer(2))
    27 SIGPROF    terminate process  profiling timer alarm (see setitimer(2))
    28 SIGWINCH   discard signal     Window size change
    29 SIGINFO    discard signal     status request from keyboard
    30 SIGUSR1    terminate process  User defined signal 1
    31 SIGUSR2    terminate process  User defined signal 2

## SEE

    errno(1)

## SEEALSO

    signal(3)

