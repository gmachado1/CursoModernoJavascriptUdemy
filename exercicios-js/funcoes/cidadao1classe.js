function fun1(){}//sempre retorna = undefined

//armazenar em uma variável
const fun2 = function(){ return 'a'}

//armazenar em um array
const array = [function(a,b){ return a+b},fun2,fun1]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//passar funcao como param
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

//uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3,1)

soma(2,3)(4)
const ss = soma(1,5)
ss(4)