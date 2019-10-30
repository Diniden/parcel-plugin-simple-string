# Simple String Importer (Why?)

NEW: Now this project makes it very easy to base64 encode resources!

This is a plugin to make it easier to port projects over to Parcel.

The correct Parcel way of obtaining a raw string of a file would be to use:

```
import { readFileSync } from 'fs';
```

And parcel would translate that for you automagically thus keeping your project browser and node compatible.

HOWEVER, this is an imperfect world with imperfect problems, so in some cases (like my own) it is better to have a quick config to tell file types to be imported as raw strings instead.

# How to use

```sh
npm install -DE github:diniden/parcel-plugin-simple-string
```

Then in your package.json set a property titled "string":

```json
"string": [
  "<your file extension>",
  "<your file extension>",
  "fs", "vs", "doc", "etc"
]
```

Now in your project:

```
const hey = require("../foo.fs");
console.log(hey); // Contents of foo.fs
```

## Base64

This project now supports base64 encoding resources so you can inline elements all you want!

Each config element now can be an array. So use this to simply:

```json
"string": [
  ["<your file extension>", "encoding (just insert base64 here)", "header", "footer", "verbose"],
]
```

Example:

```json
"string": [
  ["woff2", "base64", "data:font/woff2;charset=utf-8;base64,"]
]
```

Note that you can add the header so when the resource gets imported it will already be in a valid data URI to use in
web applications.

# NOTES

There is no additional configuration considerations for this project (separate config files, webpack configs, etc etc). I very intentionally keeping it in package.json
as I believe in the movement of clearing out configurations from root project folders.
