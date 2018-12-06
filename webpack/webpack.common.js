const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const index = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/index.template.pug',
  filename: 'index.html'
})

const proyects = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/proyects.template.pug',
  filename: 'proyects.html'
})

const aboutme = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/sobremi.template.pug',
  filename: 'aboutme.html'
})

const contact = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/contact.template.pug',
  filename: 'contact.html'
})

const item = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/items.templates.pug',
  filename: 'item.html'
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
    proyects,
    aboutme,
    contact,
    item
  ],
  module: {
    rules: [
      {
        test: /\.jpg|png|svg$/,
        loader: 'url-loader'
      },
      {
        test: /\.pug/,
        loaders: ['html-loader', 'pug-html-loader']
      }
    ]
  }
}
