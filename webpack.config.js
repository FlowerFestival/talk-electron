const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'electron-renderer',
    entry: [
        './src/index',
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: path.join(__dirname, 'src'),
        filename: 'bundle.js',
    },
    module: {
        rules: []
    },
};