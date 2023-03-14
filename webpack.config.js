/* const path = require('path');
const bva = process.env.ALLOWED_HOSTNAMES_BVA;
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
module.exports = {
  mode: 'production',
    entry: './src/preservparam.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `BVA-bundle.js`,
    },
    plugins: [
      new Dotenv(),
    ],
} */

const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
module.exports = function (env) {
  if (env.ALLOWED_HOSTNAMES_BVA === "www.biovancia.com") {
    const allowedLinksBva = process.env.ALLOWED_LINKS_BVA;
    return {
      mode: "production",
      entry: "./src/preservparam.js",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: `BVA-bundle.js`,
      },
      plugins: [new Dotenv(),
        new webpack.DefinePlugin({
          hostname: JSON.stringify(env.ALLOWED_HOSTNAMES_BVA),
          allowed_links_website: JSON.stringify(env.ALLOWED_LINKS_BVA)
        }),
      ],
    };
  }else if(env.ALLOWED_HOSTNAMES_CIL === "www.cilumine.com"){
    return {
      mode: "production",
      entry: "./src/preservparam.js",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: `CIL-bundle.js`,
      },
      plugins: [new Dotenv(),
        new webpack.DefinePlugin({
          hostname: JSON.stringify(env.ALLOWED_HOSTNAMES_CIL),
          allowed_links_website: JSON.stringify(env.ALLOWED_LINKS_CIL)
        })],
    };
  }else if(env.ALLOWED_HOSTNAMES_NZH === "www.nutrazenith.com"){
    return {
      mode: "production",
      entry: "./src/preservparam.js",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: `CIL-bundle.js`,
      },
      plugins: [new Dotenv(),
        new webpack.DefinePlugin({
          hostname: JSON.stringify(env.ALLOWED_HOSTNAMES_NZH),
          allowed_links_website: JSON.stringify(env.ALLOWED_LINKS_NZH)
        })],
    };
  };
};
