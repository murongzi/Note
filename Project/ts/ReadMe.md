#### 问题集

``` 
webpack --display-error-details添加后面的--display-error-details输出选项，可以详尽的显示webpack打包时候的错误，有利于定位问题

https://github.com/webpack/webpack/issues/981
```

**场景**

src文件下有一个index.ts文件的时候，添加一个额外的ts文件util.ts文件，在index.ts 中添加```import Util from './util'```;代码，运行npm run build，命令的时候会报错
```
ERROR in ./src/index.ts
Module not found: Error: Can't resolve './util' in '/Users/mazidong/work/demo/FE/Project/ts/src'
resolve './util' in '/Users/mazidong/work/demo/FE/Project/ts/src'
  using description file: /Users/mazidong/work/demo/FE/Project/ts/package.json (relative path: ./src)
    Field 'browser' doesn't contain a valid alias configuration
  after using description file: /Users/mazidong/work/demo/FE/Project/ts/package.json (relative path: ./src)
    using description file: /Users/mazidong/work/demo/FE/Project/ts/package.json (relative path: ./src/util)
      no extension
        Field 'browser' doesn't contain a valid alias configuration
        /Users/mazidong/work/demo/FE/Project/ts/src/util doesn't exist
      .js
        Field 'browser' doesn't contain a valid alias configuration
        /Users/mazidong/work/demo/FE/Project/ts/src/util.js doesn't exist
      .json
        Field 'browser' doesn't contain a valid alias configuration
        /Users/mazidong/work/demo/FE/Project/ts/src/util.json doesn't exist
      as directory
        /Users/mazidong/work/demo/FE/Project/ts/src/util doesn't exist
[/Users/mazidong/work/demo/FE/Project/ts/src/util]
[/Users/mazidong/work/demo/FE/Project/ts/src/util.js]
[/Users/mazidong/work/demo/FE/Project/ts/src/util.json]
[/Users/mazidong/work/demo/FE/Project/ts/src/util]
 @ ./src/index.ts 3:13-30
```

问题的起因：import 代码的时候，需要从指定的文件中找到文件，并解析，而webpack默认解析的是js，这个时候无法解析这个文件，所以需要添加
webpack对指定拓展名的文件，添加解析[详见描述](https://github.com/webpack/webpack/issues/981#issuecomment-204482161)
[webpack官网说明](https://doc.webpack-china.org/configuration/resolve/#resolve-extensions)

**场景**

这个问题是由上一个问题引申出来的

当ts文件中引用js拓展名的模块文件的时候
```
ERROR in ./src/index.ts
Module not found: Error: Can't resolve './util' in '/Users/mazidong/work/demo/FE/Project/ts/src'
resolve './util' in '/Users/mazidong/work/demo/FE/Project/ts/src'
  using description file: /Users/mazidong/work/demo/FE/Project/ts/package.json (relative path: ./src)
    Field 'browser' doesn't contain a valid alias configuration
  after using description file: /Users/mazidong/work/demo/FE/Project/ts/package.json (relative path: ./src)
    using description file: /Users/mazidong/work/demo/FE/Project/ts/package.json (relative path: ./src/util)
      no extension
        Field 'browser' doesn't contain a valid alias configuration
        /Users/mazidong/work/demo/FE/Project/ts/src/util doesn't exist
      .ts
        Field 'browser' doesn't contain a valid alias configuration
        /Users/mazidong/work/demo/FE/Project/ts/src/util.ts doesn't exist
      js
        Field 'browser' doesn't contain a valid alias configuration
        /Users/mazidong/work/demo/FE/Project/ts/src/utiljs doesn't exist
      as directory
        /Users/mazidong/work/demo/FE/Project/ts/src/util doesn't exist
[/Users/mazidong/work/demo/FE/Project/ts/src/util]
[/Users/mazidong/work/demo/FE/Project/ts/src/util.ts]
[/Users/mazidong/work/demo/FE/Project/ts/src/utiljs]
[/Users/mazidong/work/demo/FE/Project/ts/src/util]
 @ ./src/index.ts 3:13-30

ERROR in [at-loader] ./src/index.ts:1:18
    TS7016: Could not find a declaration file for module './util'. '/Users/mazidong/work/demo/FE/Project/ts/src/util.js' implicitly has an 'any' type.
```

可在tsconfig.json文件中添加noImplicitAny:false暂时解决问题

正规的解法：tsconfig.json文件中allowJs设为true