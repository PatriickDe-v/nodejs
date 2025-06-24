const express = require("express");     //Importando o Express
const app = express();                   //Iniciando o express e passando inicialização para const app


app.get("/", function(req, res) {
    res.send("Bem vindo ao meu site!")      //Definindo rota inicial apenas uma resposta por rota
})                            

app.get("/blog", function(req, res) {       //Segunda rota criada
    res.send("Olá, você está no blog")
})

app.listen(8080, function (erro) {              //Adicionando a porta e a função caso der algum erro, mostrar mensagem
    if (erro) {
        console.log("Ocorrou um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})

