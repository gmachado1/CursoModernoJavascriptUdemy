const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended:true})) //qualquer funcao
//app.use('/teste',bodyParser.urlencoded({extended:true})) //apenas funcóes do endereco /teste
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null, '.')
    },
    filename:function(req,file,callback){
        
    }
})


app.get('/teste', (req,res) => res.send('Ok'))
app.listen(8080, ()=>console.log('Executando...'))
