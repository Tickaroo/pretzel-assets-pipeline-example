var pretzelGrunt = require('pretzel-assets-pipeline/grunt');

module.exports = function(grunt) {
  grunt.initConfig({
    log: {
      options: {
        a: true
      },
      foo: {
        options: {
          x: 2
        },
      },
      bar: 'hello world',
      baz: false
    }
  });
  grunt.config.merge(
    pretzelGrunt(grunt, require('./assets/pretzel_config.js'))
  );
};
