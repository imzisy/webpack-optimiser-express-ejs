const webpack = require('webpack');
const path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/js/app.js"
  },
  target: 'web',
  output: {
    path: __dirname + "/dist",
    filename: 'static/js/[name].bundle.js',
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
          test: /\.(js|jsx)$/,
          exclude: /node_modules/, 
          loader: "babel-loader",
          query: {
              presets: ["react", "es2015", "stage-2"]
          }
        },
        
        {
          test: /\.(html)$/,
          use: ['html-loader']
        }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
    chunks: ['main']
  }),
  // new UglifyJSPlugin({
  //   sourceMap: true
  // }),
  new webpack.NoEmitOnErrorsPlugin(),
]
};
