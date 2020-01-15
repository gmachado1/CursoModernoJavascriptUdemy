//aula 68 this e funcao bind ?? ver de novo
const pessoa = {
    saudacao:"Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const fala = pessoa.falar
falar()// conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind()
falarDePessoa()
