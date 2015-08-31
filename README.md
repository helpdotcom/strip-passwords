# strip-passwords

[![Build Status](https://travis-ci.org/helpdotcom/strip-passwords.svg)](https://travis-ci.org/helpdotcom/strip-passwords)
[![Coverage Status](https://coveralls.io/repos/helpdotcom/strip-passwords/badge.svg?branch=master&service=github)](https://coveralls.io/github/helpdotcom/strip-passwords?branch=master)

Strip passwords from an object

## Install

```bash
$ npm install --save strip-passwords
```

## Usage

```js
var clean = require('strip-passwords')

clean({ password: 'test' })
// => { password: '****' }
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
