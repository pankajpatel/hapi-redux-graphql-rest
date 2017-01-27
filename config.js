const path = require('path');
const outputDir = 'public';

module.exports = {
  server: {
    host: '127.0.0.1',
    port: 8080,
    routes: {
      files: {
        relativeTo: path.join(__dirname, outputDir)
      }
    }
  },
  client: {
    host: '127.0.0.1',
    port: 8888
  },
  ui: {
    srcDir: 'src',
    entry: 'js/index.js',
    outputDir: outputDir,
    outputFile: 'js/app.bundle.js', //relative to outputDir
    preprocessor: 'scss', //or 'less'
  },
}
