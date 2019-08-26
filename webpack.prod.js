const merge = require('webpack-merge');
const common = require('./webpack.common');

const env = {
  isProd: true,
};

module.exports = merge(common(env), {
  mode: 'production',
  devtool: 'cheap-module-source-map',
});
