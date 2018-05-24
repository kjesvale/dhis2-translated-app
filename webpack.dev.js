/* eslint-disable no-console, global-require, import/no-dynamic-require */

const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const packageJSON = require('./package.json');

const dhisConfigPath = process.env.DHIS2_HOME && `${process.env.DHIS2_HOME}/config`;

let dhisConfig;
try {
    dhisConfig = require(dhisConfigPath);
} catch (e) {
    dhisConfig = {
        baseUrl: 'http://localhost:8080/dhis',
        authorization: 'Basic YWRtaW46ZGlzdHJpY3Q=',
    };
}

module.exports = merge(common, {
    output: {
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            DHIS_CONFIG: JSON.stringify(dhisConfig),
            DHIS_VERSION: JSON.stringify(packageJSON.version.split('.')[0]),
        }),
    ],
    devServer: {
        port: 9000,
        inline: true,
        contentBase: './src',
        clientLogLevel: 'none',
        historyApiFallback: true,
        disableHostCheck: true,
        host: '0.0.0.0',
        proxy: {
            '/dhis-web-core-resource': {
                target: dhisConfig.baseUrl,
            },
        },
    },
    devtool: 'eval-source-map',
});
