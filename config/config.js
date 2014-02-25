var _ = require('underscore');

// Load app configuration

console.log('Running with env: '+process.env.NODE_ENV);

module.exports = _.extend(
    require(__dirname + '/../config/env/all.js'),
    require(__dirname + '/../config/env/' + process.env.NODE_ENV + '.json') || {});