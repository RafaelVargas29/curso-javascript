const teste = "teste 1";

const arrowFn = n => n * n;
console.log(arrowFn(2));

class Teste {
    constructor(n) {
        this.n = n;
    }
}
console.log(new Teste(5));

//Função via cep
const getAdress =  async (cep) => {
    let url = `https://viacep.com.br/ws${cep}/json`;
    try {
        const resposta = await fetch(url);
        if(!resposta.ok) throw Error("Ivalid postal code!");
        const json = await resposta.json();
        return json;
    } catch (e) {
        throw e;
    }
}

const endereco = getAdress("26.311-210");
console.log(endereco);
