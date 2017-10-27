/* eslint-disable import/no-extraneous-dependencies */
import cssNext from 'postcss-cssnext';
import postCssModules from 'postcss-modules';
import pluginBabel from 'rollup-plugin-babel';
import pluginCommonjs from 'rollup-plugin-commonjs';
import pluginESLint from 'rollup-plugin-eslint';
import pluginPostCss from 'rollup-plugin-postcss';
import pluginJson from 'rollup-plugin-json';
import pluginResolve from 'rollup-plugin-node-resolve';
import pluginProgress from 'rollup-plugin-progress';

import { version } from '../package.json';

const cssExportMap = {};

export default {
  input: 'src/main.js', // 入口文件，只能单一入口
  output: {
    name: 'qr', // 模块名
    file: 'dist/bundle.js', // 打包文件名
    paths: {}, // 配置CDN地址
    format: 'umd' // 导出模式，兼容所有
  },
  // 项目中引用的第三方库，不被打包
  external: [
    'react'
  ],
  globals: {
    jquery: '$'
  },
  plugins: [
    // 由于rollup并非开箱机用，需要处理外部模块依赖问题
    pluginResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    // common转 Es5，需要在Babel之前，以免对其他插件产生影响
    pluginCommonjs(),
    // 处理Json格式文件
    pluginJson(),
    pluginESLint(),
    // 处理CSS
    pluginPostCss({
      plugins: [
        cssNext({ warnForDuplicates: false }),
        postCssModules({
          getJSON(id, exportTokens) {
            cssExportMap[id] = exportTokens;
          }
        })
      ],
      // css Module
      getExportNamed: false, // Default false
      getExport(id) {
        return cssExportMap[id];
      },
      sourceMap: true,
      extract: 'dist/main.css', // 单独导出样式
      extensions: ['.css', '.pcss']
    }),
    // 处理JS
    pluginBabel({
      exclude: 'node_modules/**'
    }),
    // 运行进度
    pluginProgress({
      clearLine: true // default: true
    })
  ],
  // 备注
  banner: `/* Library version ${version} */`,
  footer: '/* Contact me to saytxk@gmail.com */'
};
