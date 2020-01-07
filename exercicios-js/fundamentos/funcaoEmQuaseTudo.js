console.log(typeof Object)

class Produto{

}

console.log(typeof Produto)

//funcao sem retorno
function imprimirFuncao(a,b){
    console.log(a+b)
}

imprimirFuncao(3,2)
imprimirFuncao(4)
imprimirFuncao(2,8,7,6,4,3)
imprimirFuncao()

function soma(a,b=1){
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())