const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => ({
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: [
          'ts-loader',
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: !env.isProd,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
});
