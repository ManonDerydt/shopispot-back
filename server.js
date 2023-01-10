const http = require("http");
const dotenv = require("dotenv").config();
const app = require("./app");
const express = require('express')
const router = express.Router();
const multer = require('multer');
const mysql = require('mysql');


const port = process.env.PORT || 1995;

let server = http.createServer(app);
app.use(express)
server.listen(port, () => console.log("API is running on " + port));

module.exports = server;