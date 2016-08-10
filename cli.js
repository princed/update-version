#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var updateVersion = require('./index');

delete argv._;
updateVersion(argv, function (err) {
  if (err) {
    throw err;
  }
});
