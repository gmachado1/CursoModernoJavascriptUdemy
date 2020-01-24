//aula 146

//operador rest(juntar)/spread(espalhar)
//usar rest como parâmetro de funcao

//usar spread com objeto
const funcionario = {nome:'Maria', salario:12348.99}
const clone = {ativo:true, ...funcionario}
console.log(clone)//srpread

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] //spread
console.log(grupoFinal)