const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
  preservparam_BVA: './src/preservparam_BVA.js',
  preservparam_CIL: './src/preservparam_CIL.js',
  preservparam_NZH: './src/preservparam_NZH.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new Dotenv()
  ]
};
