//Armazenando uma funcao em uma variavel/const
const imprimirSoma = function (a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

//Arrow functions em uma variavel

const somar =(a,b) => a + b  //arrow com retorno implicito

console.log(somar(2,9))