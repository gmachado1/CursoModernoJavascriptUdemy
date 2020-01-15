//aula 69 this e funcao bind ver denovo

function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/,1000)
}


new Pessoa

// const pessoa = {
//     saudacao:"Bom dia!",
//     falar(){
//         console.log(this.saudacao)
//     }
// }

// pessoa.falar()
// const fala = pessoa.falar
// falar()// conflito entre paradigmas: funcional e OO

// const falarDePessoa = pessoa.falar.bind()
// falarDePessoa()
