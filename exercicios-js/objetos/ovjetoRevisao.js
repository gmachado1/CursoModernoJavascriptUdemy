//aula88

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 20

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    idade: 56,
    endereco: {
        longradouro: 'Rua ABC',
        numero: 123
    },
    codutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSerguro: function () {
        //...
    }
}

//carro.proprietario.endereco = '1000'
//carro.proprietario.endereco.numero = 3
//carro['proprietario']['endereco']['longradouro']= 'Av Gigante' 

console.log(carro)
//cuiaddo ao acessar ou deletar atributo que não exiite ou nulo
//delete carro.proprietario.endereco
delete carro.codutores
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length)

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3,a:4}
const obj = Object.assign(dest,o1,o2)

console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)