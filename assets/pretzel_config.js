var path = require('path');

module.exports = require('pretzel-assets-pipeline')({
  dll: {
    'vendor': {
      'jquery': path.resolve(__dirname, '../node_modules/jquery/dist/jquery.min.js'),
      'backbone': path.resolve(__dirname, '../node_modules/backbone/backbone-min.js'),
      'underscore': path.resolve(__dirname, '../node_modules/underscore/underscore-min.js')
    },
    'vendor_chart': {
      'chart.js': path.resolve(__dirname, '../node_modules/chart.js/dist/Chart.min.js'),
    }
  },
  extensions: ['', '.coffee', '.pug', '.js'],
  loaders: [
    { test: /\.coffee$/, loader: 'coffee' },
    { test: /\.pug$/, loader: 'pug?root=' + path.resolve(__dirname, '../')  },
    { test: /\.json$/, loader: 'json' }
  ],
  publicFileDirecories: [
    path.resolve(__dirname, '../components'),
    path.resolve(__dirname, '../app'),
    path.resolve(__dirname, '../node_modules/skater')
  ],
  dev: {
    port: 3005
  },
  path: {
    src: path.resolve(__dirname, './'),
    dest: path.resolve(__dirname, '../public/build'), // must match with `public` value!
    public: '/build/', // must match with `dest` value!
  }
});
