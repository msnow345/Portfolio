module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      all: [
        'scripts/*.js',
        '!scripts/*.min.js',
        '!scripts/libs/'
      ]
    },
    concat: {
      options: {
        separator: ' \n',
        stripBanners: true
      },
      scripts: {
        src: [
          'scripts/libs/selectivizr-min.js',
          'scripts/global.js',
          'scripts/site.js'
        ],
        dest: 'scripts/release.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! \n' + 
          'Project: <%= pkg.title %> \n' +
          'Version: v<%= pkg.version %> \n' +
          'Date compiled: <%= grunt.template.today("yyyy-mm-dd") %> \n' +
          'Company: <%= pkg.company %> \n' +
          'Contributors: <%= pkg.contributors %> \n' +
          '*/ \n \n'
      },
      my_target: {
        files: {
          'scripts/release.min.js': 'scripts/release.js'
        }
      }
    },
    compass: {     
      dev: {
        options: {
          outputStyle: 'expanded',
          sassDir:'sass',
          cssDir:'css'
        },
      },
      prod: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/global-min.css': 'sass/global.scss'
        }
      }
    },
    watch: {
      files: ['<%= jshint.all %>', 'sass/*.scss'],
      tasks: ['default']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['compass:dev', 'jshint:all']);
  grunt.registerTask('prod', ['compass:prod', 'concat', 'uglify']);

};