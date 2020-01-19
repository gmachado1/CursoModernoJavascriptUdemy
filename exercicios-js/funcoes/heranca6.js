//aula99
function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simulando o new
function novo(fun, ...params) {
    const obj = {}
    obj.__proto__ = fun.prototype
    fun.apply(obj, params)
    return obj
}

const aula3 = novo(Aula,'Bem vindo',123)
const aula4 = novo(Aula,'Até breve',456)

console.log(aula3,aula4)