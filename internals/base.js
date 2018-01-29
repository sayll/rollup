/* eslint-disable import/no-extraneous-dependencies */
import commonjs from 'rollup-plugin-commonjs' // common转 Es5
import resolve from 'rollup-plugin-node-resolve' // 解决外部模块问题
import progress from 'rollup-plugin-progress'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.tsx',
  output: {
    name: 'framework7',
    file: 'dist/framework7.js',
    format: 'umd' // amd,cjs,es,iife,umd - https://rollupjs.org/#big-list-of-options
  },
  external: ['react', 'react-dom', 'framework7'],
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'framework7': 'Framework7'
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
