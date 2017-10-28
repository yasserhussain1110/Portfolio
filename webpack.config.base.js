const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('./webpack-utils/utils');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(relPath) {
  return path.join(__dirname, relPath);
}

module.exports = {
  entry: {
    app: resolve('./src/index.jsx')
  },
  output: {
    path: resolve('dist'),
    filename: utils.assetsPath('js/[name].js'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('./src/static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ]
};
