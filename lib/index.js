'use strict'

module.exports = clean

function clean(msg, opts) {
  opts = opts || {}
  var replace = opts.replace || '****'
  if (!msg || typeof msg !== 'object') {
    return msg
  }
  var keys = Object.keys(msg)
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i]
    if (key === 'password') {
      msg[key] = replace
    } else if (Array.isArray(msg[key])) {
      msg[key] = msg[key].map(clean);
    } else if (typeof msg[key] === 'object') {
      msg[key] = clean(msg[key])
    }
  }

  return msg
}
