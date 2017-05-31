/**
 * Node.js Boilerplate
 */

'use strict';

const http = require('http');

let srv = http.createServer((req, res) => {
    res.end('Hi!');
});

srv.listen(5000);
