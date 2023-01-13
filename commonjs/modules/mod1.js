//O que é importado é sempre o que está dentro de 'module.exports'

//module.exports.teste = "Ola mundo";
exports.fn = () => {
    console.log("função module.exports");
    return " -- função module.exports -- ";
}
