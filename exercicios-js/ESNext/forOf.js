//aula 151
//for in itera em cima de indice
//for of itera em cima de valores, objetos..

for (let letra of "Guga") {
    console.log(letra)
}
console.log('-------------')
const assuntosEcma = ["Map", "Set", "Promise"]

for (let i in assuntosEcma) {
    console.log(i)
}
console.log('-------------')
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

console.log('-------------')

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(vl)
    console.log('chave: ' + ch)
}

const s = new Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}