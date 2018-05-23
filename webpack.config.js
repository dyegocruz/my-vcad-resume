const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    alias: {
      modules: path.resolve(__dirname, 'node_modules'),
      jquey: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
      bootstrap: path.resolve(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.min.js'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
};
