import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: './index.ts',
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: 'b2bUtils',
    globals: {
      dayjs: 'dayjs',
      clipboard: 'Clipboard'
    }
  },
  plugins: [peerDepsExternal(), typescript()],
};
