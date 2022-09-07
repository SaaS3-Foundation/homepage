const path = require('path');
const sassResourcesLoader = require('craco-sass-resources-loader');
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/static/style/mixins.scss'
      }
    },
  ]
};
