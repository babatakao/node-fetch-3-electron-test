## Overview

Minimum sample to reproduce issue with node-fetch@3.1 on electron renderer process.

## How to use

```
npm ci
npm run build
npm start
```

### Expected result

`done` alert is shown.

### Actual result

Error occurs:

```
TypeError: The "listener" argument must be of type function. Received an instance of Object
    at __node_internal_captureLargerStackTrace (node:internal/errors:463)
    at new NodeError (node:internal/errors:370)
    at __node_internal_ (node:internal/validators:229)
    at checkListener (node:events:131)
    at ClientRequest.once (node:events:533)
    at new ClientRequest (node:_http_client:209)
    at request (node:http:96)
    at renderer.js:111
    at new Promise (<anonymous>)
    at fetch (renderer.js:66)
    at renderer.js:7025
    at renderer.js:7030
    at renderer.js:7032
```

### Note

It works well on main process.
