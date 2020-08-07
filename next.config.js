// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isDev = process.env.NODE_ENV === 'development';

module.exports = withPWA({
  pwa: {
    disable: isDev,
    dest: 'public',
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    return config;
  },
});
