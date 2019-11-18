// npm i -D postcss-loader autoprefixer css-nano mqpacker

module.exports = {
	plugins: [
		require('autoprefixer'),
		require('mqpacker'),
		require('cssnano')({
			preset: [
				'default',
				{
					discardComments: {
						removeAll: true
					}
				}
			]

		})
	]
}