// aula 77

function Carro(velocidadeMaxima=200,delta=5){
    //atributo provado
    let velocidadeAtual = 0;

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual<velocidadeMaxima){
            velocidadeAtual +=delta;
        }else{
            velocidadeAtual = velocidadeMaxima
        }

    }
    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())
console.log('ferrari')
const ferrari = new Carro(350,50)
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof uno)
console.log(typeof ferrari)
console.log(typeof Carro)