const prod1 = {}
prod1.nome = "Celular utra mega"
prod1.preco = 432.43
prod1['desconto a vista'] = 0.10 //evitar espacos
console.log(prod1)

const prod2 = {
    nome:'camisa polo',
    preco:43.34,
    obj:{
        blaba:1,
        obj:{
            blava:2
        }
    }
}

// json é diferente de undefined
console.log(prod2);