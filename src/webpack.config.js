module.exports = {
  entry: {
    index: './js/index'
  },
  output: {
    path: '/../www/js/',
    filename: '[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015"]
        }
      }
    ]
  }
}
