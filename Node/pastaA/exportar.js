console.log(module.exports === this)
console.log(module.exports === exports)


//formas de exportação
this.a = 1
exports.b = 2
module.exports.c = 3


//se quiser criar um novo obj, tem que adicionar o module, linha 16
exports = {
    nome: 'Teste'
}

module.exports = {ativo: false}