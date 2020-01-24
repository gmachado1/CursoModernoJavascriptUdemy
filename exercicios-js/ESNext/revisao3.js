//revisao 145


//ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))
//já existia
console.log(Object.keys(obj))

//Melhorias na notacao literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return "ola mundo"
    }
}

console.log(pessoa.nome, pessoa.ola())

//class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return "au au!"
    }
}
console.log(new Cachorro().falar())