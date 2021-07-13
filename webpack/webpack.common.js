const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@services': path.resolve(__dirname, '../app/services/'),
            '@util': path.resolve(__dirname, '../app/util/'),
            '@': path.resolve(__dirname, '../app/'),
        },
    },
    externals: [nodeExternals()],
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '../.webpack'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ],
    }
};
