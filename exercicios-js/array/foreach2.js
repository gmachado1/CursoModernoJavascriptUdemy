//aula 107 
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.forEach2 = function (callback){
    for(let i=0;i<this.length;i++){
        callback(this[i], i, this)
    }
}
aprovados.forEach2(function(nome,indice, x){
    console.log(`${indice+1}: ${nome}`) 
    console.log(x)
})