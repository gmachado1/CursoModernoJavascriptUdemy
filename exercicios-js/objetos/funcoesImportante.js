//aula93
const pessoa = {
    nome:'Rebeca',
    idade:2,
    peso:14
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
   console.log(`${element[0]}: ${element[1]}`) 
});

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`) 
 });
console.log('---------')
 Object.defineProperty(pessoa, 'dataNascimento',{
     enumerable:false,//false deixa de exibir
     writeble:false,
     value:'01/01/2020'
 })

 pessoa.dataNascimento = '01/01/2019'
 console.log(pessoa.dataNascimento)
 console.log(Object.keys(pessoa))
