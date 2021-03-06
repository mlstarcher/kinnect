const path = require('path')

// path.join(__dirname, 'client', 'src', 'pages', 'App.js')
// path.join(__dirname, 'client', 'src', 'pages', 'Admin.js')

module.exports = {
  entry: {
    app: './client/src/pages/App.js',
    admin: './client/src/pages/Admin.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|tff|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
      }
    ]
  },
  mode: 'development',
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx']
  }
}