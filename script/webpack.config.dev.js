const path = require('path')
const webpack = require('webpack')
const portfinder = require('portfinder')
const config = require('./webpack.config')

async function getPort() {
  config.mode = 'development'
  portfinder.basePort = 8000
  const port = await portfinder.getPortPromise()

  config.devServer = {
    port,
    hot: true,
    historyApiFallback: true,
    compress: true,
    static: {
      directory: path.resolve(__dirname, '..', 'public')
    }
  }

  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  return config
}

module.exports = getPort()
