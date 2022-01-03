const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    static: './dist'
  }
};
