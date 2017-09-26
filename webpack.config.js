const webpack = require('webpack');
const path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: __dirname,
  entry: "./src/js/app.js",
  target: 'web',
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module : {
    rules : [
        {
            test  : /\.css$/,
            use  : [
                'style-loader' ,
                'css-loader'
            ]
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: ['transform-runtime']  
            }
          }
        },
        {
          test: /\.(html)$/,
          use: ['html-loader']
        }
    ]
  },
  devtool: '#source-map',
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
    template : "src/index.html"
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]
};
