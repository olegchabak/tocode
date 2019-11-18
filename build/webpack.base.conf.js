const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// чтоб менять пути в одном месте
const PATHS = {
	// ../ т.к. конфиги в своей папке build
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/',
};

module.exports = {
	// это чтоб переменные путей были доступны в других конфиг. файлах
	externals: {
		paths: PATHS
	},
	entry: {
		//читать как app: "./src/" - webpack поймет что обращение к index.js
		app: PATHS.src,
	},
	output: {
		// filename: "[name].js", <-можно так, будет складывать в дист
		// читать: filename: 'assets/js/[name].js'
		filename: `${PATHS.assets}js/[name].js`,
		path: PATHS.dist,
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
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
								path: `${PATHS.src}/js/postcss.config.js`
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
								path: `${PATHS.src}/js/postcss.config.js`
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
	plugins: [
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].css`, // dist/assets/css/[name].css
			//chunkFilename: '[id].css'
		}),
		new HtmlWebpackPlugin({
			hash: false,
			template: `${PATHS.src}/index.html`,
			filename: "index.html"
		}),
		// копирует статичные файлы из src в dist/assets
		new CopyWebpackPlugin([
			{ from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
			{ from: `${PATHS.src}/static`, to: '' },
		]),
	]
};