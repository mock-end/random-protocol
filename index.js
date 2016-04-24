'use strict';

var pickItem = require('pick-item');

var protocols = [
  'http',
  'https',
  'ftp',
  'gopher',
  'mailto',
  'mid',
  'cid',
  'news',
  'nntp',
  'prospero',
  'telnet',
  'rlogin',
  'tn3270',
  'wais'
];

module.exports = function () {
  return pickItem(protocols);
};
