const { Asset } = require('parcel-bundler');
const fs = require('fs');

class Base64Asset extends Asset {
  constructor(name, options, ...args) {
    super(name, options);
    this.type = 'js';
    this.fileToConvert = name;
  }

  generate() {
    const [ext, encoding, header, footer, verbose] = config;
    if (verbose) console.log('Base64:', this.fileToConvert, "From Config:", config);
    const buffer = fs.readFileSync(this.fileToConvert, { encoding: 'base64' });
    return { 'js': `module.exports = "${header}${buffer}${footer}"` };
  }
}

module.exports = Base64Asset;
