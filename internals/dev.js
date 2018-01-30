/* eslint-disable import/no-extraneous-dependencies */
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'

import base from './base'

const config = base

config.input = 'src/index.tsx'
config.output = {
  name: 'framework7-react',
  file: 'test/framework7-react.test.js',
  format: 'umd' // amd,cjs,es,iife,umd - https://rollupjs.org/#big-list-of-options
}

config.plugins.push(
  replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  postcss({
    minimize: false,
    sourceMap: true,
    extract: false
  })
)
config.sourcemap = true

export default config
