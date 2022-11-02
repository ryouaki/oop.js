const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

async function getPort() {
  config.mode = 'development'

  config.devServer = {
    port: 8000,
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
