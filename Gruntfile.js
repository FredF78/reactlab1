var jsxcompiler = require('grunt-react').browserify;
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    browserify: {
      options: {
        transform: [ jsxcompiler ]
      },
      client: {
        src: ['react_components/**/*.jsx'],
        dest: 'dist/app.dist.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/style.css': 'scss/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', [
    'sass', 'browserify'
  ]);
};