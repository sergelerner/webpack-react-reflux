var webpack           = require('webpack');  
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {  
	entry: [
		'webpack/hot/only-dev-server',
		"./app/js/app.js"
	],
	output: {
		path: './build',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') },
			{ test: /\.(ttf|eot|woff|svg|jpe?g|gif|png)[\?]?.*$/, loader: 'file?name=[path][name].[ext]&context=/build'}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('./css/style.css', {
			allChunks: true
		})
	]
};