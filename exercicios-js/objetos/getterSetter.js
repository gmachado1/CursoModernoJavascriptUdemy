//aula92
const sequencia = {
    _valor:1,//convencao nao impede que seja or fora
    get valor(){this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this.valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)