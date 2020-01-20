//aula 119
const escola = [{
    nome:'Turma M1',
    alunos:[{
        nome:'Gustavo',
        nota:8.1},
        {nome:'Ana',
        nota:9.3}]
    },{
        nome:'Turma M2',
        alunos:[{
            nome:'Rebeca',
            nota:8.9
        },
        {
            nome:'Roberto',
            nota:7.3
    }]
}]

//obter todas as notas independentemente das turmas
const getNotasAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)
// a ideia é fazer o concat como da aula anterior "CONCAT.js" 
//FlatMap não existe no JS
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2)