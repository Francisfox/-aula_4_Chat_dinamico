//npm init -y
//npm isntall express
//nvm install node

// node ./servidor.js
//node --watch ./servidor.js
//npm install socket.io

import express from 'express';
import http from 'http'
import { Socket } from 'socket.io';
//import  Socket  from 'socket.io';
//const express = require('express');
//const http = require('http');

const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = (Socket);

aplicacao.use(express.static('public'));

servidorHttp.listen(3000 , ()=>{
    console.log(`> Servidor linstening om porte:3000`)
})
