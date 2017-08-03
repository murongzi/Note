'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pk = require('../../package.json');
const Settings = require('../Settings');

class WebpackDevConfig extends WebpackBaseConfig {

  constructor() {
    super();
    let that = this;
    this.config = {
      devtool: 'eval', //方便代码调试
      entry: {
        // 'webpack-dev-server/client?http://0.0.0.0:9100/',
        // 'webpack/hot/only-dev-server',
        app: 'index.js'
      },
      plugins: [
        new webpack.LoaderOptionsPlugin({
          debug: true
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"develop"'
        }),
        new ExtractTextPlugin('styles/[name].[contenthash:16].css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
          template: 'index.ejs',
          inject: 'body',
          // hash: true,
          ////favicon: 'images/espresso.png',
          ////title: '医生工作台 V' + pk.version,
          minify: {
            collapseWhitespace: true,
            conservativeCollapse: true
          },
          beaconUrl: Settings.BEACON_URL
        })
      ]
    };
  }
}

module.exports = WebpackDevConfig;
