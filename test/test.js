var assert = require("assert")
var path = require("path")
var cp = require("child_process")

var tests = [ "carrot", "github", "tilde" ]
tests.forEach(function (dir) {
  assert.throws(function () {
    cp.execSync("node ../../index.js", {
      cwd: path.join(__dirname, dir),
      stdio: "ignore",
    })
  })
})
