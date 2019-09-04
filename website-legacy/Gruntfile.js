var stylesheetsCSSLocation = "node_modules/@codacy/stylesheets/dist/out/css/template.min.css"

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    watch: {
      js: {
        files: "assets/v0/javascripts/**/*.js",
        tasks: ["uglify"]
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

    uglify: {
      options: {
        manage: false,
        preserveComments: "all" // Preserve all comments on JS files
      },
      my_target: {
        files: {
          "dist/js/main.min.js": [
            "assets/v0/bootstrap-3.3.7/assets/javascripts/bootstrap.min.js",
            "assets/v0/bootstrap-select/js/bootstrap-select.js",
            "assets/v0/bootstrap-tagsinput/src/bootstrap-tagsinput.js",
            "assets/v0/javascripts/components/*.js"
          ]
        }
      }
    },

    concat: {
      options: {
        separator: ";",
        stripBanners: true,
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        src: ["assets/v0/javascripts/*.js"],
        dest: "dist/js/main.min.js"
      }
    },

    copy: {
      production: {
        files: [
          {
            cwd: "./",
            src: [stylesheetsCSSLocation],
            dest: "./dist/css/template.min.css"
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks("grunt-contrib-concat");

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks("grunt-contrib-connect");

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Default task(s).
  grunt.registerTask("default", [
    "concat",
    "uglify",
    "copy",
    "connect",
    "watch"
  ]);
  grunt.registerTask("dist", ["concat", "uglify", "copy"]);
};
