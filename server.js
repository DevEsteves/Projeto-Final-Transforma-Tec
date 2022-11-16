const express = require('express');
const router = require('./router/router');

const app = express();


app.use(router);

app.listen(8080, function(req, res){
    console.log("Servidor rodando na porta 8080");
})