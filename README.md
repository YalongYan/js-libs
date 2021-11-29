### tbl-js-libs
typescript 实现的js常用函数库

### 背景
日常开发中，有不少常用且通用的js函数，为了方便后续的复用，所以需要一个js函数库

### 该函数库特性
- 基于typescript， 类型声明、提示齐全，无缝接入ts项目
- 打包模式为ES模块， 天然支持 tree-shaking，避免多余代码 
- 基于mocha进行单元测试，更稳定、可靠

### 使用方法
`npm i tbl-js-libs -S` 安装依赖
```
import { isEmpty } from 'tbl-js-libs';

export default () => {
  console.log(isEmpty([1, 2, 3]))
  return (
    <div className="homePage">
      我是测试页面
    </div>
  );
};
```
### 参考链接：
Mocha官网: [https://mochajs.cn/#min](https://mochajs.cn/#min)

阮一峰mpcha 教程: [https://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html](https://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)

project-libs: [https://github.com/cpagejs/project-libs](https://github.com/cpagejs/project-libs)

[https://segmentfault.com/a/1190000011966867](https://segmentfault.com/a/1190000011966867)

---
### 函数库开发过程中遇到的问题汇总

#### 问题一
npm run test 如下报错： 
```
import * as chai from 'chai';

^^^^^^

SyntaxError: Cannot use import statement outside a module
```
解决方案看 [这里](https://stackoverflow.com/questions/60993812/mocha-typescript-cannot-use-import-statement-outside-a-module)

解决方案简单来说，就是新建个 `tsconfig.test.json` 把里面的 `module`字段设置为`commonjs`

--- 
