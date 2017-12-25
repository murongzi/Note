const config = require('./config');

module.exports = function(env) {
    return config[env];
}
