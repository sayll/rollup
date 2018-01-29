/* eslint-disable import/no-extraneous-dependencies */
import cssnano from 'cssnano'
import postcss from 'rollup-plugin-postcss'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import base from './base'

const config = base

config.plugins.push(
  replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  postcss({
    plugins: [
      cssnano()
    ],
    minimize: true,
    sourceMap: false,
    extract: true
  }),
  uglify()
)
config.sourcemap = false

export default config
