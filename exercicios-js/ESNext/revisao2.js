//aula 144
//arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

//arrow function (this)
const lexico1 = () => console.log(this == exports) //module.export
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametros defalult
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')


//operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    console.log(total)
}

total(1, 2, 3, 45)