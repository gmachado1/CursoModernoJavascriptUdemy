//estrategia 1 para gerar valor padrao
function soma1(a,b,c){
    a=a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}

console.log(soma1(),soma1(3), soma1(1,2,3), soma1(0,0,0))

//estrategia 2 para gerar valor padrao
function soma2(a,b,c){
    a = a != undefined ? a :1 // 0 in arguments ? b : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? c :1  //   2 in arguments ? b : 1
    return a+b+c
}

console.log(soma2(),soma2(3), soma2(1,2,3), soma2(0,0,0))


//valor padrao do es2015
function soma3(a=1,b=1,c=1){
    return a+b+c
}

console.log(soma3(),soma3(3), soma3(1,2,3), soma3(0,0,0))