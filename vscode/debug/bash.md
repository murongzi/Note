### bash脚本调试的launch.json的配置

vscode调试依赖bashdb
```bash
brew install bashdb
```

vscode安装插件Bash Debug
```javascript
    {
        // 使用 IntelliSense 以学习相关的 Node.js 调试属性。
        // 悬停以查看现有属性的描述。
        // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "type": "bashdb",
                "request": "launch",
                "name": "启动程序",
                "scriptPath": "${workspaceRoot}/cli.js",
                "commandLineArguments": ""
            }
        ]
    }

```

[vscode官网](https://code.visualstudio.com/docs/languages/python)