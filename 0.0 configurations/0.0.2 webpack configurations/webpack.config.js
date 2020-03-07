const path = require("path");

module.exports = {
  // one of: "production" | "developement" | "none" (default)
  mode: "development",
  // input file
  entry: "./src/index.js",
  // output file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "commonjs"
  }
};
