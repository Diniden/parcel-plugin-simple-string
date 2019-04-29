const { Asset } = require('parcel-bundler');

class SimpleStringAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'js';
  }

  async parse(fileString) {
    this.code = fileString;
  }

  generate() {
    return { 'js': `module.exports = ${JSON.stringify(this.code)}` };
  }
}

module.exports = SimpleStringAsset;
