/* eslint-disable import/no-extraneous-dependencies */
import commonjs from 'rollup-plugin-commonjs' // common转 Es5
import resolve from 'rollup-plugin-node-resolve' // 解决外部模块问题
import progress from 'rollup-plugin-progress'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.tsx',
  output: {
    name: 'qr',
    file: 'dist/bundle.js',
    format: 'umd' // amd,cjs,es,iife,umd - https://rollupjs.org/#big-list-of-options
  },
  external: [
    'react',
    'react-dom'
  ],
  globals: {
    jquery: '$',
    react: 'react',
    reactDom: 'react-dom'
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    typescript(),
    progress({
      clearLine: false // default: true
    })
  ]
}
