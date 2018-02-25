import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'
import config from './base'

config.external.push('react-router-dom', 'react-router-transition')
config.globals = Object.assign(config.globals, {
  'react-router-dom': 'ReactRouterDOM',
  'react-router-transition': 'ReactRouterTransition'
})

config.input = 'example/index.tsx'
config.output = {
  name: 'EUI',
  file: 'dist/eui-mobile.js',
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

export default config
