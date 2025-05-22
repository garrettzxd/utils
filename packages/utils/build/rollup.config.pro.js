import { terser } from 'rollup-plugin-terser';
import baseConfig from './rollup.config';

export default {
  ...baseConfig,
  plugins: [...baseConfig.plugins, terser()],
};
