const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send("Olá Diego!")
});

app.get('/msg', function(req,res){
    res.send("Essa mensagem é automática!")
})

app.get('/sobre', function(req,res){
    res.send("Esta pagina esta sendo desenvolvida por Leticia")
})

app.get('/layout', function(req,res){
    res.send("Esse é o novo layout!")
})


app.listen(3000,function(){
    console.log("Conexão Inicialização na porta 3000")
});