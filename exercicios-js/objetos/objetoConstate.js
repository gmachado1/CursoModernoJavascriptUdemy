//aula90
//pessoa -> 123 -> {...}
const pessoa = {nome:'joao'}
pessoa.nome = 'maria'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome:'Ana'} //ERRO

Object.freeze(pessoa) //objeto constate

pessoa.nome = 'Pedro'
pessoa.end = 'Rua abc'

delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)