//aula 152

function falarDepoisDe(segundos, frase){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            //se quiser mas de uma parametro passe um objeto
        reject(frase)}, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase+":)"))
    .catch(e=>console.log(e))