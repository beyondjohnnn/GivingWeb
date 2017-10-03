const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { join } = require('path')

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
        	'sass-loader'
        ]
      }
  	]
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
})