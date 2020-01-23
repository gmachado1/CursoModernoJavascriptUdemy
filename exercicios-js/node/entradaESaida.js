//aula 142
const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo){
    process.stdout.write('Fala anônimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data=>{
      const nome = data.toString().replace('\n','')
      
      process.stdout.write(`Fala ${nome}!!`)
    })
}