(function(exports) {

    exports.$('#submit').onclick = function() {
        var o = {};

        //添加姓名
        o.name = exports.$('#name').value;

        //添加年龄
        o.age = +exports.$('#age').value;

        //添加出生日期
        o.birth = exports.$('#birth').value;

        for (var key in o) {
            if (o.hasOwnProperty(key) && !o[key]) {
                alert(key + '的值不能为空');
                return;
            }
        }

        exports.request({
            method:"post",
            url:"/api/modify",
            data:o
        });
    }
})(window.exports || {});