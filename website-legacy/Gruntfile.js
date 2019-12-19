var stylesheetsCSSLocation = "node_modules/@codacy/stylesheets/dist/out/css/template.min.css"
var legacyJSLocation = "node_modules/@codacy/legacy-javascripts/dist/js/main.min.js"

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    watch: {
      js: {
        files: legacyJSLocation,
        tasks: ["copy"]
      },
      css: {
        files: stylesheetsCSSLocation,
        tasks: ["copy"]
      },
      options: {
        livereload: true
      }
    },

    connect: {
      server: {
        options: {
          port: 16009,
          hostname: "localhost",
          open: true
        }
      }
    },

    copy: {
      production: {
        files: [
          {
            cwd: "./",
            src: [stylesheetsCSSLocation],
            dest: "./dist/css/template.min.css"
          },
          {
            cwd: "./",
            src: [legacyJSLocation],
            dest: "./dist/js/main.min.js"
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks("grunt-contrib-connect");

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Default task(s).
  grunt.registerTask("default", [
    "copy",
    "connect",
    "watch"
  ]);
  grunt.registerTask("dist", ["copy"]);
};
