var assert = require("assert")
var fs = require("fs")
var path = require("path")

var root = process.cwd()
var filename = path.join(root, "package.json")
var pkg = JSON.parse(fs.readSync(filename))

var checkdeps = function (deps) {
  if (deps) {
    Object.keys(deps).forEach(function (name) {
      var semver = deps[name]
      var prefixes = [ "^", "~", "<", ">" ]
      prefixes.forEach(function (prefix) {
        assert(semver[0] != prefix, name = " inexact npm version")
      })
      
      if (semver.indexOf("/") != -1) {
        assert(semver.indexOf("#") != -1, name + " inexact git version")
      }
    })
  }
}

checkdeps(pkg.dependencies)
checkdeps(pkg.devDependencies)
