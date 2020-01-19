//aula100


//object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco:1.99,tag:'promocao'
})
console.log('Extension',Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' //não criou descricao
delete produto.tag //deletou atributo do objeto
console.log(produto)

//Object.seal = selar
const pessoa = {nome:'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.nome = 'Silva' //é possivel alterar
delete pessoa.nome //não é pssível deletar
pessoa.idade = 29
pessoa.descricao = "amiga da jane" //não é possível criar atributo
console.log(pessoa)

//Object.freeze = selado + valores constantes
const pessoa2 = {nome:'Juliana', idade:35}//writeble = false
Object.freeze(pessoa2)
pessoa2.sobrenome = 'Silva'
delete pessoa2.nome
pessoa2.idade = 29
console.log(pessoa2)
