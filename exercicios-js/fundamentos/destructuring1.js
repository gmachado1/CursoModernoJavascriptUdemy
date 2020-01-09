const pessoa = { 
    nome: 'Ana', 
    idade: 5, 
    endereco: { 
        longradouro: 'Rua abc', 
        numero: 1000 
    } 
}
console.log(pessoa)

const {nome,idade} = pessoa
console.log(nome,idade)

const {nome:n, idade:i} = pessoa
console.log(n,i)

const {sobrenome,bemHumorada=true} = pessoa
console.log(sobrenome,bemHumorada)

const {conta:{ag,num}}=pessoa
 console.log(ag,num)