const path = require('path');
const cracoPluginStyleResourcesLoader = require('craco-plugin-style-resources-loader');
const CracoLessPlugin = require('craco-less');
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    },
    {
      plugin: cracoPluginStyleResourcesLoader,
      options: {
        patterns: [resolve('./src/static/style/comm.less')],
        styleType: 'less'
      }
    }
  ]
};
