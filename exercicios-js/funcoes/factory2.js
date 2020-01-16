//aula82

function criarProduto(nome, preco) {
    return { nome, preco, desconto: 0.1 }
}
console.log(criarProduto('notebook',1234))
console.log(criarProduto('ipad',234))