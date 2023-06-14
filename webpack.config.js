const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env,
  entry: {
    src: "./client/index.js",
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(__dirname, "client", "index.html"),
  //     filename: "./client/index.html",
  //   }),
  // ],

  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:3000",
        //   secure: false,
      },
    },
    // ],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: [/node_modules/, /client\/stylesheets\/modules/],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /.(css|scss)$/,
      //   include: [/client\/stylesheets\/modules/],
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: true,
      //       //   localIdentName: "[name]__[local]___[hash:base64:5]",
      //       },
      //     },
      //     "sass-loader",
      //   ],
      // },
    ],
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: [".js", ".jsx"],
  },
};
