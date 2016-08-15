var express = require('express');

var app = module.exports = express();

app.set('views', __dirname + '/app');
app.set('view engine', 'pug');
app.locals.basedir = __dirname;

var assetsPathConfig = require('./assets/pretzel_config.js').getPathConfig();

var manifests = {};
if (false) {
  manifests.files = require('./public/build/manifest-files.json');
  manifests.entriesAndDll = require('./public/build/manifest-entries+dll.json');
  manifests.stylesheets = require('./public/build/manifest-stylesheets.json');
}
app.locals.assets = require('pretzel-assets-pipeline/helper/asset-path')(manifests.files, assetsPathConfig);
app.locals.serverAssets = require('pretzel-assets-pipeline/helper/server-asset-path')(manifests.entriesAndDll, manifests.stylesheets, assetsPathConfig);

app.get('/', function (req, res) {
  res.render('blub', { test: 'my var' });
});
app.get('/solo', function (req, res) {
  res.render('solo', { test: 'my var' });
});
app.use(express.static('./public/'));

var port = 5000;
app.listen(port, () => console.log('pug-test running on ' + port));
