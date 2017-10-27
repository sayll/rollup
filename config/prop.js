/* eslint-disable import/no-extraneous-dependencies */
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import config from './base';

config.plugins.push(
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  uglify()
);

config.sourcemap = false;

export default config;
