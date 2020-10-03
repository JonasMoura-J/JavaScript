//funcao se retorno

function  imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(5,6)
imprimirSoma(5)
imprimirSoma(5,6,2.5,5,3) //utiliza os dois primeiros parametros e ignora o restante
imprimirSoma()

//Funcao com retorno
function soma(a = 1, b = 1){
    return a + b
}

console.log(soma(6,9))
console.log(soma())
console.log(soma(6))
