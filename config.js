module.exports = {
  server: {
    host: '127.0.0.1',
    port: 8080
  },
  client: {
    host: '127.0.0.1',
    port: 8888
  },
  ui: {
    srcDir: 'src',
    entry: 'js/index.js',
    outputDir: 'public',
    outputFile: 'js/app.bundle.js', //relative to outputDir
    preprocessor: 'scss', //or 'less'
  },
}
