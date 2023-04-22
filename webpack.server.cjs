// import path from 'path'
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.ts',
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'server-build'),
    filename: './server.ts',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ]
          },
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js','.jsx','.tsx'],
  },
}
