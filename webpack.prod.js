const webpack = require('webpack');
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
	devtool: 'source-map',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		}),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      API_URL: 'https://givingweb.io/api'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
      inject: 'body',
      filename: 'index.html'
    })
	],
	module: {
  	rules: [
  		{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
        	fallback: 'style-loader',
        	use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      }
  	]
  }
})