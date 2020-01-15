
//aula 67
//colar no console

function f1() { console.log(this == window) } //this é sempre igual a window. contexto global
//this pode variar.
f1()
body = document.getElementsByTagName('body')[0]
function f2() {
    console.log(this === body)
}
f2()

const f3 = () => console.log(this === window)
f3()

document.getElementsByTagName('body')[0].onclick = f3
() => console.log(this ===window)


