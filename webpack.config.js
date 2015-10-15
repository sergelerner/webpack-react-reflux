var path              = require('path');
var webpack           = require('webpack');  
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
	entry: [
		'webpack/hot/dev-server',
      	'webpack-dev-server/client?http://localhost:8080',
      	path.resolve(__dirname, 'app/app.js')		
	],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: "bundle.js"
	},
	module: {
		preLoaders: [
			//{ test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader' }
		],
		loaders: [
			{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') },
			{ test: /\.(svg)[\?]?.*$/, loader: 'file?name=assets/svg/[name].[ext]'},
			{ test: /\.(jpe?g|gif|png)[\?]?.*$/, loader: 'file?name=assets/images/[name].[ext]'}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			title: 'My App'
		}),
		new ExtractTextPlugin('./css/style.css', {
			allChunks: true
		})
	]
};