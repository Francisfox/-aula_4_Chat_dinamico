//npm init -y
//npm isntall express
// node ./servidor.js
//node --watch ./servidor.js
//npm install socket.io
const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('sockt.io')(servidorHttp);


aplicacao.use(express.static('public'));
servidorHttp.listen(1000);
