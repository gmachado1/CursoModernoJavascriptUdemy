const imprimirResultado = function(nota){
    if(nota>=7){
        console.log('Aprovado')
    }else{  //cuidado ponto e virgula
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')//cuidado