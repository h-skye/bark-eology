const path = require('path');

const entry = [
	'./src/index.js'
];

const output = {
	path: path.resolve(__dirname, 'dist'),
	publicPath: '/dist/',
	filename: 'bundle.js',
};

module.exports = {
	mode: 'production', 
	performance: { hints: false },
	entry, 
	output,
	devtool: 'eval-source-map',
	module: {
		rules : [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react'],
					plugins: ['transform-class-properties']
				},
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
		],
	},
};   