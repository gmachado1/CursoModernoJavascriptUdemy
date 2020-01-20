//aula 125 e 126
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)
    //funcionario mulher chinese que possui o menor salario
    const getMulheres = a=>(a.genero==='F')
    const getChineses = a=>(a.pais==='China')
    const minSal = (a,b)=>{return (a.salario < b.salario)?a:b}
    const getMulheresChinesasMinSal = funcionarios.filter(getMulheres).filter(getChineses).reduce(minSal)
    console.log(getMulheresChinesasMinSal)
})

