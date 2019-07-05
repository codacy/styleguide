module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          sassDir: 'style/codacy/',
          cssDir: 'dist/css/'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'dist/css/template.css': 'style/codacy/template.scss'
        }
      }
    },

    watch: {
      css: {
        files: 'style/codacy/**/*.scss',
        tasks: ['compass', 'cssmin', 'copy']
      },
      options: {
        livereload: true,
      }
    },

    connect: {
      server: {
        options: {
          port: 16009,
          hostname: 'localhost',
          open: true
        }
      }
    },

    cssmin: {
      css: {
        files: {
          'dist/css/template.min.css': ['dist/css/template.css']
        }
      }
    },

    copy: {
      production: {
        files: [
          {
            expand: true,
            cwd: './dist/',
            src: ['**'],
            dest: './build/webjar/src/main/resources/META-INF/resources/webjars/codacy-react-styleguide/1.0.0'
          },
          {
            expand: true,
            cwd: './style/codacy/essentials/',
            src: ['_variables.scss'],
            dest: './build/webjar/src/main/resources/META-INF/resources/webjars/codacy-react-styleguide/1.0.0/scss'
          },
          {
            expand: true,
            cwd: './images/',
            src: ['**'],
            dest: './build/webjar/src/main/resources/META-INF/resources/webjars/codacy-react-styleguide/1.0.0/images'
          }]
      }
    }

  });

  // Load the plugin that provides the "compass" task.
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'cssmin', 'copy']);
  grunt.registerTask('dist', ['compass', 'cssmin', 'copy']);
};
