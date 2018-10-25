const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const index = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/index.template.pug',
  filename: 'index.html'
})

const events = new HtmlWebpackPlugin({
  template: './src/events.template.pug',
  filename: 'events.html'
})

const grantour = new HtmlWebpackPlugin({
  template: './src/grantour.template.pug',
  filename: 'grantour.html'
})

const contact = new HtmlWebpackPlugin({
  template: './src/contact.template.pug',
  filename: 'contact.html'
})

module.exports = {
  mode: 'development',
  entry: './src/assets/javascript/entry.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '..'),
    filename: 'dist/javascript/bundle.js'
  },
  plugins: [
    index,
    events,
    grantour,
    contact
  ],
  module: {
    rules: [
      {
        test: /\.jpg|png$/,
        loader: 'url-loader'
      },
      {
        test: /\.pug/,
        loaders: ['html-loader', 'pug-html-loader']
      }
    ]
  }
}
