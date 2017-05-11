###批量格式化js文件

全局安转js-beautify脚本

```bash
npm install -g js-beautify
```

实行shell命令,进入指定的目录

```bash
find . -name '*.js' -exec js-beautify -r -s 2 -p -f '{}' \;
```

耐心等待...