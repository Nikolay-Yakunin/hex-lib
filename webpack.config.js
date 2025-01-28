const path = require('path');

module.exports = {
  entry: './src/library/index.js',
  output: {
    filename: 'library.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'HexLib',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};