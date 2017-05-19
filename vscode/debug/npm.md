### npm调试的launch.json的配置

```javascript
    {
        // 使用 IntelliSense 以学习相关的 Node.js 调试属性。
        // 悬停以查看现有属性的描述。
        // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "type": "node",
                "request": "launch",
                "name": "npm调试",
                "program": "${workspaceRoot}/cli.js",
                "env": {
                    "NODEPATH":"/usr/local/bin/node"
                },
                "args": [
                    "--version"
                ]
            }
        ]
    }
```

在npm/cli.js的require中添加断点，即可

** cli.js脚本为可执行文件，带有#!/usr/bin/env node，所以配置env属性，并且把node的可执行目录拼接上去


[vscode官网](https://code.visualstudio.com/docs/languages/python)