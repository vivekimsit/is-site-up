#!/usr/bin/env node
'use strict';
const isSiteUp = require('./api');

isSiteUp(process.argv[2])
    .then(isUp => {
      console.log(isUp ? '\n  Up\n' : '\n  Down\n');
      process.exit();
    })
    .catch(err => {
      console.log(`${err.message}`);
      process.exit(1);
    });
