const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './src');

module.exports = {
	entry : [ 
		APP_DIR + "/index.js", 
		"react-hot-loader/patch"
	],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.jsx?/,
			exclude: /node_modules/,
			use: 'babel-loader'
		},{
	        test: /\.css$/,
	        use: ['style-loader', 'css-loader']
		}]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		compress: true,
	    historyApiFallback: true,
	    hot: true,
	    contentBase:'./dist'
	},
	devtool: 'inline-source-map'
};