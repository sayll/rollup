/* eslint-disable import/no-extraneous-dependencies */
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import base from './base'

const config = base

config.plugins.push(
  replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  uglify()
)
config.sourcemap = false
config.intro = ''
config.banner = ''
config.footer = ''

export default config
