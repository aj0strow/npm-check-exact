var assert = require("assert")

var check = function (deps) {
  if (deps) {
    Object.keys(deps).forEach(function (name) {
      var semver = deps[name]
      var prefixes = [ "^", "~", "<", ">" ]
      prefixes.forEach(function (prefix) {
        assert(semver[0] != prefix, name + " inexact npm version")
      })
      if (semver.indexOf("/") != -1) {
        assert(semver.indexOf("#") != -1, name + " inexact git version")
      }
    })
  }
}

module.exports = function (pkg) {
  var keys = [ "dependencies", "devDependencies" ]
  keys.forEach(function (key) {
    check(pkg[key])
  })
}
