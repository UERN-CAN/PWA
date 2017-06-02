module.exports = {
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css'
  ],
  root: 'dist/',
  stripPrefix: 'dist',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /uern-can\.github\.io/,
    handler: 'networkFirst'
  }]

};
