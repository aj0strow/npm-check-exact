var assert = require("assert")
var checkdeps = require("./checkdeps")

var packages = [
  {
    "dependencies": {
      "express": "~3.20.3"
    }
  },
  {
    "dependencies": {
      "express": "strongloop/express"
    }
  },
  {
    "devDependencies": {
      "express": "^3.20.3"
    }
  }, 
]

packages.forEach(function (pkg) {
  assert.throws(function () {
    checkdeps(pkg)
  }, /inexact/)
})

console.log("passed")