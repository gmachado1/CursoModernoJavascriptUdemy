//aula 136
//middleware pattern (chain of responsability)
const passo1 = (ctx,next) =>{
    ctx.valor1 = "mid1"
    next()
}

const passo2 = (ctx,next)=>{
    ctx.valor2="mid2"
    next()
}

const passo3 = (ctx,next) => {
    ctx.valor3 = "mid3" 
    next()
}

const passo4 = ctx => ctx.valor4 = "mid4"

const exec = (ctx,...middlewares) =>{
    const execPassos = indice =>{
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx,()=>execPassos(indice+1))
    }
    execPassos(0)
}

const ctx = {}
exec(ctx,passo1,passo2,passo3,passo4)
console.log(ctx)