const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'electron-renderer',
    entry: [
        home: "./src/home.js",
	about: "./src/about.js",
	contact: "./src/contact.js"
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: path.join(__dirname, 'src'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
	    test: /\.css$/,
	    use: [ 'style-loader', 'css-loader' ]
	}]
    },
};
