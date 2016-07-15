'use strict';
const http = require('http');

module.exports = url => {
  if (!url) {
    throw new TypeError('URL cannot be empty!');
  }
  const options = {
    host: url,
    method: 'HEAD',
    path: '/'
  };
  const req = http.request(options);
  req.end();
  const promise = new Promise((resolve, reject) => {
    let connected = false;
    req.on('response', res => {
      connected = res.statusCode < 500;
      resolve(connected);
    });

    req.on('error', err => {
      resolve(false);
    });
  });
  return promise;
};
