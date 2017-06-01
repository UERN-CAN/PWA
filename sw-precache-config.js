module.exports = {
  staticFileGlobs: [
    'index.html'
  ],
  root: 'src',
  stripPrefix: '/src',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /uern-can\.github\.io/,
    handler: 'networkFirst'
  }]

};
