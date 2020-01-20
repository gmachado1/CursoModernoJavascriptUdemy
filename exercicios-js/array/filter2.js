//aula113
Array.prototype.filter2 = function(callback){
    let newArray = []
    for(let i=0;i<this.length;i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome:"Notebook", preco:2499,fragil:true},
    {nome:"iPad Pro", preco:2199, fragil:true},
    {nome:"Copo de Vidro", preco:21.49, fragil:true},
    {nome:"Copo de Plástico", preco:18.99,fragil:false}
]

//console.log(produtos)

const produtosFrageis = produtos.filter2(e=>e.fragil)
console.log(produtosFrageis)
const fragil = (e=>e.fragil)
const caro = (e =>e.preco>500)
const produtosFrageisECaro = produtos.filter2(fragil).filter2(caro)
console.log(produtosFrageisECaro)