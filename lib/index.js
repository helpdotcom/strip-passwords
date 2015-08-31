'use strict'

module.exports = clean

function clean(msg) {
  if (typeof msg !== 'object') {
    return msg
  }
  var keys = Object.keys(msg)
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i]
    if (key === 'password') {
      msg[key] = '****'
    } else if (Array.isArray(msg[key])) {
      msg[key] = msg[key].map(function(item) {
        return clean(item)
      });
    } else if (typeof msg[key] === 'object') {
      msg[key] = clean(msg[key])
    }
  }

  return msg
}
