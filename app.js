/*app.js*/

import { Block,BlockChain } from './block.js';
const obj = require('./block.js')
let b = new obj()

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
  res.statusCode = 200;


let a = new Block({from: "Arpita", to: "Aaditya"})
let chain = new BlockChain()

chain.addNewBlock(a)
console.log(chain)
console.log("Validity: " + chain.chainValidity())
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
})