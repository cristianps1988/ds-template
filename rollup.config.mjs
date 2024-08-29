// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import terser from '@rollup/plugin-terser';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';
// import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';
// import postcssImport from 'postcss-import';
// import fs from 'fs';
// import path from 'path';

// import { createRequire } from 'node:module';
// const requireFile = createRequire(import.meta.url);
// const packageJson = requireFile('./package.json');

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: packageJson.main,
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: 'esm',
//         exports: 'named',
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       postcss({
//         extensions: ['.css'],
//         extract: true,
//         minimize: true,
//         plugins: [require('postcss-import')()],
//       }),
//       peerDepsExternal(),
//       resolve({
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//       }),
//       commonjs(),
//       typescript({ tsconfig: './tsconfig.json' }),
//       terser(),
//       babel({
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//         exclude: 'node_modules/**',
//         babelHelpers: 'bundled',
//       }),
//     ],
//     external: ['react', 'react-dom'],
//   },
//   {
//     input: 'dist/esm/types/index.d.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     plugins: [dts.default()],
//     external: [/\.css$/],
//   },
// ];

// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import terser from '@rollup/plugin-terser';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';
// import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';
// import postcssImport from 'postcss-import';
// import { createRequire } from 'node:module';
// const requireFile = createRequire(import.meta.url);
// const packageJson = requireFile('./package.json');

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: packageJson.main,
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: 'esm',
//         exports: 'named',
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       postcss({
//         extensions: ['.css'],
//         extract: 'styles.css',
//         minimize: true,
//         plugins: [postcssImport()],
//       }),
//       peerDepsExternal(),
//       resolve({
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//       }),
//       commonjs(),
//       typescript({ tsconfig: './tsconfig.json' }),
//       terser(),
//       babel({
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//         exclude: 'node_modules/**',
//         babelHelpers: 'bundled',
//       }),
//     ],
//     external: ['react', 'react-dom'],
//   },
//   {
//     input: 'dist/esm/types/index.d.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     plugins: [dts.default()],
//     external: [/\.css$/],
//   },
// ];

// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import terser from '@rollup/plugin-terser';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';
// import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';
// import postcssImport from 'postcss-import';
// import { createRequire } from 'node:module';
// const requireFile = createRequire(import.meta.url);
// const packageJson = requireFile('./package.json');

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: packageJson.main,
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: 'esm',
//         exports: 'named',
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       peerDepsExternal(),
//       resolve({
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//       }),
//       commonjs(),
//       typescript({ tsconfig: './tsconfig.json' }),
//       postcss({
//         extensions: ['.css'],
//         extract: 'styles.css', // Cambiamos a 'styles.css' en lugar de 'dist/styles.css'
//         minimize: true,
//         plugins: [postcssImport()],
//       }),
//       terser(),
//       babel({
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//         exclude: 'node_modules/**',
//         babelHelpers: 'bundled',
//       }),
//     ],
//     external: ['react', 'react-dom'],
//   },
//   {
//     input: 'dist/esm/types/index.d.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     plugins: [dts.default()],
//     external: [/\.css$/],
//   },
// ];

// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import terser from '@rollup/plugin-terser';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';
// import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';
// import postcssImport from 'postcss-import';
// import { createRequire } from 'node:module';

// const requireFile = createRequire(import.meta.url);
// const packageJson = requireFile('./package.json');

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: packageJson.main,
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: 'esm',
//         exports: 'named',
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       peerDepsExternal(),
//       resolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
//       commonjs(),
//       typescript({ tsconfig: './tsconfig.json' }),
//       postcss({
//         extensions: ['.css'],
//         extract: 'styles.css',
//         minimize: true,
//         plugins: [postcssImport()],
//       }),
//       terser(),
//       babel({
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//         exclude: 'node_modules/**',
//         babelHelpers: 'bundled',
//       }),
//     ],
//     external: ['react', 'react-dom'],
//   },
//   {
//     input: 'dist/esm/types/index.d.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     plugins: [dts.default()],
//     external: [/\.css$/],
//   },
// ];

// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import terser from '@rollup/plugin-terser';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';
// import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';
// import postcssImport from 'postcss-import';
// import { createRequire } from 'node:module';

// const requireFile = createRequire(import.meta.url);
// const packageJson = requireFile('./package.json');

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: packageJson.main,
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: 'esm',
//         exports: 'named',
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       peerDepsExternal(),
//       resolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
//       commonjs(),
//       postcss({
//         extract: true,
//         modules: false,
//         plugins: [postcssImport()],
//       }),
//       typescript({ tsconfig: './tsconfig.json' }),
//       terser(),
//       babel({
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//         exclude: 'node_modules/**',
//         babelHelpers: 'bundled',
//       }),
//     ],
//     external: ['react', 'react-dom'],
//   },
//   {
//     input: 'dist/esm/types/index.d.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     plugins: [dts.default()],
//     external: [/\.css$/],
//   },
// ];

// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import terser from '@rollup/plugin-terser';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';
// import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';
// import postcssImport from 'postcss-import';
// import { createRequire } from 'node:module';

// const requireFile = createRequire(import.meta.url);
// const packageJson = requireFile('./package.json');

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: packageJson.main,
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: 'esm',
//         exports: 'named',
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       peerDepsExternal(),
//       resolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
//       commonjs(),
//       postcss({
//         extract: 'styles.css',
//         modules: false,
//         autoModules: false,
//         minimize: true,
//         plugins: [postcssImport()],
//       }),
//       typescript({ tsconfig: './tsconfig.json' }),
//       terser(),
//       babel({
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//         exclude: 'node_modules/**',
//         babelHelpers: 'bundled',
//       }),
//     ],
//     external: ['react', 'react-dom'],
//   },
//   {
//     input: 'dist/esm/types/index.d.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     plugins: [dts.default()],
//     external: [/\.css$/],
//   },
// ];

// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import terser from '@rollup/plugin-terser';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';
// import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';
// import postcssImport from 'postcss-import';
// import { createRequire } from 'node:module';

// const requireFile = createRequire(import.meta.url);
// const packageJson = requireFile('./package.json');

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: packageJson.main,
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: 'esm',
//         exports: 'named',
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       peerDepsExternal(),
//       resolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
//       commonjs(),
//       postcss({
//         extract: 'dist/styles.css',
//         modules: false,
//         autoModules: false,
//         minimize: true,
//         plugins: [postcssImport()],
//       }),
//       typescript({ tsconfig: './tsconfig.json' }),
//       terser(),
//       babel({
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//         exclude: 'node_modules/**',
//         babelHelpers: 'bundled',
//       }),
//     ],
//     external: ['react', 'react-dom'],
//   },
//   {
//     input: 'dist/esm/types/index.d.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     plugins: [dts.default()],
//     external: [/\.css$/],
//   },
// ];

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcssImport from 'postcss-import';
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
      peerDepsExternal(),
      resolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
      commonjs(),
      postcss({
        extract: true,
        modules: false,
        inject: false,
        minimize: true,
        plugins: [postcssImport()],
      }),
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
