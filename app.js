var express = require('express');

var app = module.exports = express();

app.set('views', __dirname + '/app');
app.set('view engine', 'pug');
app.locals.basedir = __dirname;

app.get('/', function (req, res) {
  res.render('blub', { test: 'my var' });
});
app.get('/production', function (req, res) {
  res.render('production', { });
});
app.use(express.static('./public/'));

var port = 5000;
app.listen(port, () => console.log('pug-test running on ' + port));
