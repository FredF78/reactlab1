var jsxcompiler = require('grunt-react').browserify;
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      build: {
        cwd: '.',
        src: ['*.html','index.js'],
        dest: 'dist',
        expand: true
      }
    },
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
          'dist/style2.css': 'scss/style2.scss'
        }
      }
    },
    versionCopyBowerComponents: {
      options: {
        dest: 'dist',
        filesReferencingComponents: {
          files: ['dist/index.html'],
          useComponentMin: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-version-copy-bower-components');
  grunt.registerTask('default', [
    'sass', 'browserify', 'copy', 'versionCopyBowerComponents'
  ]);
};