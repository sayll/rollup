/* eslint-disable import/no-extraneous-dependencies */
import cssnano from 'cssnano'
import postcss from 'rollup-plugin-postcss'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import base from './base'

const config = base
config.input = 'src/component/index.tsx'

config.output = {
  name: 'framework7-react',
  file: 'dist/framework7-react.min.js',
  format: 'es' // amd,cjs,es,iife,umd - https://rollupjs.org/#big-list-of-options
}

config.plugins.push(
  replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  postcss({
    plugins: [
      cssnano()
    ],
    minimize: true,
    sourceMap: true,
    extract: true
  }),
  uglify()
)
config.sourcemap = true

export default config
