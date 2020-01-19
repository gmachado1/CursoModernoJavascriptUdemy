//aula 101
//JavaScript object notation = JSON
//formato textual generico = interoperabilidade de sistemas
const obj={a:1,b:2,c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a:1,b:2,c:3 }")) //ERRO formatacao
//console.log(JSON.parse("{'a':1,'b':2,'c':3 }")) //erro formatacao
console.log(JSON.parse(`{"a":1,"b":2.5,"c":3, verdadeOuFalso:true,"nome":"Gustavo", "objeto":{}, "array":[] }`))

//JSON5.org tentativa de mudar o jsons