'use strict';

var expect = require('chai').expect;


describe('random-protocol: ', function () {

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

  var randomProtocol = require('../../');

  it('randomTld()', function () {
    expect(randomProtocol()).to.be.oneOf(protocols)
  });
});
