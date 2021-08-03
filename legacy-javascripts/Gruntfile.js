module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    uglify: {
      options: {
        manage: false,
        preserveComments: "all" // Preserve all comments on JS files
      },
      my_target: {
        files: {
          "dist/js/main.min.js": [
            "assets/v0/bootstrap-3.4.1/assets/javascripts/bootstrap.min.js",
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
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks("grunt-contrib-concat");

  // Default task(s).
  grunt.registerTask("default", [
    "concat",
    "uglify"
  ]);
  grunt.registerTask("dist", ["concat", "uglify"]);
};
