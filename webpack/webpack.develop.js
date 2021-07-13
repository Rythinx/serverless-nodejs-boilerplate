/** TODO: include seperate variables **/
const env = require('../env/develop.env');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    plugins: [new webpack.EnvironmentPlugin({ ...env })],
};
