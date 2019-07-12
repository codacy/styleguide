module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    compass: {
      dist: {
        options: {
          sassDir: "style/codacy/",
          cssDir: "dist/intermediate/css/"
        }
      }
    },

    sass: {
      dist: {
        files: {
          "dist/intermediate/css/template.css": "style/codacy/template.scss"
        }
      }
    },

    cssmin: {
      css: {
        files: {
          "dist/intermediate/css/template.min.css": [
            "dist/intermediate/css/template.css"
          ]
        }
      }
    },

    copy: {
      production: {
        files: [
          {
            expand: true,
            cwd: "./dist/intermediate/",
            src: ["**"],
            dest: "./dist/out/"
          },
          {
            expand: true,
            cwd: "./style/codacy/essentials/",
            src: ["_variables.scss"],
            dest: "./dist/out/scss/"
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "compass" task.
  grunt.loadNpmTasks("grunt-contrib-compass");

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks("grunt-contrib-sass");

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Default task(s).
  grunt.registerTask("default", ["compass", "cssmin", "copy"]);
  grunt.registerTask("dist", ["compass", "cssmin", "copy"]);
};
