const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'static')],
    compress: true,
    port: 8000,
    hot: true,
    writeToDisk: true,
    publicPath: '/',
    historyApiFallback: {
      index: 'layout.html',
    },
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: [
    new WebpackShellPlugin({
<<<<<<< HEAD
      onBuildEnd: {
        scripts: ['node server-build/server_fbg.js', 'node server-build/server_bgio.js'],
        blocking: false,
        parallel: true,
      },
=======
       onBuildEnd: {
         scripts: ['node server-build/server_fbg.js','node server-build/server_bgio.js'],
         blocking: false,
         parallel: true
       }
>>>>>>> 2a0371b2421c4759208137c2695ee58e80c8208f
    }),
    new webpack.EnvironmentPlugin({
      BGIO_SERVER_URL: ''
    }),
  ]
});
