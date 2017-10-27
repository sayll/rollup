/* eslint-disable import/no-extraneous-dependencies */
import replace from 'rollup-plugin-replace';

import config from './base';

// 开启缓存
config.cache = true;

// 环境标识
config.plugins.push(
  replace({
    'process.env.NODE_ENV': JSON.stringify('development'),
  })
);

// 添加Map
config.sourcemap = true;

// 往模块初始化前写入，添加全局识别环境
config.intro = 'var NODE_ENV = true';

export default config;
