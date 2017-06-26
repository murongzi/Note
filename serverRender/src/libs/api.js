export default {
    request:(params) => {
        if (typeof window !== 'undefined') {
            var xhr = new XMLHttpRequest;

            xhr.open('get', params.url);

            xhr.onreadystatechange = (data) => {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    params.callback && params.callback(new Function('return ' + xhr.responseText)());
                }
            }

            xhr.send();
        } else {
            let http = require('http'),
                url = require('url'),
                urlO = url.parse(params.url);

            http.get({
                host:urlO.host,
                path:urlO.path
            }, function(res) {
                var str = '';

                res.on('data', function(chunk) {
                    str += chunk;
                });

                res.on('end', function(chunk) {
                    params.callback && params.callback(new Function('return ' + str)());
                });
            });
        }
    }
}