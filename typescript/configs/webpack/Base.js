'use strict';

/**
 * Webpack configuration base class
 */
const path = require('path');
const npmBase = path.join(__dirname, '../../node_modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

class WebpackBaseConfig {

  constructor() {
    this._config = {};
  }

  /**
   * Get the list of included packages
   * @return {Array} List of included packages
   */
  get includedPackages() {
    return [].map((pkg) => path.join(npmBase, pkg));
  }

  //noinspection JSAnnotator
  /**
   * Set the config data.
   * This will always return a new config
   * @param {Object} data Keys to assign
   * @return {Object}
   */
  set config(data) {
    this._config = Object.assign({}, this.defaultSettings, data);
    return this._config;
  }

  /**
   * Get the global config
   * @param {Object} config Final webpack config
   */
  get config() {
    return this._config;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dev';
  }

  /**
   * Get the absolute path to src directory
   * @return {String}
   */
  get srcPathAbsolute() {
    return path.join(__dirname, '../../src');
  }

  /**
   * Get the absolute path to tests directory
   * @return {String}
   */
  get testPathAbsolute() {
    return path.join(__dirname, '../../test');
  }

  /**
   * Get the default settings
   * @return {Object}
   */
  get defaultSettings() {
    return {
      context: this.srcPathAbsolute,
      devtool: 'eval',
      devServer: {
        contentBase: this.srcPathAbsolute,
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 9101,
        // host: 'localhost'
        disableHostCheck: true
      },
      entry: this.srcPathAbsolute + '/index.js',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            include: this.srcPathAbsolute,
            loader: 'eslint-loader'
          },
          {
            test: /\.js$/,
            enforce: 'pre',
            include: this.srcPathAbsolute,
            loader: 'source-map-loader'
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
              use: 'css-loader',
              publicPath: '../'
            })
          },
          {
            test: /\.(sass|scss)$/,
            loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: function () {
                      return [
                        require('autoprefixer')
                      ];
                    }
                  }
                },
                'sass-loader'
              ],
              publicPath: '../'
            })
          },
          {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: function () {
                      return [
                        require('autoprefixer')
                      ];
                    }
                  }
                },
                'less-loader'
              ],
              publicPath: '../'
            })
          },
          {
            test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
            loader: 'url-loader',
            query: {
              limit: '1024',
              name: 'images/[name].[hash:16].[ext]'
            }
          },
          {test: /\.tsx?$/, loader: 'awesome-typescript-loader', options: {useBabel: true}},
          {
            test: /\.(js|jsx)$/,
            include: [].concat(
              this.includedPackages,
              [this.srcPathAbsolute]
            ),
            loader: ['babel-loader']
          }
        ]
      },
      output: {
        path: path.resolve('./dist'),
        publicPath: '',
        chunkFilename: "scripts/modules/[id].[hash:8].js",
        filename: 'scripts/[name].[hash:8].js'
      },
      plugins: [],
      resolve: {
        alias: {
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
          this.srcPathAbsolute,
          'node_modules'
        ]
      }
    };
  }
}

module.exports = WebpackBaseConfig;
