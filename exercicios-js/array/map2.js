//aula 110
const carrinho = [
    `{"nome":"Borracha", "preco":3.45}`,
    `{"nome":"Caderno", "preco":13.90}`,
    `{"nome":"Kit lapis","preco":41.22}`,
    `{"nome":"Caneta", "preco":7.50}`
]

//retornar um array apenas com os precos

const formatarMoeda = (e=>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`)

carrinho.map(e=> console.log(formatarMoeda(JSON.parse(e).preco)))