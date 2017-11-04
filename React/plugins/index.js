var mySelfPlugin = function() {
}

mySelfPlugin.prototype.apply = function(compiler) {
    compiler.plugin("emit", function(js, callback) {
        debugger
    })
}

module.exports = mySelfPlugin;
/* module.exports = {
    apply:function() {
        debugger
    }
} */