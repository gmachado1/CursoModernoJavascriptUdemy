//aula115

let alunos= [
    {nome:'João', nota:7.3,bolsista:false},
    {nome:'Maria', nota:9.2,bolsista:true},
    {nome:'Pedro', nota:9.8,bolsista:false},
    {nome:'Ana', nota:8.7,bolsista:false}
]
console.log(alunos.map(a=>a.nota))
let resultado = alunos.map(a=>a.nota).reduce(function(acumulador, atual){
   console.log(acumulador,atual)
   return acumulador + atual
})

//desafio 1: TODOS os alunos são bolsistas?
console.log(alunos.map(a=>a.bolsista).reduce((t,a) => {return (t&&a)}))
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))
//desafio 2: Algum aluno é bolsista?
console.log(alunos.map(a=>a.bolsista).reduce((t,a) => {return (t||a)}))
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))