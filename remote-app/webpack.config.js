const { dependencies } = require("./package.json");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: "./src/index",
  cache: false,
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".mjs"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./HelloWorld": "./src/components/HelloWorld",
        "./Components": "./src/components/Components",
      },
      shared: {
        ...dependencies,
        react: {
          requiredVersion: dependencies["react"],
          singleton: true,
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true,
        },
      },
    }),
    // https://www.npmjs.com/package/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // favicon: "./src/favicon.ico",
    }),
  ],
};
