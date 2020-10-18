const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()  //invocando a funcao factory
const contadorD = require('./instanciaNova')()  //invocando a funcao factory

contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor)  //nesse caso o B é afetado por causa do cache

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor, contadorD.valor)