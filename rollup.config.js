import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'lib',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      json(),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: 'tsconfig.bundle.json'
      }),
      terser()
    ],
    external: ['react', 'react-dom']
  },
  {
    input: 'lib/types/index.d.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
];
