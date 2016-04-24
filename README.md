# random-protocol

> Return a random protocol.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-protocol/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-protocol/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-protocol)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-protocol/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-protocol)


## Install

```
$ npm install --save random-protocol 
```

## Usage

```js
var randomProtocol = require('random-protocol');

// API
// - randomProtocol();

randomProtocol();
// => http
```

Return one of the following protocols:

```js
[
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
```


## Related

- [random-tld](https://github.com/mock-end/random-tld) - Return a random tld(Top Level Domain).
- [random-domains](https://github.com/mock-end/random-domains) - Return a random domain.
- [random-email](https://github.com/mock-end/random-email) - Return a random email.
- [random-hashtag](https://github.com/mock-end/random-tld) - Return a random hashtag.
- [random-uri](https://github.com/mock-end/random-uri.git) - Return a random url.
- [random-ipv4](https://github.com/mock-end/random-ipv4) - Return a random ipv4 address.
- [random-ipv6](https://github.com/mock-end/random-ipv6) - Return a random ipv6 address.
- [random-avatar](https://github.com/mock-end/random-avatar) - Return a URL to a random avatar from Gravatar.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-protocol/issues/new).
