barebones react with jsx + deno dev server

run the server
```sh
deno run --unstable --allow-net --allow-read server.js
```

```
index.html - entrypoint
main.js - pulled via index.html
server.js - serves main.js
```

TODO
  * independent React.createElement for library
  * prod server
  * caching
