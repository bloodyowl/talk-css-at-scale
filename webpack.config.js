import path from "path"

const config = {
  entry: {
    index: [
      "./src/index.js",
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [
      "",
      ".js",
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          "babel?" + JSON.stringify({
            stage: 0,
          })
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|gif|png|html)$/g,
        loaders: [
          "file?name=[path][name].[ext]&context=./web_modules",
        ],
      },
    ],
  },
  node: {
    fs: "empty",
  },
}

export default config
