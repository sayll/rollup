/* eslint-disable import/no-extraneous-dependencies */
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'

import base from './base'

const config = base

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
