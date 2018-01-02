const loaderUtils = require('loader-utils');

module.exports = function (content, map, meta) {
    console.log('this is my test loader');
    let options = loaderUtils.getOptions(this);

    return 'module.exports=' + content
}
