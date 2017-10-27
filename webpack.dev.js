const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
    contentBase: join(__dirname, 'build'),
    hot: true,
    historyApiFallback: true
  },
  module: {
  	rules: [
  		{
        test: /\.scss$/,
        use: [
        	'style-loader',
        	'css-loader',
          'postcss-loader',
        	'sass-loader'
        ]
      }
  	]
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      API_URL: 'http://localhost:3000'
    })
  ]
})