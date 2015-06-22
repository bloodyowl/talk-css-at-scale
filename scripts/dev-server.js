import webpack from "webpack"
import WebpackDevServer from "webpack-dev-server"
import config from "../webpack.config"
import opn from "opn"

const options = {
  port: 3030,
  host: "0.0.0.0",
  protocol: "http:",
}

const serverUrl = `${options.protocol}//${options.host}:${options.port}`
const devEntries = [
  `webpack-dev-server/client?${serverUrl}`,
  `webpack/hot/only-dev-server`,
]

new WebpackDevServer(
  webpack({
    ...config,
    entry: {
      ...Object.keys(config.entry).reduce((acc, key) => {
        return {
          ...acc,
          [key]: [
            ...devEntries,
            ...config.entry[key],
          ],
        }
      }, {}),
    },
    module: {
      loaders: [
        ...[
          {
            ...config.module.loaders[0],
            loaders: [
              "react-hot",
              ...config.module.loaders[0].loaders,
            ],
          },
        ],
        ...config.module.loaders.slice(1),
      ]
    },
    plugins: [
      ...config.plugins || [],
      new webpack.HotModuleReplacementPlugin(),
    ],
  }),
  {
    contentBase: config.output.path,
    hot: true,
    noInfo: true,
    stats: {
      colors: true,
      chunkModules: true,
      assets: true,
    },
  }
)
.listen(options.port, options.host, () => {
  opn(serverUrl)
})
