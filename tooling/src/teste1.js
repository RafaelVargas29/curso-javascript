const teste = "teste 1";

const arrowFn = n => n * n;
console.log(arrowFn(2));

class Teste {
    constructor(n) {
        this.n = n;
    }
}

console.log(new Teste(5));