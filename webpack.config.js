const path = require('path');

module.exports = {
	entry: {
		app: "./src/index.js",
		//about: "./src/about.js"
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, './dist'),
		publicPath: "/dist"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	},
	devServer: {
		port: 3000,
		overlay: true
	}
};