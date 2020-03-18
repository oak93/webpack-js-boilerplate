const path = require("path");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname + "/"),
    filename: "index.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      extensions: ".js"
    }
  },
  performance: {
    hints: false
  },
  devtool: isDev ? "inline-source-map" : false
};
