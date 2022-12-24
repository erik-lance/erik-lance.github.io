const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, 'src/components'),
				'@styles': path.resolve(__dirname, 'src/styles'),
				'@images': path.resolve(__dirname, 'src/images'),
				'@fonts': path.resolve(__dirname, 'src/fonts'),
				'@pages': path.resolve(__dirname, 'src/pages'),
			}
		}
	});
};
