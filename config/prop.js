import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import eslint from 'rollup-plugin-eslint'
import cssnano from 'cssnano'
import cssnext from 'postcss-cssnext'
import postCssModules from 'postcss-modules'
import postCss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs' // common转 Es5
import resolve from 'rollup-plugin-node-resolve' // 解决外部模块问题
import progress from 'rollup-plugin-progress'
import replace from 'rollup-plugin-replace'

const cssExportMap = {}

export default {
  cache: true,
  input: 'src/main.js',
  output: {
    name: 'qr',
    file: 'dist/bundle.js',
    format: 'iife' // amd,cjs,es,iife,umd
  },
  external: [
    'react'
  ],
  globals: {
    jquery: '$'
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    eslint({
      exclude: [
        'node_modules/**',
        'src/*.pcss'
      ]
    }),
    postCss({
      plugins: [
        cssnano(),
        cssnext({ warnForDuplicates: false }),
        postCssModules({
          getJSON(id, exportTokens) {
            cssExportMap[id] = exportTokens
          }
        })
      ],
      // css Module
      getExportNamed: false, // Default false
      getExport(id) {
        return cssExportMap[id]
      },
      sourceMap: false,
      extract: 'dist/main.css', // 单独导出样式
      extensions: ['.css', '.pcss']
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
    progress({
      clearLine: false // default: true
    })
  ],
  // map
  sourceMap: false,
  // 备注
  intro: '',
  banner: '',
  footer: ''
}
