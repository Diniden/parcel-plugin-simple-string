const package = require(
  require('app-root-path').resolve('/package.json')
);
const fs = require('fs');
const { resolve, dirname } = require('path');

let base64Asset = '';

module.exports = async function (bundler) {
  console.log(require('app-root-path').resolve('.'));
  if (Array.isArray(package.string)) {
    package.string.forEach(fileType => {
      if (Array.isArray(fileType)) {
        const [ext, encoding] = fileType;

        switch (encoding) {
          case 'base64':
            // There is no good way to get options to an asset to handle configuurations specially. So, we'll just write
            // many copies of the asset to the file system to handle each configuration separately.
            if (!base64Asset) {
              base64Asset = fs.readFileSync(require.resolve('./Base64Asset.js'), { encoding: 'utf8' });
            }

            let newAsset = `const config=${JSON.stringify(fileType)};\n${base64Asset}`;
            let assetId = ext;
            let assetName = `Base64Asset_${assetId}.js`;

            console.log(ext, 'is now handled by', assetName);
            fs.writeFileSync(
              resolve(dirname(require.resolve('./Base64Asset.js')), assetName),
              newAsset,
              { encoding: 'utf8' }
            );

            bundler.addAssetType(ext, require.resolve(`./${assetName}`));
            break;

          case 'utf8':
          default:
            bundler.addAssetType(ext, require.resolve('./SimpleStringAsset.js'));
        }
      }

      else {
        bundler.addAssetType(fileType, require.resolve('./SimpleStringAsset.js'));
      }
    });
  }
};
