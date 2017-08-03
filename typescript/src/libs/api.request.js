import Config from "../config";

export default (url) => {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();

        xhr.open('get', Config.API + url);

        xhr.onload = function() {
            if (xhr.status === 200 && xhr.readyState === 4) {
                let data = new Function('return ' + xhr.responseText)();

                if (data.code === 0) {
                    resolve(data.content[0]);
                } else {
                    reject();
                }
            }
        }

        xhr.send();
    });
}