const merge = require('webpack-merge');
const common = require('./webpack.common');

const env = {
  isProd: false,
};

module.exports = merge(common(env), {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
});
