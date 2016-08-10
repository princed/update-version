#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var updateVersion = require('./index');

delete argv._;

// Turn boolean keys to false to use as reset
Object.keys(argv).forEach(function (key) {
  if (argv[key] === true) {
    argv[key] = false;
  }
});

updateVersion(argv, function (err) {
  if (err) {
    throw err;
  }
});
