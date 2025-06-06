import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import baseConfig from './rollup.config';

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    livereload({
      verbose: true
    }),
    serve({
      open: true,
      port: '1103',
      contentBase: './',
      openPage: '/build/index.html'
    }),
  ],
};
