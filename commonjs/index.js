//importação do pacote nativo do node 'fs'
const fs = require("fs");

//importação do pacote node emoji (npm install node-emoji)
const emoji = require("node-emoji");

//importando um módulo que foi criado
const mod1 = require("./modules/mod1");
const mod2 = require("./modules/mod2");
const mod3 = require("./modules/mod3");

// console.log("mod1");
// console.log(mod1.fn);
// console.log(mod1.fn());

console.log(mod2);
console.log(mod3);

//primeiro parâmetro é o nome do arquivo, segundo é o que estará escrito nele e o terceiro é uma função que retona um erro
// fs.writeFile("teste.txt", "Olá mundo!", err => {
//     if(err) throw err;
//     console.log("saved", emoji.get("coffee"));
// });