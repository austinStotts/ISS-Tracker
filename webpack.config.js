const path = require('path');

module.exports = {
  entry: './app/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: 'development'
}