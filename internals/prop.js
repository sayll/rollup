import cssnano from 'cssnano'
import postcss from 'rollup-plugin-postcss'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import config from './base'

config.input = 'components/index.tsx'

config.output = {
  name: 'EUI',
  file: 'dist/eui-mobile.js',
  format: 'es' // amd,cjs,es,iife,umd - https://rollupjs.org/#big-list-of-options
}

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

export default config
