---
status: INCOMPLETE
title: "gcloud"
tags: [google,cloud,products,services,interface]
---

# `gcloud`

## BRIEF

Tools and libraries for interacting with Google Cloud products and services.

## INSTALLATION


```bash
#ℹ︎ installation
❯ brew install google-cloud-sdk
```


## USECASES

----
#### To automatically setup `gcloud` with Google account and Google Cloud Platform project:


```bash
#ℹ︎ initialize/setup account and project configuration
❯ gcloud init
```


```bash
#ℹ︎ get/print/display current environment information
❯ gcloud info
```


----
#### To create project and set it in configuration:


```bash
#ℹ︎ create/make new project, with specified project-id
❯ gcloud projects create PROJECTIDNAME
```



```bash
#ℹ︎ delete/remove existing project, with specified project-id
❯ gcloud projects delete PROJECTIDNAME
```



```bash
#ℹ︎ undelete/retrieve/put-back deleted project, with specified project-id
❯ gcloud projects undelete PROJECTIDNAME
```



```bash
#ℹ︎ get/print/display project information
❯ gcloud projects describe PROJECTIDNAME
```

    createTime: "2021-08-09T16:38:33.127Z"
    lifecycleState: ACTIVE
    name: PROJECTIDNAME
    projectId: PROJECTIDNAME
    projectNumber: "259161594029"


```bash
#ℹ︎ get/print/display current available projects
❯ gcloud projects list
```


----
#### To manage/get/set active configuration settings:


```bash
#ℹ︎ set current account
❯ gcloud config set account GOOGLEACCOUNT
```

    Updated property [core/project].


```bash
#ℹ︎ set current project
❯ gcloud config set project PROJECTIDNAME
```

    Updated property [core/project].


```bash
#ℹ︎ get/print/display current configuration state
❯ gcloud config list
```

    [core]
    account = account@gmail.com
    disable_usage_reporting = True
    project = PROJECTIDNAME

    Your active configuration is: [default]

----
#### To manage API services:


```bash
#ℹ︎ get/print/display list of available API services
❯ gcloud services list --available
```



```bash
#ℹ︎ get/print/display list of enabled API services
❯ gcloud services list --enabled
```



```bash
#ℹ︎ create/make api-key
❯ gcloud alpha services api-keys create --display-name=APIKEYDISPLAYNAME
```



```bash
#ℹ︎ update/modify/change api-key metadata
❯ gcloud alpha services api-keys update APIKEYNAME --display-name=APIKEYDISPLAYNAME
```


----
#### To get authorization, via Google OAuth2.0 using `curl`, for Google apps API requests:


```bash
#ℹ︎ get/grant Google OAuth2.0 authorization code
❯ $BROWSER "https://accounts.google.com/o/oauth2/v2/auth?
&client_id=YOURCLIENTID
&scope=AUTHSCOPES@https://developers.google.com/identity/protocols/oauth2/scopes
&redirect_uri=urn:ietf:wg:oauth:2.0:oob
&response_type=code"
```



```bash
#ℹ︎ get/grant Google OAuth2.0 access token
❯ curl --silent \
--request POST \
--url "https://accounts.google.com/o/oauth2/token" \
--data "\
&client_id=YOURCLIENTID\
&client_secret=YOURCLIENTSECRET\
&code=YOURAUTHCODE\
&redirect_uri=urn:ietf:wg:oauth:2.0:oob\
&grant_type=authorization_code\
" --output access_token-NAME.json
```



```bash
#ℹ︎ refresh Google OAuth2.0 access token
❯ curl --silent \
--request POST \
--url "https://accounts.google.com/o/oauth2/token" \
--data "\
&client_id=YOURCLIENTID\
&client_secret=YOURCLIENTSECRET\
&refresh_token=YOURREFRESHTOKEN\
&grant_type=refresh_token\
" --output access_token-NAME.json
```


## RECIPES

----
#### To make various Google API service calls:


```bash
#ℹ︎ get/fetch/call google youtube api; get specified playlist videos
❯ curl --silent --compressed \
--header "Authorization: Bearer YOURACCESSTOKEN" \
--header "Accept: application/json" \
--url "https://youtube.googleapis.com/youtube/v3/playlistItems?\
&key=YOURAPIKEY\
&part=snippet\
&maxResults=50\
&playlistId=PLAYLISTID\
"
```


## GUIDES

----
#### To get authorization, via Google OAuth2.0 using `curl`, for Google apps API requests:

1. Project setup

    1. Create a "Google Cloud Platform" project
    2. Create an "API key" for that project

        ```
        ➤ Google Cloud Platform
            ➤ APIs & Services
                ➤ Credentials
                    ➤ Create Credentials
                        ➤ API Key
        ```

        or

        ```
        ❯ gcloud alpha services api-keys create --display-name=NAME
        ```

    3. Create an "OAuth Client ID" for that project

        ```
        ➤ Google Cloud Platform
            ➤ APIs & Services
                ➤ Credentials
                    ➤ Create Credentials
                        ➤ OAuth Client ID
        ```

        You can download a JSON file containing your information.

        ```
        {
            "installed": {
                "client_id": "…",
                "project_id": "…",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_secret": "…",
                "redirect_uris": [
                    "urn:ietf:wg:oauth:2.0:oob",
                    "http://localhost"
                ]
            }
        }
        ```

        You can always revisit the "Credentials" page to get your `client_id` and `client_secret`.

    4. Publish the project:

        ```
        ➤ Google Cloud Platform
            ➤ APIs & Services
                ➤ OAuth consent screen
                    ➤ Publish App
        ```

