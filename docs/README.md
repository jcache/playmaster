# Development

## Notes to Developers for Building

if you are in need of building the application for your platform, located in the /package.json
you can specify your platform according to the "Multi Platform Build specification" in electron-builder.


In order to produce a build in different platforms (other than MacOS) you can do so by modifying the build flags via the root level package.json.

The flags accepted are `-mwl` and you can utilize any of them but at minimal please select one of the following:

- m = MacOS
- l = Linux
- w = Windwos

In the scripts block of the package.json file, I've provided our current setup. Please feel free to change and don't forget to add the needed files for each platform. Consult with electron-builder for configuration options.


```
"scripts": {
  ...
  "dist": "NODE_ENV=production build -m --x64",
  ...
},
```
