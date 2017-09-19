const config = {
	entry: `${__dirname}/src/giving-web.js`,
	output: {
		path: `${__dirname}/../public`,
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
        test: /\.scss$/,
        use: [
	        {
	          loader: "style-loader" // creates style nodes from JS strings
	        },
	        {
	          loader: "css-loader" // translates CSS into CommonJS
	        },
	        {
	          loader: "sass-loader" // compiles Sass to CSS
	        }

        ]
      },
      {
        test: /\.(png|jpg|ttf)$/,
        use: [
         	{ loader: 'url-loader', options: { limit: 5000192 } }
        ]
      }
		]
	}
}

module.exports = config
