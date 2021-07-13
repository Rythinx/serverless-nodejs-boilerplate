const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack/webpack.common.js');

const envList = { develop: 'develop', staging: 'staging', master: 'prod' };
const NODE_ENV = process.env.NODE_ENV;

const env = envList[NODE_ENV] ? envList[NODE_ENV] : 'develop';

/** If you want to set custom env, export OVERRIDE_ENV as environment variable **/
const webpackConfig = require(`./webpack/webpack.${
    process.env.OVERRIDE_ENV ? process.env.OVERRIDE_ENV : env
}`);

module.exports = merge(webpackCommon, webpackConfig);
