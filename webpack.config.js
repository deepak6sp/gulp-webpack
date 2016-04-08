var webpack = require("webpack");
module.exports = {
  context:__dirname,
  entry: ["./index.js"],
  output: {
  	path: __dirname + '/public/js/',
    filename: "bundle.js",
    publicPath: "/public/js/"
  },
   plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  resolve:{
  	extensions: ['','.js']
  },
   devtool: "sourcemap",
    debug: true
};