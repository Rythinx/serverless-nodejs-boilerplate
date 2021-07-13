const env = require('../env/prod.env');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [new webpack.EnvironmentPlugin({ ...env })],
};
