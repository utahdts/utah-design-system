import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';

const packageJson = require('./package.json');

export default [
  {
    input: './index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    // All the used libs needs to be here
    external: [
      'immer',
      'lodash',
      'prop-types',
      'react',
      'react-router-dom',
      'use-immer',
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs(),
      json(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react'],
        babelHelpers: 'bundled',
      }),
    ],
  },
];
