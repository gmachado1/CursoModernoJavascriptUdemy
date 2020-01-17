//aula 95
//cadeia de protótipos (prototype)
Object.prototype.attr0 = '0' //nao faca isso em casa
const avo= {attr1:'A'}
const pai = {__proto__:avo, attr2:'B', attr3:'3'}
const filho = {__proto__:pai, attr3:'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3, filho.attr4)
console.log(pai.attr3)


const carro = {
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
        if(this.velAtual +delta <= this.velMax){
            this.velAtual+=delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h podendo atingir a ${this.velMax}km/k`
    }
}

const ferrari = {
    modelo:'F40',
    velMax:320
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())