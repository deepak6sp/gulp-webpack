var webpack = require("webpack");
module.exports = {
  context:__dirname,
  entry: ["./index.js","./public/js/vendor.js"],
  output: {
  	path: __dirname + '/public/js/',
    filename: "bundle.min.js"
  },
   plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};