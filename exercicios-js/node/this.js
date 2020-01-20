//aula 129
console.log(this === global)  // aqui this é parametro de exportacao : false
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log("dentro do logThis()")
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this == global) //aqui this é global true
}

logThis()