2. Get authorization code:

    ```bash
    ❯ $BROWSER "https://accounts.google.com/o/oauth2/v2/auth?
    &client_id=YOURCLIENTID
    &scope=AUTHSCOPES
    &redirect_uri=urn:ietf:wg:oauth:2.0:oob
    &response_type=code"
    ```

    >- `scope` is a space separated list of scope links.

    The browser displays an authorization code that can be copied and used for the next steps of the authorization process. Something that looks like:

    ```
    4/1AX4XfWjAq4fJSUzst3z6AY265YYCi7hEnw3MnfV-U2FR5Nmf5ZEpcJVO_RY
    ```

    >- With `redirect_uri` set to `urn:ietf:wg:oauth:2.0:oob`, the authorization code will appear in the web browser itself, and you’ll be able to copy it. You can also set `redirect_uri` to your local web server address, so that you receive it there (see Client ID JSON file for available valid `redirect_uri`s).
    >
    >- The authorization code persists for just 2-5 minutes, and you can only use it once, so there is most likely no reason to be storing this anywhere.

3. Exchange authorization code for an access and refresh token:

    ```bash
    ❯ curl \
    --request POST \
    --url "https://accounts.google.com/o/oauth2/token" \
    --data "\
    &client_id=YOURCLIENTID\
    &client_secret=YOURCLIENTSECRET\
    &code=YOURAUTHCODE\
    &redirect_uri=urn:ietf:wg:oauth:2.0:oob\
    &grant_type=authorization_code\
    "
    ```

    The authorization server responds with a JSON object:

    ```
    {
        "access_token": "…",
        "expires_in": 3599,
        "refresh_token": "…",
        "scope": "…",
        "token_type": "Bearer"
    }
    ```

    The `access_token` is the token that we can use to make all API calls. Access tokens are only valid for one hour. The `refresh_token` can be use to refresh the access token. This is technically not part of the normal three-legged OAuth dance, it’s an extra step.

    The object contains what scopes this authorization token was granted and it tells us that it is a bearer token, which means that the bearer of the token is granted access, i.e anybody that has this access token has access to the data, there’s no further authorization needed.

    >- Setting `redirect_uri` to `urn:ietf:wg:oauth:2.0:oob` causes the response to be sent to where the request was made, in our case as

    >- `client_ID` and `client_secret` pair are basically login and password for your project. The access and refresh tokens are created based off of this pair of values and only works for that pair of values. Modifying any one of them, will cause the access/refresh tokens to fail.

    To refresh the token:

    ```bash
    ❯ curl \
    --request POST \
    --url "https://accounts.google.com/o/oauth2/token" \
    --data "\
    &client_id=YOURCLIENTID\
    &client_secret=YOURCLIENTSECRET\
    &refresh_token=YOURREFRESHTOKEN\
    &grant_type=refresh_token\
    "
    ```

    For the most part refresh tokens don’t expire, though there are situations in which they do.

4. Perform API calls

    Say we wanted to use the Youtube Data API:

    ```bash
    ❯ curl --silent --compressed \
    --header "Authorization: Bearer YOURACCESSTOKEN" \
    --header "Accept: application/json" \
    --url "https://youtube.googleapis.com/youtube/v3/playlistItems?\
    &key=YOURAPIKEY\
    &part=snippet\
    &maxResults=50\
    &playlistId=PLAYLISTID\
    &pageToken=1\
    "
    ```

    If you’re going to pass any data, also include:

        --header "Content-Type: application/json" \
        --data "{…}"

References:

- <https://developers.google.com/identity/protocols/oauth2/web-server>
- <https://developers.google.com/identity/protocols/oauth2/scopes>
- <https://developers.google.com/youtube/v3/docs>


## INIT

    if [[ -d /usr/local/Caskroom/google-cloud-sdk ]]; then
        if [[ ${SHELL##*/} = bash ]]; then
            source "/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/path.bash.inc"
            source "/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/completion.bash.inc"
        elif [[ ${SHELL##*/} = zsh ]]; then
            source "/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/path.zsh.inc"
            source "/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/completion.zsh.inc"
        elif [[ ${SHELL##*/} = fish ]]; then
            source "/usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/path.fish.inc"
        fi
    fi


## NOTES

These flags are available to all commands:

    --account
    --billing-project
    --configuration
    --flags-file
    --flatten
    --format
    --help
    --impersonate-service-account
    --log-http
    --project
    --quiet
    --trace-token
    --user-output-enabled
    --verbosity

## SEE

    gcloud --help

## SEEALSO

    aws, gcalcli, chrome-cli

## SEEFURTHER

- [🌎 Home](https://cloud.google.com/sdk)
- [🌎 Documentation](https://cloud.google.com/docs)
- [🌎 Documentation: Google Identity](https://developers.google.com/identity)
- [🌎 Documentation: Google Identity ➤ OAuth2.0](https://developers.google.com/identity/protocols/oauth2)
- [🌎 Documentation: Youtube Data API](https://developers.google.com/youtube/v3/docs)
- [🌎 Page: Video ➤ Youtube ➤ Understanding Google OAuth 2.0 with curl](https://www.youtube.com/watch?v=hBC_tVJIx5w)
