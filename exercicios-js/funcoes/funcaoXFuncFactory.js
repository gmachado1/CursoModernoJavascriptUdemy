//aula83 rever aula
// ver a diferenca desta funcao com a seguinte usando o browser
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
// ver a diferenca desta funcao com a anterior usando o browser
const criarPessoa = nome => {
    return{
        falar:()=>console.log('Meu nome é '+nome)
    }
}

const p2 = criarPessoa('Maria')
p2.falar()