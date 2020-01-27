//aula 152

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase),
            reject(frase)
        }, segundos * 1000)//se quiser mas de uma parametro passe um objeto
    })

}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase + ":)"))
    .catch(e => console.log("Erro:"+ e))