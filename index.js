const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send("Olá Diego!")
});

app.listen(3000,function(){
    console.log("Conexão Inicialização na porta 3000")
});