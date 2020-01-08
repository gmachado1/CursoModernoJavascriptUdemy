// par nome/valor
const saudacao = 'Opa' //cintexto léxico 1
//

function exec(){
    const saudacao = "Fallaaa" //contexto léxico2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome:"Pedro",
    idade:32,
    peso:90,
    endenreco:{rua:"rua 20",
        numero:21
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)