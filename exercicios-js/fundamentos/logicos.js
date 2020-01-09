function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1||trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudave = !comprarSorvete
    //return {comprarSorvete:comprarSorvete, comprarTv50:comprarTv50,comprarTv32:comprarTv32,manterSaudave:manterSaudave}
    return {comprarSorvete, comprarTv50,comprarTv32,manterSaudave}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))
