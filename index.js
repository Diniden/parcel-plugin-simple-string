const package = require(
  require('app-root-path').resolve('/package.json')
);

module.exports = function (bundler) {
  if (Array.isArray(package.string)) {
    package.string.forEach(fileType => {
      bundler.addAssetType(fileType, require.resolve('./SimpleStringAsset.js'));
    });
  }
};
