/* eslint-disable import/no-extraneous-dependencies */
import replace from 'rollup-plugin-replace'

import base from './base'

const config = base

config.plugins.push(
  replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
)
config.sourcemap = true

export default config
