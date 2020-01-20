//112
const produtos = [
    {nome:"Notebook", preco:2499,fragil:true},
    {nome:"iPad Pro", preco:2199, fragil:true},
    {nome:"Copo de Vidro", preco:21.49, fragil:true},
    {nome:"Copo de Plástico", preco:18.99,fragil:false}
]

console.log(produtos)

const produtosFrageis = produtos.filter(e=>e.fragil)
console.log(produtosFrageis)
const produtosFrageisECaro = produtos.filter(e=>e.fragil).filter(e=>e.preco>=500)
console.log(produtosFrageisECaro)