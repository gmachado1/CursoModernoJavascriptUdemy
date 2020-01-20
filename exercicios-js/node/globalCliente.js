//aula128
require('./global')

console.log(MinhaApp.saudacao())
MinhaApp.nome = 'Eita!' //nao é possivel por causa do freeze em global.js
console.log(MinhaApp.nome)