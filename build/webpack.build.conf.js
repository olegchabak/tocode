const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
	// всё что нужно для прода (build) ...
	mode: 'production',
	plugins: [],
});

module.exports = new Promise( (resolve, reject) => {
	// отправляем настройки для прод. конфига
	resolve(buildWebpackConfig)
});

