const http = require("http");
const dotenv = require("dotenv").config();
const app = require("./app");
//let debug = require('debug')('http'), name = 'imitchef';

const port = process.env.PORT || 1995;
const express = require('express');

let server = http.createServer(app);
server.listen(port, () => console.log("API is running on " + port));

module.exports = server;