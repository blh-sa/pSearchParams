module.exports = {
    mode:'production',
    entry: './src/preservparam.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    }
  };