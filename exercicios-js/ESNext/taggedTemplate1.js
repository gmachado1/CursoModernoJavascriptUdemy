//aula 147
//tagged template  - processa o template dentro de uma funcao

function tag(partes, ...valores){
    console.log(partes) //parte 0=' ' 2=está 4=.
    console.log(valores)//parte 1=Gui 3=aprovado
    return 'Outra String'
}


const aluno = 'Gui' //<=
const situacao = "aprovado" //<=
console.log(tag `${aluno} está ${situacao}.`)   // <= 
//sem tag template
console.log( `${aluno} está ${situacao}.`)

