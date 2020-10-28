const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send("Olá Diego!")
});

app.get('/mensagem', function(req,res){
    res.send("Essa mensagem é automática!")
})

app.listen(3000,function(){
    console.log("Conexão Inicialização na porta 3000")
});