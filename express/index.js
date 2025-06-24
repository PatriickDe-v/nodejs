const express = require("express");     //Importando o Express
const app = express();                   //Iniciando o express e passando inicialização para const app

// REQ => DADOS ENVIADOS PELO USUÁRIO
// RES => RESPOSTA QUE VAI SER ENVIADA PELO USUÁRIO

app.get("/", function (req, res) {
    res.send("Bem vindo ao meu site!")      //Definindo rota inicial apenas uma resposta por rota
})
//Parametro opcional
app.get("/blog/:artigo?", function (req, res) {       //Segunda rota criada
    
    let artigo = req.params.artigo
    if (artigo) {
        res.send(`Você está no artigo: ${artigo}`)
    } else {
        res.send("Você está no blog")
    }
})


app.get("/ola/:nome", function (req, res) {
    let nome = req.params.nome
    res.send(`Olá! ${nome}`)
})




app.listen(4000, function (erro) {              //Adicionando a porta e a função caso der algum erro, mostrar mensagem
    if (erro) {
        console.log("Ocorrou um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})

