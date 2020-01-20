//aula 123
const moduloA = require('../../moduloA')//linux nao | win e mac ok
console.log(moduloA.ola)

//criando utilidades dentro de uma biblioteca
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index') //pode abreviar a palavra index.
console.log(c.ola2)

// const http = require('http')
// http.createServer((req,res)=> {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)