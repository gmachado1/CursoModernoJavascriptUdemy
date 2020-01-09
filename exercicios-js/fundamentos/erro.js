function tratarErroELancar(erro){
    //throw new Erro('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome:erro.name,
        message:erro.message,
        date:new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+"!!")
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {nome:'Roberto'}

imprimirNomeGritado(obj)