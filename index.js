var assert = require("assert")
var fs = require("fs")
var path = require("path")
var cp = require("child_process")

var checkdeps = function (deps) {
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

var filename = path.join(process.cwd(), "package.json")
var file = fs.readFileSync(filename, { encoding: "utf8" })
var pkg = JSON.parse(file)

checkdeps(pkg.dependencies)
checkdeps(pkg.devDependencies)
