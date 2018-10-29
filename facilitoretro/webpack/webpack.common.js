const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const index = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/index.template.pug',
  filename: 'index.html'
})

const curses = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/curses.template.pug',
  filename: 'curses.html'
})

const workshops = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/workshops.template.pug',
  filename: 'workshops.html'
})

const communities = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/communities.template.pug',
  filename: 'communities.html'
})

const articles = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/articles.template.pug',
  filename: 'articles.html'
})

const profile = new HtmlWebpackPlugin({
  title: 'NextParty',
  template: './src/profile.template.pug',
  filename: 'profile.html'
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
    curses,
    workshops,
    communities,
    articles,
    profile
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
