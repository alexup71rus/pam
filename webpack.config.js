const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

// include the js minification plugin
const TerserPlugin = require('terser-webpack-plugin');

// include the css extraction and minification plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(env, argv) {
  const mode = (argv.mode === 'production');

  return {
    mode: argv.mode,
    devtool: mode ? '' : 'inline-source-map',
    entry: {
      'app': [
        './js/index.js',
        './scss/main.scss',
      ],
      'popup': [
        './js/popup.js',
        './scss/popup.scss',
      ],
    },
    output: {
      filename: './app/js/[name].js', // [hash]
      path: path.resolve(__dirname)
    },
    module: {
      rules: [
        // perform js babelization on all .js files
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                ["@babel/transform-runtime"],
                // ["@babel/plugin-proposal-decorators", { "legacy": true }],
                // ["@babel/plugin-proposal-class-properties", { "loose": true }]
              ]
            }
          }
        },
        {
          test: /\.svg(\?.*)?$/, // match img.svg and img.svg?param=value
          use: [
            'url-loader', // or file-loader or svg-url-loader
            // 'svg-transform-loader'
          ]
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer({
                      overrideBrowserslist: ['ie >= 9', 'last 3 version']
                    })
                  ],
                  sourceMap: process.env.NODE_ENV === 'production' ? false : true
                }
              }
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.ext$/,
          use: ['cache-loader', 'babel-loader', 'vue-loader'],
          include: path.resolve('src'),
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['./app/js/*', './app/css/*']
      }),
      // extract css into dedicated file
      new MiniCssExtractPlugin({
        filename: './app/css/[name].min.css' // [hash]
      }),
      new LiveReloadPlugin({}),
    ],
    optimization: {
      minimizer: [
        // enable the js minification plugin
        new TerserPlugin({
          sourceMap: mode ? false : true,
          terserOptions: {
            compress: {
              drop_console: mode ? true : false,
            },
          },
        }),
      ]
    }
  }
};
