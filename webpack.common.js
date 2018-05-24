const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJSON = require('./package.json');
const path = require('path');

module.exports = {
    entry: {
        src: ['babel-polyfill', './src/index.js'],
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: `[name]_${packageJSON.version}.js`,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DHIS2 About App',
            filename: 'index.html',
            template: 'public/index.html',
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
            components: path.resolve(__dirname, 'src/components'),
            locales: path.resolve(__dirname, 'src/locales'),

            // Use the app's own d2 version in other packages
            'd2/lib/d2': path.resolve(__dirname, 'node_modules/d2/lib/d2'),
        },
        extensions: ['.js', '.jsx'],
    },
};
