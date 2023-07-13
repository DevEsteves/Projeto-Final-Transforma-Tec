const express = require('express');
const router = require('./router/router');
const cors = require('cors');


// Enable CORS
const app = express();

app.use(cors());

app.use(router);

app.listen(8080, function(req, res){
    console.log("Servidor rodando na porta 8080");
})