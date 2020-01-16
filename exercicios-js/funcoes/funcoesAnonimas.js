// aula 73
const soma = function(x,y){
    console.log('a')
    return x+y
}

const imprimirResultado = function (a,b,operacao = soma){
    console.log('b')
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
console.log('---')
imprimirResultado(3,4,soma)
console.log('--- soma:'+soma)
imprimirResultado(3,4, function(x,y){
    console.log(x)
    console.log(y)
    return x-y
})
console.log('---')
imprimirResultado(3,4,(x,y)=>x*y)
console.log('---')

const pessoa = {
    falar:function(){
        console.log('Opa')
    },
    comer(){
        console.log('nhami nhami')
    }
}

pessoa.falar()
pessoa.comer()