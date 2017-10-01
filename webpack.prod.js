const webpack = require('webpack');
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
		new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
    	}
    })
	],
	module: {
  	rules: [
  		{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
        	fallback: 'style-loader',
        	use: ['css-loader', 'sass-loader']
        })
      }
  	]
  }
})