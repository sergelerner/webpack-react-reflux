var path              = require('path');
var webpack           = require('webpack');  
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

module.exports = {  

	entry: [		
      	'webpack-dev-server/client?http://localhost:8080',
      	path.resolve('./app/app.js')		
	],

	output: {
		path: path.resolve('build'),
		publicPath: '/', 
		filename: "main.js"
	},

	module: {
		preLoaders: [
			//{ test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader' }
		],
		loaders: [
			{ 
				test: /\.js?$/, 
				loaders: ['react-hot', 'babel'], 
				exclude: /node_modules/ 
			},
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader'
			},
			{ 
				test: /\.scss$/, 
				loader: ExtractTextPlugin.extract('css!autoprefixer-loader!sass') 
			},
			{ 
				test: /\.(jpe?g|gif|png|ttf|eot|svg|woff|woff2)[\?]?.*$/, 
				loader: 'url-loader?limit=10000?name=assets/images/[name].[ext]'
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(), 
		new webpack.NoErrorsPlugin(),		
		new ExtractTextPlugin('./css/style.css', { allChunks: true })
	]
};