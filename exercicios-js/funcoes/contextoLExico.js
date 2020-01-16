//aula79

const valor = "global"

function minhaFunc(){
    outrafunc()
    console.log(valor)
}
function outrafunc(){
    const valor="local"
}
minhaFunc()