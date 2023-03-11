const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/preservparam.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    new Dotenv()
  ]
};
