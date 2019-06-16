const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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