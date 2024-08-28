import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';
import css from "rollup-plugin-import-css";
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      css({
        output: 'dist/styles.css',
      }),
      peerDepsExternal(),
      resolve({
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      babel({
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
