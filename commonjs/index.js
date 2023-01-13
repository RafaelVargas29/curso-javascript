//importação do pacote nativo do node 'fs'
const fs = require("fs");

//importação do pacote node emoji (npm install node-emoji)
const emoji = require("node-emoji");

//importando um módulo que foi criado
const fn = require("./modules/mod1");
console.log("mod1");
console.log(mod1.fn);
console.log(mod1.fn());

//primeiro parâmetro é o nome do arquivo, segundo é o que estará escrito nele e o terceiro é uma função que retona um erro
fs.writeFile("teste.txt", "Olá mundo!", err => {
    if(err) throw err;
    console.log("saved", emoji.get("coffee"));
});