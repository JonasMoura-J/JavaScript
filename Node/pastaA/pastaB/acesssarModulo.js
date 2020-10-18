const moduloA = require('../../modulos/moduloA')

console.log(moduloA.ola)

//ace

const saudacao = require('saudacao')  //acessando sem o caminho relativo
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')  //requisicao browser
http.createServer((req, res)=> {
    res.write('Bom dia!')
    res.end()
}).listen(8080)  