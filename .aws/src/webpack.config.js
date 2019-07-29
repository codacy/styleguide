const path = require("path");

module.exports = {
  entry: "./main.js",
  mode: "production",
  target: "node",
  output: {
    filename: "main.js",
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "dist")
  }
};
