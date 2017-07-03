(function(module) {
    var exports = module.exports = {};

    exports.$ = function(_, content) {
        content = content || document;

        return content.querySelector(_);
    };

    exports.request = function(params) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest;

            xhr.open(params.method || 'get', params.url || url);

            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.onreadystatechange = function() {
                if (xhr.status == 200 && xhr.readyState == 4) {
                    resolve(Function('return ' + xhr.responseText)());
                }
            }

            xhr.send(params.data ? exports.formData(params.data) : null);
        })
    }

    exports.formData = function(data) {
        var arry = [];

        if (!data) return null;

        for (var key in data) {
            arry.push(key + '=' + data[key]);
        }

        return arry.join('&');
    }
})(window);