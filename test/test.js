'use strict';

var test = require('tap').test
var clean = require('../')

var tests = [
  {
    name: 'should clean out passwords'
  , test: {
      meta: {}
    , data: {
        email: 'biscuits'
      , password: 'password'
      }
    }
  , expected: {
      meta: {}
    , data: {
        email: 'biscuits'
      , password: '****'
      }
    }
  }
, {
    name: 'should work recursively'
  , test: {
      meta: {}
    , data: {
        meta: {}
      , data: {
          email: 'biscuits'
        , password: 'password'
        }
      }
    }
  , expected: {
      meta: {}
    , data: {
        meta: {}
      , data: {
          email: 'biscuits'
        , password: '****'
        }
      }
    }
  }
, {
    name: 'should return msg if string'
  , test: 'str'
  , expected: 'str'
  }
, {
    name: 'should return msg if bool'
  , test: true
  , expected: true
  }
, {
    name: 'should work for arrays'
  , test: {
      data: [{
        meta: { password: '1234' }
      }
    , {
        meta: { password: '1234' }
      }]
    }
  , expected: {
      data: [{
        meta: { password: '****' }
      }
    , {
        meta: { password: '****' }
      }]
    }
  }
]

tests.forEach(function(tester) {
  test(tester.name, function(t) {
    t.deepEqual(clean(tester.test), tester.expected)
    t.end()
  })
})

test('should work with custom replace string', function(t) {
  var input = {
    name: 'test'
  , password: 'test'
  }
  var exp = {
    name: 'test'
  , password: '____'
  }
  var out = clean(input, {
    replace: '____'
  })
  t.deepEqual(out, exp)
  t.end()
})
