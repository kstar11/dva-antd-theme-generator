const path = require('path');

export default {
  entry: 'src/index.js',
  theme: {
    "@border-radius-base": "4px",
    "@font-size-base": "14px",
    "@line-height-base": "1.2"
  },
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
  },
  ignoreMomentLocale: true,
  disableDynamicImport: true,
  // publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  hash: true,
};
