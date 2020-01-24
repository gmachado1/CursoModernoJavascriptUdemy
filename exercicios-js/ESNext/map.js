//aula 149
const tecnologias = new Map()
tecnologias.set('react', {framework:false})
tecnologias.set('angula', {framework:true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)
//tecnologias.set('react', {framework:false})

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{},'Objeto'],
    [123,'Número']
])

chavesVariadas.forEach((vl, ch) =>{
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
//chave é unica 123
chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b')
chavesVariadas.set(113,'b')
console.log(chavesVariadas)