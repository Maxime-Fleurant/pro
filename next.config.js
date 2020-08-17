const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    publicExcludes: [
      '!img/cinema/**/**/*.*',
      '!img/books/**/**/*.*',
      '!img/game/**/**/*.*',
    ],
  },
});
