const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
    contentBase: './build',
    hot: true
  },
  module: {
  	rules: [
  		{
        test: /\.scss$/,
        use: [
        	'style-loader',
        	'css-loader',
        	'sass-loader'
        ]
      }
  	]
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
  ]
})