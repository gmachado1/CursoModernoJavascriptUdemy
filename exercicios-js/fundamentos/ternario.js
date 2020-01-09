const resultado = nota => nota > 7?'aprovado':'reprovado'

console.log(resultado(7.1))
console.log(resultado(6.1))


//experimento js
let a =3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'
console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando um variavel maluca: se var ou let
abc = 5//não faca isso em casa
console.log(global.abc)

