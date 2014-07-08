'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: false,
        reporter: 'tap'
      },

      all: { src: ['test/**/*.js'] }
    },

    jshint: {
      all: ['Gruntfile.js', 'server.js', 'app/**/*.js'],
      options: {
        jshintrc: true,
        globals: {
          console: true,
          module: true
        }
      }
    },
  });

  grunt.registerTask('default', ['simplemocha', 'jshint']);
};
