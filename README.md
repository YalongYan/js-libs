### 背景
日常开发中，有不少常用且通用的js函数，为了方便后续的复用，提高开发效率，所以就搞了一个js函数库 `tbl-js-libs`；

项目地址: [https://github.com/YalongYan/js-libs](https://github.com/YalongYan/js-libs),

该项目是基于typescript实现的，大家可以基于该项目，或者参考该项目写法再另起一个项目，搭建属于自己的js函数库

### 该函数库特性
- 基于typescript， 类型声明、提示齐全，无缝接入ts项目
- 打包模式为 ES module 模式， 天然支持 tree-shaking，避免多余代码 
- 基于mocha进行单元测试，更稳定、可靠

### 为什么不打包成umd格式的代码
- 目前我所有的项目都是基于es module 开发的，不需要umd格式的
- 打包成umd 代码体积会增加
- es module 天然支持tree-shaking，方便
- 打包成es module 主要就用到typescript，省事
- 后续有需要的话，再对函数库升级即可

### 项目目录介绍

```
    |_ _ _  dist // tsc编译后的目录
    |
    |_ _ _  src // 源码
    |       |
    |_ _ _  |_ _ _ array // 数组类的函数集合
    |       |     |
    |       |     |_ _ _arrayUnique.ts // 数组去重函数
    |       |
    |       |_ _ _ index.ts // 函数的总入口
    |       |
    |       |
    |_ _ _  test // mocha 测试代码
    |       |
    |       |_ _ _ arrayUnique.test.ts // 单元测试代码
    |
    |_ _ _  tsconfig.json // typescript 编译配置文件
    |
    |_ _ _  tsconfig.test.json // 单元测试的配置
```

### arrayUnique.ts 代码如下
```
/**
 * 数组去重
 * @param arr {array} 数组
 * @returns {array} array
 */
export default function arrayUnique(arr: Array<any>): Array<any> {
  return [...new Set(arr)];
}
```

###  arrayUnique.test.ts 代码如下

```
import 'mocha';
import { expect } from 'chai';
import arrayUnique from '../src/array/arrayUnique';

describe('arrayUnique函数', function(){
  it('arrayUnique', function() {
    expect(arrayUnique([1,2,2,3,3])).to.deep.equal([1,2,3]);
  });
});
```

### script 命令介绍
```
"build": "npm run clean && tsc -p tsconfig.json", 
"clean": "rimraf ./dist",
"test": "env TS_NODE_PROJECT=\"tsconfig.test.json\" mocha --require ts-node/register test/*.test.ts"
```
- build 是编译typescript 代码为 es5 的代码
- clean 是删除 dist 目录
- test  是运行单元测试

### tsconfig.json 内容如下
```
{
  "compilerOptions": {
    "outDir": "dist",
    // esnext 是标准的 es module 格式
    "module": "esnext",
    // 编译后符合什么es版本
    "target": "es5",
    // 为每个ts文件 生成一个对应的 .d.ts 文件; 获得 ts 提示
    "declaration": true,
    "downlevelIteration": true,
    "noImplicitAny": true,
    "lib":["es5", "dom", "dom.iterable", "es2015", "es2016", "es2017"],
    "jsx": "react",
  },
  "include": [
    "src"
  ],
  "exclude": [
    "src/**/*.test.tsx",
  ]
}
```
### tsconfig.test.json 文件内容如下
```
{
  "compilerOptions": {
    "outDir": "dist",
    "module": "commonjs", // 就是这个, 运行单元测试的时候 要改成 commonjs 不然会报错
    // 编译后符合什么es版本
    "target": "es5",
    // 为每个ts文件 生成一个对应的 .d.ts 文件; 获得 ts 提示
    "declaration": true,
    "downlevelIteration": true,
    "noImplicitAny": true,
    "lib":["es5", "dom", "dom.iterable", "es2015", "es2016", "es2017"],
    "jsx": "react",
  },
  "include": [
    "src"
  ],
  "exclude": [
    "src/**/*.test.tsx",
  ]
}
```

### 发布npm流程
1. 首先有个 npm 账号， 没有的话去这里注册 [https://www.npmjs.com/](https://www.npmjs.com/)
2. npm login  登录
3. npm publish 发布，(发布之前记得 npm run test 查看单元测试是否通过)

### 使用方法
安装依赖:  `npm i tbl-js-libs -S` 
```
import { isEmpty } from 'tbl-js-libs';

export default () => {
  console.log(isEmpty([1, 2, 3])) // 这里使用
  return (
    <div className="homePage">
      我是测试页面
    </div>
  );
};
```

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

### 补充说明

这里只是把ts代码编译为es5 的代码，并且采用的是 es module 模式, 如果想把函数库打包为umd 模式的代码，可以使用 webpack 或者 rollup 进行打包 

### 参考链接
[断言库chai的用法](https://www.jianshu.com/p/2df72e64a7ca?fromApp=1)

[mocha 官网](https://mochajs.cn)

[打造自己的JavaScript武器库](https://segmentfault.com/a/1190000011966867)



