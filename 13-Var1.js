{{{var visivel = 'será??????'}}}

console.log(visivel)   //A var é vísivel, nesse caso

function teste(){
    var local = 123    //nesse caso, a var é acessivel apenas dentro do escopo da funcao
}
teste()
console.log(local)

