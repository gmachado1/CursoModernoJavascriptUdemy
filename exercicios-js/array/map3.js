//aula111
Array.prototype.map2 = function(callback){
    let newArray = []
    for(let i=0;i<this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const carrinho = [
    `{"nome":"Borracha", "preco":3.45}`,
    `{"nome":"Caderno", "preco":13.90}`,
    `{"nome":"Kit lapis","preco":41.22}`,
    `{"nome":"Caneta", "preco":7.50}`
]

//retornar um array apenas com os precos

const formatarMoeda = (e=>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`)

carrinho.map2(e=> console.log(formatarMoeda(JSON.parse(e).preco)))