const { Asset } = require('parcel-bundler');

class SimpleStringAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'js';
  }

  async parse(fileString) {
    console.log('FILE STRING', fileString);
    const pkg = await this.resolver.findPackage(process.cwd());
    console.log(pkg);
    this.code = fileString;
  }

  generate() {
    return { 'js': `module.exports = ${JSON.stringify(this.code)}` };
  }
}

module.exports = SimpleStringAsset;
