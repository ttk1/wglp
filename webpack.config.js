const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    work: './src/work.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'public',
    port: 3000
  },
  module: {
    rules: [{
        test: /\.(glsl|vert|frag)$/,
        exclude: [/node_modules/],
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      }
    ]
  }
}