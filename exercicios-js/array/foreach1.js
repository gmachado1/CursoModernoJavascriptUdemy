//aula 107 
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome,indice, x){ //indice sempre o 2 termos e o 3 termo é o array
    console.log(`${indice+1}: ${nome}`) //quartp é undefined
    console.log(x)
})

aprovados.forEach(nome=>console.log(nome))