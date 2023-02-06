// ----------import fs from "fs"; --------- // what is-  es modules ?????
const fs = require("fs");
const { readFileSync, writeFileSync } = require("fs");
//--------------------------------------האם ראשון ושני אותו דבר  ???
const http = require("http");

exports.myDateTime = function () {
  return Date();
};
console.log(process.argv);
