/*
 * @Author: shijunwen
 * @Email: shijunwen@njsdata.com
 * @LastEditors: shijunwen
 * @Date: 2020-11-18 12:52:49
 * @LastEditTime: 2020-11-18 22:39:04
 * @Description: 请描述文件作用
 */
export default {
  esm: 'rollup',
  cjs: 'rollup',

  runtimeHelpers: true,
  lessInBabelMode: true,
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: 'css' },
      'antd',
    ],
  ],
};
