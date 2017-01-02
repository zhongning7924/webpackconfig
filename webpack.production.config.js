var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: {
   main: path.resolve(__dirname, 'app/main.jsx')
  },
  output: {
    path: __dirname + '/build',
    publicPath: './',
    filename: '[name].js'
  },
//解决方案，一般用来设置调用路径和别名称
  resolve: {
    extensions: ['', '.js', '.jsx'],
     alias: {
      'components':path.join(__dirname, 'app/components'),
      'styles':path.join(__dirname, 'app/styles')
    }
  },

  module: {
    loaders:[
    { // LESS
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style", "css!autoprefixer!less")  //"style!css!less"
    },
    {
     test: /\.css$/,
      loader: ExtractTextPlugin.extract("style", "css?!autoprefixer") //"style-loader!css-loader"
    },
      // { test: /\.css$/, include: path.resolve(__dirname, 'app/styles'), loader: 'style-loader!css-loader!autoprefixer-loader' },
      // { test: /\.less$/, include: path.resolve(__dirname, 'app/styles'), loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'},
      {
      test: /\.(png|jpg|woff|woff2|otf|eot|svg|ttf)$/,
      loader: "url-loader?limit=3072"
      },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello',
      filename: 'index.html',
      inject: 'body',
      hash: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.CommonsChunkPlugin("vendors", "vendors.js"),

    new ExtractTextPlugin("[name].css"),

    new webpack.ProvidePlugin({
        React: "react",
    }),

    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
  ]
};
