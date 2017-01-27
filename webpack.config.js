var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var config = require('./config');

var preprocessorConfigs = {
  scss: {
    test: /.scss?$/,
    loader: ExtractTextPlugin.extract('style', 'css!sass'),
    exclude: /node_modules/
  }
}


module.exports = {
  devtool: 'eval-source-map',

  entry:  path.join(__dirname, config.ui.srcDir , config.ui.entry),
  output: {
    path: path.join(__dirname, config.ui.outputDir),
    filename: config.ui.outputFile
  },
  resolveLoader: {
    root: '../node_modules',
    moduleTemplates: ['*-loader']
  },
  module:{
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }, preprocessorConfigs[config.ui.preprocessor]
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, config.ui.outputDir),
    colors: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
      new ExtractTextPlugin("css/[name].css"),
      // new HtmlWebpackPlugin({
      //   filename: 'index.html',
      //   template: 'src/index.html'
      // })
  ]
}
