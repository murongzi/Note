function TestPlugin(options) {

}

TestPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
        let filelist = 'In this build:\n\n';;

        for (let filename in compilation.assets) {
            filelist += (' - ' + filename + '\n');
        }

        compilation.assets['filelist.md'] = {
            source: () => filelist,
            size:() => filelist.length
        }
        
        callback();
    });
}

module.exports = TestPlugin;