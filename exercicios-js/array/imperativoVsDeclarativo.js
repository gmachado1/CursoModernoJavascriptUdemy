//aula 117

let alunos= [
    {nome:'João', nota:7.3,bolsista:false},
    {nome:'Maria', nota:9.2,bolsista:true},
    {nome:'Pedro', nota:9.8,bolsista:false},
    {nome:'Ana', nota:8.7,bolsista:false}
]
//imperativo
let total1 = 0
for(let i = 0; i<alunos.length;i++){
    total1 +=alunos[i].nota
}
console.log(`Média = ${total1/alunos.length}`)

//declarativo
const getNota = alunos => alunos.nota
const soma = (total,atual) => total+atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)

//select codigo, nome, email from alunos where ativo=1