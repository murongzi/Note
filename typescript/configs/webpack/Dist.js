'use strict';

/**
 * Dist configuration. Used to build the
 * final output when running npm run dist.
 */
const path = require('path');
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pk = require('../../package.json');
const Settings = require('../Settings');

class WebpackDistConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      cache: false,
      entry: {
        app: 'index'
      },
      output: {
        path: path.resolve('./dist'),
        publicPath: '',
        chunkFilename: "scripts/modules/[id].[chunkhash:16].js",
        filename: 'scripts/[name].[chunkhash:16].js'
      },
      devServer: {
        contentBase: this.srcPathAbsolute,
        historyApiFallback: true,
        hot: false,
        inline: true,
        port: 9100,
        // host: 'localhost'
        disableHostCheck: true
      },
      devtool: 'cheap-module-source-map',
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new ExtractTextPlugin('styles/[name].[contenthash:16].css'),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: 'scripts/[name].[chunkhash:16].js',
          minChunks: function (module) {
            // This prevents stylesheet resources with the .css or .scss extension
            // from being moved from their original chunk to the vendor chunk
            if (module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
              return false;
            }
            return module.context && module.context.indexOf("node_modules") !== -1;
          }
        }),
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

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dist';
  }
}

module.exports = WebpackDistConfig;
