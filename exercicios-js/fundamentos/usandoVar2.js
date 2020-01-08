var numero = 1
{ 
    { 
        { 
            { 
                console.log("dentro antes: "+numero) 
                var numero = "Será" 
                console.log("dentro depois: "+numero) 
            } 
        }
     }
}
console.log("fora: "+numero) 
function teste(){
    var teste = 123
    console.log(sera) 
    console.log(teste) 
}