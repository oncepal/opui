process.env.NODE_ENV = 'development';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
import image from '@rollup/plugin-image';
import packageJson from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: process.env.NODE_ENV == 'development',
    },
    {
      name: 'ui',
      globals: 'ui',
      file: packageJson.main,
      format: 'umd',
      sourcemap: process.env.NODE_ENV == 'development',
    },
  ],
  plugins: [
    peerDepsExternal(),
    filesize(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: 'tsconfig.json' }),
    image(),
    process.env.NODE_ENV == 'production' && terser(),
  ],
};
