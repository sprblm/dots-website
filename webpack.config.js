const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  devServer: {
    clientLogLevel: "silent",
    contentBase: path.join(__dirname, "dist"),
    host: "localhost",
    hot: true,
    port: 8081,
    progress: true,
    stats: "minimal",
    sockPort: 8081,
    writeToDisk: true,
  },
  devtool: isDev ? "cheap-module-source-map" : "source-map",
  entry: [
    path.resolve(__dirname, "./scripts/main.js"),
    path.resolve(__dirname, "./styles/main.scss"),
  ],
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist", "js"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "../css/[name].css",
    }),
  ],
  resolve: {
    alias: {
      "@utilities": path.resolve(__dirname, "scripts/utilities"),
      "@modules": path.resolve(__dirname, "scripts/modules"),
    },
  },
};
