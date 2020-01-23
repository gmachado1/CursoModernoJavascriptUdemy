// aula 141
const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 4', function () {
    console.log(new Date().getHours())
    console.log("Executando tarefa 1!", new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 20000) //20 seg

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = new schedule.Range(1, 5)
regra.hour = 9
regra.second = 30
const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando tarefa 2', new Date().getSeconds())
})
