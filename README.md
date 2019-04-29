# Simple String Importer (Why?)

This is a plugin to make it easier to port projects over to Parcel.

The correct Parcel way of obtaining a raw string of a file would be to use:

```
import { readFileSync } from 'fs';
```

And parcel would translate that for you automagically thus keeping your project browser and node compatible.

HOWEVER, this is an imperfect world with imperfect problems, so in some cases (like mine) it is better to have a quick config to tell file types to be imported as raw strings instead.

# How to use

```
npm install -DE github:diniden/parcel-plugin-simple-string
```

Then in your package.json include:

```
"string": [
  "<your file extension>",
  "<your file extension>",
  fs, vs, doc, etc
]
```

Now in your project:

```
const hey = require("../foo.fs");
console.log(hey); // Contents of foo.fs
```