const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	// указывает откуда открывать вебпак
	// contentBase: './dist', //<- не универсально
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: baseWebpackConfig.externals.paths.dist, // путь к dist, прописано в webpack.base.conf.js
		port: 8081,
		overlay: {
			warnings: false,
			errors: true
		}
	},
	plugins: [
		// настраиваем карту для разработки
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map'
		}),

	]
});

module.exports = new Promise((resolve, reject) => {
	// передаем конфиг для разработки (dev)
	resolve(devWebpackConfig)
});



