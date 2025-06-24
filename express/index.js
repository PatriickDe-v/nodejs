const express = require("express");     //Importando o Express
const app = express();                   //Iniciando o express e passando inicialização para const app

app.listen(8080, function (erro) {              //Adicionando a porta e a função caso der algum erro, mostrar mensagem
    if (erro) {
        console.log("Ocorrou um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})

