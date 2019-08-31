module.exports = {
  extends: ['wolox-react'],
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '~assets': './src/app/assets',
          '~components': './src/app/components',
          '~screens': './src/app/screens',
          '~config': './src/config',
          '~constants': './src/constants',
          '~redux': './src/redux',
          '~services': './src/services',
          '~utils': './src/utils'
        }
      }
    }
   }
};
