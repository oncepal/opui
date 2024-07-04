process.env.NODE_ENV = 'development';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.ts',
  output: [
    {
      file:"build/index.js",
      format: 'es',
      sourcemap: process.env.NODE_ENV == 'development',
    },
    {
      name: 'utils',
      globals: 'utils',
      file: 'build/index.umd.js',
      format: 'umd',
      sourcemap: process.env.NODE_ENV == 'development',
    },
  ],
  plugins: [
    peerDepsExternal(), // 支持深度依赖，解耦类库绑定，缩小体积
    filesize(),// 显示打包后体积
    resolve(), // 解析node第三方模块
    commonjs(), // 支持commonjs方式引入
    typescript({ tsconfig: 'tsconfig.json' }), // 支持 typescript 预编译
    process.env.NODE_ENV == 'production' && terser(), // 如果是生产包，还做一次压缩
  ],
};
