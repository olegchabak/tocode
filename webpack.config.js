const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../'
						}
					},
					'css-loader',
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true,
							// файл с настройками плагина
							config: {
								path: 'src/js/postcss.config.js'
							}
						}
					}
				],
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						}
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true,
							// файл с настройками плагина
							config: {
								path: 'src/js/postcss.config.js'
							}
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						}
					}
				]
			}
		]
	},
	devServer: {
		port: 3000,
		overlay: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			//chunkFilename: '[id].css'
		})
	]
};