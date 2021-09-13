module.exports = {
  pages: {
    'index': {
      entry: './src/pages/opening/main.js',
      template: 'public/index.html',
      title: 'Open Page',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'home': {
      entry: './src/pages/home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'home' ]
    },
    'nationalpark': {
      entry: './src/pages/nationalpark/main.js',
      template: 'public/index.html',
      title: 'National Park',
      chunks: [ 'chunk-vendors', 'chunk-common', 'nationalpark' ]
    },
    'universe': {
      entry: './src/pages/universe/main.js',
      template: 'public/index.html',
      title: 'Universe',
      chunks: [ 'chunk-vendors', 'chunk-common', 'universe' ]
    },
    'hiking': {
      entry: './src/pages/hiking/main.js',
      template: 'public/index.html',
      title: 'Hiking',
      chunks: [ 'chunk-vendors', 'chunk-common', 'hiking' ]
    },
    'movies': {
      entry: './src/pages/movies/main.js',
      template: 'public/index.html',
      title: 'Movies',
      chunks: [ 'chunk-vendors', 'chunk-common', 'movies' ]
    },
    'about': {
      entry: './src/pages/about/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    },
    'skills': {
      entry: './src/pages/skills/main.js',
      template: 'public/index.html',
      title: 'Skills',
      chunks: [ 'chunk-vendors', 'chunk-common', 'skills' ]
    },
    'contact': {
      entry: './src/pages/contact/main.js',
      template: 'public/index.html',
      title: 'Contact',
      chunks: [ 'chunk-vendors', 'chunk-common', 'contact' ]
    },
    'moviesearch': {
      entry: './src/pages/moviesearch/main.js',
      template: 'public/index.html',
      title: 'IMDB Movie Search',
      chunks: [ 'chunk-vendors', 'chunk-common', 'moviesearch' ]
    }
  }
}
