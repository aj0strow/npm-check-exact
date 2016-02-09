#!/usr/bin/env node

var fs = require("fs")
var path = require("path")
var checkdeps = require("./checkdeps")

var filename = path.join(process.cwd(), "package.json")
var file = fs.readFileSync(filename, { encoding: "utf8" })
checkdeps(JSON.parse(file))
