const { Asset } = require('parcel-bundler');
const fs = require('fs');

class Base64Asset extends Asset {
  constructor(name, options, ...args) {
    super(name, options);
    console.log('Base64:', name);
    this.type = 'js';
    this.fileToConvert = name;
  }

  async parse(fileString) {
    console.log('PARSE');
  }

  generate() {
    console.log('Encrypting', config);
    const [ext, encoding, header, footer] = config;
    const buffer = fs.readFileSync(this.fileToConvert, { encoding: 'base64' });
    return { 'js': `module.exports = ${header}${buffer}${footer}` };
  }
}

module.exports = Base64Asset;
