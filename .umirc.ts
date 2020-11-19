/*
 * @Author: shijunwen
 * @Email: shijunwen@njsdata.com
 * @LastEditors: shijunwen
 * @Date: 2020-11-18 12:52:49
 * @LastEditTime: 2020-11-18 21:21:59
 * @Description: 请描述文件作用
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'UI',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: true },
      'antd',
    ],
  ],
});
