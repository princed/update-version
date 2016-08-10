var pkg = require('package-json-io');
var semver = require('semver-utils');

module.exports = function (newVersion, cb) {
  pkg.read(function (err, data) {
    if (err) {
      return cb(err);
    }

    if (!data.version || typeof data.version !== 'string') {
      return cb(new Error('The version package.json is missing or incorrect'));
    }

    var initialVersion = semver.parse(data.version);

    if (!initialVersion) {
      return cb(new Error('The version package.json is non-compatible with semver'));
    }

    data.version = semver.stringify(Object.assign(initialVersion, newVersion));
    pkg.update(data, cb);
  });
};
