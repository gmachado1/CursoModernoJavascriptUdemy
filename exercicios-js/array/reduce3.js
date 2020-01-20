//aula 116
Array.prototype.reduce2 = function(callback, valorinicial){
    const indiceInicial = valorinicial? 0:1
    let acumulador = valorinicial || this[0]
    for(let i = indiceInicial;i<this.length;i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}
const notas= [1,2,3,4,5,6]
const soma = (a,b) => a + b
console.log(notas.reduce2(soma,21))