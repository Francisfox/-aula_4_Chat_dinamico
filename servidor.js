//npm init -y
//npm isntall express
//nvm install node

// node ./servidor.js
//node --watch ./servidor.js
//npm install socket.io

import express from 'express';
import http from 'http'

//const express = require('express');
//const http = require('http');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('sockt.io')(servidorHttp);


aplicacao.use(express.static('public'));
servidorHttp.listen(3000 , ()=>{
    console.log(`> Servidor linstening om porte:3000`)
})
