//aula 89
//usando notacao literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funcões contrutoras
function Produto(nome,preco,desc){
    this.nome = nome     //visibilidade publica
   //this.preco = preco
    //this.desc = desc
    this.getPRecoComDesconto = () =>{
        return preco * (1-desc)
    }
}

const p1 = new Produto('Caneta',7.99,0.15)
const p2 = new Produto('Notebook', 2988.99,0.25)

console.log(p1.getPRecoComDesconto(),p2.getPRecoComDesconto())

//funcao factory
function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30-faltas)
        }
    }
}


const f1 = criarFuncionario('João',7980,4)
const f2 = criarFuncionario('MAria',11400,1)
console.log(f1.getSalario(),f2.getSalario())
//getSalario()
//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//uma funcao famos que retona um objeto
const fromJSON = JSON.parse('{"info":"sou um JSON"}')
console.log(fromJSON)