# Development

## Notes to Developers for Building

if you are in need of building the application for your platform, located in the /package.json
you can specify your platform according to the "Multi Platform Build specification" in electron-builder.


By default we use the -m flag, as seen below:

```
"scripts": {
  ...
  "dist": "NODE_ENV=production build -m --x64",
  ...
},
```
