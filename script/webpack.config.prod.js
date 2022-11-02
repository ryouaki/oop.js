const path = require('path')

module.exports = (env) => {
  const plugins = [];

  return {
    entry: {
      "oop": './index.js'
    },
    mode: 'production',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'oop.umd.js',
      libraryTarget: 'umd',
      library: 'OOP'
    },
    target: ['web', 'es5'],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: plugins
  }
}