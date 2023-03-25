const path = require('path');
const environment = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const dotenv = require('dotenv').config().parsed;

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              jsx:
                environment === 'development'
                  ? 'react-jsxdev'
                  : 'react-jsx'
            }
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true
    },
    historyApiFallback: true
  },
  plugins: [
    dotenv !== undefined
      ? new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv)
      })
      : new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      })
  ]
};
