module.exports = {
  //where do we want webpack to start looking through files
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  //what we want to run while working on website locally
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['eslint-loader']
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}