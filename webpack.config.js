const path = require("path");
const { IgnorePlugin } = require("webpack");

const bPackage = path.resolve(require.resolve("@reproduction/b"), "..", "..");

module.exports = {
  entry: path.resolve(bPackage, "src", "index.ts"),
  // mode: 'development',
  mode: "production",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: { configFile: path.resolve(bPackage, "tsconfig.json") }
      },
      {
        test: /\.node$/,
        use: "node-loader"
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  output: {
    filename: "index.js",
    libraryTarget: "commonjs",
    path: path.resolve(bPackage, ".deploy")
  }
};
