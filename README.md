# js-libs
typescript 实现的js常用函数库


#### 问题一
如下报错： 
```
import * as chai from 'chai';

^^^^^^

SyntaxError: Cannot use import statement outside a module
```
解决方案看 [这里](https://stackoverflow.com/questions/60993812/mocha-typescript-cannot-use-import-statement-outside-a-module)

解决方案简单来说，就是新建个 `tsconfig.test.json` 把里面的 `module`字段设置为`commonjs`

