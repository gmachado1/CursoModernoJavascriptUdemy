//aula 105
const pilotos = ["Vettel", "Alonso","Raikkonen", "Massa"]
console.log(pilotos)
console.log("remove o "+pilotos.pop())//remove último
console.log(pilotos)


console.log("Adiciona Verstappen: retornando o índice:"+pilotos.push("Verstappen"))
console.log(pilotos)

console.log("remove o primeiro(shift): "+ pilotos.shift())//remove o primeiro
console.log(pilotos)

console.log("unshift: acrescentando no início Hamilton. retorna o size: "+ pilotos.unshift("Hamilton"))
console.log(pilotos)

//splice pode adicione e remover elementos
//adicionar
console.log("splice add 2: "+pilotos.splice(2,0,'Bottas', 'Massa'))
console.log(pilotos)

//remover
console.log("splice remove: "+pilotos.splice(3,1))
console.log(pilotos)

//slice <> splice
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(1,4)
console.log(algunsPilotos1)